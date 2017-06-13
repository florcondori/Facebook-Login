'use strict';
const Login = ()=>{
	const login = $("<div class='login'></div>");
	const title = $("<h1>Log into Laboratoria</h1>");
	const email = $("<input class='email' type='text' placeholder='Correo Electronico'>");
	const password = $("<input class='password' type='password' placeholder='Contraseña'>");
	const button = $("<button>Ingresar</button>");
	const faceButton = $("<button>Ingresar con Facebook</button>");
	
	login.append(title);
	login.append(email);
	login.append(password);
	login.append(button);
	login.append(faceButton);

	button.on("click", (e)=>{
		e.preventDefault();
		alert("No esta implementado");
	});

	faceButton.on("click", (e)=>{
		e.preventDefault();
		doLogin();
	});

	return login;
};