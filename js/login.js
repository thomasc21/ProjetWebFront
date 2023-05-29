//--------- fonction authentification ----------
//--------page login ---------------------------
const form = document.getElementById("formLogin");
const buttonauth = document.getElementById("buttonlogin");

buttonauth.addEventListener("click", function (e) {
  if (form.idusers.value == "" || form.password.value == "") {
      alert("Veuillez remplir tous les champs");
      return;
  }
  else{
    Authentification(form);
    e.preventDefault();
  }
});

function Authentification (form) {
    var idusers = form.idusers.value;
    var password = form.password.value;
   // var passwordHash = bcrypt.hashSync(password, 10);
    //console.log(idusers);
    //console.log(password);
      fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"idusers": idusers, "password": password}),
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
    //   if(localStorage.getItem("idusers") !== null){
    //         localStorage.removeItem("idusers");
    //   } 
      localStorage.setItem("token", token);
     // localStorage.setItem("idusers", idusers);
  
      window.location = "http://localhost:4000/index";
    })
    .catch((error) => {
      console.error("foo: " + error)
      alert("Erreur de login");
    })
  }