//console.log("main.js is loaded");
//$("img").width(200);

$(document).ready(function(){
	//content
	$("img").on("dblclick",function(){
			$("img").width(200);
			$("h1").fadeOut();
			$(".booboo").slideUp();
			$("#rahul").hide();
	});

});