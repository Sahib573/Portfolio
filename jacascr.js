document.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    document.getElementById("nav-id").classList.add("sticky");
  } else {
    document.getElementById("nav-id").classList.remove("sticky");
  }
});
var intro = new Typed(".typing", {
  strings: ["NSUTian", "Web Development", "Learner", "Programming"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});
var skills = new Typed(".skill-typing", {
  strings: ["C++", "C", "HTML", "CSS", "JavaScript", "React", "DJango"],
  typeSpeed: 100,
  backSpeed: 55,
  loop: true,
});
var name = new Typed(".about-type", {
  strings: ["Hello, My Friend","Have a Nice day"],
  typeSpeed: 120,
  backSpeed: 60,
  loop: true,
});
