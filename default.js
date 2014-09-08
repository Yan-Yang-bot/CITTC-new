// JavaScript Document

$(document).ready(function(){
	$("#left li.platform").click(function(e){
		$(this).addClass("cur").siblings($("li.platform")).removeClass("cur");
		e.stopPropagation();
	});
	$(document).click(function(){
		$("#left li.platform").removeClass("cur");
	});
});