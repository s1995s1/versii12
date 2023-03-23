let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
}    
await conn.sendButton(m.chat, `*「 АНТИ ССЫЛКА 」*\n*ВЫ НАРИШИЛИ ПРАЫВИЛА ГРУППЫ *\n*ДО ВСТРЕЧИ👋, ${await this.getName(m.sender)} СПАМЩИКИ НАДОЕЛИ УЖЕ!!*${isBotAdmin ? '' : '\n\n*ОТКУДА ВЫ БЛИН БЕРЕТЕСЬ*'}`, author, ['ВЫКЛЮЧИТЬ АНТИССЫЛКУ', '/выключит атиссылку2'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗ИНФО❗] ПОПРОСИТЕ СОЗДАТЕЛЯ БОТА ВКЛЮЧИТЬ КОМАНДУ (#включить ограничения) У СОЗДАТЕЛЯ НЕТ ОГРАНИЧЕНИЯ В БОТЕ*')
}
return !0
}
