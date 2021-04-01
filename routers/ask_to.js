function lang_to (ctx, info) {
    let user = info.users.find( e => e.id == ctx.message.from.id )
    if ( user.lang == 'uz' ) {
        const inlineMessageRatingKeyboard = [[
            { text: '🇺🇿 - O`zbekcha', callback_data: 'uz' },
            { text: '🇷🇺 - Ruscha', callback_data: 'ru' },
            { text: '🇬🇧 - Ingilcha', callback_data: 'en' }
        ]];
        ctx.reply('Qaysi tilga tarjima qilamiz?',
            { reply_markup: JSON.stringify({ inline_keyboard: inlineMessageRatingKeyboard }) }
        )
        
    } else if ( user.lang == 'en' ) {
        const inlineMessageRatingKeyboard = [[
            { text: '🇺🇿 - Uzbek', callback_data: 'uz' },
            { text: '🇷🇺 - Russina', callback_data: 'ru' },
            { text: '🇬🇧 - English', callback_data: 'en' }
        ]];
        ctx.reply('Which language do we translate?',
            { reply_markup: JSON.stringify({ inline_keyboard: inlineMessageRatingKeyboard }) }
        )
        
    } else if ( user.lang == 'ru' ) {
        const inlineMessageRatingKeyboard = [[
            { text: '🇺🇿 - Узбекский', callback_data: 'uz' },
            { text: '🇷🇺 - Pусский', callback_data: 'ru' },
            { text: '🇬🇧 - Aнглийский', callback_data: 'en' }
        ]];
        ctx.reply('На какой язык мы переводим?',
            { reply_markup: JSON.stringify({ inline_keyboard: inlineMessageRatingKeyboard }) }
        )
        
    }
}

module.exports = lang_to