const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://sanshexaras.glitch.me/`);
}, 280000);
 
//the new coding san shex aras
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 
 //created by san shex aras


const yt = require('ytdl-core');
 
 
 

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('*' + str);
}
 
function pluck(array) {
    return array.map(function(item) { return item['name']; });
}
 
function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }
 
  }
 
 
var servers = {};
 
var q1 = "f1"
 
var q2 = "f2"
 
var q3 = "f3"
 
var q4 = "f4"
 
var q5 = "f5"
 
var q6 = "f6"
 
var q7 = "f7"
 
var q8 = "f8"
 
var q9 = "f9"
 
var q10 = "f10"
 
var q11 = "f11"
 
var q12 = "f12"
 
var q13 = "f13"
 
var q14 = "f14"
 
var q15 = "f15"
 
var q16 = "f16"
 
var q17 = "f17"
 
var q18 = "f18"

var q19 = "f19"
 
var q20 = "f20"
 
var q21 = "f21"
 
var q22 = "f22"
 
var q23 = "f23"
 
var q24 = "f24"

var q25 = "f25"
 
function play(connection, message) {
    var server = servers[message.guild.id];
   
   server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));
 
    server.queue.shift();
 
    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}
 
client.on("ready", () => {
    console.log(`Quran bot is in ${client.guilds.size} servers `)
});
 
client.on("message", message => {
                        if (message.content === q1 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**you must joining a voice**`);  
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=1TpiNPOjCeo', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
 
                        if (message.content === q2 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=yXI0yEYkAWY', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
 
                            if (message.content === q3 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=0cEq-ePkjq4', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
 
                            if (message.content === q4 ) {
                  message.react('🆙')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=QbXQUbYPEAQ', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
                              if (message.content === q5 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=e1h3BKAsozc', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
                                  if (message.content === q6 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=_B_g3tCIvjE', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
                                      if (message.content === q7 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=baagGi2h8KQ', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q8 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=4UcfkmaTGR8', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q9 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=hlAJjYBt26Q', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q10 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**ة**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=jRn08PxNdcU', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q11 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=PvEiwPLX2cY', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q12 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=b_72GczCgtM', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q13 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=KPPnNGp0yh0', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q14 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=J0qoaAnBtwY', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q15 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=wVqO40KNtkU&app=desktop', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q16 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=vbdygrt1FOE&app=desktop', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q17 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=7JdrU2hDCfE&app=desktop', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q18 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=dbuMKzHohZs&app=desktop', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q19 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**ة**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=uMADXv21AEM&app=desktop', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q20 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(``);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=pNuiABekk8s', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q21 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=LEU25C7Dqg8', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q22 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=gH_x9BjdpG0', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q23 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(``);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=dzbj2ZfSqMY', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q24 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=2S6WL0luqbk', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q25 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`****`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=9mC3-VYgv6s', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  if(message.content === "fstop" ) {
                var servers = {};
 
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
   
  }
 
 if(message.content === "san keya?") {
   message.channel.send(`drustkari bot e meme`)
 }
 
       
});

client.login(process.env.BOT_TOKEN);
