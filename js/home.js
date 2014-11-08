$(function(){
	var n_num;
	$(".m").hover(
		function(){
			n_num = $(this).data("num");
			console.log(n_num);
			$(".back"+n_num).removeClass("none");
			$(".back"+n_num).addClass("active");
		},function(){
            $(".back"+n_num).stop().animate({
			    opacity: 0
			  }, 1000, function() {
			    $(".back"+n_num).addClass("none");
			    $(".back"+n_num).removeClass("active");
			    $(".back"+n_num).css({"opacity": 1});
			  });
	});

});