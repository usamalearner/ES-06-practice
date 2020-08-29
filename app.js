//  templete literals
let fname = "usama";
let lname = "ali";
console.log(`My name is ${fname} ${lname}`)

// spread operators
var stu1 = ["usama","ali"]
var stu2 = [...stu1,"syed","zada"]
console.log(stu2)

//  destructuring
var student = {
    name :"usama",
    age:18,
    rollno : 78
}
let {name,age,rollno} = student;
console.log(name)
console.log(age)

// ternary operators
var ages = 20 ;
var check = ages >30 ? "30 se barah he " : "30 se chota he"
console.log(check)

var bool = true;
var naam = bool && "usama";
console.log(naam)

// asyn or sync
setTimeout(function(){
    console.log("number1")
},1000);
console.log("num2")
console.log("num3")
//  num2 num3 number 1 result

var name1 ;
setTimeout(function(){
    name1 = "usama"
},2000);
setTimeout(function(){
    console.log(name1)
},1000)
//  it will shpw undefined q k name1 me kuch aya hi nhi he therefore we use promise

// promise
// var promise = new Promise(function(resolve,reject){
//     var zinger = "available"
//     if(zinger === "available"){
//         resolve("usama ne zinger khila dia")
//     }
//     else{
//         reject("usama ne zinger nhi khilaya")
//     }
// })
// promise.then(function(data){
//     console.log("resolve",data)
// })
// .catch(function(error){
//     console.log("reject",error)
// })

// firebas se dataa NIKALNA

// var promise1 = new Promise(function(resolve,reject){
// firebase.database().ref("users").on("child_added",function(data){
//     if(data.val()){
//         resolve(data.val())
//     }else{
//         reject("something went wrong")
//     }
// })
// })
// promise1.then(function(data){
//     console.log(data)
// })
// .catch(function(err){
//     console.log(err)
// })

var promise = new Promise(function(resolve,reject){
        if(true){
            setTimeout(()=>{
                resolve("it is resolved")
            })
           }
        else{
            reject("it is rejected")
        }
    })
    console.log(promise) 
    promise.then(function(data){
        console.log("resolve",data)
    })
    .catch(function(error){
        console.log("reject",error)
    })