//----------get Reservationchambre ------------------------
const element = document.querySelector('.MesReservationChambre');
await fetch('https://aubergepeillon.cluster-ig3.igpolytech.fr/reservationChambre/getReservation', {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "AUTHORIZATION": "Bearer " + localStorage.getItem("token")
        },
        }
        )
.then(response => response.json())
.then(data => {
    data.forEach(post => {
        console.log(post);
        const date = new Date(post.DATE);
        const idChambre = post.idChambre;
        var nomChambre ="";
        switch (idChambre) {
            case 1:
                nomChambre = "La Calade";
                break;
            case 2:
                nomChambre = "Les Lucioles";
                break;
            case 3:
                nomChambre = "Les Myrtes";
                break;
            case 4:
                nomChambre = "La Fontaine";
                break;
            case 5:
                nomChambre = "Les Oliviers";
                break;
            default:
                nomChambre = "La Calade";
        }

        element.insertAdjacentHTML('beforeend', 
        ` <form class="form">
		<label>
        <p> Nom : ${post.Nom} </p>
		<p> Prénom : ${post.Prenom} </p>
        <p> Email : ${post.Mail} </p>
        <p> Téléphone : ${post.Telephone} </p>
        <p idVelo="${post.idChambre}"> Chambre réservée : ${nomChambre} </p>
        <p id= "${date.toDateString()}"> Date : ${date.toDateString()} </p>
        <p> Nombre de personnes : ${post.NombreP} </p>
		</label>
        <input type="hidden" id="date" value="${post.DATE}">
        <input type="hidden" id="idChambre" value="${post.idChambre}">
		<button type="submit" class="submit" onclick="deleteReservationChambre(this.form)" >delete</button>
         </form>
        `
        );
});
});

function deleteReservationChambre (form) {
    try{
        fetch("https://aubergepeillon.cluster-ig3.igpolytech.fr/reservationChambre/delete", {
            method: "DELETE",
            headers: { 
            "Content-Type": "application/json",
            "AUTHORIZATION": "Bearer " + localStorage.getItem("token")
            
            },
            body: JSON.stringify({"date": form.date.value, "idChambre": form.idChambre.value}),
        }).then( async response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error("Erreur de login");
            }
        })
            .catch((error) => {
                console.error("foo: " + error)
            }
            )
        }
        catch (error) {
            console.error("foo: " + error)
        }
}

//----------get ReservationVelo ------------------------
const element2 = document.querySelector('.MesReservationVelo');
await fetch('https://aubergepeillon.cluster-ig3.igpolytech.fr/reservationVelo/getReservation', {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "AUTHORIZATION": "Bearer " + localStorage.getItem("token")
        },
        }
        )
.then(response => response.json())
.then(data => {
    data.forEach(post => {
        const date = new Date(post.DATE);
        const idvelo = post.idVelo;
        var nomvelo ="";
        switch (idvelo) {
            case 1:
                nomvelo = "VTT Adulte";
                break;
            case 2:
                nomvelo = "VTT Enfant";
                break;
            case 3:
                nomvelo = "VTC Adulte";
                break;
            case 4:
                nomvelo = "VTC Enfant";
                break;
            default:
                nomvelo = "VTT Adulte";
        }

        element2.insertAdjacentHTML('beforeend', 
        `
        <form class="form" id="formReservation">
		<label>
        <p> Nom : ${post.Nom} </p>
		<p> Prénom : ${post.Prenom} </p>
        <p> Email : ${post.Mail} </p>
        <p> Téléphone : ${post.Telephone} </p>
        <p idVelo="${post.idVelo}"> velo réservée : ${nomvelo} </p>
        <p id= "${date}"> Date : ${date.toDateString()} </p>
		</label>
        <input type="hidden" id="date" value="${post.DATE}">
        <input type="hidden" id="idVelo" value="${post.idVelo}">
		<button type="submit" class="submit" onclick="deleteReservationVelo(this.form)" >delete</button>
	    </form>
      
        `);
});
});

function deleteReservationVelo (form) {
    const date = form.date.value;
    const idVelo = form.idVelo.value;
    fetch("https://aubergepeillon.cluster-ig3.igpolytech.fr/reservationVelo/delete", {
        method: "DELETE",
        headers: {
            "AUTHORIZATION": "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"date": date, "idVelo": idVelo}),
    }).then((response) => response.text())
        .then((responseText) => {
            alert("Réservation supprimée");
            window.location = "index";
        }
        )
        .catch((error) => {
            alerte("Réservation non supprimée")
            console.error("foo: " + error)
            window.location = "index";
        }
        );
}




