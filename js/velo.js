	//---------- get velo --------------------------
    const element = document.querySelector('.EnteteTableauVelo');
    fetch('http://localhost:8000/velo')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            element.insertAdjacentHTML('afterend', `<tr> <td>${post.NomVelo}</td> <td>${post.PrixVelo}</td> </tr>`);
    
        });
    });

    // ---------Reservation Velo----------------
// --------------------------------------------
function reservationVelo(form){
    const nom = form.nom.value
    const prenom = form.prenom.value
    const email = form.email.value
    const tel = form.tel.value
    const nomVelo = form.non_chambres.value
    console.log(nomVelo);
    const date = form.date_arrivée.value
    //console.log(nom);
    fetch("http://localhost:8000/reservationVelo/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")

        },
        body: JSON.stringify({"nom": nom, "prenom": prenom, "email": email, "tel": tel, "NomVelo": nomVelo, "date": date}),
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
    const nom = form.nom.value
    const prenom = form.prenom.value
    const date = form.date_arrivée.value
    const nb_personnes = form.nb_personnes.value
    const nomVelo = form.non_chambres.value
    const mail = form.mail.value
    const tel = form.tel.value
    console.log(nomVelo);
    console.log(date);
    if (date == "" || nomVelo == "" || mail == "" || tel == "" || nom == "" || prenom == "") 
     {
        alert("Veuillez remplir tous les champs");
        return;
    }
    else{
        reservationVelo(form);
    }
}