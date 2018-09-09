
window.onload=function(){
var ulsvg=document.querySelector(".ulsvg");
var path = document.querySelector('.path2');
var length = path.getTotalLength();//svg路径长度
console.log(111);
console.log(length);
console.log("3333");
//console.log(ulsvgLi);
ulsvg.onmouseover=function(e){
	var ulsvgLi=ulsvg.querySelectorAll("li");
	var e=e||window.event;
	var target=e.target||e.srcElement;
	console.log("222");
	//console.log(target);
	if(target.nodeName=="LI"){
		console.log(target);
		
		//console.log(target.parentNode.childNodes);
		for(var i=0;i<ulsvgLi.length;i++){
			ulsvgLi[i].index=i;//定义每个li的下标
			ulsvgLi[i].className="";
		}
		console.log(target.index);
		target.className="lone";
		
		var svg=document.querySelectorAll(".svg");
		var img_data=document.querySelectorAll(".img_data");
		var da=document.querySelectorAll(".data");
		
		for(var j=0;j<svg.length;j++){
			svg[j].style.display="none";
			img_data[j].style.display="none";
			//da_img[j].style.opacity=0;
			
		}
		svg[target.index].style.display="block";
		img_data[target.index].style.display="block";
//		console.log(img_data[target.index].children[0].children);
//		for(var k=0;k<2;k++){
//			console.log(img_data[target.index].children[k]);
//			img_data[target.index].children[k].children[0].style.display="block";
//		}
     var daimg=img_data[target.index].querySelectorAll("img");
     for(var k=0;k<daimg.length;k++){
     	daimg[k].className="animat";
     }
		
	}
	 
}

//canvas画图
        var canvas1=document.getElementById("canvas1");
        var canvas2=document.getElementById("canvas2");
        var canvas3=document.getElementById("canvas3");
        var ctx1=canvas1.getContext("2d");
        var ctx2=canvas2.getContext("2d");
       var ctx3=canvas3.getContext("2d");
       
    	
        var x=-120;
        function drawCanvas(){
        	
        	ctx1.clearRect(0,0,600,330);
    	 ctx1.save();
        ctx1.strokeStyle="#00BC71";
        ctx1.fillStyle="rgba(33,91,86,0.7)";
      //  <path d="M18 35L196 18L412 54L568 48L550 188L452 332L365 312L212 308L124 299L16 185"  />
        ctx1.lineWidth=8;
        ctx1.beginPath();
        ctx1.moveTo(18,35);
        ctx1.lineTo(196,18);
        ctx1.lineTo(412,54);
        ctx1.lineTo(568,48);
        ctx1.lineTo(550,188);
        ctx1.lineTo(452,332);
        ctx1.lineTo(365,312);
        ctx1.lineTo(212,308);
        ctx1.lineTo(124,299);
        ctx1.lineTo(16,185);
        
        ctx1.closePath();
         ctx1.clip();//切割边界
        ctx1.stroke();
        ctx1.fill();
//  	x+=40;
//      x=x>700?-120:x;
//     ctx1.beginPath();
//     ctx1.fillStyle="rgba(255,255,255,0.1)";
//     ctx1.moveTo(x,0);
//     ctx1.lineTo(x+120,0);
//     ctx1.lineTo(x-160,520);
//     ctx1.lineTo(x-280,520);
//     ctx1.fill();
      
      //requestAnimationFrame(drawCanvas);
        }
   // window.requestAnimationFrame(drawCanvas);
//setInterval(drawCanvas,20);
drawCanvas();
//   setInterval(drawCanvas1,20);
//   setInterval(drawCanvas2,20);
    //2
    var x1=-120;
  function drawCanvas1(){
        	
        	ctx2.clearRect(0,0,600,330);
    	 ctx2.save();
        ctx2.strokeStyle="#00BC71";
        ctx2.fillStyle="rgba(33,91,86,0.7)";
      //  <path d="M16 207L67 82L164 39L278 66L500 36L561 88L590 234L504 312L335 339L182 310L39 306" />
        ctx2.lineWidth=8;
        ctx2.beginPath();
        ctx2.moveTo(16,207);
        ctx2.lineTo(67,82);
        ctx2.lineTo(164,39);
        ctx2.lineTo(278,66);
        ctx2.lineTo(500,36);
        ctx2.lineTo(561,88);
        ctx2.lineTo(590,234);
        ctx2.lineTo(504,312);
        ctx2.lineTo(335,339);
        ctx2.lineTo(182,310);
        ctx2.lineTo(39,306);
        ctx2.closePath();
         ctx2.clip();//切割边界
        ctx2.stroke();
        ctx2.fill();
//  	x1+=40;
//      x1=x1>700?-120:x1;
//     ctx2.beginPath();
//     ctx2.fillStyle="rgba(255,255,255,0.1)";
//     ctx2.moveTo(x1,0);
//     ctx2.lineTo(x1+120,0);
//     ctx2.lineTo(x1-160,520);
//     ctx2.lineTo(x1-280,520);
//     ctx2.fill();
      
     // requestAnimationFrame(drawCanvas1);
        }
   // window.requestAnimationFrame(drawCanvas1);
//3
var x2=-120;
  function drawCanvas2(){
        	
        	ctx3.clearRect(0,0,600,330);
    	 ctx3.save();
        ctx3.strokeStyle="#00BC71";
        ctx3.fillStyle="rgba(33,91,86,0.7)";
        
        ctx3.lineWidth=8;
        ctx3.beginPath();
        ctx3.moveTo(12,119);
        ctx3.lineTo(34,75);
        ctx3.lineTo(132,34);
        ctx3.lineTo(191,46);
        ctx3.lineTo(296,23);
        ctx3.lineTo(488,48);
        ctx3.lineTo(584,84);
        ctx3.lineTo(556,244);
        ctx3.lineTo(450,308);
        ctx3.lineTo(154,314);
        ctx3.lineTo(19,287);
        ctx3.closePath();
         ctx3.clip();//切割边界
        ctx3.stroke();
        ctx3.fill();
//  	x2+=40;
//      x2=x2>700?-120:x2;
//     ctx3.beginPath();
//     ctx3.fillStyle="rgba(255,255,255,0.1)";
//     ctx3.moveTo(x2,0);
//     ctx3.lineTo(x2+120,0);
//     ctx3.lineTo(x2-160,520);
//     ctx3.lineTo(x2-280,520);
//     ctx3.fill();
      
     // requestAnimationFrame(drawCanvas2);
        }
  //  window.requestAnimationFrame(drawCanvas2);


//第二个选项卡 canvas
//
       document.querySelector("ul.list").onmouseover=function(e){
   	    var e=e||window.event;
   	    var target =e.target||e.srcElement;
   	    var li=document.querySelectorAll("ul.list>li");
   	    var canvas=document.querySelectorAll(".canvas");
   	   // console.log(canvas);
   	    if(target.nodeName=="LI"){
   	    	for(var i=0;i<li.length;i++){
   	    	li[i].index=i;
   	    	li[i].className="";
   	    	canvas[i].style.display="none";
   	    	canvas[i].querySelector("canvas").className="lf";
   	    }
   	       target.className='bg';
   	       canvas[target.index].style.display="block";
   	       console.log(canvas[target.index].querySelector("canvas"));
   	      canvas[target.index].querySelector("canvas").className="lf antop";
// 	      var timer1=setInterval(drawCanvas,20);
// 	       	var timer2=setInterval(drawCanvas1,20);
// 	       	var timer3=setInterval(drawCanvas2,20);
   	       if(target.index==0){
// 	       	timer1=setInterval(drawCanvas,20);
// 	       	clearInterval(timer2);
// 	       	clearInterval(timer3);
                drawCanvas();
   	       }else if(target.index==1){
// 	       	timer2=setInterval(drawCanvas,20);
// 	       	clearInterval(timer1);
// 	       	clearInterval(timer3);
                drawCanvas1();
   	       }else{
// 	       	timer3=setInterval(drawCanvas,20);
// 	       	clearInterval(timer1);
// 	       	clearInterval(timer2);
             drawCanvas2();
   	       }
   	       
   	       
   	    }
   	    
   	    
        }

 


}




