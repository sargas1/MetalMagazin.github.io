
let forma = document.obrazac;

let ime = forma.ime;
let prezime = forma.prezime;
let email = forma.email;
let karta = forma.karta;

let ispis = document.getElementById("ispis-greske");


if (preuzmiCookie("ime") !== undefined) {
    ime.value = preuzmiCookie("ime");
    prezime.value = preuzmiCookie("prezime");
}



function validacija() {
    if (ime.value == "") {
        ime.classList.add("greska");
    }
    if (prezime.value == "") {
        prezime.classList.add("greska");
    }
    if (email.value == "") {
        email.classList.add("greska");
    }
    if (karta.value == "") {
        karta.classList.add("greska");
    }

   
    try {
        if (ime.value == "" || prezime.value == "" || email.value == "" || karta.value == "") {
            throw "Molimo popunite sva polja"
        } 
        else if (email.value.indexOf('@') < 0) {
            email.classList.add("greska");
            throw "Email nepravilno unet" 
           
        }

        ukloni(); 
      
        postaviCookie("ime", ime.value, 5);
        postaviCookie("prezime", prezime.value, 5);

  
        ime.value = prezime.value = email.value = karta.value = "";
        ispis.innerHTML = "Karta je uspesno rezervisana" 

        
    }
    catch(greska) { 
        ispis.innerHTML = greska; 
    }

    
}


function ukloni() {
    ime.classList.remove("greska");
    prezime.classList.remove("greska");
    email.classList.remove("greska");
    karta.classList.remove("greska");
    ispis.innerHTML = "";
}



function postaviCookie(cname, cvalue, exdays) {
    let d = new Date(); 
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;

    

    
  }

function preuzmiCookie(cname) { 
    let name = cname + "="; 
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';'); 
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i]; 
      while (c.charAt(0) == ' ') {
        c = c.substring(1); 
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


  