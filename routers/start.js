async function start (ctx, Markup) {
  let is_active = await ctx.telegram.getChatMember('@dunyo_texno', ctx.from.id)
  if (is_active.status == 'member') {
    ctx.reply('🇺🇿 Tilni tanlang. \n🇷🇺 Bыберите язык. \n🇬🇧 Choose language.', Markup
    .keyboard([['🇺🇿 - O`zbekcha'],['🇷🇺 - Pусский'], ['🇬🇧 - English', ]])
    .oneTime()
    .resize()
    )
    return
  }else {
    ctx.reply('Botdan foydalanish uchun kanalimizga a`zo bo`ling. Kanal linki @dunyo_texno')

  }
}

module.exports = start