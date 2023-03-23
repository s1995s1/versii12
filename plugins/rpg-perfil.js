import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants }) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*ИМЯ:* ${username} ${registered ? '(' + name + ') ': ''}
*НОМЕР:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*ССЫЛКА:* wa.me/${who.split`@`[0]}${registered ? '\n*ВОЗРОСТ:* ' + age + ' Лет' : ''}
*ЛИМИТ:* ${limit} ИСПОЛЬЗОВАНИЙ
*ЗАРЕГИСТРИРОВАНО:* ${registered ? 'ДА': 'НЕТ'}
*ПРЕМИУМ:* ${prem ? 'ДА' : 'НЕТ'}
*СЕРИЙНЫЙ НОМЕР:* 
${sn}`
conn.sendButton(m.chat, str, author, pp, [['МЕНЮ', '/#меню']], m)}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^профиль|profile?$/i
export default handler
