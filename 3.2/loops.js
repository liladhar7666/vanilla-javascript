// for loop - with break

   for(let i = 0 ; i <= 10; i++){
       if(i == 3){
             break;
       }
       console.log("go to sleep",i);
   }
  
// with - continue

   for(let i = 0; i <= 4; i++){
      if(i == 1 || i == 3){
        continue;
      }
      console.log("go to sleep",i);
   }

//    for in loop -- used for itteration

//   for(let i = 0; i<words.length ; i++){

//   }

//   for(let i in words){
//      console.log('hello', words[i]);  //i  key --> is itterate in array
//   }

//   for(let name in words){
//     console.log('hello', words[i]); // only used index , not a name --name not work
//   }

//   sum++;
//   sum+= 1;
//   sum = sum + 1;


// while loop
// first increment -- then output  1 2 3 4 5
// let n = 5;

// let i = 5;

// while (i < n) {
//     i++;
//     console.log("Hello World", i);
 
// }

//  after output -- increment

// while (i < n) {
 
//     console.log("Hello World", i);
//     i++;
// }

// do-while loop

let i = 12;

 do{ 
    console.log("i like ice-cream",);
    i++;
 }while(i < 5);
