const menuBtn = document.querySelector('.drop-menu')
const menuEl = document.querySelectorAll('.dmenu-el')
const dropDown  = document.querySelector(".fullscreen-menu");
const closeBtn = document.querySelector('.closeBtn');
const main = document.querySelector('.content')


menuBtn.addEventListener('click', ()=>{
    closeBtn.style.display = "block"
    main.style.zIndex = -111;
    dropDown.style.zIndex = 111;
    dropDown.style.display = "block";
//    dropDown.style.transform =  'translateX(100%)';
   anime({
    targets: dropDown,
    opacity :['0%','100%'],
    translateX: ['100%', '0%'],
    duration: 150,
    easing: 'easeOutQuad'
});
   
})

closeBtn.addEventListener("click",()=>{
    anime({
        targets: dropDown,
        opacity :['100%','0%'],
        translateX: ['0%', '100%'],
        duration: 150,
        easing: 'easeOutQuad'
    });
    closeBtn.style.display = "none"
    setTimeout(()=>{dropDown.style.display = "none";},100)
    main.style.zIndex = 111;
    // dropDown.style.zIndex = -111;
    
})
//gsap for dmenu


menuEl.forEach((el)=>{
    el.addEventListener("mouseenter", ()=>{
        const tl = gsap.timeline({ ease: 'linear' });
        tl.to(el,{ duration: .01 , y :2 , ease : "power3.out" })
    })
})
