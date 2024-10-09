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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
sections.forEach(function(section){
  const eachSectionId = section.id;
  const eachSectionName = section.dataset.nav;
  const dynamicSectionList = document.createElement('li');
  const anchors = document.createElement('a');
  anchors.href = `#${eachSectionId}`;
  anchors.classList.add('menu__link');
  anchors.textContent = eachSectionName;
  anchors.addEventListener('click', function(event){
    event.preventDefault();
    section.scrollIntoView({
      behavior: 'smooth',
    });
  });
  dynamicSectionList.appendChild(anchors);
  fragment.appendChild(dynamicSectionList);
});
navBarList.appendChild(fragment);
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
window.addEventListener("scroll", () => {
  for (section of sections) {
    const sectionTopPart = section.getBoundingClientRect().y;
    const activeLink = navBarList.querySelector(`a[href= "#${section.id}"]`);
    // Set sections as active
    if (sectionTopPart >= -400 && sectionTopPart <= 150) {
      section.classList.add("your-active-class");
      activeLink.classList.add("active-link");
    } else {
      section.classList.remove("your-active-class");
      activeLink.classList.remove("active-link");
    }
  }
});