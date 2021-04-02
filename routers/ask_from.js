const fs = require('fs')

function lang_from(ctx, lang, info) {
    let there_is = info.users.find(e => e.id == ctx.message.from.id)
    if (lang == 'uz') {
        if (there_is == undefined) {
            info.users.push({
                id: ctx.message.from.id,
                lang: 'uz',
                waiting: true
            })
            ctx.reply('Tarjima qilish uchun matin kiriting.')
            return
        } else {
            there_is.waiting = true
            there_is.lang = 'uz'
            ctx.reply('Tarjima qilish uchun matin kiriting.')
            return
        }
    } else if ( lang == 'ru' ) {
        if (!there_is) {
            info.users.push({
                id: ctx.message.from.id,
                lang: 'ru',
                waiting: true
            })
            ctx.reply('Введите текст для перевода.')
            return
        }else {
            there_is.waiting = true
            there_is.lang = 'ru'
            ctx.reply('Введите текст для перевода.')
            return
        }
    } else if ( lang == 'en' ) {
        if (!there_is) {
            info.users.push({
                id: ctx.message.from.id,
                lang: 'en',
                waiting: true
            })
            ctx.reply('Enter text to translate.')
            return
        }else {
            there_is.lang = 'en'
            there_is.waiting = true
            ctx.reply('Enter text to translate.')
            return
        }
    }
    let data = JSON.stringify(info);
    fs.writeFileSync('../info.json', data, null, 2);
}


module.exports = lang_from
