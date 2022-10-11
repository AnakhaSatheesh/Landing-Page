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
/*------------------All Sections-----------------*/ 
const allSections = document.querySelectorAll('section');

const navList=document.getElementById('navbar__list');
let nav_but =document.createElement('li');


// Add class 'active' to section when near top of viewport

/* ------------------Navigation--------------------*/
navList.classList.add('navbar__menu');
for (let i = 1; i <= sections.length; i++)
{
    let nav_sec = document.createElement('li');
    nav_sec.classList.add('navbar__menu');
    let nav_link = document.createElement('a');
    nav_link.classList.add('menu__link')
    nav_link.setAttribute('href', '#section' + i);
    nav_link.dataset.nav = 'Section ' + i;
    nav_sec.appendChild(nav_link);
    navBarList.appendChild(nav_sec);
    if ( i == 1)
    {
        nav_link.textContent = '1';
    }
    else if ( i == 2)
    {
        nav_link.textContent = '2';
    }
    else if (i == 3)
    {
        nav_link.textContent = '3';
    }
    else if (i == 4)
    {
        nav_link.textContent = '4';
    }
    else{
        nav_link.textContent = 'Section' + i;
    }
}
/*------------------form------------------*/ 
const felements = document.querySelector('#formElements');
felements.addEventListener('submit', function(event){
    event.preventDefault();
    confirm('Form Submitted Successfully');
});





// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


