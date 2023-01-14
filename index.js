let bow = new Audio("wolfsound.wav")
let ulu = new Audio("onload.mp3")
let eagle = new Audio("eagle-0.mp3")


elem = document.querySelector('.hum-b');
bruh = document.querySelector('.burgir');
elem2 = document.querySelector('.logo1');
elem4 = document.querySelector(".contactmain2");

elem5 = document.querySelector('.mainimage');
elem6 = document.querySelector(".contactmain3");




console.log(elem);
elem.addEventListener('click',()=>{
    bruh.classList.toggle('tarun');
})
// elem8.addEventListener('click',()=>{
//     scroll.play();
// })
elem2.addEventListener('click', ()=>{
    ulu.play();
})

console.log(elem5)


//     eagle.play();
