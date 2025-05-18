

let btn = document.querySelector("button");
btn.addEventListener("click",  async () => {
let fact =  await getfacts();
let p = document.querySelector("#result");
p.innerText = fact;


})
let url = "https://catfact.ninja/fact";
 
async function getfacts(){
    try{
        let res = await axios.get(url); // using axios to get the data from the url
        return (res.data.fact);
    } catch(e){
        return ("error : " , e); 
    }
}
//getfacts();


let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#db");
btn2.addEventListener("click", async () => {
 let link = await getdog();
 let img = document.querySelector("#img");
    img.setAttribute("src" , link);
 console.log(link);
});

async function getdog(){
    try{
    let dogimg = await axios.get(url2);
    return dogimg.data.message;
    } catch (e) {
         return("no img found : ", e);
    }
}
//getdog();



const url3 = "https://icanhazdadjoke.com/";

async function getjokes(){
    try{
        const config = { headers : {Accept: "Application/json"} };
        
        let res = await axios.get(url3 , config);
        console.log(res.data);
    }catch(e){
        console.log(e);
    }
}


const url4 = "http://universities.hipolabs.com/search?name=";

let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
   let colarr = await getcollage(country);
   console.log(colarr);
   show(colarr);
} );

function show(colarr){
    let list = document.querySelector("#list");
    list.innerText = "";
for(col of colarr){
//console.log(col.name);
    let li = document.createElement("li");
    li.innerText = col.name; 
    list.appendChild(li);
}
}

async function getcollage(country) {
    try{
        let res = await axios.get(url4 + country);
      return res.data;
    }catch (e) {
        return [];
    }
    
}
