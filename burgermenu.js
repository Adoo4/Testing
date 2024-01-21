

let burgerMenu = document.querySelector("#burgermenu");
let burgerDropDown = document.querySelector("#burgerdropdown");
burgerMenu.addEventListener("click", function() {
       
        burgerDropDown.classList.toggle("hamburgermenu-show"); 
        if(burgerDropDown.classList.contains("hamburgermenu-show")){

            burgerMenu.style.color = "rgb(88, 194, 230)";
        } else {
            burgerMenu.style.color = "white";
        }
        
        
         
    
console.log(burgerDropDown.classList)
})

window.addEventListener("resize", function() {
    if(this.window.innerWidth > 500) {
        burgerDropDown.classList.remove("hamburgermenu-show"); 
        burgerDropDown.classList.add("hamburgermenu-hide"); 
    }

});

