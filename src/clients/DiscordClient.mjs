import { Client, GatewayIntentBits } from "discord.js";
import { logHelper } from "../helper.mjs";

class DiscordClient {
   #token
   constructor(token){
      return new Promise((resolve,reject) => {
         this.#token = token;
         console.log(logHelper.startBulletPoint,'Starting Discord Client');
         console.log(logHelper.startSubBulletPoint,'Creating raw client');
         this.client = new Client({
            intents: [
               GatewayIntentBits.GuildMembers,
               GatewayIntentBits.GuildEmojisAndStickers,
               GatewayIntentBits.GuildVoiceStates,
               GatewayIntentBits.GuildMessages,
               GatewayIntentBits.GuildMessageTyping,
               GatewayIntentBits.DirectMessages,
               GatewayIntentBits.DirectMessageReactions,
               GatewayIntentBits.DirectMessageTyping,
               GatewayIntentBits.MessageContent
            ]
         });
         console.log(logHelper.startSubBulletPoint,'Creating events and logging in');
         this.client.on('ready', () => {
            console.log(logHelper.startSpecialSubBulletPoint,'Discord Client Online');
            resolve(this);
         });
         this.client.login(this.#token);
      })
   }
}

export default DiscordClient;
