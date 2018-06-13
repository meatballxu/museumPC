
$(".tabs-nav a").click(function(){
	switchShow(".tabs-nav a",".tabs-content",$(this));
});
$(".addtofav").click(function(){
	$(this).toggleClass("on");
});
$(".educationIndex .detailBox img,.educationIndex .detailBox .topic").click(function(){
	window.location.href = $(this).closest(".detailBox").attr("data-tar");
});
