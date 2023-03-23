let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ ИЗМЕРИТЕЛЬ ЛЮБВИ ❤️❤️*
*Любовь  ${text} к тебе* *${Math.floor(Math.random() * 100)}%* *из 100%*
*Вы должны попросить ее стать вашей девушкой*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(любовь)$/i
export default handler
