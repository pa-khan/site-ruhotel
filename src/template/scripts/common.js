$(document).ready(function($) {

	$('.input_phone input').mask('+7 (000) 000-00-00');

	
  $('.date input').datepicker({
  	firstDay: 1,
  	dateFormat: "dd.mm.yy",
  	dayNamesMin: [ "Во", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
  	dayNames:[ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
  	monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ]
  });

  $('.select select').selectmenu();


  $('.reviews__list').slick({
  	fade: true
  });

  $(".nano").nanoScroller();

  $('.plans__list').each(function(index, el) {
  	var img = $(this).find('.plans__img'),
  			imgs = $(this).find('.plans__imgs');
  
	  img.slick({
	  	arrows: false,
	  	slidesToShow: 1,
	  	dots: true,
	  	asNavFor: imgs,
	  	fade: true
	  })
	  imgs.slick({
	  	slidesToShow: 3,
	  	vertical: true,
	  	arrows: false,
	  	asNavFor: img,
	  	focusOnSelect: true
	  })
  });

  $('.prices__wrap').tabs();
});
