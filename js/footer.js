(function(){
  
   function getxhr(){
    var xhr=null;
    if(window.XMLHttpRequest){
    	xhr=new XMLHttpRequest();
    }else{
    	xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
   }
   var xhr=getxhr();
   xhr.open("GET","footer.html",true);
   xhr.onreadystatechange=function(){
   	if(xhr.readyState==4&&xhr.status==200){
   		//alert(xhr.responseText)
   		var link=document.createElement("link");
   		link.rel="stylesheet";
   		link.href="css/footer.css";
   		document.head.appendChild(link);
   		document.getElementById("footer").innerHTML=xhr.responseText;
   		
   		
   	}
   }
   xhr.send(null);
   
})()
