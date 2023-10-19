// let a = [10, 4, 23, 'hi']

// // let a = ["pintu","chintu","raju"]

// console.log(typeof a);
 
//   a = 12;
//   console.log(typeof a); //number

  // a.sort()

  const words = ["nilesh",'manav',"amit","sumit"];

  // words.splice(2,0, "shivam") //delete from which index -- till.
  // console.log(words);

  // for(let i = 0; i < words.length; i++){
  //      console.log("hello",words[i]);
  // }

    for(let i in words){
      console.log("hello",words[i]);
    }

  // const isPresent = words.includes("anuj"); //check iclude or not
 
  // console.log(isPresent);

  // const index = words.indexOf("manav"); //indexOf to show the index of element
  // console.log(index);

  // words.sort()
  // console.log(words);

  // const word = new Array(4,5,6,7,'jiii',3)

  // word[7] = "hariom"

  // word.push('kumar')  //insert in last

  // word[0] = "anjali"

  // word.pop();  //delete last element in array --kumar

  // console.log(word);
  // console.log(word.length);

  // console.log(word[7]);


  // comperator function
// used for number sorting as a numbers like 1234 because in js sort work alphabet

  let a = [10, 4, 23]

  const myFunction = (element, index) => {
    console.log('printing',element,'index is',index);
  }

  a.forEach(myFunction)

//   a.sort((p, q) =>{
// if(p > q) return 100;///as two - two number sort then finalize the answer
// if(p < q) return -100;
// return 0;
//  return p-q;
//   })
// console.log(a);
