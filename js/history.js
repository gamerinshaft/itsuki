$(function(){
	$(".btn").click(function(){
		var i = $(".btn").index(this)
		var p = $(".section").eq(i).offset().top;
		$('html,body').animate({scrollTop: p },'mid-fast');
		return false;
	});
});