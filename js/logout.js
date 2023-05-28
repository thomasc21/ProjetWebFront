//--------page login ---------------------------
//--------- fonction authentification ----------
function deconnexion(){
    localStorage.removeItem('token');
    window.location.href = "index.html";
}