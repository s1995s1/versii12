let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*「 ИНФОРМАЦЫЯ О ГРУППЕ 」*\n
*ИНДИЦЫКАЦЫЯ ГРУППЫ:* 
${groupMetadata.id}

*ИМЯ ГРУППЫ:* 
${groupMetadata.subject}

*ОПИСАНИЕ:* 
${groupMetadata.desc?.toString() || 'НЕТУ ОПИСАНИЕ'}

*ВСЕГО УЧАСНИКОВ:*
${participants.length} Учасников

*СОЗДАТЕЛЬ ГРУППЫ:* 
@${owner.split('@')[0]}

*АДМИНЫ ГРУППЫ:*
${listAdmin}

*𝙾𝙿𝙲𝙸𝙾𝙽𝙴𝚂 𝙰𝚄𝚃𝙾𝙼𝙰𝚃𝙸𝙲𝙰𝚂:*
—◉ ПРИВЕТСТВИЕ: ${welcome ? '✅' : '❌'}
—◉ ОБНАРУЖИТЬ: ${detect ? '✅' : '❌'} 
—◉ АНТИ-ССЫЛКА: ${antiLink ? '✅' : '❌'} 
—◉ АНТИ-ССЫЛКА 2: ${antiLink2 ? '✅' : '❌'} 
—◉ РЕЖИМ: ${modohorny ? '✅' : '❌'} 
—◉ АВТО-СТИКЕР: ${autosticker ? '✅' : '❌'} 
—◉ АУДИО: ${audios ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴: ${antiviewonce ? '✅' : '❌'} 
—◉ АНТИ-ТОКСИЧНЫЙ: ${antiToxic ? '✅' : '❌'} 
—◉ АНТИ-РАБОЧИЙ: ${antiTraba ? '✅' : '❌'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(инфогруппы|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
