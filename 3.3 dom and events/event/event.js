const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

child.addEventListener('click', () => {
      console.log('child clicked');
})

parent.addEventListener('click', () => {
    console.log('parent clicked');
})

grandparent.addEventListener('click', () =>{
    console.log('grandparent clicked');
})

//function creation
// function logMessage(){
//     console.log('hii this is a log');

// }

// const myVariables = () => {
//     console.log('those baba');
// }

// myVariables();

const coordinate = document.createElement('p');
document.body.append(coordinate);

const logMessage = (event) => {
        console.log(event);
        coordinates.innerHTML = `${event.offsetX} ${event.offsetY}`;
        box.style.left = `${event.offsetX}px`;
        box.style.top = `${event.offsetY}px`;
    }

    const onPageScroll = (event) => {
            console.log(event);
 }

        document.addEventListener('scroll', onPageScroll)

container.addEventListener('mousemove', logMessage)