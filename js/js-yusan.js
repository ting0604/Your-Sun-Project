$(document).ready(function() {

	//主頁響應式下拉式選單
	$('.showmenu').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('menu-show');
	});

	//課程響應式下拉選單
	$('.course-showmenu').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('course-menu-show');
	});

});

