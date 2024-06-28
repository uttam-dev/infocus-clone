let tl=gsap.timeline();

tl.from(".nav",{
    y:-20,
    delay:.6,
    opacity:0,
    duration:.7,  
})

tl.from(".main-content h1 , .main-content p",{
    x:-40,
    opacity:0,
    duration:.7,  
})


// locomotive js***********************************************************

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main-web-part'),
    smooth: true
});

// ifream scroll fix

// const anchorLinks = document.querySelectorAll('ifream');

// anchorLinks.forEach((anchorLink) => {
//   let hashval = anchorLink.getAttribute('href');
//   let target = document.querySelector(hashval);

//   anchorLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     locomotiveScroll.scrollTo(target);
//   });
// });







