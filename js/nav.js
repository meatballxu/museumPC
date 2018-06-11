
var initState = 0;
//将导航HTML写入页面（为隐藏），请将链接补全
document.writeln("<div class=\'main-menu ma5'>");
document.writeln("	<div class=\'first ma5\'>");
document.writeln("		<div class=\'logo\'><img src=\'../img/logo-nav.png\' /></div>");
document.writeln("		<div class=\'item\'>");
document.writeln("			<a href=\'#\'>参观</a>");
document.writeln("			<a href=\'#\'>展览</a>");
document.writeln("			<a href=\'#\'>学术</a>");
document.writeln("			<a href=\'#\'>公共项目</a>");
document.writeln("			<a href=\'#\'>艺术商店</a>");
document.writeln("			<a href=\'#\'>会员</a>");
document.writeln("			<a href=\'#\'>X-Space</a>");
document.writeln("			<a href=\'#\'>资讯</a>");
document.writeln("			<a href=\'#\'>关于XPM</a>");
document.writeln("			<a class=\'search-btn\' href=\'javascript:\'><i class='iconfont icon-chazhao'></i></a>");
document.writeln("		</div>");
document.writeln("	</div>");
document.writeln("	<div class=\'second ma5\'>");
document.writeln("		<a class=\'gohome\' href=\'index2.html\'><i class=\'iconfont icon-fanhui mr10\'></i>HOME</a>");
document.writeln("	</div>");
document.writeln("	<div class=\'user ma5\'>");
document.writeln("		<div class=\'unlog\'><a href=\'../login/register.html'>注册</a>&frasl;<a href=\'../login/login.html\'>登录</a></div>");
document.writeln("		<div class=\'log hide\'><a href=\'#\'><img src=\'../img/ep/head.jpg\' /></a></div>");
document.writeln("		<div class=\'show-fir\'><a href=\'javascript:\'><i class=\'icon iconfont icon-gengduocaidan\'></i></a></div>");
document.writeln("	</div>");
document.writeln("	<div class=\'searchBox\' style=\'display: none;\'>");
document.writeln("		<div class=\'search\'>");
document.writeln("			<input class=\'keywords\' type=\'text\' placeholder=\'您想搜索什么？\' />");
document.writeln("			<a class=\'btn\' href=\'#\'>搜 索</a>");
document.writeln("		</div>");
document.writeln("	</div>");
document.writeln("</div>");


//固定菜单栏
function fixMenu() {
	var divOffsetTop = 90;
	window.onscroll=function(){
		// 计算页面滚动了多少（需要区分不同浏览器）    
		var topVal = 0;    
		if(window.pageYOffset){//这一条滤去了大部分， 只留了IE678    
			topVal = window.pageYOffset;
		}
		else if(document.documentElement.scrollTop ){//IE678 的非quirk模式    
			topVal = document.documentElement.scrollTop;
		}    
		else if(document.body.scrolltop){//IE678 的quirk模式    
			topVal = document.body.scrolltop;
		}
		if(topVal <= divOffsetTop){
			if(initState==1) {
				$(".main-menu.fir").removeClass("fix fir").addClass("sec")
				if($(".main-menu .searchBox").is(':visible')) {
					$(".main-menu .searchBox").hide();
				}
			}else
				$(".main-menu.fir").removeClass("fix");
		}    
		else {
			if(initState==1) {
				$(".main-menu.sec").removeClass("sec").addClass("fir fix")
			}else
				$(".main-menu.fir").addClass("fix");
		}    
	};

}
//设置导航后显示导航  0：默认白底（带菜单）；1：透明底（不带菜单）
//setNav(1);//设置导航显示为透明底
function setNav(num) {
	var $nav = $(".main-menu").eq(0);
	if(num==0){
		$nav.removeClass("sec").addClass("fir");
	}else if(num==1){
		initState=1;
		$nav.removeClass("fir").addClass("sec");
	}
	$nav.fadeIn();
	navBinding();
}
//按钮事件绑定
function navBinding() {
	//搜索按钮
	$(".search-btn").click(function() {
		var sb = $(this).closest(".main-menu").find(".searchBox");
		if(sb.is(':visible')) {
			sb.slideUp();
			sb.find(".keywords").val("");
		}else {
			sb.slideDown();
			sb.find(".keywords").focus();
		}
	});
	//菜单按钮
	$(".show-fir").click(function() {
		$(this).closest(".main-menu").removeClass("sec").addClass("fir")
	});
	fixMenu();
}

