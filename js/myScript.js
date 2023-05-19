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
//--------- fonction isncrpition----------------
//--------page inscription----------------------

function inscription (form) {
    var idusers = form.idusers.value;
    var password = form.password.value;
    var passwordValidate = form.passwordValidate.value;
    var passwordHash = bcrypt.hashSync(password, 10);
    //console.log(idusers);
    //console.log(password);
    //console.log (passwordValidate);
      if (password != passwordValidate) {
          alert("Les mots de passe ne correspondent pas");
          return;
      }
      else{
          fetch("http://localhost:8000/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({"idusers": idusers, "password": passwordHash}),
      }).then((response) => response.text())
          .then((responseText) => {
              alert(responseText);
              window.location.href = "login.html";
          })
          .catch((error) => {
              console.error("foo: " + error)
          })
          
      }
  }

//--------- fonction authentification ----------
//--------page login ---------------------------

function Authentification (form) {
    var idusers = form.idusers.value;
    var password = form.password.value;
    var passwordHash = bcrypt.hashSync(password, 10);
    //console.log(idusers);
    //console.log(password);
      fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"idusers": idusers, "password": passwordHash}),
  }).then((response) => {
      if (response.ok) {
          return response.text();
      } else {
          throw new Error("Erreur de login");
      }
  })
    .then((responseText) => {
      const data = JSON.parse(responseText);
      console.log(data);
      const token = data.token;
      if (localStorage.getItem("token") !== null) {
          localStorage.removeItem("token");
      }
      localStorage.setItem("token", token);
  
      window.location = "http://localhost:4000/index.html";
    })
    .catch((error) => {
      console.error("foo: " + error)
    })
  }


// //----------get chambre ------------------------
// const elemenC = document.querySelector('.EnteteTableauChambre');
// 	fetch('http://localhost:8000/chambre')
// 	.then(response => response.json())
// 	.then(data => {
// 		data.forEach(post => {
// 			elementC.insertAdjacentHTML('afterend', `<tr> <td>${post.NomChambre}</td> <td>${post.TypeChambre}</td> <td>${post.PrixChambre}</td> </tr>`);
	
// 		});
// 	});

// //---------- get velo --------------------------
// const element = document.querySelector('.EnteteTableauVelo');
// 	fetch('http://localhost:8000/velo')
// 	.then(response => response.json())
// 	.then(data => {
// 		data.forEach(post => {
// 			element.insertAdjacentHTML('afterend', `<tr> <td>${post.NomVelo}</td> <td>${post.PrixVelo}</td> </tr>`);
	
// 		});
// 	});


function deconnexion(){
    localStorage.removeItem('token');
    window.location.href = "index.html";
}