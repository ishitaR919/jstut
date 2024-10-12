const name = "ishita"
const repoCount = 20

//old outdated//console.log( name + repoCount + " value");

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

// another way to declare string 
const gameName = new String ('ishita0919')

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.___proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('t'));
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));
//neg value not allowed
const newString = gameName.substring(0,4)
console.log(newString);
//neg valued allowed
const anotherString = gameName.slice(-10,4)
console.log(anotherString);


const newStringOne = "     ishita     "
console.log(newStringOne);
console.log(newStringOne.trim());

