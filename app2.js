// let obj = {
//     name : "usama",
//     fname : "ayaz"
// }
 
// let name1 = obj.name
// console.log(name1)
// // destructuring of object
// let {name,fname} = obj
// console.log(fname)



// let arr = ["usama","ayaz","ali"]
// let name0 = arr[0] 
// console.log(name0)
// // destructuring of array
// let [name1,name2,name3] = arr
// console.log(name2)

// function expression
 
// let foo = function(){
//     console.log("hello world")
// }
// foo()

// arrow function

// let hello = (name)=>{
//     console.log(`hello ${name}`)
// }
// hello("usama")

// let hello = (name1,name2)=>{
//     console.log(`hello ${name1} and ${name2}`)
// }
// hello("usama","ali")


// let hello = ()=>{
//     return("usama")
// }
// console.log(hello())

// let hello = ()=> "usama"
// console.log(hello())

// normal function me this us function ya tag ko target krega

//  es06 me arrow function use kroge usme this kroge trou wo usk parent ko targety krega

// setTimeout 
// setInterval  ye donon do paramtere lete hen pehli value me function leta he doosri mre time
// call back functions
// let getData = (render_data)=>{
//     firebase.database().ref('./').on("child_added",(data)=>{
//         console.log(data.val());
//         render_data(data.val())
//     })
// }
// let render_data = (data)=>{
//     console.log(data)
// }
// getData(render_data)

// let getData = (render_data)=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => {
//         render_data(data)
//     })
// }
// let render_data = (data)=>{
//     console.log(data)
// }
// getData(render_data)



// let getData = (render_data)=>{
//    setTimeout(() => {
//        render_data("usama")
//    }, 3000);
// }
// let render_data = (name)=>{
//     console.log(name)
// }
// getData(render_data)

// //  upper wala function busy tha tou jb wo 3 second baad name laya is ne print krdia


// array functions

// let arr = [{name:"usama",age:20},{name:"ali",age:30}]
// let filter = arr.filter((a)=>{console.log(a)})
// // filter bhi higher order function he q k isme call back function pass horaha
// let filter1 = arr.filter((a)=> {return true})
// console.log(filter1)
// // ye poora save kradega array filter me 

// let filter2 = arr.filter((a)=> {
//     return a.age === 20
// })
// console.log(filter2)
// // ye us poori array ko leayega jiski age 20 hogi

// let filter3 = arr.filter( (a) => a.name == "usama")
// console.log(filter3)

// let filter4 = arr.filter( a => a.name == "ali")
// console.log(filter4)

// let filter0 = arr.filter(a => false)
// console.log(filter0)

// let filter5 = arr.filter( a => a.age > 10)
// console.log(filter5)



//  search

// let name = "usama"
// let search = "us"
// console.log(name.startsWith(search))
// if (name.startsWith(search)){
//     console.log(name)
// }

// let name = "usama"
// let search = "a"
// if (name.endsWith(search)){
//     console.log(name)
// }


//  array map
// let arr = [2,4,6,8];
// console.log(arr)
// let multiply = arr.map(a => a*2)
// console.log(multiply)

// let arr = [{name:"usama"},{name:"ali"}]
// console.log(arr)
// let update = arr.map(a=> a.name = "ayaz")
// console.log(update)
// let update = arr.map(a=> a=>{
//     document.getElementById("table").innerHTML = a.name
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log("reult" ,data))
//     .catch(err => console.log("error",err))


// async function getData(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(data)

// }
//  getData()   


// ES06 classes

// // constructor function name Capital

// function Student(name,email){
//     this.name =name;
//     this.email = email
// }
// let student1 = new Student("usama","xyz@gmail.com")
// console.log(student1)
// // ek object ajayega student1 ka 

// class

// class Student{
//     constructor(name,email){
//         this.name = name;
//         this.email = email
//     }
// }
// let student1 = new Student("usama","xyz@gmail.com")
// console.log(student1)


// merge two classes

// class Student{
//     constructor(name,email){
//         this.name = name;
//         this.email = email
//     }
// }

// class School extends Student{
//     constructor(name,email,school){
//         super(name,email)
//         this.school = school
//     }
// }
// let student2 = new School("usama","xyz@gmail","saylANI")
// console.log(student2)

// function getData(){
//     let promise = new Promise(function(resolve,reject){
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(function(result){
//         resolve(result)
//     } )
//     .catch(function(error){
//         reject(error)
//     })
//     })
//     promise.then(function (result){
//     console.log("result",result)
// })
// .catch(function(error){
//     console.log("error",error)
// })
// }

// getData()



// async function getData(){
//     let promise = new Promise(function(resolve,reject){
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(function(data){
//         resolve(data)
//     })
//     .catch(function(error){
//         reject(error)
//     })

//     })

//     let data = await promise
//     console.log(data)
// }
// getData()


function add_to_cart (){
    var image = document.getElementById("image")
    var price = document.getElementById("price")
    var product = {
        image,
        price
    }
    var arr = []
    arr.push(product)
    localStorage.setItem("cart",arr)

}

