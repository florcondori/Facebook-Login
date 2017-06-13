window.fbAsyncInit = function() {
    FB.init({
      appId            : '648776228595741',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.9'
    });
    FB.AppEvents.logPageView();
};

function loginHandler(response){
	if (response.status === 'connected') {
		state.status = "conectado";
		FB.api('/me?fields=email,name', (user)=>{
			state.user = user;
			state.doRender();
		});
	}
	else if(response.status === 'not authorized'){
		state.user = null;
		state.status = "aplicacion no autorizada";
		state.doRender();
	}
}

function doLogin(){
	FB.login(loginHandler,{scope:'email'});
};