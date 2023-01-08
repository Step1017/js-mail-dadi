//-----------------------------------//ESERCIZIO MAIL//---------------------------------//
const mailList = ["s.aveta@yahoo.com", "ironman@jarvis.com", "spider@man.com", "doctor@strange.it", 
                    "cap@america.com", "thor@god.com", "hulk@green.com", "wanda@vision.com"];

let mailInput = prompt("Inserisci la tua email: ").toLowerCase();

let emailCheck = false;

// Controllo mail
for (let i=0; i < mailList.length; i++) {

    if (mailList[i] == mailInput) {
        emailCheck = true;
        i = mailList.length + 1;
    }
    else {
        emailCheck = false;
    }
}

// Messaggi post controllo
if (emailCheck == true) {
    alert("Email corretta. Welcome!")
    console.log(emailCheck)
}
else {
    alert("Email non presente in archivio. Accesso negato!")
    console.log(emailCheck)
}
