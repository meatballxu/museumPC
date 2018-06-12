$(".switchBar a").click(function(){
	if(!$(this).hasClass("on")) {
		$(".switchBar a").removeClass("on");
		$(this).addClass("on")
	}
});
