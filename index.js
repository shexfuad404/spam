const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('Alx Developer');
});
const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
  checkUpdate: false,
}); // All partials are loaded automatically

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})


client.login('Mjk0NjE0OTU88-hdjsbbhv994MzI5NTYxMDg4.Gef6yk.U7n5TJrm8eBSgfisKtjXB9OsNHJNdNbZbQ__EM') ///ذا السطر//// وحط client.login(process.env.token)


let time = 500 // 1000 = ثانية
let ch = "1411010059676287118"




function generate(number) {
  let gg = [];
  let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMsjjsisndhskajxbskxniabsjsnakwioqodncjdnwkxbwisnkahehdjsbebjxjsbdhdjsixhbehskaidbksoahxisndjcbkajshdNOPQRSTUVWXYZ?!@#$%^&*()_+=}{[';,./`\`']0123456789";
  string = string.split("");
  for (let k = 0; k < number; k++) {
    gg.push(string[Math.floor(Math.random() * string.length)]);
  }
  return gg.join("");
}

client.on('ready', () => {
  console.log("Done")
