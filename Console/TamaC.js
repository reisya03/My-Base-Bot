/*
GITHUB : https://github.com/Tama-Ryuichi
const { default :
Type Case,
Simple Base
} = require("@BaseBotJavascript/TamaRyuichi")
const Contact Tama Ryuichi = {
  •Telegram : "@tamainfinity",
  •WhatsApp : "6285727819741", 
  •Youtube : "@tamainfinity"/ </> Tama Ryuichi",
  •Instagram : "@tamadevfinix", 
  •Tiktok : "@tamaryuichi"
}, { NOTE : Dont Delate Credit Guys }

*/
require('../Control/Ctrl')
const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, generateWAMessageFromContent, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { 
GroupSettingChange, 
WAGroupMetadata, 
emitGroupParticipantsUpdate, 
emitGroupUpdate, 
WAGroupInviteMessageGroupMetadata, 
GroupMetadata, 
Headers,
WA_DEFAULT_EPHEMERAL,
getAggregateVotesInPollMessage, 
generateWAMessageContent, 
areJidsSameUser, 
useMultiFileAuthState, 
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore, 
makeWaSocket,
makeInMemoryStore,
MediaType,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
initInMemoryKeyStore,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys");
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdm, generateProfilePicture } = require('../System/Data1')
const jsobfus = require('javascript-obfuscator');
const { JSDOM } = require('jsdom')
module.exports = TamaRYC = async (TamaRYC, m, chatUpdate, store) => {
const { from } = m
try {
var body = (m.mtype === 'conversation') ? m.message.conversation: (m.mtype == 'imageMessage') ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId: (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text): ''
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const Owner = JSON.parse(fs.readFileSync('./Access/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./Access/Prem.json'))
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await TamaRYC.decodeJid(TamaRYC.user.id)
const DevOnly = [BotNum, ...Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtext = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await TamaRYC.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const mime = (quoted.msg || quoted).mimetype || ''

if (!TamaRYC.public) {
if (!DevOnly) return
}

if (command) {
console.log(chalk.hex('#3498db').bgHex('#f39c12').bold(`━━━━ ⌜ SYSTEM ⌟ ━━━━`));
console.log(chalk.bgHex('#2980b9').hex('#fefefe').bold(`
📅 DATE        : ${time}
💬 INPUT MSG   : ${command}
📜 OUTPUT MSG  : ${m.body || m.mtype}
🗣️ SENDER      : ${pushname}
👤 RECIPIENT   : ${m.sender}
`));
}

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
TamaRYC.sendPresenceUpdate(jd, from)
}
/*
STOP RECORDING
let rn = ['recording'];
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
}
*/

async function loading () {
var Floading = [
"",
"",
""
]
let { key } = await TamaRYC.sendMessage(from, {text: " "})
for (let i = 0; i < Floading.length; i++) {
await TamaRYC.sendMessage(from, {text: Floading[i], edit: key });
}
}

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Me`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
const Reply1 = (teks) => {
    return TamaRYC.sendMessage(m.chat, {
        image: {
            url: "https://pomf2.lain.la/f/uktly3a5.jpg"
        },
        caption: teks,
        gifPlayback: false
    }, { quoted: m });
}

const RunTime = `_${runtime(process.uptime())}_`
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

switch(command) {
//ALL MENU CASE {
case 'menu': {
    let Menu = `
    TEXT!
`
    TamaRYC.sendMessage(m.chat, {
    image: {
url: "https://pomf2.lain.la/f/uktly3a5.jpg" 
    },
    caption: Menu,
    girPlayback: false
}, { quoted: m });

}
break
//BUG CASE
case 'bugmenu': 
case '2': {
    let BugMenu = `
    TEXT
`
TamaRYC.sendMessage(m.chat, {
    image: {
url: "https://pomf2.lain.la/f/uktly3a5.jpg" 
    },
    caption: BugMenu,
    girPlayback: false
}, { quoted: m });
}
break
//OWNER CASE
case 'ownermenu': 
case '3': {
let OwnMenu = `
TEXT
`
TamaRYC.sendMessage(m.chat, {
    image: {
url: "https://pomf2.lain.la/f/uktly3a5.jpg" 
    },
    caption: OwnMenu,
    girPlayback: false
}, { quoted: m });
}
break
//GROUP CASE
case 'groupmenu': 
case '4': {
let GCMenu = `
TEXT
`
TamaRYC.sendMessage(m.chat, {
    image: {
url: "https://pomf2.lain.la/f/uktly3a5.jpg" 
    },
    caption: GCMenu,
    girPlayback: false
}, { quoted: m });
}
break
// OTHER CASE
case 'othermenu':
case '5': {
let OtherMenu = `
TEXT! 
`
TamaRYC.sendMessage(m.chat, {
    image: {
url: "https://pomf2.lain.la/f/uktly3a5.jpg" 
    },
    caption: OtherMenu,
    girPlayback: false
}, { quoted: m });
}
break
// END ALL MENU CASE }
case 'addowner': case 'addown':
if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only")
if (!args[0]) return Reply1(`Penggunaan ${prefix+command} Example ${prefix+command} 62xxx`)
numero = qtext.split("|")[0].replace(/[^0-9]/g, '')
let loadnum = await TamaRYC.onWhatsApp(numero + `@s.whatsapp.net`)
if (loadnum.length == 0) return Reply1(`Number Invalid!!!`)
owner.push(numero)
Premium.push(numero)
fs.writeFileSync('./Access/Own.json', JSON.stringify(owner))
fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium))
Reply1(`Number ${numero} succes add to database!`)
break
case 'delowner': case 'delown':
if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only")
if (!args[0]) return Reply1(`Penggunaan ${prefix+command} Example:\n ${prefix+command} 62xxx`)
numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '')
numeroX = Owner.indexOf(numero2)
numload = Premium.indexOf(numero2)
Owner.splice(numeroX, 1)
Premium.splice(numload, 1)
fs.writeFileSync('./Access/Own.json', JSON.stringify(Owner))
fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium))
Reply1(`Number ${numero2} succes delate to database!`)
break
case 'addpremium': case 'addprem':
if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only")
if (!args[0]) return Reply1(`Penggunaan ${prefix+command} Example ${prefix+command} 62xxx`)
numero = qtext.split("|")[0].replace(/[^0-9]/g, '')
let Invalid = await TamaRYC.onWhatsApp(numero + `@s.whatsapp.net`)
if (Invalid.length == 0) return Reply1(`Number  Invalid!!!`)
Premium.push(numero)
fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium))
Reply1(`Number ${numero} succes add to database!`)
break
case 'delpremium': case 'delprem':
if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only")
if (!args[0]) return Reply1(`Penggunaan ${prefix+command} Example ${prefix+command} 62xxx`)
numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '')
numeroX = Premium.indexOf(numero2)
Premium.splice(numeroX, 1)
fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium))
Reply1(`Number ${numero2} succes delate to database!`)
break
case 'hidetag': {
if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only")
if (!m.isGroup) return Reply1("Features can be accessed in group only")

TamaRYC.sendMessage(from, { text : q ? q : 'Finix Always Stay In Here' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
case 'kick': {
if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only")
if (!m.isGroup) return Reply1("Features can be accessed in group only")
if (!BotAdm) return Reply1("Features can be accessed by bot admin")
if (!Adm) return Reply1("Bot Not Admin")

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await TamaRYC.groupParticipantsUpdate(from, [users], 'remove')
}
break
case 'linkgroup': case 'linkgc': {
if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only")
if (!m.isGroup) return Reply1("Features can be accessed in group only")
if (!BotAdm) return Reply1("Features can be accessed by bot admin")

let responsegg = await TamaRYC.groupInviteCode(from)
TamaRYC.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'resetlinkgc':
if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only")
if (!m.isGroup) return Reply1("Features can be accessed in group only")
if (!BotAdm) return Reply1("Features can be accessed by bot admin")

TamaRYC.groupRevokeInvite(from)
break
case 'public': {
if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only")
TamaRYC.public = true
Reply1(`
SUCCESS
`)
}
break
case 'self': case 'private': {
if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only")
TamaRYC.public = false
Reply1(`
SUCCESS
`) 
}
break

case 'sticker': case 's':
 if (!quoted) return Reply1(`Reply Image or Video with command ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await TamaRYC.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return Reply1('max 10s')
let media = await quoted.download()
let encmedia = await TamaRYC.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
return Reply1(`Send Image or Video with command ${prefix + command}\nvideo duration only 1-9s`)
}
break
case 'calls': {
if (!PremOnly) return Reply1("Features can be accessed by Premium only")
await TamaRYC.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
await TamaRYC.sendMessage(m.chat, { text: ' *Successfully Executed Target* ', key: m.key });
await TamaRYC.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
}
break
case 'ads': {
if (!PremOnly) return Reply1("Features can be accessed by Premium only")
await TamaRYC.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
await TamaRYC.sendMessage(m.chat, { text: ' *Successfully Executed Target* ', key: m.key });
await TamaRYC.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
}
break

case 'edocu': {
if (!PremOnly) return Reply1("Features can be accessed by Premium only")
if (!q) return Reply1(`Example Use:\n ${prefix + command} 62xxx`)
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Reply1(`
SUCCESS
`)
await TamaRYC.sendMessage(target, { text: ' *Successfully Executed Target* ', key: m.key });
}
}
break
case 'reqpay': {
if (!PremOnly) return Reply1("Features can be accessed by Premium only")
if (!q) return Reply1(`Example Use:\n ${prefix + command} 62xxx`)
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Reply1(`
SUCCESS
`)
await TamaRYC.sendMessage(m.chat, { text: ' *Successfully Executed Target* ', key: m.key });
}
break

case 'bot':
case 'tes':
case 'finix': {
Reply1(`
SOK ASIK KONTOL
`)
}
break

case 'tqto':
case '1': {
Reply1(`
 *<Thanks To>*
- Allah : _My God_
- Tama / Riyu : _Provider Base_
- FleX Agency : _My Team_
`)
}
break

default:
if (budy.startsWith('=>')) {
if (!DevOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return Reply1(bang)}
try {
Reply1(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
Reply1(String(e))}}
if (budy.startsWith('>')) {
if (!DevOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await Reply1(evaled)
} catch (err) {
await Reply1(String(err))
}
}

if (budy.startsWith('$')) {
if (!DevOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return Reply1(`${err}`)
if (stdout) return Reply1(stdout)
})
}

}
} catch (err) {
TamaRYC.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
