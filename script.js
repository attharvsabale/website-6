




// cursor

//  var main = document.querySelector("#main")
//  var cursor = document.querySelector(".cursor")

//  main.addEventListener("mousemove",function(dets){
//       cursor.style.left = dets.x+"px"
//       cursor.style.top = dets.y+"px"
//  })



//locomotive

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });



//About - img

// var elem1 = document.querySelector("#elements")
// var elemImg = document.querySelector("#elements .second-img")

// elem1.addEventListener("mousemove",function(dets){
//     elemImg.style.left = dets.x+"px"
//     elemImg.style.top = dets.y+"px"
// })

// elem1.addEventListener("mouseenter",function(dets){
//     elemImg.style.opacity = 1
// })

// elem1.addEventListener("mouseleave",function(dets){
//     elemImg.style.opacity = 0
// })




// feature products

ScrollTrigger.create({
	trigger:".gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right"
})





//////////////////////////////////////////////////////////////////////////////////////// scroll container 1st 

function lerp(start, end, t){
    return start * ( 1 - t ) + end * t;
}

const video = document.querySelector('video');
const videoSection = document.querySelector('#video')


window.addEventListener('scroll', () => {
    animetvideo();
});


const headerLeft = document.querySelector('.text__header__left');
const headerRight = document.querySelector('.text__header__right');


function animetvideo(){
    let {bottom} = videoSection.getBoundingClientRect();
    let scale = 1 - ((bottom - window.innerHeight) * .0005)
    scale = scale < .2 ? .2 : scale > 1 ? 1: scale;
    video.style.transform = `scale(${scale})`;

    //text transformation
    let textTrans = bottom - window.innerHeight;
    textTrans = textTrans < 0 ? 0 : textTrans;
    headerLeft.style.transform = `translateX(${-textTrans}px)`;
    headerRight.style.transform = `translateX(${textTrans}px)`;
}


///////////////////////////////////////////////////////////////////////////////////// scroll container 2nd

// const stickySections = [...document.querySelectorAll('.Sticky')];
// let images = [
//     'img/project2.jpg',
//     'img/project3.jpg',
//     'img/project1.jpg',
//     'img/project4.jpg'
// ]

// images.forEach(img => {
//     stickySections.forEach(section => {
//         let image = document.createElement('img');
//         image.src = img;
//         section.querySelector('.scroll_section').appendChild(image);
//     })
// })

// window.addEventListener('scroll', (e) => {
//     for (let i = 0; i < stickySections.length; i++) {
//         transform(stickySections[i]);
//     }
// })

// function transform(section) {
//     const offsetTop = section.parentElement.offsetTop;
//     const scrollSection = section.querySelector('.scroll_section');
//     let percentage = ((window.screenY - offsetTop) / window.innerHeight) * 100;
//     scrollSection.style.transform = `translate3d(${-(percentage)}vh, 0,0)`
// }



/////slideing animation projects slides//////////////////////////////////////////////////////////////

gsap.registerPlugin(ScrollTrigger);

gsap.to(".slides", {
    xPercent: -210,
    ease: "power4",
    scrollTrigger: {
        trigger: ".project",
        start: "top top",
        end: "bottom bottom",
        // markers: true, // For debugging, shows trigger area
        scrub: 4, // Smoothly animates the element as you scroll
        duration: 1, // Duration of the animation (in seconds)
        pin: true 
    }
});


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".reviews",
        start:"top 90%",
        end:"bottom top",
        scrub:1,
    }
});


tl.fromTo(".rr",{y:'350%'},{y:'-140%'},0);
tl.fromTo(".rl",{y:'300%'},{y:'-60%'},0);

gsap.fromTo(".rtitle",{x:'300'},{x:'-520',scrollTrigger:{
    trigger:".rtitle",
    start:"top center",
    end:"bottom center",
    endTrigger:".reviews",
    // pin:true,
    scrub:1,
}},0);




// cursore 

const cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
        '-pointer': 'a,button',
        '-hidden': 'iframe'
    },
    visible: true,
    visibleOnState: false,
    speed: 0.55,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 2,
    skewingIcon: 2,
    skewingMedia: 2,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    stickDelta: 0.15,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300
});



// pre-loder

document.addEventListener("DOMContentLoaded", function(){
    const counter3 = document.querySelector(".counter-3");
    for(let i = 0; i < 2; i++){ // Corrected comma to semicolon here
        for(let j = 0; j < 10; j++){
            const div = document.createElement("div");
            div.className = "num";
            div.textContent = j;
            counter3.appendChild(div);
        }
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter3.appendChild(finalDiv);


    function animate(counter, duration, delay = 0){
        const numHeight = counter.querySelector(".num").clientHeight;

        const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight; // corrected selector

        gsap.to(counter,{
           y: -totalDistance,
           duration: duration,
           delay: delay,
           ease: "power2.inOut",
        });
    }
    animate(counter3, 5);
    animate(document.querySelector(".counter-2"), 6);
    animate(document.querySelector(".counter-1"), 2, 4);
});


gsap.to(".digit", {
    top: "-150px",
    stagger: {
        amount: 0.25,
    },
    delay: 6,
    duration: 1,
    ease: "power4.inOut"
});

gsap.from(".loader-1", {
    width: 0,
    duration: 6, // Corrected typo here
    ease: "power2.inOut",
});

gsap.from(".loader-2", {
    width: 0,
    delay: 1.9,
    duration: 2, // Corrected typo here
    ease: "power2.inOut",
});

gsap.to(".loader", {
    background: "none",
    delay: 6,
    duration: 0.1,
});

gsap.to(".loader-1", {
    rotate: 90,
    y: -50,
    duration: 0.5,
    delay: 6,
});

gsap.to(".loader-2", {
    x: -75,
    y: 75,
    duration: 0.5,
}, "<");

gsap.to(
    ".loader",
    {
        scale: 40,
        duration: 1, // Corrected typo here
        delay: 7,
        ease: "power2.inOut"
    }
);

gsap.to(
    ".loader",
    {
        rotate: 45,
        y: 500,
        x: 2000,
        duration: 1, // Corrected typo here
        delay: 7,
        ease: "power2.inOut"
    }
);

gsap.to(".loading-screen", {
    opacity: 0,
    duration: 0.5, // Corrected typo here
    delay: 7.5,
    ease: "power1.inOut",
});



//      menu  section


// setup

// import CSSRulePlugin from "gsap/CSSRulePlugin";

 
//  const t1 = gsap.timeline({paused:true});
//  let path = document.querySelector("path");
//  let spanBefore = CSSRulePlugin.getRule("#hamburger span:before");

//  gsap.set(spanBefore,{ background:"#000"});
//  gsap.set(".menu",{visibility:"hidden"});


//  //toggle menu 

//  function revealMenu(){

//     revealMenu();

//     const hamburger = document.getElementById("hamburger");
//     const toggleBtn = document.getElementById("toggle-btn");

//     toggleBtn.onclick = function (e){
//         hamburger.classList.toggle("active");
//         tl.reversed(!t1.reversed());
//     }
//  }

//  revealMenu();


//  function revealMenuItems(){
//     const start = "M0 502s175 272 500 272s500 230 500 230v0h0z";
//     const end = "M0,1005s175,995,500,995s500,5,500,5v0h0z";

//     const power2 = "power2.inout";
//     const power4 = "power4.inout";


//     tl.to("hamburger",1.25,{
//         marginTop:"-5px",
//         x:-40,
//         y:40,
//         ease:power4,
//     });

//     tl.to("hamburger span", 1,{
//         background:"#e2e2dc",
//         ease:power2,
        
//     },
// "<");

// tl.to(spanBefore, 1,{
//     background:"#e2e2dc",
//     ease:power2,
    
// },
// "<");

// tl.to(
//     ".btn .btn-outline",
//     1.25,
//     {
//         x:-40,
//         y:40,
//         width:"140px",
//         height:"140px",
//         border:"1px solid #e2e2dc",
//         ease:power4,
//     },
//     "<"
// );

// tl.to(path, 0.8,{
//     attr:{
//         d:start,
//     },
//     ease:power2.easeIn,
// },"<").to(path,0.8,{
//     attr:{
//         d:end
//     },
//     ease:power2.easeIn,
// },
// "-0.5"
// );

//  tl.to(
//     ".menu",
//     1,
//     {
//         visibility:"visible",
//     },
//     "-=0.5"
// );
  
// tl.to(".menu-item > a", 1,{
//     top:0,
//     ease:"power3.out",
//     stagger:{
//         amount:0.5
//     }
// },"-=1").reverse();
//     }








//   menu-2 section
// gsap.registerPlugin(CSSRulePlugin);
// document.addEventListener("DOMContentLoaded", function() {
//     let activeItemIndicatore = CSSRulePlugin.getRule(".menu-item p#active::after");
//     const toggleButton = document.querySelector(".burger");
//     let isOpen = false;

//     gsap.set(".menu-item p", { y: 225 });

//     const timeline = gsap.timeline({ paused: true });

//     timeline.to(".overlay", {
//         duration: 1.5,
//         clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)", // Corrected typo in clipPath
//         ease: "power4.inout"
//     });

//     timeline.to(".menu-item p", {
//         duration: 1.5,
//         y: 0,
//         stagger: 0.2,
//         ease: "power4.out"
//     }, "-=1");

//     timeline.to(activeItemIndicatore, {
//         width: "100%",
//         duration: 1,
//         ease: "power4.out",
//         delay: 0.5
//     }, "<");

//     timeline.to(".sub-nav", { // Added dot before sub-nav to select by class
//         bottom: "10%",
//         opacity: 1, // Corrected typo in opacity
//         duration: 0.5,
//         delay: 0.5
//     }, "<");

//     toggleButton.addEventListener("click", function() {
//         if (isOpen) {
//             timeline.reverse();
//         } else {
//             timeline.play();
//         }
//         isOpen = !isOpen;
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
    const toggleButton = document.querySelector(".burger");
    let isOpen = false;

    // Set initial states
    gsap.set(".overlay", { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" });
    gsap.set(".menu-item p", { y: -225 });

    const timeline = gsap.timeline({ paused: true });

    timeline.to(".overlay", {
        duration: 1.5,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power4.inout"
    });

    timeline.to(".menu-item p", {
        duration: 1.5,
        y: 0,
        stagger: 0.2,
        ease: "power4.out"
    }, "-=1");

    timeline.to(activeItemIndicator, {
        width: "100%",
        duration: 1,
        ease: "power4.out",
        delay: 0.5
    }, "<");

    timeline.to(".sub-nav", {
        bottom: "7%",
        opacity: 1,
        duration: 0.5,
        delay: 0.5
    }, "<");

    toggleButton.addEventListener("click", function() {
        if (isOpen) {
            timeline.reverse();
        } else {
            timeline.play();
        }
        isOpen = !isOpen;
    });
});
