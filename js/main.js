function traducir(){
	document.getElementById("form-signin-heading").innerHTML ="Registrarse";
	document.getElementById("inputEmail").placeholder ="Ingrese Email";
	document.getElementById("inputPassword").placeholder ="Contraseña";
	document.getElementsByTagName("span")[0].innerHTML ="Recuerdame";
	document.getElementsByClassName("btn btn-lg btn-primary btn-block submit-btn")[0].innerHTML ="Inicio sesión"
}