/** ---copy paste this on browser console-------- */

const start = new Date();
let sum = 0;
for (let i = 0; i<100000000; i++) {
    sum++;
}
const end = new Date();
console.log('time elapsed', end - start);