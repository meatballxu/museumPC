
$(".sendCode").click(function(){
	if(!$(this).hasClass("disable")) {
		$(this).hide();
		$(this).addClass("disable").show();
		$(".sendCode").html("60s");
		timming(60);
	}
});
//倒计时
var tt_timming;
function timming(time) {
	 tt_timming = setInterval(function(){
		time--;
		if(time>1) {
			$(".sendCode").html(time+"s");
		}else {
			clearInterval(tt_timming);
			$(".sendCode").removeClass("disable").html("重新发送");
		}
	},1000)
}