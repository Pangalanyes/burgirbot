// Require dependencies
const keepAlive = require("./server")
const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
const axios = require('axios');

// Load environment variables
dotenv.config();
// Create a bot instance
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// Log our bot in
bot.login(process.env.DISCORD_BOT_TOKEN);
// Log to console when bot is ready

async function getPlay(){
  try {
    const coin = 'plant-vs-undead-token';
    const vsCurrency = 'php';
    // Get crypto price from coingecko API
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=plant-vs-undead-token&vs_currencies=php`
    );
    // Check if data exists
    if (!data[coin][vsCurrency]) throw Error();
      bot.user.setActivity(` PVU = ${data[coin][vsCurrency]}`, type = 'Watching');
    }catch (err) {
      console.log(err)
  }
}

bot.on('ready', async () => {
  console.log(`${bot.user.username} is up and running!`);
   getPlay();
});
// Reply to user messages



bot.on('message', async (message) => {
  // Do not reply if message was sent by bot
  if (message.author.bot) return;
  // Reply to !ping

  if(message.content.startsWith('slp')){
    getPlay();
    try {
      const coin = 'smooth-love-potion';
      const vsCurrency = 'php';
      // Get crypto price from coingecko API
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=php`
      );
      // Check if data exists
      if (!data[coin][vsCurrency]) throw Error();
        return message.reply(` SLP = ${data[coin][vsCurrency]}`);
      }catch (err) {
        console.log(err)
    }
  }

  if(message.content.startsWith('cyt')){
    getPlay();
    try {
      const coin = 'coinary-token';
      const vsCurrency = 'php';
      // Get crypto price from coingecko API
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=coinary-token&vs_currencies=php`
      );
      // Check if data exists
      if (!data[coin][vsCurrency]) throw Error();
        return message.reply(` CYT = ${data[coin][vsCurrency]}`);
      }catch (err) {
        console.log(err)
    }
  }
  if(message.content.startsWith('pvu')){
    getPlay();
    try {
      const coin = 'plant-vs-undead-token';
      const vsCurrency = 'php';
      // Get crypto price from coingecko API
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=plant-vs-undead-token&vs_currencies=php`
      );
      // Check if data exists
      if (!data[coin][vsCurrency]) throw Error();
        return message.reply(` PVU = ${data[coin][vsCurrency]}`);
      }catch (err) {
        console.log(err)
    }
  }


  if (message.content.startsWith('babor')) {
    getPlay();
    return message.reply('MAANGAS NA NILALANG');
  }
  if (message.content.startsWith('mj')) {
    return message.reply('MAANGAS NA NILALANG');
  }
  if (message.content.startsWith('jacob')) {
    return message.reply('WALANG JOWA');
  }
  if (message.content.startsWith('kazz')) {
    return message.reply('JIWAO');
  }
  if (message.content.startsWith('TEST')) {
    return message.reply('NICE');
  }
  if (message.content.startsWith('porn')) {
    return message.reply('BAWAL YAN');
  }
  if (message.content.startsWith('sora')) {
    return message.reply('bobo');
  }
  if (message.content.startsWith('aron')) {
    return message.reply('garapal');
  }
  if (message.content.startsWith('tangina')) {
    return message.reply('tangina mo din');
  }

  
  if (message.content.startsWith('!price')) {
    // Get the params
    const [command, ...args] = message.content.split(' ');
    
    // Check if there are two arguments presenargs==t
    if (args.length !== 2){
      return message.reply(
        'You must provide the crypto and the currency to compare with!'
      );
    }
    else {
      const [coin, vsCurrency] = args;
      try {
        // Get crypto price from coingecko API
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${vsCurrency}`
        );
        
        // Check if data exists
        if (!data[coin][vsCurrency]) throw Error();
       
        return message.reply(
          `ETO LODS 1 : ${coin} = ${data[coin][vsCurrency]} ${vsCurrency}`
          );
     
      } catch (err) {
          
        return message.reply(
          'Please check your inputs. For example: !price bitcoin usd'
        );
      }
    }
  }
});


  // Reply to !price

keepAlive();
