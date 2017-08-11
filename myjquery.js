
$(document).ready(function() {


	$("img").mouseover(function(){
		$(this).fadeTo("slow", 0.25);
	});
	 $("img").mouseleave(function(){
	 	$(this).fadeTo("slow", 1);
	 });

	
})