//----------get chambre ------------------------
const element = document.querySelector('.EnteteTableauChambre');
fetch('https://aubergepeillon.cluster-ig3.igpolytech.fr/chambre')
.then(response => response.json())
.then(data => {
    data.forEach(post => {
        element.insertAdjacentHTML('afterend', `<tr> <td>${post.NomChambre}</td> <td>${post.TypeChambre}</td> <td>${post.PrixChambre}</td> </tr>`);
});
});

// ---------Reservation Chambre----------------
// --------------------------------------------
const form = document.getElementById('formReservationChambre');
form.addEventListener("submit", function (e) {
    checkValue(form);
    e.preventDefault();
});

function reservationChambre(form){
    const nom = form.nom.value
    const prenom = form.prenom.value
    const email = form.email.value
    const tel = form.tel.value
    const nomChambre = form.non_chambres.value
    console.log(nomChambre);
    const date = form.date_arrivée.value
    const nb_personnes = form.nb_personnes.value    
    //console.log(nom);
    fetch("https://aubergepeillon.cluster-ig3.igpolytech.fr/reservationChambre/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")

        },
        body: JSON.stringify({"nom": nom, "prenom": prenom, "email": email, "tel": tel, "NomChambre": nomChambre, "date": date, "nb_personnes": nb_personnes}),
    }).then((response) => response.text())
        .then((responseText) => {
            alert(responseText);
            window.location = "http://localhost:4000/index";

           
        }
        )
        .catch((error) => {
            console.error("foo: " + error)
        }
        )

}

function checkValue(form){
    const date = form.date_arrivée.value
    const nb_personnes = form.nb_personnes.value
    const nomChambre = form.non_chambres.value
    const mail = form.email.value
    const tel = form.tel.value
    const nom = form.nom.value
    const prenom = form.prenom.value

    console.log(nomChambre);
    console.log(date);
    console.log(nb_personnes);
    if(form.politique_confindentialité.value == false){
        alert("Veuillez accepter la politique de confidentialité");
        return;
    }
    if (date == "" || nb_personnes == "" || nomChambre == "" || mail == "" || tel == "" || nom == "" || prenom == "") {
        alert("Veuillez remplir tous les champs");
        return;
    }
    else{
        reservationChambre(form);
    }
}
