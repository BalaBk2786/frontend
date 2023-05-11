const names="sherlock";
console.log(names);
const greet=(names1)=>{
    console.log(`hello,${names1}`);
}
greet('Bahubali');
greet('kataoppa');
globalThis.setTimeout(()=>{
    console.log('you can leave this site');
},5000);
const int =setInterval(() => {
    console.log('in the every intervel')
}, 2000);
setTimeout(()=>{
    console.log('in the time out');
    clearInterval(int);
},5000);


