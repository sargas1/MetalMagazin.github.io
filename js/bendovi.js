
let element = document.getElementById("bendovi");


for (let i = 0; i < podaci.bendovi.length; i++) {
    element.innerHTML += 
            `<div class="bend" onclick="prikazModala(${i})">
                <img src="${podaci.bendovi[i].slika}">
                <h4>${podaci.bendovi[i].naziv}</h4>
            </div>`
    
}

function prikazModala(index) {
    
   let modal = document.getElementById("modal");
    let modalPrikaz = document.getElementById("modal-prikaz");

    modal.style.display = "block";

    modalPrikaz.innerHTML = `
        <div id="modal-bend">
            <div>
               <img src='${podaci.bendovi[index].slika}'>
            </div>
            <div>
                <h1>${podaci.bendovi[index].naziv}</h1><br>
                <h2>Albumi</h2><br>
                <ol id='lista-albuma'></ol>
                <h2>Sastav</h2><br>
                <ul id='lista-sastav'></ul>
            </div>
            
        </div>
    `;

    let lista = document.getElementById("lista-albuma");
    for (let i = 0; i < podaci.bendovi[index].albumi.length; i++) {
        lista.innerHTML += `<li>${podaci.bendovi[index].albumi[i]}</li>`
        
    }
    let sastav = document.getElementById("lista-sastav");
    for (let i = 0; i < podaci.bendovi[index].sastav.length; i++) {
        sastav.innerHTML += `<li>${podaci.bendovi[index].sastav[i]}</li>`
        
    }
}

function izlaz() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}


