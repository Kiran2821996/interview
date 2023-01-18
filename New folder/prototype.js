// Array.prototype.myFilter= function (cb){
//     let arr=[];
//     for(let i=0;i<this.length;i++){
//         if(this[i]=cb[i]){
//             arr.push(cb[i])
//         }
//     }
// }

// const obj = {
//     name: "Aditya",
//     nameFunc: function(){
//         console.log(this.name);
//     }
// }

// const anotherobj = {
//     name: "Kiran"
// }
//  obj.nameFunc.call(anotherobj)
 //cal,apply,bind//array protoype//polyfill
//  for (var i = 1; i <= 5; i++) {
//     function index(i){
//         setTimeout(
//             function () {
//                 console.log(i)
//               }, i * 1000)
//     }
//    index(i)
    
//   }

function mostRepeat(arr) {
    const obj = {};
    arr.forEach(item => {
       if(!obj[item]){
        obj[item] = 1;
       }else{
        obj[item]++;
       } 
    })
 
    const res =  Object.entries(obj).sort((a,b) => b[1]-a[1]);
    return parseInt(res.shift().splice(0,1)) 
 }

console.log(mostRepeat([1,2,1,1,1,2,2,2,1]))
 