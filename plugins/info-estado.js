let handler = async (m, { conn, command, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let texto = `${uptime}`
let fakemsg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { "extendedTextMessage": { "text":`Activo por ${texto}`, "title": 'Kitzia-MD', 'jpegThumbnail': false}}}
conn.reply(m.chat, `𝕳𝖔𝖑𝖆 𝖊𝖘𝖙𝖊 𝖊𝖘 𝖊𝖑 𝖙𝖎𝖊𝖒𝖕𝖔 𝖉𝖊𝖑 𝖇𝖔𝖙 𝖆𝖈𝖙𝖎𝖛𝖔 <𝕲𝖗𝖆𝖈𝖎𝖆𝖘 𝖕𝖔𝖗 𝖆𝖕𝖔𝖞𝖆𝖗 𝖒𝖎 𝖇𝖔𝖙>`, fakemsg)}
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [' *Días* •', d, ' *Horas* •', h, ' *Minutos* •', m, ' *Segundos* •', s].map(v => v.toString().padStart(2, 0)).join('')
}
