
let display = 0;



$(document).ready(function(){
	$(".btn").click(function(){
		let a = $(this).text();
		
		if (display == 0){
			display = a;
		}else{
		display = display + a;
		}
		git
		$("#display").text(display);
	});	
	
	$(".result").click(function(){
		let rez =document.getElementById("display");
		rez.innerHTML = eval(rez.innerHTML);
	});
	
	$(".clear").click(function(){
		display = 0;
		$("#display").text(display);
	});
});