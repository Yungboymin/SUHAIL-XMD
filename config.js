const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349016868461";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_22_10_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNyxcbiAgICAgICAgNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDgwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAwLFxuICAgICAgICA1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA3MixcbiAgICAgICAgMTExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNixcbiAgICAgICAgOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2LFxuICAgICAgICA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDM1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI2LFxuICAgICAgICA2MixcbiAgICAgICAgOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDMyLFxuICAgICAgICA2NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYyLFxuICAgICAgICA1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPYzdtbFJMQmduTWtlSnV1V01tVnlHM2diQ3hMM2c5TExzYTlDQ0lDN2VBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQQW1LTmVWV1JjQ3pHVHZyM1BlWkpBXCIsXG4gIFwicGhvbmVJZFwiOiBcImNjNmJkNDRhLTFlZDMtNGYwNi1hNTM1LTRhYTdhMDA4OWU3ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDE4MSxcbiAgICAgIDMxLFxuICAgICAgMTMsXG4gICAgICAxNzgsXG4gICAgICAxOTMsXG4gICAgICA1MyxcbiAgICAgIDEzNixcbiAgICAgIDI0OCxcbiAgICAgIDEsXG4gICAgICA3MSxcbiAgICAgIDE1NixcbiAgICAgIDcwLFxuICAgICAgMTU3LFxuICAgICAgMTM3LFxuICAgICAgOTQsXG4gICAgICA2NCxcbiAgICAgIDE2NyxcbiAgICAgIDEyMyxcbiAgICAgIDIwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDU5LFxuICAgICAgNTgsXG4gICAgICAxNTEsXG4gICAgICAyMzYsXG4gICAgICA1MSxcbiAgICAgIDQ0LFxuICAgICAgMTI3LFxuICAgICAgMTU1LFxuICAgICAgNzIsXG4gICAgICAxNDMsXG4gICAgICAyNTAsXG4gICAgICAxMTcsXG4gICAgICAxMTIsXG4gICAgICAyNixcbiAgICAgIDU4LFxuICAgICAgNjEsXG4gICAgICAxMTYsXG4gICAgICA1NCxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKTEhOV1g2NlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxNjg2ODQ2MTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NDAzMTQ4ODEzNTI4Njo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09Mam50RUNFTnZTb0xnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVWZOWTAxLzhVY0UvcDlXQmZoUXVrQ2FIYkMxRkQrUm0rRzBCNnJwb2dBMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4ZWlYQmhZbVlKMVpzRTQzYnlSZEYrNC91NmNicDgydnk0VmhpVUI1VitHQVpBY0RLNW1odFhiOHkxTnVjSlN1ZlpCYW1xZERkd08xVGM3WGZ5c1VEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwTjI2cnpyR0VKSjMvTElYOG5yNUNRQWoweFhTaG43cHRlaUQ4MWNMamdVNGpLQmEzUTZGV09XZ1hHZ2RWT1ZlYmtQSTErKzd4QmQvSEZjd1VvNExDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDE2ODY4NDYxOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4NTg4MTI3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
