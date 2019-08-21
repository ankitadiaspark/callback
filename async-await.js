async function random() {

  let promise = new Promise((resolve, reject) => {
    three();
five();
seven();
  });

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


  let result = await promise; // wait till the promise resolves (*)

  console.log(result); 
}

random();