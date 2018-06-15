
$(".sec .focus").click(function(){
	$(this).toggleClass("on");
});

$(".academicIndex .detailBox .topic").click(function(){
	$(this).closest(".detailBox").find("ul.sec").slideToggle();
});
