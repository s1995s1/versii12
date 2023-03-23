import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*╔══❰ ПРЕСС-РЕЛИЗ ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, 'ВАЖНАЯ ИНФОРМАЦЫЯ\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['СОЗДАТЕЛЬ', '.#создатель'],['ИНФОБОТА', '.#infobot']], false, { 
contextInfo: { externalAdReply: {
title: 'Бот группы Альтрон',
body: 'Альтрон ﹣ ʙᴏᴛ', 
sourceUrl: ``, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗ИНФО❗] СООБЩЕНИЕ ОТПРАВЛЕННО В ${groups.length} ГРУПП*\n\n*ПРИМЕЧАНИЕ: ЭТА КОМАНДА МОЖЕТ ИМЕТЬ ОШИБКИ И МОЖЕТ ОТПРАВИТЬСЯ НЕ ВО ВСЕ ГРУППЫ*`)
}
handler.help = ['broadcastgroup', 'bcgc', 'объявление', 'групы', ].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(объявление|групы)$/i
handler.rowner = true
export default handler
