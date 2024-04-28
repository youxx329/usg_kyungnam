(function () {

	// 왼쪽 메뉴 탭
	$(function () {
		$('.con > div').hide();
		$('.nav a').click(function () {
			$('.con > div').hide().filter(this.hash).fadeIn();
			$('.nav li a').removeClass('active');
			$('.nav li span').removeClass('active');
			$(this).parent().find('span').addClass('active');
			$(this).parent().find('a').addClass('active');
			return false;
		}).filter(':eq(0)').click();
	});



})();






