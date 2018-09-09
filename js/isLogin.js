console.log("121111");

//console.log(uname);
function islog(){
var uname=sessionStorage.getItem("uname");
console.log(uname);
if(uname!==null){
	var onlogin=document.querySelector(".onlogin");
	console.log(onlogin);
	var login=document.querySelector(".login");
	console.log(login);
	login.style.display="none";
	onlogin.style.display="block";
	onlogin.querySelector("span").innerHTML=uname;
}
}
islog();
var closeGu=document.querySelector(".closeGu");
console.log(closeGu);
closeGu.onclick=function(){
	console.log("666");
	sessionStorage.removeItem("uname");
	var um=sessionStorage.getItem("unmae");
	console.log(um);
	var onlogin=document.querySelector(".onlogin");
	console.log(onlogin);
	var login=document.querySelector(".login");
	console.log(login);
	login.style.display="block";
	onlogin.style.display="none";
	onlogin.querySelector("span").innerHTML="";
}
