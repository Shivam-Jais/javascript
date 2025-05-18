let arr= [2,3,5,6,4];
let square = arr.map((ele) => ele *ele );
let arr1 = [
    {
        name : "shivam",
        marks : 91
    },
    
    {
        name : "swarup",
        marks : 89
    },
    {
        name : "animesh",
        marks : 80
    }

];

arr1.forEach((ele) => {
    console.log(ele.name);
});

let gpa = arr1.map((num) =>{
    return num.marks/10;
});
// Filter
let even = arr.filter((el) => el % 2 == 0 );
let evenn = arr.filter((el) => {
    return el % 2 == 0 ;
})
//Every --- return true if every element of array gives true for some function Else return false.
 let num = [1,2,3,4,5,6,11,12];
 let num2 = [2,,4,6];
 let num3 = [1,3];
 let aa = num.every((el) => el % 2 == 0 ); // false
 let ab = num2.every((el) => el % 2 == 0 ); //true 

 let g = even.every((el) => el % 2 == 0 );//isko recheck bolte hai 
 console.log(g);

//Some --- return true if some element of array gives true for some function Else return false
let f = num.some((el) => el % 2 == 0 );//true 
let y = num3.some((el) => el % 2 == 0);//


// Reduce - it reduce the array and to a single value
let t = num.reduce((sum , el) => el + sum , 0 );
let tt = num.reduce((sum , ele) => (ele + sum ));

let max = num.reduce((max , ele) => {
    if(max > ele){
        return max;
    }else{
        return ele ;
    }
});
//practice question 

// check if all number is greater than 10 or not 
let check = num.filter((el) => {
    if(el > 10 ){
        return el;
    }
});
let mul = num.every((el) => el %10 == 0 );
//find min
let min = num.reduce((min , ele) => {
    if(min < ele){
        return min
    }else{
        return ele ;
    }
});
// Default parameters 
function sum(a , b =2 ){
    return a+ b ;
}
console.log(sum(3)); // 5

console.log(sum(3,3)); //6 it explictly change the value 

function muld(a=2, b){
    return a *b ;
}
console.log(muld(3)); // NaN
console.log(muld(3,3)); //9



//spread -- expand an iterable into multiple values 
console.log(Math.min(1,2,4,5,6,5));// how it is working
console.log(Math.min(arr));//NaN how can a arr pass 
console.log(Math.min(...arr));//2 by usign 3 tods we can take multiple values or we can say all is called spread


/*let num4 = 12345;
let dd = [...num4];// wrong 
console.log(dd); // cannot iterable*/

let newrr = [...arr];
console.log(newrr);
let char = "shivam";
let cha = [...char];
console.log(cha);//(6) ['s', 'h', 'i', 'v', 'a', 'm']

//spread with object literals 
let data = {
    name : "shivam@gamil.com",
    age : 22

}
let coypdata = {...data, id : 123};//{name: 'shivam@gamil.com', age: 22, id: 123}

//rest -- allows a function to take an indefinite number of argument & bundle in an array


function sun (...args){
    for(let i = 0 ; i<args.length;i++){
        console.log("you gave us", args[i]);
    }
}
sun(1);
sun(1,2);
sun(1,2,3,4,5,6,); //so what we know is we take multiple of numbers and bundle it into one array

function mini(a,b,c,d){// here we have only 4 variable to catch  
    console.log(arguments);// but here shows all arguments 
    console.log("args lengthe ",arguments.length); 
}
mini(1,2,4,5,6,7,8,9,0,7);//here we passing more then 4 agrgs
//arguments.push(1); // wrong
//it is not a array it is a collection and we cannot use any type of array function or method on it like puch ,pop , every , some, map , filter, forecah,and etc 
// if we want to use all the array methods on the arguments so we have to convert the arguments into the array by using 3 (...) tod example 
function add(...args){
    return args.reduce((sum , ele) => (sum+ele),0);
}
console.log(add(1,2,4));

// make a max function 
function maxx(...args){
    return args.reduce((max ,ele) => {
        if(max > ele){
            return max;
        }else
        return ele
    },0);
}
console.log(maxx(1,2,3));


// Destructing Stroe the values of array into multiple variables index wise
let names = ["situ", "sonu" , "tele" , "charma"];

/*let a = names[0]; //situ
let b = names[1]; // sonu*/

let [a ,b ,...others]= names ;// shortcut way 
console.log(a,b);//situ sonu
console.log(others);// (2) ['tele', 'charma']

//Destructing objects 

const stdd = {
    namee :"shivam",
    age : 23,
    subjects :["hindi", "english" ,"math" , "science"],
    village : "up"
};
let {namee , age } = stdd;// here the obj variable namse should be same with the variable name ,lets know how is it working it will  search the name in obj and if it is there then the value is asign
console.log(namee);// shivam
let {namee: user, age : no ,} = stdd;//searcha the namee in obj and then asign the value in user(variable) it is another way to asign the value to a new variable 
console.log(user);// shivam 
let {namee : use , age : nu , city = "ctc"} = stdd;// it is a defalut parameters
console.log(city);
let {village = "bihar" } = stdd;
console.log(village);//up        it means the value which is asing in the obje it has more preference so if i explicty changing the village value but it does not change
let squa = arr.map((el) => (el * el));
console.log(squa);
let addd = arr.reduce((sum ,ele) => (sum + ele) , 0 );
let avg = addd/ arr.length;
console.log(avg);

let newar = arr.map((el) => (el + 5));
console.log(newar);

let upcase = names.map((el) => el.toUpperCase());
console.log(upcase);
let doubleandreturnargs = (arr , ...args) => [
    ...arr, ...arr.map((el) => (el *2))
];
doubleandreturnargs([1,2,3,4] , 5, 6);
