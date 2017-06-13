'use strict';
const Header = ()=>{
	const header = $("<header></header>");
	const img = $("<img src='img/logo.png' alt='logo'>");
	
	header.append(img);
	
	return header;
};