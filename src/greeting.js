const textHolder = document.querySelector('.text');
const stripes = document.querySelectorAll(".stripes");
const preloader = document.querySelector('.preloader');
const hero = document.querySelector('.hero');
const content = document.querySelector('.content').style;
const nav = document.querySelector('.nav').style;

const greetings = [
    "Hello" /* English */,
    "Hola" /* Spanish */,
    "Bonjour" /* French */,
    "Hallo" /* German */,
    "Ciao" /* Italian */,
    "Olá" /* Portuguese */,
    "你好" /* Mandarin Chinese (Nǐ hǎo) */,
    "안녕하" /* Korean (Anyeonghaseyo) */,
    "مرحبا" /* Arabic (Marhaba) */,
    "नमस्ते" /* Hindi (Namaste) */,
    "Cześć" /* Polish */,
    "Merhaba" /* Turkish */,
    "Hallo" /* Dutch */,
    "Hej" /* Swedish */,
    "Hei" /* Norwegian */,
    "Hola", "Welcome"
  ];



  function adjustItemNumber() {
        const isLaptop = window.innerWidth >= 768; // Adjust breakpoint as needed (laptop size)
        const numItemsToShow = isLaptop ? 10 : 6;
        stripes.forEach((item, index) => {
          item.style.display = index < numItemsToShow ? 'block' : 'none';
        });
      }
  

  function displayAndAnimate() {
    content.display = "none";
    hero.style.display = "none"
    content.zIndex = -1;
    preloader.style.zIndex = 20;
    
    adjustItemNumber(); // Adjust number of items to show based on screen size
// 
    const tl = gsap.timeline({ ease: 'power3.out' }); // Use power3.out for easing (optional)
  
    greetings.forEach((greeting, index, greetingsArray) => {
      if (index == greetingsArray.length -1  ) { 
        tl.to(textHolder,{ duration: .5 , innerHTML: `<h2 class="greeting">${greeting}</h2>`})
        .to(textHolder,{ duration: .4 , y :80 , ease : "power3.out" })
        .to(textHolder,{ duration: .4 , y : '-100vh' , ease : "power3.out" })
        
        .to(textHolder, {duration : .1 , opacity : 0} ); 
        content.display = "block";
        tl.to(stripes,{ duration : .7 , scaleX: 0,rotateX : 5,x : 15, ease:"expo.easeInOut",stagger: 0.06 });
        tl.to(preloader,{duration : .1 , display : "none"})
        content.zIndex = 1;
        nav.zIndex = 1;
      } else {
        tl.to(textHolder, { duration: .15, innerHTML: `<h2 class="greeting">${greeting}</h2>` }); // Update greeting text
        if(hero.style.display == "none") {
          hero.style.display = "flex";
        }
      }
    });
  }