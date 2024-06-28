gsap.registerPlugin(ScrollTrigger);

let page = document.querySelector(".page-1");
let circle = document.querySelector(".floating-cirlce");
let text = document.querySelector(".floating-cirlce .inner-text")

page.addEventListener("mouseover", (e) => {

    gsap.to(circle, {
        scale: 1,
        width: "80px",
        height: "80px"
    });

    gsap.to(text, {
        scale: 1,
        display: "block"
    });

});


page.addEventListener("mouseout", (e) => {

    gsap.to(circle, {
        scale: 0
    });

});


page.addEventListener("mousemove", (e) => {

    gsap.to(circle, {
        y: e.clientY + -45 + "px",
        x: e.clientX + -35 + "px"
    });

});

gsap.to(".main", {

    scrollTrigger:{
        pin:true
    }
})


gsap.to(".page-2", {
    opacity: 1.5,
    duration: .6,
    // delay: .7,
    scrollTrigger: {
        trigger: ".page-2",
        markers: true,
        scrub:true,
        scroller:"body",
        start:"top bottom",
        end:"top  -200%"
    }
})

