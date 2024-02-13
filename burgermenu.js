

let burgerMenu = document.querySelector("#burgermenu");
let burgerDropDown = document.querySelector("#burgerdropdown");
let bottomline = document.querySelector(".hamburger-bottom-line");
let counter = 0;
let flag = true;
let plus;
burgerMenu.addEventListener("click", function() {
       
        burgerDropDown.classList.toggle("hamburgermenu-show"); 
        if(burgerDropDown.classList.contains("hamburgermenu-show")){
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
            

            burgerMenu.style.color = "rgb(88, 194, 230)";
        } else {
            clearInterval(plus);
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

let line = document.querySelector("div");




