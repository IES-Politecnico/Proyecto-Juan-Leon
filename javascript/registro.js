function registro() {
    document.getElementById("login").className = "oculto";
    document.getElementById("sign in").className = "visible";
    document.getElementById("ingreso").className = "visible";
    document.getElementById("registro").className = "oculto";
}

function verificacion() {
    var passw = document.getElementById("password").value;
    var passw2= document.getElementById("repassword").value;
    var Texto = document.getElementById("result");
    var Texto2 = document.getElementById("result2");

    if (passw == passw2) {
        Texto.innerText = "Las contraseñas coinciden"
    }
    else {
        Texto2.innerText = "Las contraseñas no son iguales"
    }
}