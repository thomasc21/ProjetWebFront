//--------- fonction isncrpition----------------
//--------page inscription----------------------
const form = document.getElementById("forminscription");


form.addEventListener("submit", function (e) {
    inscription(form);
    e.preventDefault();
});

function inscription (form) {
    var idusers = form.idusers.value;
    var password = form.password.value;
    var passwordValidate = form.passwordValidate.value;
    //console.log(idusers);
    //console.log(password);
    //console.log (passwordValidate);
      if (password != passwordValidate) {
          alert("Les mots de passe ne correspondent pas");
          return;
      }
      else if (idusers == "" || password == "" || passwordValidate == "") {
            alert("Veuillez remplir tous les champs");
            return;
        }
      else{
          fetch("https://aubergepeillon.cluster-ig3.igpolytech.fr/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({"idusers": idusers, "password": password}),
      }).then((response) => response.text())
          .then((responseText) => {
              alert(responseText);
              window.location = "login";
          })
          .catch((error) => {
              console.error("foo: " + error)
          })
          
      }
  }
