let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*[❗ИНФО❗] ЭТОТ ЧАТ БЫЛ УСПЕШНО РАЗБЛОКИРОВАН*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^чатактив$/i
handler.rowner = true
export default handler
