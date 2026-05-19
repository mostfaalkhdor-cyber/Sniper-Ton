const { Telegraf } = require('telegraf');
const bot = new Telegraf('8858109568:AAFvqtB5PS5eqO0WI53lUYZrHBqjgm542AA');

bot.start((ctx) => ctx.reply('البوت يعمل يا سلطان!'));
bot.launch();
console.log('البوت شغال يا بطل');
