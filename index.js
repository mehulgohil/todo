//strikethrough
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click symbol to delete
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

//add input from textbox
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var input = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + input + "</li>");
		$(this).val("");
	}
});

$("#plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});