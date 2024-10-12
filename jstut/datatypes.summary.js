// js is dynamically typed language // coz datatype is automatically defined

// primitives 
// 7 types : string , number ,boolean , null , undefined ,symbol,BigInt 


 // declare symbol
 const Id = Symbol('123')
 const IdNumber = Symbol('123')

 console.log(Id === IdNumber);//false

 const BigInt = 12234654782254554566643n



 

  // Refrence /non primitive
 //arrays , objects,function

 const heros =["saktiman","naagraj"]//arrays
 //object
 let myObj={
    name:"ishita",
    age: 19,
 }
 //function
 const myfunctio = function(){
    console.log("hello world");
 }