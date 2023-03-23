let handler = async (m, { conn, text, participants }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
if(total == 0) return conn.reply(m.chat, `*[❗] ЭТА ГРУППА АКТИВНА НЕ ИМЕЕТ ПРИЗРАКОВ*`, m) 
m.reply(`*[ ⚠ НЕАКТИВНЫЙ ОТЗЫВ ⚠ ]*\n\n*ГРУППА:* ${await conn.getName(m.chat)}\n*УЧАСНИКИ ГРУППЫ:* ${sum}\n\n*[ 👻 СПИСОК ПРИЗРАКОВ 👻 ]*\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*ПРИМЕЧАНИЕ ЭТА ИНФОРМАЦЫЯ МОЖЕТ НЕ НА 100% ПРАВДИВА*`, null, { mentions: sider })}
handler.command = /^(призраки|fantasmas|sider)$/i
handler.admin = true
handler.botAdmin = true
export default handler
