$(document).ready(function() {

	//響應式下拉式選單
	$('.showmenu').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('menu-show');
	});
});

