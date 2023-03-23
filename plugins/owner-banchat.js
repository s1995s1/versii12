let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*[❗ИНФО❗] ЭТОТ ЧАТ БЫЛ УСПЕШНО ЗАБЛОКИРОВАН*\n\n*—◉ БОТ НЕ БУДЕТ РЕАГИРОВАТЬ НЕ НА ОДНУ КОМАНДУ В ЭТОЙ ГРУППЕ ПОКА ЭТО ЧАТ ЗАБЛОКИРОВАН*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^банчат$/i
handler.rowner = true
export default handler
