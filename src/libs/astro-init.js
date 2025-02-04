import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1, // Increases the scroll animation duration (default is 1)
  easing: (t) => 1 - Math.pow(1 - t, 3), // Eases out the scrolling for a smoother feel
  smooth: true, // Enables smooth scrolling
  smoothTouch: false, // Disable smooth scrolling on touch devices (optional)
});

// lenis.on("scroll", (e) => {
//   console.log(e);
// });

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
