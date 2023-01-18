// // console.log(isNaN("hello"))
// // console.log(Number.isNaN('hello')) ;

// // let arr = ["a", "b", "c"];
// // for (let key in arr) {
// //   console.log(key);
// // }
// // for (let value of arr) {
// //   console.log(value);
// // }
// // let arr = ["a", ["b","d"], "c"];
// // let arr2= JSON.parse(JSON.stringify(arr))
// // let newArray = arr2
// // console.log(arr,newArray)
// // arr2[1][0]="f"
// // console.log(arr,arr2)
// // console.log(name1)
// // var name1 = "kiran"
// // let num=15;
// // function name(params) {
// //      num=10;
// // }
// // console.log(num)

// // function print(params) {

// //     console.log("print")
// // }

// // setInterval(print,Infinity)
// // setInterval(print,1000)
// // setInterval(print,1000)
// // print()
// // print()
// // print()
// // print()
// // print()
// // print()
// // let a="C22y1m4t3"
// // b=a.split("")
// // let c=[]
// // let q=[]
// // for(let i=0;i<b.length;i++){
// //     if(parseInt(b[i])){
// //         c.push(parseInt(b[i]))
// //     }else{
// //         c.push(b[i])
// //     }
// // }
// // // console.log(c,"ff",q)

// // let d=""
// // for(let i=0;i<c.length;i++){
// //     if(typeof c[i]!= "string"){
// //    c.push(c[i]+ 1)
// //     }

// // }
// // console.log(c)

// // let str = 'C2y1m4t3'
// // let newStr=''
// // for(let i=0; i<str.length; i++){
// //   if(isNaN(str[i])===false){
// //     newStr+=`${str[i-1].repeat(parseInt(str[i]))}`
// //   }
// // }
// // console.log(newStr)

// // function counter() {
// //   let count = 0;
// //   function increment() {
// //     count++;
// //     return count;
// //   }
// //   return increment;
// // }

// // let counterFunc = counter();

// // let increment =document.querySelector("#increment")

// // increment.addEventListener("click", function () {
// //   document.querySelector("#counter").innerHTML = counterFunc();
// // });
// // for (let i = 0; i <= 10; i++) {
// //   if (i % 2 === 0 && i % 4 != 0) {
// //     console.log(i);
// //   }
// // }
// // for (var index = 0; index < 10; index++) {
// //   function name(index) {
// //     setTimeout(()=>console.log(index),1000)
// //   }
// //   name(index)
// // }
// // let n = 5;
// // let string = "";
// // for (let i = 0; i < n; i++) {
// //   // printing star
// //   for (let k = 0; k < n - i; k++) {
// //     string += "*";
// //   }
// //   string += "\n";
// // }
// // for (let i = 1; i <= n; i++) {
// //   for (let j = 0; j < i; j++) {
// //     string += "*";
// //   }
// //   string += "\n";
// // }
// // console.log(string);

// // function name1(params) {
// //   console.log("hello")
// // }

// // name1.ani= "hee"

// // name1()
// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// // 		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
// // 	}
// // };

// // fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/641166/nutritionLabel?defaultCss=true&showOptionalNutrients=false&showZeroValues=false&showIngredients=false', options)
// // 	.then(response => response.json())
// // 	.then(response => console.log(response))
// // 	.catch(err => console.error(err));

// //Print integers one-to-100 but print “Fizz” if an integer is divisible by three, “Buzz” if an integer is divisible by five, and “FizzBuzz” if an integer is divisible by both three and five

// // for(let i=0;i<=100;i++){
// // 	if(i%3===0 && i%5===0){
// // 		console.log("FizzBuzz")
// // 	}else if(i%5===0){
// //         console.log("Buzz")
// // 	}else if(i%3===0){
// // 		console.log("Fizz")
// // 	}
// // }

// // for(let i=0;i<=100;i++){
// // 	console.log( i%3===0 && i%5===0 ? "FizzBuzz": i%5===0?"Buzz":i%3===0 && "Fizz")
// // }
// // var moveZeroes = function(nums) {
// //   let zero=0
// //     for(let i=0;i<nums.length;i++){
// //         if(nums[i]!=0){

// //           [nums[zero],nums[i]]=[nums[i],nums[zero]]
// //           zero++
// //         }
// //     }
// //     return nums
// // };

// // console.log(moveZeroes([0,1,0,3,12]))

// // function expensive(obj, n){
// //    Object.keys(obj).forEach(key => {
// //    if (obj[key] < n) delete obj[key];
// //  });
// //  return obj
// //  }
// //  console.log(expensive({ "a": 3000, "b": 200, "c": 1050 },
// //  1000))
// var v1 = {},
//   v2 = { key: "v2" },
//   v3 = { key: "v3" };

// v1[v2] = 4056;
// v1[v3] = 9075;

// // console.log(v1[v2]);

// var computer = {
//   price: 30000,
//   shipping: 2000,
//   total: function () {
//     var tax = 3000;
//     var specialDiscount = function () {
//       if (this.price > 20000) {
//         return 1000;
//       } else {
//         return 0;
//       }
//     }.bind(this);

//     return this.price + this.shipping + tax - specialDiscount();
//   },
// };

// // console.log(computer.total());
// const person = {
//   name: "Prabhat",
//   hobbies: ["coding"],
// };

// function addHobby(hobby, hobbies = person.hobbies) {
//   hobbies.push(hobby);
//   return hobbies;
// }

// addHobby("running", []);
// addHobby("dancing");
// addHobby("reading", person.hobbies);

// // console.log(person.hobbies);

// // if (typeof MY == "undefined") {
// //   MY = new Object();
// //   MY.CUSTOM = new Object();
// //   }

// //   MY.CUSTOM.namespace = function() {
// //   function showStatistics(args) {
// //   console.log("<p><strong>Name:</strong> " + args.name + "<br />");
// //   console.log("<strong>Team:</strong> " + args.team + "<br />");
// //   if (typeof args.position === "string") {
// //   console.log("<strong>Position:</strong> " + args.position + "<br />");
// //   }
// //   if (typeof args.average === "number") {
// //   console.log("<strong>Average:</strong> " + args.average + "<br />");
// //   }
// //   if (typeof args.homeruns === "number") {
// //   console.log("<strong>Home Runs:</strong> " + args.homeruns + "<br />");
// //   }
// //   if (typeof args.rbi === "number") {
// //   console.log("<strong>Runs Batted In:</strong> " + args.rbi + "</p>");
// //   }
// //   }

// //   showStatistics({
// //   name: "Mark Teixeira",
// //   team: "New York Yankees",
// //   position: "1st Base",
// //   average: .284,
// //   homeruns: 32,
// //   rbi: 101
// //   });
// //   }
// //   MY.CUSTOM.namespace();

// // async function* range(start, end) {
// //   for (let i = start; i <= end; i++) {
// //   yield Promise.resolve(i);
// //   }
// //   }

// //   (async () => {
// //   const gen = range(1, 3);
// //   for await (const item of gen) {
// //   console.log(item);
// //   }
// //   })();

// // function There() {

// //   var count = 0;

// //   setTimeout( function () {
// //   var innerCount = 0;
// //   count += 2;
// //   console.log(count);

// //   setTimeout( function () {
// //   count += 5;
// //   innerCount += 1;
// //   console.log(count + " " + innerCount)
// //   }, 500);

// //   }, 1000);
// //   };

// //   There();

// const user = {
//   email: "prabhat@mail.com",
//   password: "12345",
// };

// const updateUser = ({ email, password }) => {
//   if (email) {
//     Object.assign(user, { email });
//   }

//   if (password) {
//     user.password = password;
//   }

//   return user;
// };

// const updatedUser = updateUser({ email: "new@email.com" });
// // console.log(updatedUser === user)

// // for (var i = 0; i < 3; i++) {
// //   setTimeout(() => console.log(i), 1);
// //   }

// //   for (let i = 0; i < 3; i++) {
// //   setTimeout(() => console.log(i), 1);
// //   }

// //  let user = {
// // name: "John",
// // hi() { console.log(this.name },
// // bye() { console.log('Bye'); }
// // };
// // user.hi();
// // (user.name == "John" ? user.hi : user.bye

// //   const createMember = ({ email, address = {}}) => {
// // const validEmail = /.+\@.+\..+/.test(email)
// // if (!validEmail) throw new Error("Valid email pls")

// // return {
// // email,
// // address: address ? address : null
// // }
// // }

// // const member = createMember({ email: "my@email.com" })
// // console.log(member)

// //   const a = {};
// // const b = { key: 'b' };
// // const c = { key: 'c' };

// // a[b] = 123;
// // a[c] = 456;

// // console.log(a[b]);

// //   (function test() {
// //  console.log(
// //  function () {} instanceof Object,
// //  function () {} instanceof Function,
// //  Function instanceof Object,
// //  Object instanceof Function
// //  );
// //  })();
// //  function* myfn(){

// // console.log(yield 1)
// // console.log(yield 2)
// // console.log(yield 3)
// //          }
// //          const iterator=myfn()
// //          console.log(iterator.next("a").value)
// //          console.log(iterator.next("b").value)
// //          console.log(iterator.next("c").value)

// //          const arry=["rock","paper"]
// //          myfn(...arry)

// // if( typeof Test!==undefined){
// //   console.log("kiran")
// // }
// // let x=["1","2","-7","300"]
// // let y=x.sort()
// // console.log(y)

// function name(arr) {
//   let temp = 0;
//   for (const x of arr) {
//     if (x % 2 == 1) {
//       temp += 1;
//     } else {
//       temp = 0;
//     }
//     if (temp == 3) {
//       return true;
//     }
//   }
//   return false;
// }

// // console.log(name([7,5,4,23,12]))

// // function name(num) {
// //   let j=2
// //   while(j*j<=num){
// //     if(num%j===0){
// //       return false
// //     }
// //     j++
// //   }
// //   return true
// // }
// // console.log(name(7))

// // const f=n=>n<=1?1:n*f(n-1)
// // let g=f(4)
// // console.log(g)

// // function _(func,items){
// //   let i=0;
// //   for(let item of items){
// //     if(func(item)){
// //       items[i]=item
// //       i+=1
// //     }

// //   }
// //   items.splice(i)
// // }

// // function f1(a) {
// //   if(a===0) return 1
// //   return a*f1(a-1)
// // }

// // function main(){
// //   const f2 = (a,b)=>Math.abs(2*a-3*b)
// //   console.log(f1(f2(2,3)))
// // }

// // getMessage();

// // function getMessage (){
// //   console.log("Good morning");
// // };

// // let msg = "Good morning!!";

// // msg.name = "John";

// // console.log(msg.name);
// //

// // let x=0
// // let arr = [1,2,3,4,5]
// // for(let i=0;i<arr.length;i++){
// // if(arr[i]%5===0){
// //   x+=5;
// // }else if(arr[i]%2!=0){
// //   x+=1
// // }else if(arr[i]%2===0){
// //   x+=3
// // }
// // }
// // console.log(x)

// // function tribonacci(signature,n) {
// //   var trib = signature;
// //   for (i = 3; i < n; i++) {
// //     trib.push((trib[i-1] + trib[i-2] + trib[i-3]));
// //   }
// //   return trib.slice(0, n);
// // }

// // console.log(tribonacci([0,0,1],9))

// function match(str1, str2) {
//   str3 = str1.split("");
//   str4 = str2.split("");
//   return str3.every((element) => str4.includes(element));
// }

// // console.log(match("code","edklko"))

// // let arr1 = [1, 2, 3];
// // let arr2 = [2, 3,4];

// // let isFounded = arr1.every( ai => arr2.includes(ai) );
// // console.log(isFounded)

// const arr = [{ X: -1 }, { Y: 1 }, { X: -4 }, { B: 3 }, { X: 5 }];

// let result = {};
// for (let i = 0; i < arr.length; i++) {
//   var item = arr[i];
//   for (var key in item) {

//       result[key] = (result[key] || 0) + item[key];

//     // changed here
//   }
// }
// for(var key in result) {
//   if(result[key] === 0) {
//       delete result[key]
//   }
// }
// // console.log(result)

// function check(arr){
//   let temp=0
//   for(const x of arr){
//     if(x%2==1){
//       temp+=1
//     }else{
//       temp=0
//     }
//     if(temp==3){
//       return true
//     }
//   }
//   return false
// }
// // console.log(check([5,4,7,23,12]))

// function fnv(y1,y2,...y3){
//   const [x1,...[result]]=y3
//   console.log(result)
// }
// // const mYarr = ["rock","paper","scissors"
// // ,"lizard","spock"]
// // fnv(...mYarr)
// function* gen(){
//   console.log(yield  1)
//   console.log(yield  2)
//   console.log(yield  3)
// }
// const iterator = gen()
// // console.log(iterator.next("a").value)
// // console.log(iterator.next("b").value)
// // console.log(iterator.next("c").value)

// function a(){
//   let b=10;
//  return function c(){
//     console.log(b)
//   }
// }

// let d=a();
// d()

//synthetic events-react
//diffing algorithm
//error boundry
//unmounting demo
//digital clk
// let arr = [0, -1, 4];
// let arr1 = [];
// let temp;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
//   arr1.push(arr[i]);
// }
// console.log(arr1);

// console.log(a);
// const a=10