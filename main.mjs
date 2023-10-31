import env from 'dotenv';
import { logHelper } from './src/helper.mjs';
import DiscordClient from './src/clients/DiscordClient.mjs';

console.log(logHelper.start);
env.config();

const Discord = await new DiscordClient(process.env.DISCORD_TOKEN);

console.log(logHelper.end);
