let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗ИНФО❗] ВЫБЕРИТЕ @𝚝𝚊𝚐 ЛЮБОВА ПОЛЬЗОВАТЕЛЯ*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗ИНФО❗] ВЫБЕРИТЕ @𝚝𝚊𝚐 ЛЮБОВА ПОЛЬЗОВАТЕЛЯ*'
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `*[❗ИНФО❗] ПОЛЬЗОВАТЕЛЬ БЫЛ УСПЕШНО ЗАБАНЕН*`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^бан$/i
handler.rowner = true
export default handler
