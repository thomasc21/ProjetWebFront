//-------------------Mon script JS---------------------------



//---------affichage NaV barre si connecté----------------
    var token = localStorage.getItem('token');
    var lienNav = document.getElementById('lien-nav');

    if (token) {
  		lienNav.style.display = 'block'; // Afficher le lien
} else {
  		lienNav.style.display = 'none'; // Masquer le lien
}

// ----------- affichage Navbar Deconnexion si connecté --------------

var token = localStorage.getItem('token');
var lienDeconnexion = document.getElementById('deconnexion');
var lienConnexion = document.getElementById('connexion');

if (token) {
		
    lienConnexion.style.display = 'none'; // Masquer le lien
    lienDeconnexion.style.display = 'block'; // Afficher le lien
} else {
    lienConnexion.style.display = 'block'; // Afficher le lien
	lienDeconnexion.style.display = 'none'; // Masquer le lien}
}


// //---------- get velo --------------------------
// const element = document.querySelector('.EnteteTableauVelo');
// 	fetch('http://localhost:8000/velo')
// 	.then(response => response.json())
// 	.then(data => {
// 		data.forEach(post => {
// 			element.insertAdjacentHTML('afterend', `<tr> <td>${post.NomVelo}</td> <td>${post.PrixVelo}</td> </tr>`);
	
// 		});
// 	});



