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

/* ------------------Navigation--------------------*/
const navList = document.getElementById('navbar__list');
let nav_button = document.createElement('li');

navList.classList.add('navbar__menu');
for (let i = 1; i <= allSections.length; i++)
{
    let nav_sec = document.createElement('li');
    nav_sec.classList.add('navbar__menu');
    let nav_link = document.createElement('a');
    nav_link.classList.add('menu__link');
    nav_link.setAttribute('href','#section' + i)
    nav_link.dataset.nav = 'Section '+ i;
    nav_sec.appendChild(nav_link);
    navList.appendChild(nav_sec);
    if ( i == 1)
    {
        nav_link.textContent = 'White Tea';
    }
    else if ( i == 2)
    {
        nav_link.textContent = 'Green Tea';
    }
    else if (i == 3)
    {
        nav_link.textContent = 'Black Tea 3';
    }
    else if (i == 4)
    {
        nav_link.textContent = 'Oolong Tea';
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

const navBarElements = document.querySelectorAll('.navbar__menu');

/*------------Section Highlighting--------------*/ 
window.addEventListener('scroll', sectionHighlight)
function sectionHighlight(){
    for (let i = 0; i< allSections.length; i++) {
        const element = allSections[i];
        const topLine = element.getBoundingClientRect().top;
        const bottomLine = element.getBoundingClientRect().bottom;
        const windowHt = window.innerHeight *0.5;
        if(topLine < windowHt && bottomLine > windowHt){
            // console.log(element);
            navBarElements[i + 2].id = 'active-sec';


            element.classList.add('your-active-class');
        }
        else{
            element.classList.remove('your-active-class')
            navBarElements[i + 2].id = '';
        }
        
        
    }
}
/*---------=------All Anchors----------------*/ 
const allAnchors = document.querySelectorAll('a');


function jumpToSection (e)
{
    if (e.target.nodeName == 'A')
    {
        e.preventDefault();
        console.log(e.target);
        for (let section of allSections)
        {
            if (section.dataset.nav == e.target.dataset.nav)
            {
                section.scrollIntoView({behavior: "smooth", block: "start"});
            }
        }
    }
}
navList.addEventListener('click', jumpToSection);









