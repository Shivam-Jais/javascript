// function one(){
//     return 1; 
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
// three();





// let h1 = document.querySelector("h1");

// function changecolor(co , delay, nextcolor) {
// setTimeout(() => {
//     h1.style.color = co;
//     if(nextcolor){
//         nextcolor ();
//     }
// }, delay);
// }

// changecolor("red" , 1000, () =>{
//     changecolor("green" , 1000 , () =>{
//         changecolor("yellow" , 1000 , () => {
//             changecolor("orange" , 1000 );
//         });
//     });
// })





// function savedata(data, succes, failure) {
//     let internetspeed = Math.floor(Math.random() * 10) + 1;
//     if (internetspeed > 4) {
//         succes();
//     }
//     else {
//         failure();
//     }
// }
// savedata("shivam jasiwal", () => {
//     console.log("data save");
//     savedata("ashu", () => {
//         console.log("data2 save");
//         savedata ("santosh" , () => {
//             console.log("data3 save");
//         }, () => {
//             console.log("data3 not save");
//         })
//     }, () => {
//         console.log("data2 not save");
//     }
// )
// }, () => {
//     console.log("week connection");
// });




// function savedata(data) {
// return new Promise ((resolve , reject ) => {
//     let internetspeed = Math.floor(Math.random() * 10) + 1;
//     if(internetspeed > 4){
//         resolve("succes");
//     }
//     else{
//         reject("failure week connection");
//     }
// });
  
// }

// savedata("shivam jasiwal")
// .then((res) =>{
//     console.log("data save");
//     console.log("result of promise :" , res);
//    return savedata("santosh jaiswal");
// })
// .then((res) => {
//     console.log("data2 save");
//     console.log("result of promise :" , res);
//     return savedata("shambhu jaiswal");
// })
// .then((res) => {
//     console.log("data3 save");
//     console.log("result of promise :" , res);
// })
// .catch((err) => {
//     console.log("promise was rejected");
//     console.log("erroe of promise :" , err);
// })






// let h1 = document.querySelector("h1");

// function changecolor(co , delay) {
//  return new Promise((resolve , reject) =>{
//         setTimeout(() => {
//             h1.style.color = co;
//             resolve("color changed");
//         }, delay);
       
        
//     });

// }

// changecolor("red" , 1000)
// .then((res)=>{
//     console.log("result of promise :" , res);
//     return changecolor("orange",1000);
// })

// .then((res) => {
//     console.log("result of promise :" , res);
//     return changecolor("green",1000);
// }) 
// .then((res) => {
//     console.log("result of promise :" , res);
//     return changecolor("blue",1000);
// }) 
// .then((res) => {
//     console.log("result of promise :" , res);
//     return changecolor("brown",1000);
// }) 



// // changecolor("red" , 1000, () =>{
// //     changecolor("green" , 1000 , () =>{
// //         changecolor("yellow" , 1000 , () => {
// //             changecolor("orange" , 1000 );
// //         });
// //     });
// // });