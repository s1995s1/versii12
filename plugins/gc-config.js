let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'открыть': 'not_announcement',
'закрыть': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
*[❗] ВЫБЕРИТЕ КОМАНДУ!!*

*┏━━━❲ ✨КОМАНДЫ✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} открыть*
*┠┉↯ ${usedPrefix + command} закрыть*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ ✔ ] КОМАНДА ВЫПОЛНЕНА*')}
}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(группу|grupo)$/i
handler.admin = true
handler.botAdmin = true
export default handler
