const mineflayer=require('mineflayer');
const config=require('./config.json');
function startBot(){
 const bot=mineflayer.createBot(config);
 bot.once('spawn',()=>{console.log('Connected');bot.chat('Hello everyone!');});
 bot.on('chat',(u,m)=>{if(u===bot.username)return;if(m==='!ping')bot.chat('Pong!');});
 bot.on('end',()=>setTimeout(startBot,5000));
 bot.on('error',console.error);
}
startBot();
