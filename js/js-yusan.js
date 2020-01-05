$(document).ready(function() {

	//響應式下拉式選單
	$('.showmenu').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('menu-show');
	});

	var slideIndex = 0;
		showSlides();

		function showSlides() {
		    var i;
		    var slides = document.getElementsByClassName("mySlides");
		    var dots = document.getElementsByClassName("dot");
		    for (i = 0; i < slides.length; i++) {
		       slides[i].style.display = "none";  
		    }
		    slideIndex++;
		    if (slideIndex > slides.length) {slideIndex = 1}    
		    for (i = 0; i < dots.length; i++) {
		        dots[i].className = dots[i].className.replace(" active", "");
		    }
		    slides[slideIndex-1].style.display = "block";  
		    dots[slideIndex-1].className += " active";
		    setTimeout(showSlides, 2000); // Change image every 2 seconds
		}

		/* start setting time schedule */
		// var t =[];

		// var birthday = new Date('August 19, 2018');
		// var date1 = birthday.getDate();
		// console.log(date1);
});

