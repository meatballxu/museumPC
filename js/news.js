
$(".tabs a").click(function(){
	switchShow(".tabs a",".tab-content",$(this));
});
$("#setting .tag").click(function(){
	switchShow("#setting .tag",".tag-content",$(this));
});
$(".changeHeader").click(function(){
	$(".black-layer,.header-uploader").fadeIn();
});
$(".header-uploader .close").click(function(){
	$(".black-layer,.header-uploader").fadeOut();
});
