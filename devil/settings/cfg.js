/* 

 * Simple Base By Anggazyy
 * Open jasa pembuatan script & base
 * Bisa dm aku wa.me/6288804148639
 * Jangan hapus credit ya :)
 
*/

global.owner = [
  "6288221519768", //ganti nomor owner
  "" //nomor owner kedua kalo ada
]
global.nomorbot = '6288233469454'
global.urlfoto = 'https://'
global.anjg = 'Your bot is not register in database'

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})