	//---------- get velo --------------------------
    const element = document.querySelector('.EnteteTableauVelo');
    fetch('https://aubergepeillon.cluster-ig3.igpolytech.fr/velo')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            element.insertAdjacentHTML('afterend', `<tr> <td>${post.NomVelo}</td> <td>${post.PrixVelo}</td> </tr>`);
    
        });
    });


    // ---------Reservation Velo----------------
    // -----------------------------------------
    const form = document.getElementById('formReservationVelo');
    form.addEventListener("submit", function (e) {
        checkValue(form);
        e.preventDefault();
    });
    
function reservationVelo(form){
    const nom = form.nom.value
    const prenom = form.prenom.value
    const email = form.email.value
    const tel = form.tel.value
    const nomVelo = form.non_velos.value
    console.log(nomVelo);
    const date = form.date_arrivée.value
    //console.log(nom);
    fetch("https://aubergepeillon.cluster-ig3.igpolytech.fr/reservationVelo/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")

        },
        body: JSON.stringify({"nom": nom, "prenom": prenom, "email": email, "tel": tel, "NomVelo": nomVelo, "date": date}),
    }).then((response) => response.text())
        .then((responseText) => {
            alert(responseText);
            window.location = "https://aubergepeillon.onrender.com/index";

           
        }
        )
        .catch((error) => {
            console.error("foo: " + error)
        }
        )

}

function checkValue(form){
    const nom = form.nom.value
    const prenom = form.prenom.value
    const date = form.date_arrivée.value
    const nomVelo = form.non_velos.value
    const mail = form.email.value
    const tel = form.tel.value
    if(form.politique_confindentialité.value == false){
        alert("Veuillez accepter la politique de confidentialité");
        return;
    }
    if (date == "" || nomVelo == "" || mail == "" || tel == "" || nom == "" || prenom == "") 
     {
        alert("Veuillez remplir tous les champs");
        return;
    }
    else{
        reservationVelo(form);
    }
}