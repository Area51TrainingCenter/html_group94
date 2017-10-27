 $(".menu-home li").click(function(e){
  e.preventDefault();

 	 $(".menu-home li").removeClass("active");
   $(this).addClass("active");
  //$(".menu-home li").addClass("active");
 })

 $("#modal").click(function(){
		$(".modal").fadeIn(2000);
 })

 $("#cerrar-modal").click(function(){
		$(".modal").fadeOut(3000);
 })

 $("#vendidos").click(function(){
    $(".item-producto").fadeOut(300);
 		$(".vendidos").fadeIn(1000);
 
 })

 $("#nuevos").click(function(){
 $(".item-producto").fadeOut(300);
 		$(".nuevos").fadeIn(1000);
 })
