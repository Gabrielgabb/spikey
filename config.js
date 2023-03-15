const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
module.exports = {
    VERSION: 'V 3.0.0', // bot version
    SESSION_ID: process.env.SESSION_ID || '', //your ssid to run bot
    MONGO_URL : process.env.MONGO_URL,//must be enter your mongo url;
    HEROKU: {
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
    },
    WEB : process.env.WEB || "https://Github.com/Mohalicious",//your website url
    YT : process.env.YT || "https://youtube.com/@donbelovibel",//your yt url
    VIDEO : "https://youtu.be/TNCg0aAaj1E",//turtorial video to watch how to use bot
    WAGRP : process.env.WAGRP || 'https://chat.whatsapp.com/DnCUVJyYu1XCZC2WNNyfIW',//your wa group url
};
