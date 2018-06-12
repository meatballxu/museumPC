
function switchShow(tabs,content,$obj) {
	
	if(!$obj.hasClass("on")) {
		$(tabs).removeClass("on");
		$obj.addClass("on");
		$(content+" > .ct").hide();
		$("#"+$obj.attr("data-tar")).fadeIn();
	}
}
$(".switchBar a").click(function(){
	if(!$(this).hasClass("on")) {
		$(".switchBar a").removeClass("on");
		$(this).addClass("on")
	}
});
