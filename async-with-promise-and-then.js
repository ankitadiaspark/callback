async function random(){
var promise=new Promise((resolve,reject)=>{
resolve();
})
}
function three(){
setTimeout(function(){
console.log(3);
},Math.floor(Math.random() * 1000))
}
function five(){
setTimeout(function(){
console.log(5);
},Math.floor(Math.random() * 2000)+1000)
}
function seven(){
setTimeout(function(){
console.log(7);
},Math.floor(Math.random() * 5000)+2000)
}
random().then(function(){
three();
five();
seven();
})


random();