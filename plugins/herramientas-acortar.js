import axiostal from "axios"
import fetch from 'node-fetch'
let handler = async(m, { conn, text, xteamkey }) => {
if (!text) throw '*[❗ИНФО❗] ВВЕДИТЕ ССЫЛКУ КОТОРУЮ ВЫ ХОТИТЕ СОКРАТИТЬ'
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `*ВАША ССЫЛКА СОКРОЩЕНА!!*\n\n\n*ПРЕДЫДУЩАЯ ССЫЛКА:*\n\n${text}\n\n*СОКРАЩЕННАЯ ССЫЛКА:*\n\n*${json.result}*`.trim()   
m.reply(hasil)
}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|сократить|acortar|corto)$/i
handler.fail = null
export default handler
