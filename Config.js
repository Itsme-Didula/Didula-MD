const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['94741671668']
global.ownername = "𝐃𝐈𝐃𝐔𝐋𝐀 𝐌𝐃_✰"//owner name
global.ytname = "𝐃𝐈𝐃𝐔𝐋𝐀 𝐌𝐃"
global.socialm = "𝐃𝐈𝐃𝐔𝐋𝐀 𝐌𝐃"
global.location = "Sri lanka"

global.botname = '𝐃𝐈𝐃𝐔𝐋𝐀 𝐌𝐃' //name of the bot

//sticker details
global.stickername = '𝐃𝐈𝐃𝐔𝐋𝐀 𝐌𝐃'
global.packname = 'Sticker By'
global.author = '𝐃𝐈𝐃𝐔𝐋𝐀 𝐌𝐃'
//console view/theme
global.themeemoji = '🧩'
global.wm = "𝐃𝐈𝐃𝐔𝐋𝐀 𝐌𝐃."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaPozTkJpe8g48ocXS1Z'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = true //auto read messages
global.autobio = true //auto update bio
global.anti212 = false //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '*𝐃𝐈𝐃𝐔𝐋𝐀 𝐌𝐃 Conected✅️*',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
