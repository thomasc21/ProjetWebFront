//--------- fonction isncrpition----------------
//--------page inscription----------------------

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
      else{
          fetch("http://localhost:8000/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({"idusers": idusers, "password": password}),
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
