//memory ->stack(primitive) //->heap(non primitive)

let myYoutubeName = "ishita919"//primitive so saved in stack

let anotherName = myYoutubeName//copy assigned 
anotherName ="rastogi010"
console.log(anotherName);
console.log(myYoutubeName);

//non primitive does not assigns any copy the data changed is changed in the original one 

let userOne = {
    email:"ishita@gmail.com",
    upi:"user1@ubl"
}

let userTwo = userOne 
userTwo.email = "rastogi@gmail.com"

console.log(userOne.email);//both changes 
console.log(userTwo.email);

