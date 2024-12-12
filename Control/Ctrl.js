// Module
const fs = require('fs')

//Bot Settings
global.connect = true // True For Pairing // False For Qr
global.publicX = true // True For Public // False For Self
global.owner = ['6285727819741'] //Own Number
global.developer = "Tama Ryuichi" //Dev Name
global.botname = "Finix" //Bot Name
global.version = "0.0.0" //Version Bot

//Sticker Setiings
global.packname = "Sticker By" //Pack Name 
global.author = "Tama Ryuichi" // Author

//Social Media Settings
global.ytube = "https://youtube.com/@tamainfinity"
global.ttok = "https://tiktok.com/@tamaryuichi"
global.igram = "https://instagram.com/@tamadevfinix"
global.chtele = "https://t.me/tamaryuichicrasher"
global.tgram = "https://t.me/tamainfinity"

//Bug Name Settings
global.bak = {
Ios: " ⿻ᬃ𝐓𝐚𝐦𝐚 𝐑𝐲𝐮𝐢𝐜𝐡𝐢 𝐊𝐢𝐥𝐥⃟⃟⿻ ",
Andro: "⩟⬦𪲁 𝐓͜͢𝐀͠𝐌̋͡𝐀̸̷̷̷͡𝐗͜͢𝐒 -", 
Crash: " ̶C̶r̶a̶s̶h̶U̶l̶t̶i̶m̶a̶̶t̶e ̶",
Freeze: "𝐓𝐚𝐦𝐚𝐔𝐥𝐭𝐢𝐦𝐚𝐭𝐞",
Ui: "ℭ𝔯𝔴𝔰𝔥 𝔘𝔦 𝔖𝔶𝔰𝔱𝔢𝔪"
}

//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})