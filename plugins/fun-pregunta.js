let handler = async (m, { command, text }) => m.reply(`
*⁉️ ВОПРОСЫ ⁉️*
  
*ТВОЙ ВОПРОС:* ${text}
*МОЙ ОТВЕТ:* ${['Да','Может быть так','Возможно','Вероятно нет','Нет','Невозможно'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^альтрон|бот|apakah$/i
export default handler
