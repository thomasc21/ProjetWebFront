//--------page login ---------------------------
//--------- fonction authentification ----------
function deconnexion(){
    localStorage.removeItem('token');
    window.location= "index";
}
const form = document.getElementById("formPassword");
const buttonpass = document.getElementById("buttonpass");
const out = document.getElementById("deconnexionButton");

buttonpass.addEventListener("click", function (e) {
    if (form.password.value == "") {
        alert("Veuillez remplir tous les champs");
        return;
    }
    else if (form.password.value != form.password2.value) {
        alert("Les mots de passe ne correspondent pas");
        return;
    }
    fetch("http://localhost:8000/user/password", {
        'method': 'put',
        'headers': {
            authorization: "Bearer " + localStorage.getItem("token"),
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
            'password': form.password.value
        })
    }).then((response) => response.text())
        .then((responseText) => {
            alert(responseText);
            window.location = "logout";
        }
        )
        .catch((error) => {
            console.error("foo: " + error)
        }
        )
    e.preventDefault();
});

out.addEventListener("click", function (e) {
    deconnexion();
    e.preventDefault();
}
);
