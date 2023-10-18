//   if-else
//   const age = 22;

//   if (age > 18) {
//     console.log("you can drive");
//   } else {
//     console.log("you cannot drive");
//   }

//   age > 19 ? console.log('you can drive') : console.log('you cannot drive');

//   if-else if
 
   const day = 8;

   console.log("calculating");

  if (day == 1) {
    console.log("monday");
  } else if(day == 2){
    console.log("tuesday");
  }else if(day == 3){
    console.log("wednesday");
  }else if(day == 4){
    console.log("thursday");
  }else{
    console.log("chill day");
  }

  console.log("done");


//   switch statements


  console.log("calculating for switch");

  switch(day){
      case 1: 
      console.log("monday");
      break;
      case 2: 
      console.log("tuesday");
      break;
      case 3: 
      console.log("wednesdday");
      break;
      case 4: 
      console.log("thursday");
      break;
      case 5: 
      console.log("friday");
      break;
      case 6: 
      console.log("saturday");
      break;
      default:
      console.log("chill day");
      break;
     
  }
  console.log("done");

//   logical operators

// and 

//   if(age >= 18 && age <= 50){
//     console.log("you can drive");
//   }else{
//     console.log("you cannot drive");
//   }

//   or
  
  const age = 9;
  const isSkilled = false;

  if(age > 18 && age < 50 || isSkilled){
    console.log("you can drive");
  }else{
    console.log("you cannot drive");
  }

// not 
 
if(!(age > 18)){
    console.log("you can drive");
}else{
    console.log("you cannot drive");
  }

