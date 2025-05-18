
// async keyword is used to declare an asynchronous function. It returns a promise. The await keyword is used to wait for a promise to be resolved or rejected. It can only be used inside an async function.
// async function is a function that returns a promise. It is a way to write asynchronous code in a more readable way.
// async function greet() {
//     throw ("error occurred"); //throw is used to throw an error
//     //  throw new Error("error occurred"); //throw is used to throw an error
//     return "hello"; //asyns retunrs a promise so it returns with a reslove or reject value
// }
// greet()
//     .then((res) => {
//         console.log("reslove :", res)
//     })
//     .catch((err) => {
//         console.log("reject :", err)
//     })


// let demo = async () => {
//     return 5;
// }

//await 
// await pauses the execution of its surrounding async function until the promise is settled (fulfilled or rejected), and returns the resolved value. It can only be used inside an async function.





//  function getNum(){
//   return new Promise((resolve , reject ) => {
//     setTimeout(()=>{
//         let num = Math.floor(Math.random()* 10) +1 ;
//         console.log("numer : ", num)  ;
//         if(num < 5 ){
//             reject("error occured" ) ;
//             console.log("number is less than 5: " , num);
//         }
//         resolve("num is greater than 5") ;
//     } , 1000);
//   } );

// }

// async function demo(){
//     try{
//         await getNum();
//         await getNum();
//         await  getNum();
//     }
//     catch(err){
//         console.log("error : ", err);
//     }
 
//       getNum();// here we did not use await so the output comes after 1 sec for till he solve the other part of the code and also doestn catch the erroe
//      let a = 5 ;
//      console.log("a : ", a) ;
//      console.log("a : ", a + 5) ;
// }






// let h1 = document.querySelector("h1");

// function changecolor(co , delay) {
//  return new Promise((resolve , reject) =>{
//         setTimeout(() => {
//             h1.style.color = co;
//             resolve("color changed");
//         }, delay);
       
        
//     });

// }
// async function demo (){
//     await changecolor("red" , 1000);
//     await changecolor("orange " , 1000);
//     await changecolor("green" , 1000);
//     await changecolor("blue" , 1000);
// }


// // changecolor("red" , 1000)
// // .then((res)=>{
// //     console.log("result of promise :" , res);
// //     return changecolor("orange",1000);
// // })

// // .then((res) => {
// //     console.log("result of promise :" , res);
// //     return changecolor("green",1000);
// // }) 
// // .then((res) => {
// //     console.log("result of promise :" , res);
// //     return changecolor("blue",1000);
// // }) 
// // .then((res) => {
// //     console.log("result of promise :" , res);
// //     return changecolor("brown",1000);
// // }) 
 






// here we learn abbout the conversion of data fromat  
// string to object 

// let joshdata = '{"fact":"A cat/s cerebral cortex contains about twice as many neurons as that of dogs. Cats have 300 million neurons, whereas dogs have about 160 million. See, cats rule, dogs drool!","length":173}';
// //console.log("joshdata : ", validata.fact);// it gives error because we are trying to access the fact property of a string
// let validata = JSON.parse(joshdata); // JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
// console.log("joshdata : ", validata.fact);

// // obj to string
// let obj = {
//     name : "shivam",
//     age : 22,
// }
// let objdata = JSON.stringify(obj); // JSON.stringify() method converts a JavaScript object or value to a JSON string.
// console.log("objdata : ", objdata); // here we convert the object to string





//Testing api request 
// our first request .


//  let url = "https://catfact.ninja/fact";
//  fetch(url) // fetch() method is used to make a network request to the specified URL and returns a promise that resolves to the response of the request.
// .then((res) => {
//     console.log("res : ", res); // it gives the response object
// //    console.log(res.json());
//    return res.json();
// })
// .then((data) => {
//     console.log("data1 : " , data.fact); // it gives the data object
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log("data2 : " , data.fact); // it gives the data object
//     return fetch(url) ;
// })
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log("data3 : " ,data.fact);
// })
// .catch((err) => {
//     console.log("error : " , err);
// })

// console.log("i am so happy"); // this will be printed first because the fetch() method is asynchronous and does not block the execution of the code. The console.log() statement will be executed before the fetch() method completes its request and returns a response.







// using fetch with async / await 
// let url = "https://catfact.ninja/fact";

// async function getfacts(){

//     try{
//         let res =  await fetch(url);
//         console.log(res);
//         let data = await res.json();
//         console.log("data1 : " , data.fact);
    
    
//         let res2 =  await fetch(url);
//         let data2 = await res2.json();
//         console.log("data2 : " , data2.fact);
        
//         console.log("bye");
//     } catch(e){
//         console.log("error : " , e);
//     }
 
// }
// getfacts(); 
