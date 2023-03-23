import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*[❗ИНФО❗] ВВЕДИТЕ НОВОЕ НАЗВАНИЕ ГРУППЫ*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*[❗ИНФО❗] МАКСИМАЛЬНОЕ КОЛИЧЕСТВО БУКВ МОЖНО НЕ БОЛЬШЕ 25*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(название)$/i
handler.group = true
handler.admin = true
export default handler
