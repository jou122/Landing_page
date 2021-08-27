let navBar = document.getElementById('navbar__list');
let sections =[...document.getElementsByTagName('section')];
let sectionNumbers=sections.length;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//function to create the navigation bar
function createNavBar(){
  for(const [i,section] of sections.entries()){
    
    let sectionListItem = document.createElement('li');
    let sectionlink = document.createElement('a');
    sectionlink.className = 'menu__link'
    sectionlink.href="#"+section.getAttribute('id') ;
    sectionlink.innerText="Section "+ (i+1);
    sectionListItem.appendChild(sectionlink);
    navBar.appendChild(sectionListItem);
    
  }

}
function activeClass(){
  for(const section of sections){
    let sectionCoordinate=section.getBoundingClientRect();
    if (
	sectionCoordinate.top >= -1) {
        section.classList.add("your-active-class");
      }
    else{section.classList.remove("your-active-class");}
  }
}


//function to hide Navbar
function hideNavbar(){
  document.getElementById("navbar").style.top = "-70px";
}


//function to detect if user not scrolling
function sleep(){
   document.getElementById("navbar").style.top = "0px";
var myVar;
 myVar = setTimeout(hideNavbar, 4000);
}


document.addEventListener('scroll',activeClass);
document.addEventListener('scroll',sleep);
createNavBar();
