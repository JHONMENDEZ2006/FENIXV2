let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./src/welgc.webp"
let stikerbyegc = "./src/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝑭é𝒏𝒊𝒙 𝒃𝒐𝒕', body: '𝕭𝖔𝖙 𝖜𝖍𝖆𝖙𝖘𝖆𝖕𝖕 2023', sourceUrl: `tiktok.com/@fenix_bot57`, thumbnail: imagen1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝑭é𝒏𝒊𝒙 𝒃𝒐𝒕', body: '𝕭𝖔𝖙 𝖜𝖍𝖆𝖙𝖘𝖆𝖕𝖕 2023', sourceUrl: `tiktok.com/@fenix_bot57`, thumbnail: imagen1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
