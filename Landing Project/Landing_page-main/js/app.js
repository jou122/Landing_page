 let navBar = document.getElementById('navbar');
 navBar.className="navbar__menu"
 let navbarUl=document.getElementById('navbar__list');
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
    let sectionlink = document.createElement('div');
    sectionlink.className = 'menu__link'
    sectionlink.id="B"+section.getAttribute('id') ;
    sectionlink.innerText="Section "+ (i+1);
    sectionListItem.appendChild(sectionlink);
    navbarUl.appendChild(sectionListItem);
  }
  navBar.appendChild(navbarUl);

}
function activeClass(){
  for(const section of sections){
    let sectionCoordinate=section.getBoundingClientRect();
    let activeButton=document.getElementById("B"+section.getAttribute('id'));
    if ((
      sectionCoordinate.top >= 0 &&
      sectionCoordinate.left >= 0 &&
      sectionCoordinate.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      sectionCoordinate.right <= (window.innerWidth || document.documentElement.clientWidth)
      )||
      (
        sectionCoordinate.top <= 0 &&
        sectionCoordinate.left >= 0 &&
        sectionCoordinate.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        sectionCoordinate.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    )

    {
        section.classList.add("your-active-class");
        activeButton.classList.add("menu__link_active");

      }
    else{
      activeButton.classList.remove("menu__link_active");
      section.classList.remove("your-active-class");
  }
  }
}


//function to hide Navbar
function hideNavbar(){
  document.getElementById("navbar").style.top = ("-"+document.getElementById("navbar").clientHeight);
}


//function to detect if user not scrolling
function sleep(){
  window.clearTimeout( );
   document.getElementById("navbar").style.top = "-5px";
let myVar;
 myVar = setTimeout(hideNavbar, 4000);
}


function scrollTo(){

  let elmnt = document.getElementById(this.id.replace("B",""));
  elmnt.scrollIntoView({block: "center", inline: "center",behavior: "smooth"});
}

createNavBar();
document.addEventListener('scroll',() => {    
  sleep();
  activeClass();    
});

for(let i =1 ;i<=sectionNumbers;i++){
  let buttonView=document.getElementById("Bsection"+i)
  buttonView.addEventListener("click", scrollTo);
}


