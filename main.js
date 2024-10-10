import './assets/scss/all.scss';

console.log("Hello world!");
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".gScroll");

gsap.to(sections, {
scrollTrigger: {
    trigger: '.content',
    markers: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    pin: true,
  }
});