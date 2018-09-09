
function log(){
	
	var uname=document.getElementById("uname");
	var upwd=document.getElementById("upwd");
	upwd.setAttribute("type", "password");
	if(localStorage.getItem("uname")!==null&&localStorage.getItem("upwd")!==null){
		//console.log("我上次记住了哦");
		uname.value=localStorage.getItem("uname");
		upwd.value=localStorage.getItem("upwd");
		
	}
//console.log(localStorage.getItem("uname"));
//console.log("111");
//console.log(localStorage.getItem("upwd"));
}
log();
uname.onblur=function(){
	this.style.color="#999";
}
uname.onfocus=function(){
	this.style.color="black";
}
var sub=document.querySelector(".sub");

sub.onclick=function(){
	var uname=document.getElementById("uname").value;
	console.log(uname);
	var upwd=document.getElementById("upwd").value;
	console.log(upwd);
	function getXhr(){
		var xhr=null;
		if(window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
		}else{
			xhr=new ActiveXObject("Microsoft.XMLHttp");
		}
		return xhr;
	}
	var xhr=getXhr();
	xhr.open("POST","data/user/login.php",true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			
			var data=JSON.parse(xhr.responseText);
			console.log(data.code);
			if(data.code==1){
				var check=document.getElementById("check");
				if(check.checked){
				localStorage.setItem("uname",uname);
				localStorage.setItem("upwd",upwd);
				}
				
				sessionStorage.setItem("uname",uname);
				window.location.href="index.html";
			}
			
		}
		
	}
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhr.send(`uname=${uname}&upwd=${upwd}`);
	
	
}

var value=sessionStorage.getItem("uname");
				console.log(value);