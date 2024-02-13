

let checks = document.querySelectorAll(".check");
let reveal = document.querySelectorAll(".slika-opis-hide");

for(let i = 0; i < checks.length; i++) {

    checks[i].addEventListener("change", function(e){
        console.log("1");
        if(checks[i].checked) {
            reveal[i].className = "slika-opis";
        } else {
            reveal[i].className = "slika-opis-hide";
        }

    })
}