const {
    Telegraf,
    Markup
} = require('telegraf')
const start = require('./routers/start')
const fs = require('fs')
const lang_from = require('./routers/ask_from')
const lang_to = require('./routers/ask_to')
const json_file = fs.readFileSync('info.json')
const info = JSON.parse(json_file)
const express = require('express')
const app = express()
const bot = new Telegraf("1754116833:AAGN9zDyDHurMo0Dkgx3JwNo6b4Hio9rXag")
var translate = require('node-google-translate-skidz');
console.log(info);
require('./keep-alive')
bot.start((ctx) => start(ctx, Markup))
bot.on('message', async (ctx) => {
    let is_active = await ctx.telegram.getChatMember('@dunyo_texno', ctx.from.id)
    console.log(ctx.message);
    if (is_active.status == 'member') {
        let text = ctx.message.text
        let user = info.users.find(e => e.id == ctx.message.from.id)
        if (text == '🇺🇿 - O`zbekcha') {
            lang_from(ctx, 'uz', info)
        } else if (text == '🇷🇺 - Pусский') {
            lang_from(ctx, 'ru', info)
        } else if (text == '🇬🇧 - English') {
            lang_from(ctx, 'en', info)
        } else if (user.waiting) {
            user.txt = ctx.message.text
            user.waiting = false
            lang_to(ctx, info)
            console.log(info);
        }
        let data = JSON.stringify(info);
        fs.writeFileSync('info.json', data, null, 2);
    }else {
        ctx.reply('Botdan foydalanish uchun kanalimizga a`zo bo`ling. Kanal linki @dunyo_texno')
    }
})
app.get('/', (req,res) => res.send('home page'))
bot.on('callback_query', async (ctx) => {
    let user = info.users.find(e => e.id == ctx.update.callback_query.from.id)
    let to_lang = ctx.update.callback_query.data
    translate({
        text: user.txt,
        source: user.lang,
        target: to_lang
    }, function (result) {
        console.log(result.translation);
        ctx.reply(result.translation)
    });

})
app.listen(8100, console.log('BOTTTTTTTTTTTTTT'))
bot.launch()
