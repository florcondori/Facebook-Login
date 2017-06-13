'use strict';
const Dashboard = ()=>{
	const dashboard = $("<div class='dashboard'>Dashboard component</div>");
	if(state.user){
		console.log(state.user);
		const name = $("<h1>"+state.user.name+"</div>");
		const email = $("<p>"+state.user.email+"</p>");

		dashboard.append(name);
		dashboard.append(email);

		const logout = $("<button>Salir</button>");
		logout.on("click", ()=>{
			FB.logout((response)=>{
				state.user = null;
				state.doRender();
			});
		});

		dashboard.append(logout);
	}
	return dashboard;
};