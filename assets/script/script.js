$(document).ready(function(){
	$('.page-container').delay(2000).fadeIn(800);
	$('.grid-container').delay(2000).fadeIn(800);

	//Creates an event that fires every time the mouse moves over any div with the class of "img".
	$('.img-container .grid-contents').mousemove(function(event){
	  //Both the x and y value are calculated by taking the mouse x,y position on the page and subtracting it from the x,y position of the image on the page. "this" is the hovered element with the class of "img"
	  var mousex = event.pageX - $(this).offset().left;
	  var mousey = event.pageY - $(this).offset().top;
	  
	  
	  //If you just used the mouse position values the translation effect will only go up and to the right, by subtracting half of the length / width of the imagevfrom the values  we get either a positive or negitive number so that the image will move in any direction.
	  
	  //The 40 controls the amount of "movement" that will happen by giving us a smaller number, feel free to change it to get the effect that you want.
	  var imgx = (mousex - 300) / 30;
	  var imgy = (mousey - 200) / 30;
	  
	  //Adds a translation css styles to the image element
	  $(this).css("transform", "translate(" + imgx + "px," + imgy + "px)");

	});

	//This function will fire every time the user mouses off of the image. It resets the translation back to 0.
	$('.img-container .grid-contents').mouseout(function(){
	  $(this).css("transform", "translate(0px,0px)");
	});

	$('.img-container').hover()(function() {
		$('.img-caption').css("opacity", "1");
	});	  
});