//----------get Reservationchambre ------------------------
const element = document.querySelector('.MesReservationChambre');
fetch('http://localhost:8000/reservationChambre/getReservation', {
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
        element.insertAdjacentHTML('afterend', 
        `<p> Nom : ${post.Nom} Prénom : ${post.Prenom} </p>
        <br>
        <p> Email : ${post.Mail} Téléphone : ${post.Telephone} </p>
        <br>
        <p> Chambre réservée :${post.NomChambre} Date : ${post.DATE} Nombre de personnes : ${post.NombreP} </p> 
        <br> `);
});
});
