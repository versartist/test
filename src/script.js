const menuBtn = document.querySelector('.drop-menu')
const menuEl = document.querySelectorAll('.dmenu-el')
const dropDown  = document.querySelector(".fullscreen-menu");
const closeBtn = document.querySelector('.closeBtn');
const main = document.querySelector('.content')
const title = document.querySelector('.title');
const typed = document.querySelector('#typed');
const homebtn = document.querySelector("#home");
const spaBtn = document.querySelectorAll('.spa-btn');


//reapeated functions

function closeMenu (){
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
}


//reapeated functions

menuBtn.addEventListener('click', ()=>{
    closeBtn.style.display = "block"
    main.style.zIndex = -111;
    dropDown.style.zIndex = 111;
    dropDown.style.display = "block";
   anime({
    targets: dropDown,
    opacity :['0%','100%'],
    translateX: ['100%', '0%'],
    duration: 150,
    easing: 'easeOutQuad'
});
   
})

closeBtn.addEventListener("click",closeMenu)

//typed 
const strings = [
    " Frontend Developer",
    " Backend Developer",
    // Add more strings as needed
  ];

  
    const Type = new Typed(typed,{
		strings: strings,
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
  
  
//typed 
//gsap for dmenu

menuEl.forEach((el)=>{
    el.addEventListener("mouseover", ()=>{

        anime({
            targets: el,
            rotate: ['-5deg', '5deg', '-5deg', '0deg'],
            keyframes: [
                { translateX: [5 , -5] },
                { translateY: [4 , -2] },
                { skewX: [4 , -2] },
               
            ],
            translateX:0,
            translateY:0,
            duration: 400,
            easing: 'linear'
        });
    })

    el.addEventListener("mouseout", ()=>{
        anime({
            targets: el,
            translateX:0,
            translateY:0,
            duration: 100,
            easing: 'linear'
        })
    })
})

//animation for the logo text
title.addEventListener("mouseover", ()=>{
    let first = document.getElementsByClassName("first")
    let second = document.getElementsByClassName("second")

    anime({
        targets: first,
        translateX:"-76px",
        duration: 100,
        easing: 'linear'
    })
    anime({
        targets: second,
        translateX:"-157px",
        duration: 200,
        easing: 'easeOutCirc',
        delay:0
    })
    anime({
        targets: title,
        maxWidth: '155px',
        duration: 100,
        easing: 'easeOutCirc',
        delay:0
    })

});
title.addEventListener("mouseout", ()=>{
    let first = document.getElementsByClassName("first")
    let second = document.getElementsByClassName("second")
    anime({
        targets: title,
        maxWidth: '90px',
        duration: 100,
        easing: 'easeOutCirc',
    })
    anime({
        targets: first,
        translateX:0,
        duration: 100,
        easing: 'linear'
    })

    anime({
        targets: second,
        translateX:0,
        duration: 200,
        easing: 'easeOutCirc'
    })
});




//spa 


//spa 
