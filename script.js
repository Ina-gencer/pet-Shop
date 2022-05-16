gsap.from('.navigation', {
    opacity:0,
    duration:2,
    delay: .5,
})
gsap.from('.next', {
    opacity:0,
    duration:2,
    delay: .5,
    stagger: 1
})
gsap.from('h1', {
    opacity:0,
    duration:2,
    delay: .5,
   x:200
})

gsap.from('h3', {
    opacity:0,
    duration:1.6,
    delay: .5,
   x:-200,
   stagger: 0.7
})
gsap.from('#button', {
    opacity:0,
    duration:2,
    delay: .8,
   rotation:360
})
gsap.from('.sosial', {
    opacity:0,
    duration:3,
    delay: 1.5,
   y: -100,
   ease:"bounce.out",
   stagger:1
})
gsap.from('.cart', {
    opacity:0,
    duration:4,
    delay: 0.4,
   x: -100,
   ease:"bounce.out",
   stagger: 0.5
})
gsap.from('.map-picture', {
    opacity:0,
    duration:5,
    delay: 0.4,
    x: 400
})
gsap.from('p', {
    opacity:0,
    duration:2,
    delay: 1.5,
   x: -100,
   stagger: 0.8
})
gsap.from('h2', {
    opacity:0,
    duration:2.2,
    delay: 2,
   x: -200,
})
gsap.from('.msj', {
    opacity:0,
    duration:2,
    delay: 2.2,
   x: -200,
   stagger: 0.8
})
gsap.from('.send', {
    opacity:0,
    duration: 2.4,
    delay: 2.5,
    y: 100

})
