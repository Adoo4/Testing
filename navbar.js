let navbar = document.querySelector(".header");
let logoname = document.querySelector("#span1");
let burgerbtn = document.querySelector("#burgermenu-label");
let btmline = document.querySelector(".hamburger-bottom-line");

window.addEventListener("scroll", function(){
 if(window.scrollY < 50) {
    navbar.style.backgroundColor = "rgba(31,33,35,0.95)";
    navbar.style.transition = "0.3s"
    logoname.style.color = "rgb(88, 194, 230)";
    navbar.style.padding = "2rem 0rem";  
    btmline.style.display = "block"
 } else {
    navbar.style.backgroundColor = "rgba(88, 194, 230, 0.905)";
    navbar.style.transition = "0.3s";
    logoname.style.color = "rgba(46, 46, 46)";
    navbar.style.padding = "1rem 0rem";
    
   
 }
})
window.addEventListener("scroll", function(){
        burgerbtn.style.color = "white";
    burgerbtn.addEventListener("click", function(){
        if(window.scrollY > 200) {
            burgerbtn.style.color = "rgba(46, 46, 46)";
        } else {
            burgerbtn.style.color = "rgba(88, 194, 230)";
        }
    })
})

