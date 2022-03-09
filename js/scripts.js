const navbar = document.querySelector(".navbar");
const homebg = document.querySelector(".home__background");
const menu = document.querySelector(".navbar__menu");
const links = document.querySelector(".navbar__links");
const sections = document.querySelectorAll("section");
const config = {
  rootMargin: "0px",
  threshold: [0.6, 0.9],
};

function handleLlinks() {
  if (window.innerWidth <= 991) {
    links.classList.toggle("visible");
  }
}

menu.addEventListener("click", handleLlinks);
links.addEventListener("click", handleLlinks);

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
  window.scrollY < 100 && (navbar.style.background = `transparent`);
});

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    }
  });
}, config);

sections.forEach((section) => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector(".navbar__links  .active");
  const shouldBeActive = document.querySelector(
    ".navbar__links [data-ref=" + id + "]"
  );

  if (currentlyActive) {
    currentlyActive.classList.remove("active");
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add("active");
  }
}

// window.addEventListener("mousemove", parallax);

// function parallax(e) {
//   elements.forEach((item) => {
//     const speed = item.getAttribute("data-speed");
//     console.log(speed);
//     const x = (window.innerWidth - e.pageX * speed) / 100;
//     const y = (window.innerHeight - e.pageY * speed) / 100;
//     item.style.transform = `translateX(${x}px) translateY(${y}px)`;
//   });
// }

ScrollReveal().reveal(".navbar", { delay: 250 });
ScrollReveal().reveal(".home__profile", { delay: 350 });
ScrollReveal().reveal(".home__title--primary", { delay: 350 });
ScrollReveal().reveal(".home__title", { delay: 450 });
ScrollReveal().reveal(".home__title--secondary", { delay: 550 });
ScrollReveal().reveal(".section__title", { delay: 250 });
ScrollReveal().reveal(".section__subtitle", { delay: 350 });
ScrollReveal().reveal(".about__description", { delay: 350 });
ScrollReveal().reveal(".about__summary", { delay: 450 });
ScrollReveal().reveal(".button--cta", { delay: 550 });
ScrollReveal().reveal(".skill__title", { delay: 450 });
ScrollReveal().reveal(".skill__item", { delay: 450 });
ScrollReveal().reveal(".services__item", { delay: 450 });
ScrollReveal().reveal(".portfolio__item", { delay: 450 });
ScrollReveal().reveal(".contact__item", { delay: 450 });
ScrollReveal().reveal(".footer", { delay: 450 });


const Texts = [
  'BOOTSTRAP', 'TAG CLOUD','HTML', 'JAVASCRIPT', 'BEM', 'SEO', 'DISEÑO', 'RESPONSIVE', 'CSS', 'OPTIMIZACION', 'RENDIMIENTO', 'SASS'
]

var tagCloud = TagCloud('.Sphere', Texts, {
 radius: 140,
 maxSpeed: 'fast',
 initSpeed: 'fast',
 direction: 240,
 keep: true,
 useContainerInlineStyles: true
});

var color = '#08fdd8'
document.querySelector('.Sphere').style.color = color;
// document.querySelector('.Sphere').style.background = 'rgba(128, 128, 128, 0.18)';



function btn(){
  var bg = document.getElementById("playPause");
  var x=document.getElementById("aud");
  var btnMusica=document.getElementById("btnMusica");
  if(x.paused /* && (musica.style.display="block") */){
    x.play()
    bg.style.color="red";
    bg.style.textShadow="3px 5px 3px rgb(206 89 55 / 0%), 4px 5px 3px #FF0000";
    btnMusica.style.textShadow="3px 5px 3px rgb(206 89 55 / 0%), 4px 5px 3px #08fdd8";
  }
  else{
    x.pause()
    /* x.currentTime = 0 */
    bg.style.color="aqua";
    btnMusica.style.textShadow="none";
    bg.style.textShadow="none";
  }
}