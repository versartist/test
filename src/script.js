const menuBtn = document.querySelector('.drop-menu')
const menuEl = document.querySelectorAll('.dmenu-el')
const dropDown  = document.querySelector(".fullscreen-menu").style;
const closeBtn = document.querySelector('.closeBtn');


menuBtn.addEventListener('click', ()=>{
    dropDown.display = "block";
})

closeBtn.addEventListener("click",()=>{
    dropDown.display = "none";
})
//gsap for dmenu


menuEl.forEach((el)=>{
    el.addEventListener("mouseenter", ()=>{
        const tl = gsap.timeline({ ease: 'linear' });
        tl.to(el,{ duration: .01 , y :2 , ease : "power3.out" })
    })
})
