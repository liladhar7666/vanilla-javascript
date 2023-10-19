 const box2 = document.getElementById('box-2');
 const divs = document.getElementsByTagName('div');
 const container = document.getElementsByClassName('container');

 console.log(divs[3]);

 divs[3].classList.add();

 console.log(container[0]);

//  withot creating in html boxes ....to create in js
//  access to container
// then createElement and append that element in container

// for(let i= 0; i<10; i++){
//     const boxElement = document.createElement('div');
//     boxElement.classList.add('box');

//     container[0].append(boxElement);
// }

box2.innerHTML = "<div><h2>This is h2</h2></div>";
box2.style.borderRadius = "50%";
box2.style.backgroundColor = "brown";

console.log(box2.classList);

// box2.classList.toggle("box")
  
// document.getElementById('my-img').src="https://via.placeholder.com/100";
document.getElementById('my-img').alt="this is dummy img";


// const box3 = document.querySelector('#box-3');
document.querySelectorAll('.container div');

console.log(boxMultiples[1]);