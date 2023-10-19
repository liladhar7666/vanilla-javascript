// // declerating function
// function greetings(){
//       console.log("hii");  
//       console.log("namaste");  
//       console.log("whassup");  
// }
// // calling a function
//  greetings();
//  greetings();

// function greetings(name){ // with paranthesis
//     console.log("hello",name);
//     console.log("jay bhim ",name);
//     console.log("namaskar",name);
// }
//   const greetvalue = greetings("anuj");

//   console.log(greetvalue);

//   greetings();

// anonymous function -- function have not name

let result = addition(3, 6);
  console.log(result);

   function addition(a, b){
      console.log('starting the operation');
       return a + b;
       console.log('unreachable code');
   }

//    you call the function above and below --where have your choise

// in a variable to store the function
let myaddtionFunction = function(a, b){
    console.log('starting the operation');
    return a + b;
}

// arrow function
 let myyaddtionFunction = (a, b) => {
    console.log('starting the operation');
    return a + b;
 }

 myyAdditionFunction = 12;

 console.log(typeof myyAdditionFunction); //it is a variable so not show 
//   that the function then it show

  console.log(myyaddtionFunction(4, 8));