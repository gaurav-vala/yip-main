import Lenis from "lenis";

const lenis = new Lenis({
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
