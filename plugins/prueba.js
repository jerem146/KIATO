//prueba.js
//Creditos a Neykoor 
import { areJidsSameUser } from '@whiskeysockets/baileys';

const handler = async (m, { conn, text, command }) => {
  await conn.reply(m.chat, 'negro de mierda deja de acosar a las niñas pedofilo croma riatas', m);
};

handler.command = handler.help = ['esteban','pedofilo']
handler.tags = ['fun']
handler.group = true


export default handler;
