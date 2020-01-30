

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


let sections = document.querySelectorAll('section')
const navbar = document.getElementById('navbar__list');
const landingSection = document.querySelectorAll('landing__container');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavbar() {

    for(let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const liList = document.createElement('li');
        let sectionLink = document.createElement('A');

        liList.setAttribute('id', section.dataset.nav)
        sectionLink.setAttribute('href', `#${sections[i].id}`);
        sectionLink.textContent = `${sections[i].id}`;
        sectionLink.classList.add('menu__link');

        liList.classList.add('links');

        liList.appendChild(sectionLink);
        navbar.appendChild(liList);
    }
      
}
createNavbar();



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
let anchorLinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorLinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

const links = document.querySelectorAll('.links');
// const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
    links.forEach((link) => link.classList.remove('active'));
 
  links[index].classList.add('active');
}

changeLinkState();

window.addEventListener('scroll', changeLinkState);
