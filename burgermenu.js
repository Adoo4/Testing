

let burgerMenu = document.querySelector("#burgermenu");
let labelContent = document.querySelector("#burgermenu-label");
let burgerDropDown = document.querySelector("#nav-checkbox");
let bottomline = document.querySelector(".hamburger-bottom-line");
let menu = document.querySelector("#burgerdropdown");
let counter = 0;
let flag = true;
let plus;
burgerMenu.addEventListener("change", function() {
 if(burgerDropDown.checked) {
    menu.className = "hamburgermenu-show";
   
    plus = setInterval(function() {
        if(!flag){
        counter -= 1;
        bottomline.style.background = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(58,205,237,1) " + counter + "%, rgba(255,255,255,0) 100%)";
        bottomline.style.transition = "0.3s"
        
            if(counter === 0) {
          flag = true;
          }
        }
        else if( counter >= 0){
        counter += 1;
        
        bottomline.style.background = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(58,205,237,1) " + counter + "%, rgba(255,255,255,0) 100%)";
        bottomline.style.transition = "0.3s"
        } if (counter === 100) {
        flag = false;
        }
        console.log(counter);
        }, 30);

 } else {
    menu.className = "hamburgermenu-hide";
    burgerMenu.style.color = "rgb(88, 194, 230)";
    clearInterval(plus);
 }




       
     
        
         
    
console.log(burgerDropDown.classList)
})

window.addEventListener("resize", function() {
    if(this.window.innerWidth > 500) {
        menu.classList.remove("hamburgermenu-show"); 
        menu.classList.add("hamburgermenu-hide"); 
        burgerDropDown.checked = false;
    }

});

let line = document.querySelector("div");




