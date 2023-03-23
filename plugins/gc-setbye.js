let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*[❗] ПРОЩАЛЬНОЕ СООБЩЕНИЕ ЗАПИСАНО ДЛЯ ЭТОЙ ГРУППЫ*')
} else throw `*[❗] ВВЕДИТЕ ПРОЩАЛЬНОЕ СООБЩЕНИЕ, КОТОРОЕ ВЫ ХОТИТЕ ДОБАВИТЬ, ИСПОЛЬЗУЙТЕ:*\n*- @номер (упоминание)*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['прощание'] 
handler.admin = true
export default handler
