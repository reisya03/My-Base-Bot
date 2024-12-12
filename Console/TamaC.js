/*

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
}, { NOTE : Dont Delete Credit Guys }

*/

//CLEAR CONSOLE
console.clear();

//END
//SCANING CONTROL

require('../Control/Ctrl')

//END
//INSTALLING BAILEYS

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
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

//END
//EXPORTS BASIC MODULE

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const sharp = require('sharp');
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { JSDOM } = require('jsdom')

//END
//MODULE MESSAGE + PREFIX

module.exports = TamaRYC = async (TamaRYC, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation :
                   (m.mtype == 'imageMessage') ? m.message.imageMessage.caption :
                   (m.mtype == 'videoMessage') ? m.message.videoMessage.caption :
                   (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text :
                   (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId :
                   (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
                   (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId :
                   (m.mtype === 'messageContextInfo') ? 
                       (m.message.buttonsResponseMessage?.selectedButtonId || 
                        m.message.listResponseMessage?.singleSelectReply.selectedRowId || 
                        m.text) : '';

        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
                        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix


//END
//DATA TAMBAHAN + PELENGKAP
	    
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('../System/Data1')

//END
//DATA USER + DATA MESSAGE

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

//END
//DATA TIKTOK SCRAPER

const { tiktok } = require('../System/Data5')

//END
//EXPORTS MODULE BRAT + STICKER

const {
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid, 
writeExif, 
addExif 
} = require('../System/Data2')

//END
//SEETINGS STATUS BOT

if (!TamaRYC.public) {
if (!DevOnly) return
}

//END
//INFO NEW MESSAGE IN CONSOLE

if (command) {
console.log(chalk.hex('#3498db').bgHex('#f39c12').bold(`━━━━ ⌜ SYSTEM ⌟ ━━━━`));
console.log(chalk.bgHex('#2980b9').hex('#fefefe').bold(`
📅 DATE        : ${time}
💬 INPUT MSG   : ${command}
📜 OUTPUT MSG  : ${m.body || m.mtype} \n
🗣️ SENDER      : ${pushname}
👤 RECIPIENT   : ${m.sender}
`));
}

//END
//AUTO RECORDING

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
//TamaRYC.sendPresenceUpdate(jd, from) // HAPUS UNTUK MEMATIKAN
}

//END
//FUNCTION LOADING

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

//END
//FILE RESIZE ( FAKE )

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

//END
//FUNCTION OBF

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

//END
//BUTTON MESSAGE ( NOT WORK )

TamaRYC.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await TamaRYC.sendPresenceUpdate('composing', jid)
      return TamaRYC.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
   
//END
//THUMBNAIL LINK + QUOTED MESSAGE

const ThumbUrl = "https://pomf2.lain.la/f/5l5eayi.jpg"
const Xxx = "https://pomf2.lain.la/f/5l5eayi.jpg"
const xXx = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": { "url": "https://pomf2.lain.la/f/5l5eayi.jpg" },
					"itemCount": 9741,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `Command : ${command}`,
					"orderTitle": " TamaRyuichi",
					"sellerJid": "6285727819741@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "9741",
					"totalCurrencyCode": "IDR"
				}
			}
		}
const Reply1 = (teks) => {
    return TamaRYC.sendMessage(m.chat, {
        image: {
            url: "https://pomf2.lain.la/f/uktly3a5.jpg"
        },
        caption: teks,
        gifPlayback: false
    }, { quoted: xXx });
}

//END
//STIKER AND BRAT FUNCTION

function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
async function makeStickerFromUrl(imageUrl, TamaRYC, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await TamaRYC.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `T-Яyuichi`,
                    body: `Finix Always With You`,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: ThumbUrl, 
                    sourceUrl: `https://youtube.com/@tamainfinity`
                }
            }
        }, { quoted: xXx });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        Reply1('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}

//END

const RunTime = `_${runtime(process.uptime())}_`
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
//ALL MENU CASE {
case 'menu': 
case '^': {
    let Menu = ` ENJOY USE MY BASE 🐱
    > Tama Ryuichi
`
    TamaRYC.sendMessage(m.chat, {
    image: {
url: "https://pomf2.lain.la/f/uktly3a5.jpg" 
    },
    caption: Menu,
    giffPlayback: false
}, { quoted: xXx });

}
break

//BUG CASE

case 'bugmenu': 
case '2': {
    let BugMenu = `
ENJOY USE MY BASE 🐱
    > Tama Ryuichi
`
TamaRYC.sendMessage(m.chat, {
    image: {
url: "https://pomf2.lain.la/f/uktly3a5.jpg" 
    },
    caption: BugMenu,
    giffPlayback: false
}, { quoted: xXx });
}
break

//OWNER CASE

case 'ownermenu': 
case '3': {
let OwnMenu = `
ENJOY USE MY BASE 🐱
    > Tama Ryuichi
`
TamaRYC.sendMessage(m.chat, {
    image: {
url: "https://pomf2.lain.la/f/uktly3a5.jpg" 
    },
    caption: OwnMenu,
    giffPlayback: false
}, { quoted: xXx });
}
break

//GROUP CASE

case 'groupmenu': 
case '4': {
let GCMenu = `
ENJOY USE MY BASE 🐱
    > Tama Ryuichi
`
TamaRYC.sendMessage(m.chat, {
    image: {
url: "https://pomf2.lain.la/f/uktly3a5.jpg" 
    },
    caption: GCMenu,
    giffPlayback: false
}, { quoted: xXx });
}
break

// OTHER CASE

case 'othermenu':
case '5': {
let OtherMenu = `
ENJOY USE MY BASE 🐱
    > Tama Ryuichi
`
TamaRYC.sendMessage(m.chat, {
    image: {
url: "https://pomf2.lain.la/f/uktly3a5.jpg" 
    },
    caption: OtherMenu,
    giffPlayback: false
}, { quoted: xXx });
}
break

// END ALL MENU CASE }
//ACCESS CASE

case 'addowner': case 'addown':
  if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only");
  if (!args[0]) return Reply1(`Penggunaan ${prefix + command} Example ${prefix + command} 62xxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let loadnum = await TamaRYC.onWhatsApp(numero + `@s.whatsapp.net`);
  if (loadnum.length == 0) return Reply1(`Number Invalid!!!`);
  owner.push(numero);
  Premium.push(numero);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  Reply1(`Number ${numero} succes add to database!`);
  break;

//END
//ACCESS CASE

case 'delowner': case 'delown':
  if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only");
  if (!args[0]) return Reply1(`Penggunaan ${prefix + command} Example:\n ${prefix + command} 62xxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Owner.indexOf(numero2);
  numload = Premium.indexOf(numero2);
  Owner.splice(numeroX, 1);
  Premium.splice(numload, 1);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(Owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  Reply1(`Number ${numero2} succes delate to database!`);
  break;

//END
//ACCESS CASE

case 'addpremium': case 'addprem':
  if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only");
  if (!args[0]) return Reply1(`Penggunaan ${prefix + command} Example ${prefix + command} 62xxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let Invalid = await TamaRYC.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Invalid.length == 0) return Reply1(`Number Invalid!!!`);
  Premium.push(numero);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  Reply1(`Number ${numero} succes add to database!`);
  break
  
//END
//ACCESS CASE

case 'delpremium': case 'delprem':
  if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only");
  if (!args[0]) return Reply1(`Penggunaan ${prefix + command} Example ${prefix + command} 62xxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Premium.indexOf(numero2);
  Premium.splice(numeroX, 1);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  Reply1(`Number ${numero2} succes delate to database!`);
  break;

//END
//QC CASE

case 'qc': {
  if (!q) return Reply1(`Send command with text. ${prefix + command} Tams Ryuichi`);
  let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor: '#ffffff',
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: `${pushname}`,
          photo: { 
            url: await TamaRYC.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
          }
        },
        text: `${q}`,
        replyMessage: {},
      },
    ],
  };
  let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let buffer = Buffer.from(response.data.result.image, 'base64');
  TamaRYC.sendImageAsSticker(m.chat, buffer, xXx, { packname: `${global.packname}`, author: `${global.author}` });
}
break;

//END
//SETPP CASE

case "setpp": {
  if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only");
  if (!q) {
    const media = await TamaRYC.downloadAndSaveMediaMessage(!q);
    const { img } = await generateProfilePicture(media);
    await TamaRYC.query({
      tag: "iq",
      attrs: {
        to: BotNum,
        type: "set",
        xmlns: "w:profile:picture"
      },
      content: [{
        tag: "picture",
        attrs: {
          type: "image"
        },
        content: img
      }]
    });
    await Reply1("Success Set Profile Picture");
  } else {
    Reply1("Reply Image!!");
  }
}
break

//END
//DELETE PP CASE

case "delpp": {
  if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only");
  TamaRYC.removeProfilePicture(TamaRYC.user.id);
  Reply1("Success Delete Profile Picture");
}
break;

//END
//TOVN CASE

case 'tovn': {
  if (!/video/.test(mime) && !/audio/.test(mime)) return Reply1(`Reply media with caption ${prefix + command}`);
  if (!quoted) return Reply1(`Reply video/vn with caption ${prefix + command}`);
  
  let media = await quoted.download();
  let { toAudio } = require('../System/Data4');
  let audio = await toAudio(media, 'mp4');
  
  TamaRYC.sendMessage(m.chat, { audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: xXx });
}
break;

//END
//HIDETAG CASE

case 'hidetag': {
  if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only");
  if (!m.isGroup) return Reply1("Features can be accessed in group only");

  TamaRYC.sendMessage(from, { text: q ? q : 'Finix Always Stay In Here', mentions: participants.map(a => a.id) }, { quoted: xXx });
}
break;

//END
//KICK CASE

case 'kick': {
  if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only");
  if (!m.isGroup) return Reply1("Features can be accessed in group only");
  if (!BotAdm) return Reply1("Features can be accessed by bot admin only");
  if (!Adm) return Reply1("Features can be accessed by Admin only");

  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  if (!q) return Reply1("Send number / tag users ");
  await TamaRYC.groupParticipantsUpdate(from, [users], 'remove');
}
break;

//END
//GET LINK GROUP

case 'linkgroup': case 'linkgc': {
  if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only");
  if (!m.isGroup) return Reply1("Features can be accessed in group only");
  if (!BotAdm) return Reply1("Features can be accessed by bot admin");

  let responsegg = await TamaRYC.groupInviteCode(from);
  TamaRYC.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true });
}
break;

//END
//RESET LINK GC CASE

case 'resetlinkgc': {
  if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only");
  if (!m.isGroup) return Reply1("Features can be accessed in group only");
  if (!BotAdm) return Reply1("Features can be accessed by bot admin");

  TamaRYC.groupRevokeInvite(from);
}
break;

//END
//CONTROL CASE

case 'public': {
  if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only");
  TamaRYC.public = true;
  Reply1(`
    ⌜ *Information Bot Mode* ⌟
    - Public Mode : _True_
    - Self Mode : _False_
  `);
}
break;

//END
//CONTROL CASE

case 'self': case 'private': {
  if (!DevOnly) return Reply1("Features can be accessed by Developers/Owner only");
  TamaRYC.public = false;
  Reply1(`
    ⌜ *Information Bot Mode* ⌟
    - Public Mode : _False_
    - Self Mode : _True_
  `);
}
break;

//END
//STICKER CASE

case 'sticker': case 's': {
  if (!quoted) return Reply1(`Reply Image or Video with command ${prefix + command}`);
  
  if (/image/.test(mime)) {
    let media = await quoted.download();
    let encmedia = await TamaRYC.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return Reply1('max 10s');
    
    let media = await quoted.download();
    let encmedia = await TamaRYC.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else {
    return Reply1(`Send Image or Video with command ${prefix + command}\nvideo duration only 1-9s`);
  }
}
break;
//END
//BRAT CASE

case 'brat': {
            if (!q) return Reply1(`Send command with text. ${prefix + command} Tama Ryuichi`)
            const imageUrl = `https://brat.caliphdev.com/api/brat?text=${q}`
            await makeStickerFromUrl(imageUrl, TamaRYC, m);
        }
       break
//ISI CASE BUG SENDIRI YA BRE🐱



//END
//TES BOT CASE

case 'runtime':
case 'status': {
Reply1(`
 *<Status Bot>*
- Finix Bot : _Actived_
- Runtime : ${RunTime}
- time : _${time}_
`)
}
break

//END
//THANKS TO CASE

case 'tqto':
case '1': {
Reply1(`
 *<Thanks To>*
- Allah : _My God_
- Tama / Riyu : _Creator Base_
- FleX Agency : _My Team_
`)
}
break

//END
//TIKTOK CASE

case 'tiktok': 
      case'tt':{
        if (!qtext) return Reply1(`Send command with link. ${prefix + command} https://`);
         let res = await tiktok(qtext);          
         if (res && res.data && res.data.data) {
            let images = res.data.data.images || [];
            let play = res.data.data.play;
            let lagu = res.data.data.music

            const getMimeType = async (url) => {
                try {
                    const response = await axios.head(url);
                    return response.headers['content-type'];
                } catch (error) {
                    console.error(error);
                    return
                }
            };

            let mimeType = await getMimeType(play);
            
            if (mimeType && mimeType.startsWith('video/')) {
                await TamaRYC.sendMessage(m.chat, {
                    video: { url: play },
                    caption: "Successfully downloaded video from TikTok"
                },{quoted:m});
            } else if (images.length > 0) {
                let totalImages = images.length;
                let estimatedTime = totalImages * 4;
                let message = `Estimasi waktu pengiriman gambar: ${estimatedTime} detik.`;
                await TamaRYC.sendMessage(m.chat, { text: message },{quoted:m});

                const sendImageWithDelay = async (url, index) => {
                    let caption = `Gambar ke-${index + 1}`;
                    await TamaRYC.sendMessage(m.chat, { image: { url }, caption: caption },{quoted:m});
                };
                await TamaRYC.sendMessage(m.chat, { audio: { url: lagu }, mimetype: "audio/mpeg" },{quoted:m})

                for (let i = 0; i < images.length; i++) {
                    await sendImageWithDelay(images[i], i);
                    await new Promise(resolve => setTimeout(resolve, 4000));
                }
            } else {
                console.log('No valid video or images found.');
                await TamaRYC.sendMessage(m.chat, {
                    text: "No media found or an error occurred while retrieving media."
                },{quoted:m});
            }
        } else {
            console.error('Error: Invalid response structure', res);
            await TamaRYC.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            },{quoted:m});
        }
      }
      break
//======================================================\\
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
//=========================================================\\
if (budy.startsWith('$')) {
if (!DevOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return Reply1(`${err}`)
if (stdout) return Reply1(stdout)
})
}
//========================================================\\
}
} catch (err) {
TamaRYC.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\
