
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

//闪现泡泡（弹出一秒消失）callPop(状态码,要显示的字符串)
//状态码说明 0:失败 1:成功 2:

var popTal;
function callPop(status,txt) {
	if(popTal) popTal.fadeOut(function(){
		popTal.remove();
	});
	$("body").append("<div class='popWin'><div class='txt'><span>"+txt+"</span></div></div>");
	popTal = $("body").find(".popWin");
	switch(status){
		case 0:
			$(".popWin").addClass("failure");
			break;
		case 1:
			$(".popWin").addClass("success");
			break;
	}
	$(".popWin").fadeIn(function() {
		setTimeout(function(){
			$(".popWin").remove();
		},700);
	});
}
