autodivheight();
function autodivheight(){ //函数：获取尺寸
    //获取浏览器窗口高度
   
    var winHeight=0;
    if (window.innerHeight)
        winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;
    //通过深入Document内部对body进行检测，获取浏览器窗口高度
    if (document.documentElement && document.documentElement.clientHeight)
        winHeight = document.documentElement.clientHeight;
        winWidth=document.documentElement.clientWidth;
      //  console.log(winWidth);
    //DIV高度为浏览器窗口的高度
    //document.getElementById("test").style.height= winHeight +"px";
    //DIV高度为浏览器窗口高度的一半
    document.getElementById("top").style.height= winHeight-20 +"px";
    document.querySelector('#top .topimg img').style.width=winWidth+"px";
     document.querySelector('#top .topimg img').style.height= winHeight-20 +"px";
}
window.onresize=autodivheight; //浏览器窗口发生变化时同时变化DIV高度
var num=0;
setInterval(function(){
	var topimg=document.getElementsByClassName("topimg");

	
	if(num==0){
	
		topimg[0].className="topimg on";
		topimg[1].className="topimg";
		num++;
	}else{
		topimg[0].className="topimg";
		topimg[1].className="topimg on";
		num=0;
	}
	
	//console.log(666);
},3000);

/*中间图片轮播*/
function fun(){
var ulbox=document.querySelector(".con .conimg ul.ulbox");//轮播的ul
var ulleft=ulbox.style.left;
var ulboxli=ulbox.getElementsByTagName('li');
var ulb=document.querySelector(".con .conimg ul");
//console.log(ulboxli);
	var i=0;
setInterval(function(){
	i++;
	ulboxli[i+2].childNodes[0].className='lit';
	ulboxli[i+1].childNodes[0].className='litm';
	if(i==1){
		//ulboxli[i+1].childNodes[0].className='';
	}else if(i==4){
		ulboxli[i-2].childNodes[0].className="lits";
	}


	if(i==6){
		ulboxli[i+2].childNodes[0].className='';
		ulb.className="ulbox";
		//console.log(666);
       	ulbox.style.left=0;
       	i=0;
      
       

       }else{ 
       	ulb.className="ulbox trans";
	//console.log(i);//打印1 2 3 4 ....
	
	ulbox.style.left=(ulleft-i*190)+"px";
	//console.log(ulbox.style.left);//打印-190px -380px ....
      
//		var tmp=ulboxli[0];
//		ulbox.removeChild(ulboxli[0]);
//		//var conle=ulboxli[0].cloneNode(true);
//		
//		ulbox.appendChild(tmp);
	}
	
},1500);
}
fun();
