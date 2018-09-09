//autodivheight();
//function autodivheight(){ //函数：获取尺寸
//  //获取浏览器窗口高度
// 
//  var winHeight=0;
//  if (window.innerHeight)
//      winHeight = window.innerHeight;
//  else if ((document.body) && (document.body.clientHeight))
//      winHeight = document.body.clientHeight;
//  //通过深入Document内部对body进行检测，获取浏览器窗口高度
//  if (document.documentElement && document.documentElement.clientHeight)
//      winHeight = document.documentElement.clientHeight;
//      winWidth=document.documentElement.clientWidth;
//    //  console.log(winWidth);
//  //DIV高度为浏览器窗口的高度
//  //document.getElementById("test").style.height= winHeight +"px";
//  //DIV高度为浏览器窗口高度的一半
////  document.getElementById("top").style.height= winHeight-20 +"px";
////  document.querySelector('#top .topimg img').style.width=winWidth+"px";
////   document.querySelector('#top .topimg img').style.height= winHeight-20 +"px";
//  document.querySelector(".scroll-main").style.height=winHeight+"px";
////  var modlu=document.querySelectorAll(".scroll-main .modlu");
////  console.log(modlu);
////  for(var i=0;i<modlu.length;i++){
////  	modlu[i].style.height=winHeight+"px";
////  }
//   
//}
//window.onresize=autodivheight; //浏览器窗口发生变化时同时变化DIV高度


//为了浏览器兼容，我们自己封装一个“绑定事件的函数


window.onload=function(){
var i=0;
var scrollMain=document.querySelector(".scroll-main");
var modlu=document.querySelectorAll(".modlu");
 function onMouseWheel(ev){
 	
 	var ev=ev||window.event;
 	//var target=ev.target||ev.srcElement;
   	var down=true;
   	//alert(this.index);
   	down=ev.wheelDelta>0;
   	//console.log(target);
   	//console.log(down);
    
   	        if(down){
   	        	if(this.index>0){
   	        console.log(this.index+"向上");
   	        	
   	        	this.style.display="none";
   	        	modlu[this.index-1].style.display="block";
                 }
               }else{
            if(this.index<5){
               console.log(this.index+"向下");   
                  this.style.display="none";
   	        	modlu[this.index+1].style.display="block";
 	        	 }
                
                 
               }
                if(ev.preventDefault){/*FF 和 Chrome*/
                ev.preventDefault();// 阻止默认事件
            }
            return false;

               
 }

     for(var i=0;i<modlu.length;i++){
     	modlu[i].index=i;
     	addEvent(modlu[i],'mousewheel',onMouseWheel);
        addEvent(modlu[i],'DOMMouseScroll',onMouseWheel);
        
     	
     }
    
	 
	


function addEvent(obj,xEvent,fn) {
    if(obj.attachEvent){
      obj.attachEvent('on'+xEvent,fn);
    }else{
      obj.addEventListener(xEvent,fn,false);
    }
}
//console.log("66666");
}

function module(){
	console.log("666");
	var modlu=document.querySelectorAll(".modlu");
	var listLi=document.querySelectorAll(".listUli>li");
	console.log(modlu);
	console.log(listLi);
	for(var i=0;i<listLi.length;i++){
		listLi.index=i;
		(function(b){
			listLi[b].onclick=function(){
				for(var a=0;a<modlu.length;a++){
					console.log(a);
					modlu[a].style.display="none";
				}
				modlu[b].style.display="block";
			}
		})(i);
	}
}
module();