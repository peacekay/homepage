// const bars = document.querySelectorAll(".bar");

// bars.forEach(bar => {
//     bar.addEventListener("hover", function(){
//         bar.classList.hover("active")
//     })
// })

const menu = document.querySelector(".show");
const drop =document.querySelector(".dropdown");
const close = document.querySelector(".hide");
const backdrop = document.querySelector(".backdrop");






menu.addEventListener("click", function(){
    menu.classList.toggle('disable');
    drop.classList.toggle('enable');
    backdrop.classList.toggle('visible');
  
    
})

close.addEventListener("click", function(){ 
    menu.classList.remove('disable');
    drop.classList.remove('enable');
    backdrop.classList.remove('visible');

    
})

// const toggleMenu = () => {
//     drop.classList.toggle('enable')
// }

// const toggleClose = () => {
//     drop.classList.remove('enable')
// }


// menu.addEventListener('click', toggleMenu)
// close.addEventListener('click', toggleClose)

