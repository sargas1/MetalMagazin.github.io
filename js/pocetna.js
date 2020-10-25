
let brojac = 1;

let slider = document.getElementById("slider");


setInterval(function() {
  
    slider.style.marginLeft = (brojac * -100) + '%';
    brojac++;
  
    if (brojac == 6) {
        slider.classList.remove('slider');
        brojac = 0;
        slider.style.marginLeft = '0%';


        setTimeout(function() {
            
            slider.classList.add('slider');
        },500)
        
    }
},3000)



