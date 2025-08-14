// let stocks = {
//     fruits: ["strawbary", "graphes", "bannana", "apple"],
//     liquid: ["watter", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"]
// }
// let is_shop_open = true;
// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(() => { resolve(work()) }, time)
//         } else {
//             reject(console.log("our shop is closed"))
//         }
//     });
// }

// order(1000, () => {
//         console.log(`${stocks.fruits[0]}`)
//     })
//     .then(() => {
//         return order(1000, () => console.log(`container of ${stocks.holder[0]} was selected`))
//     })
//     .catch(() => console.log("our worker has left"))
//     .finally(() => console.log("thank you for being our customer"))
import fetch from "node-fetch";
import { readFile } from 'fs';
readFile('./text.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.error('ERROR')
        console.log(err)
    } else {
        console.error('GOT DATA')
        console.log(data)
    }
})