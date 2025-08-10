gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    const cards = [
        
        { id: "#card-1", endTranslateX: -2000, rotate: 45 },
        { id: "#card-2", endTranslateX: -1000, rotate: -30 },
        { id: "#card-3", endTranslateX: -2000, rotate: 45 },
        { id: "#card-4", endTranslateX: -1500, rotate: -35 },
    ];

    // Ensure the elements are present
    cards.forEach(card => {
        if (!document.querySelector(card.id)) {
            console.error(`Element ${card.id} not found`);
        }
    });

    // Pin and scroll the .wrapper-404 only once
    ScrollTrigger.create({
        trigger: ".wrapper-404",
        start: "top top",
        end: "+=1000vh",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
            gsap.to(".wrapper-404", {
                x: `${-550 * self.progress}vw`,
                duration: 0.5,
                ease: "power3.out",
            });
        }
    });

    // Ensure no double initialization
    let scrollTriggerInstances = [];

    // Set up ScrollTrigger for each card
    cards.forEach((card) => {
        // console.log(`Setting up ScrollTrigger for ${card.id}`);
        const instance = ScrollTrigger.create({
            trigger: card.id,
            start: "top 60%", // Adjust the start point to ensure it's triggered
            end: "bottom top", // Adjust the end point to ensure it's triggered
            scrub: 1,
            onUpdate: (self) => {
                gsap.to(card.id, {
                    x: `${card.endTranslateX * self.progress}px`,
                    rotate: `${card.rotate * self.progress * 2}`,
                    duration: 0.5,
                    ease: "power3.out",
                });
                // console.log(`Animating ${card.id}: x=${card.endTranslateX * self.progress}px, rotate=${card.rotate * self.progress * 2}`);
            }
        });
        scrollTriggerInstances.push(instance);
    });

    // Log ScrollTrigger instances for debugging
    // console.log("ScrollTrigger Instances: ", scrollTriggerInstances);
});




// gsap.registerPlugin(ScrollTrigger);

// // Select the smooth-scroll element correctly
// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".smooth-scroll"),
//     smooth: true,
//     lerp: 0.08
// });

// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".smooth-scroll", {
//     scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//         return {
//             top: 0,
//             left: 0,
//             width: window.innerWidth,
//             height: window.innerHeight,
//         };
//     },
// });

// const vw = (coef) => window.innerWidth * (coef / 100);
// const vh = (coef) => window.innerHeight * (coef / 100);

// const heroScroller = gsap.timeline({
//     paused: true,
//     scrollTrigger: {
//         trigger: ".hero-header.h-1",
//         scroller: ".smooth-scroll",
//         pin: ".pin-wrapper",
//         start: "top 10%",
//         scrub: true,
//         end: `${vh(100)}`
//     },
// });

// heroScroller.to(
//     [".hero-header.h-1", ".hero-header.h-2", ".hero-header.h-3"], // Corrected selectors
//     {
//         scale: 2,
//         y: vh(150),
//         xPercent: -150,
//     },
//     "heroScroll"
// ).to(".hero-header.h-2", {
//     scale: 2,
//     y: vh(150),
//     xPercent: 150
// }, "heroScroll").to(
//     "#heroImages",
//     {
//         scaleY: 2.5,
//     },
//     "heroScroll"
// ).to(
//     "#heroImages .image",
//     {
//         scaleX: 2.5,
//         xPercent: 50,
//     },
//     "heroScroll"
// );

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();




//hiddeing scrollbars

window.addEventListener("DOMContentLoaded", function() {
    // Calculate scrollbar width
    var scrollDiv = document.createElement("div");
    scrollDiv.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);

    // Add custom scrollbar style
    var style = document.createElement("style");
    style.textContent = `
        ::-webkit-scrollbar {
            width: ${scrollbarWidth}px; /* Width of the scrollbar */
        }
    `;
    document.head.appendChild(style);
});
