$("#menu-nosotros").click(function(){
	var topnosotros=$("#sec-nosotros").offset().top;
	console.log(topnosotros);
	//$(window).scrollTop(topnosotros-75);
	$("html,body").animate({scrollTop:topnosotros-75},1000)

})

$("#menu-inicio").click(function(){
	

	$("html,body").animate({scrollTop:0},1000)

})

$(window).scroll(function(){
var top=$(window).scrollTop();
	var topmenu=$(".header").offset().top;
	console.log(top);	
	console.log(topmenu);
	if(top>topmenu){
		console.log("menu fixed")
		$(".nav-site").addClass("menu-fixed");
		$("h1").addClass("spacio-top")
	}
	else{
		$(".nav-site").removeClass("menu-fixed");
		$("h1").removeClass("spacio-top")
		console.log("menu normal")
	}
})