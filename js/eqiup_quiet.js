(function(){
	var vimHeight=$(".vim").height();
	var uvimLi=$(".Uvim li");
	uvimLi.css({"height":vimHeight});
	console.log(uvimLi.eq(2).height());
	
	var vUl=$(".Uvim");
	var vUliHeight=$(".Uvim li").height();
	var listUli=$(".listUli li");
	console.log(listUli);
	console.log(vUliHeight);
	var i=0;
	listUli.click(function(){
		console.log($(this).index());
		i=$(this).index();
		$(".listUli li").eq(i).addClass("licode").siblings().removeClass("licode");
		$(".Uvim li").eq(i).css({display:"block"});
		vUl.stop().animate({top:-i*vUliHeight},500);
		
	})
//	console.log($(":animated").length);
//	console.log("111");
	
	
      $(".Uvim li").mousewheel(function(event,delta){
      	var dir = delta > 0 ? 'Up' : 'Down';
      	
        if (dir == 'Up'&&i>0&&!$(":animated").length>0) {
        	
           	i--;
        	$(".Uvim li").eq(i).css({display:"block"});
        	$(".listUli li").eq(i).addClass("licode").siblings().removeClass("licode");
		    vUl.animate({top:-i*vUliHeight},1000);
            console.log('向上滚动');
           
        }else if(dir == 'Down'&&i<=4&&!$(":animated").length>0){
        	i++;
        	$(".listUli li").eq(i).addClass("licode").siblings().removeClass("licode");
        	$(".Uvim li").eq(i).css({display:"block"});
		    vUl.animate({top:-i*vUliHeight},1000);
            console.log('向下滚动');
        }
        return false;
      	
      })
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})()

