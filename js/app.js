/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

let sections = document.querySelectorAll("section");
const navbar = document.getElementById("navbar__list");

// Create Dynamic navbar menu and add class to menu link to anchor tag.
function createNavbar() {
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const liList = document.createElement("li");
    let sectionLink = document.createElement("A");

    liList.setAttribute("id", section.dataset.nav);
    sectionLink.setAttribute("href", `#${sections[i].id}`);
    sectionLink.textContent = `${sections[i].id}`;
    sectionLink.classList.add("menu__link");

    liList.classList.add("links");

    liList.appendChild(sectionLink);
    navbar.appendChild(liList);
  }
}
createNavbar();

// Add class 'active' to the section when near top of viewport
let landingSection = document.querySelector("div");
let bounding = landingSection.getBoundingClientRect();

let isInViewport = function(elem) {
  let bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.addEventListener("scroll", function(event) {
    if (isInViewport(landingSection)) {
      landingSection.classList.add("active_class");
    }
  }, false);

// Scroll to anchor ID using scrollTO event
let anchorLinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorLinks) {
  // relitere
  item.addEventListener("click", e => {
    let hashval = item.getAttribute("href");
    let target = document.querySelector(hashval);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    history.pushState(null, null, hashval);
    e.preventDefault();
  });
}

// Set sections as active while scrolling

//Found this solution from https://stackoverflow.com/questions/52025615/vanilla-js-change-active-state-of-links-when-scrolling-refactoring

const links = document.querySelectorAll(".links");

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  links.forEach(link => link.classList.remove("active"));

  links[index].classList.add("active");
}

changeLinkState();

window.addEventListener("scroll", changeLinkState);
