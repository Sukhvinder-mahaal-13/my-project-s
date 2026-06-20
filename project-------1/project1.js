const scroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});

function firstPageAnim() {


var tl = gsap.timeline();

tl.from("#nav", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: "expo.inOut"
});

tl.to(".boundingelem", {
    y: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "expo.inOut"
});

tl.from("#herofooter", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: "expo.inOut"
});


}let timeout;

function circleChapta() {

    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function(dets){

        clearTimeout(timeout);

        let xdiff = dets.clientX - xprev;
        let ydiff = dets.clientY - yprev;

        xprev = dets.clientX;
        yprev = dets.clientY;

        xscale = gsap.utils.clamp(.9, 1.9, 1 + xdiff / 100);
        yscale = gsap.utils.clamp(.9, 1.9, 1 + ydiff / 100);

        gsap.to("#minicircle",{
            x: dets.clientX,
            y: dets.clientY,
            scaleX: xscale,
            scaleY: yscale,
            duration: 0.2
        });

        timeout = setTimeout(function(){

            gsap.to("#minicircle",{
                scaleX: 1,
                scaleY: 1,
                duration: 0.3
            });

        },100);

    });

}

circleChapta();
firstPageAnim();document.querySelectorAll(".elem").forEach(function(elem){

    let rotate = 0;
    let diffrot = 0;

    elem.addEventListener("mousemove", function(dets){

        let diff = dets.clientY - elem.getBoundingClientRect().top;

        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"),{

            opacity: 1,
            ease: "power1.out",

            top: diff,

            left: dets.clientX - elem.getBoundingClientRect().left,

            rotate: gsap.utils.clamp(-20,20,diffrot),

            duration: 0.2

        });

    });

    elem.addEventListener("mouseleave", function(){

        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            rotate: 0,
            duration: 0.3
        });

    });

});