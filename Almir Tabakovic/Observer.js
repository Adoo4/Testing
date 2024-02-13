
document.addEventListener("DOMContentLoaded", function(event) {
    let targetElement1 = document.querySelector("#counter1");
    let count1 = 0;
    let flag = true;
    event.stopPropagation();
    let observer1 = new IntersectionObserver(function(entries) {
        if(flag) {
      const isIntersecting = entries[0].isIntersecting;
      
      if (isIntersecting) {
        targetElement1.classList.add("in-viewport");
        
       let int1 = setInterval(function(){
       			
            if(count1 > 299) {
                clearInterval(int1);
                flag = false;
            } else {
            count1+=5;
            targetElement1.textContent = count1 + "+";
        }
        }, 20, {once: true})
        

           

        
      } else {
        targetElement1.classList.remove("in-viewport");
        
      } }
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    observer1.observe(targetElement1);
      
  });



  document.addEventListener("DOMContentLoaded", function(event) {
    event.stopPropagation();
    let targetElement2 = document.querySelector("#counter2");
    let count2 = 0;
    let flag = true;

    let observer2 = new IntersectionObserver(function(entries) {
        if(flag) {
      const isIntersecting = entries[0].isIntersecting;
      
      if (isIntersecting) {
        
        targetElement2.classList.add("in-viewport");
        let int2 = setInterval(function(){
        					
                 if(count2 > 9) {
                     clearInterval(int2);
                     flag = false;
                 } else {
                 count2++;
                 targetElement2.textContent = count2 + "+";
                }
             }, 100)

           

        
      } else {
        
        targetElement2.classList.remove("in-viewport");
      } }
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    
      observer2.observe(targetElement2);
  });



  