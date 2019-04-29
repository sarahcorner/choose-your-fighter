$(document).ready(function() {


	// $(".one").click(function() { // when the first button group is clicked, then it gets replaced by the second button group
	// 	$(this).fadeOut("slow");
	// 	$(".two").delay(500).fadeIn();
	// });
	$(".start").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(".home").fadeOut("slow");
		$(".menu").width(420);
		$(this).hide();
		$(".line").hide();
		$(".one").delay(500).fadeIn();
	});




	$(".popular").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(".one").fadeOut("slow");
		$(".two-popular").delay(700).fadeIn();
	});

	$(".nonconformist").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(".one").fadeOut("slow");
		$(".two-nonconformist").delay(700).fadeIn();
	});	

	$(".underdog").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(".one").fadeOut("slow");
		$(".two-underdog").delay(700).fadeIn();
	});	





	$(".two-nonconformist").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(this).fadeOut("slow");
		$(".three-nonconformist").delay(700).fadeIn();
	});

	$(".two-popular").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(this).fadeOut("slow");
		$(".three-popular").delay(700).fadeIn();
	});

	$(".two-underdog").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(this).fadeOut("slow");
		$(".three-underdog").delay(700).fadeIn();
	});





	$(".three-nonconformist").click(function() { // when the third button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$('.four-nonconformist').delay(700).fadeIn();
	});

	$(".three-popular").click(function() { // when the third button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$('.four-popular').delay(700).fadeIn();
	});

	$(".three-underdog").click(function() { // when the third button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$('.four-underdog').delay(700).fadeIn();
	});






	$(".four-nonconformist").click(function() { // when the fourth button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$(".five-nonconformist").delay(700).fadeIn(); // this line makes sure that the answer group, in its final filtered result, gets displayed by setting its opacity to 100%
	});

	$(".four-popular").click(function() { // when the fourth button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$(".five-popular").delay(700).fadeIn(); // this line makes sure that the answer group, in its final filtered result, gets displayed by setting its opacity to 100%
	});

	$(".four-underdog").click(function() { // when the fourth button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$(".five-underdog").delay(700).fadeIn(); // this line makes sure that the answer group, in its final filtered result, gets displayed by setting its opacity to 100%
	});




	$(".five-nonconformist").click(function() { // when the fourth button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$(".six").delay(700).fadeIn(); // this line makes sure that the answer group, in its final filtered result, gets displayed by setting its opacity to 100%
	});

	$(".five-popular").click(function() { // when the fourth button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$(".six").delay(700).fadeIn(); // this line makes sure that the answer group, in its final filtered result, gets displayed by setting its opacity to 100%
	});

	$(".five-underdog").click(function() { // when the fourth button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$(".six").delay(700).fadeIn(); // this line makes sure that the answer group, in its final filtered result, gets displayed by setting its opacity to 100%
	});




// QUESTION SIX


	$(".fantasy").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(this).fadeOut("slow");
		$(".final").delay(700).fadeTo("slow", 1);
	});

	$(".contemporary").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(this).fadeOut("slow");
		$(".final").delay(700).fadeTo("slow", 1);
	});	

	$(".scifi").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(this).fadeOut("slow");
		$(".final").delay(700).fadeTo("slow", 1);
	});	




// FINAL


$("#scifi").click(function() {
	$('.six').fadeOut("slow");
	$('.final').delay(700).fadeTo("slow", 1);
});

$("#contemporary").click(function() {
	$('.six').fadeOut("slow");
	$('.final').delay(700).fadeTo("slow", 1);	
});

$("#fantasy").click(function() {
	$('.six').fadeOut("slow");
	$('.final').delay(700).fadeTo("slow", 1);	
});








	// Making the Reset Button to Refresh the Page
	$('.reset').click(function() {
    	location.reload();
	});












// HOME SCREEN HOVER EFFECTS


$(function(){
  $("#nonconformist-strong").on({
   mouseenter: function(){
    $(this).attr('src','sprites/nonconformist-strong.gif');
  }
  });
});
$(function(){
  $("#underdog-strong").on({
   mouseenter: function(){
    $(this).attr('src','sprites/underdog-strong.gif');
  }
  });
});
$(function(){
  $("#popular-strong").on({
   mouseenter: function(){
    $(this).attr('src','sprites/popular-strong.gif');
  }
  });
});


$(function(){
  $("#nonconformist-dork").on({
   mouseenter: function(){
    $(this).attr('src','sprites/nonconformist-flirt.gif');
  }
  });
});
$(function(){
  $("#underdog-dork").on({
   mouseenter: function(){
    $(this).attr('src','sprites/underdog-flirt.gif');
  }
  });
});
$(function(){
  $("#popular-dork").on({
   mouseenter: function(){
    $(this).attr('src','sprites/popular-flirt.gif');
  }
  });
});



$(function(){
  $("#nonconformist-cool").on({
   mouseenter: function(){
    $(this).attr('src','sprites/nonconformist-cool.gif');
  }
  });
});
$(function(){
  $("#underdog-cool").on({
   mouseenter: function(){
    $(this).attr('src','sprites/underdog-cool.gif');
  }
  });
});
$(function(){
  $("#popular-cool").on({
   mouseenter: function(){
    $(this).attr('src','sprites/popular-cool.gif');
  }
  });
});



$(function(){
  $("#nonconformist-tragic").on({
   mouseenter: function(){
    $(this).attr('src','sprites/nonconformist-tragic.gif');
  }
  });
});
$(function(){
  $("#underdog-tragic").on({
   mouseenter: function(){
    $(this).attr('src','sprites/underdog-tragic.gif');
  }
  });
});
$(function(){
  $("#popular-tragic").on({
   mouseenter: function(){
    $(this).attr('src','sprites/popular-tragic.gif');
  }
  });
});


$(function(){
  $("#nonconformist-epic").on({
   mouseenter: function(){
    $(this).attr('src','sprites/nonconformist-epic.gif');
  }
  });
});
$(function(){
  $("#underdog-epic").on({
   mouseenter: function(){
    $(this).attr('src','sprites/underdog-epic.gif');
  }
  });
});
$(function(){
  $("#popular-epic").on({
   mouseenter: function(){
    $(this).attr('src','sprites/popular-epic.gif');
  }
  });
});


$(function(){
  $("#nonconformist-anti").on({
   mouseenter: function(){
    $(this).attr('src','sprites/nonconformist-anti.gif');
  }
  });
});
$(function(){
  $("#underdog-anti").on({
   mouseenter: function(){
    $(this).attr('src','sprites/underdog-anti.gif');
  }
  });
});
$(function(){
  $("#popular-anti").on({
   mouseenter: function(){
    $(this).attr('src','sprites/popular-anti.gif');
  }
  });
});


$(function(){
  $("#nonconformist-vampire").on({
   mouseenter: function(){
    $(this).attr('src','sprites/nonconformist-vampire.gif');
  }
  });
});
$(function(){
  $("#underdog-vampire").on({
   mouseenter: function(){
    $(this).attr('src','sprites/underdog-vampire.gif');
  }
  });
});
$(function(){
  $("#popular-vampire").on({
   mouseenter: function(){
    $(this).attr('src','sprites/popular-vampire.gif');
  }
  });
});


$(function(){
  $("#nonconformist-werewolf").on({
   mouseenter: function(){
    $(this).attr('src','sprites/nonconformist-werewolf.gif');
  }
  });
});
$(function(){
  $("#underdog-werewolf").on({
   mouseenter: function(){
    $(this).attr('src','sprites/underdog-werewolf.gif');
  }
  });
});
$(function(){
  $("#popular-werewolf").on({
   mouseenter: function(){
    $(this).attr('src','sprites/popular-werewolf.gif');
  }
  });
});


$(function(){
  $("#nonconformist-sorcerer").on({
   mouseenter: function(){
    $(this).attr('src','sprites/nonconformist-sorcerer.gif');
  }
  });
});
$(function(){
  $("#underdog-sorcerer").on({
   mouseenter: function(){
    $(this).attr('src','sprites/underdog-sorcerer.gif');
  }
  });
});
$(function(){
  $("#popular-sorcerer").on({
   mouseenter: function(){
    $(this).attr('src','sprites/popular-sorcerer.gif');
  }
  });
});



$(function(){
  $("#nonconformist-pirate").on({
   mouseenter: function(){
    $(this).attr('src','sprites/nonconformist-pirate.gif');
  }
  });
});
$(function(){
  $("#underdog-pirate").on({
   mouseenter: function(){
    $(this).attr('src','sprites/underdog-pirate.gif');
  }
  });
});
$(function(){
  $("#popular-pirate").on({
   mouseenter: function(){
    $(this).attr('src','sprites/popular-pirate.gif');
  }
  });
});



$(function(){
  $("#nonconformist-assassin").on({
   mouseenter: function(){
    $(this).attr('src','sprites/nonconformist-assassin.gif');
  }
  });
});
$(function(){
  $("#underdog-assassin").on({
   mouseenter: function(){
    $(this).attr('src','sprites/underdog-assassin.gif');
  }
  });
});
$(function(){
  $("#popular-assassin").on({
   mouseenter: function(){
    $(this).attr('src','sprites/popular-assassin.gif');
  }
  });
});


$(function(){
  $("#nonconformist-royal").on({
   mouseenter: function(){
    $(this).attr('src','sprites/nonconformist-royal.gif');
  }
  });
});
$(function(){
  $("#underdog-royal").on({
   mouseenter: function(){
    $(this).attr('src','sprites/underdog-royal.gif');
  }
  });
});
$(function(){
  $("#popular-royal").on({
   mouseenter: function(){
    $(this).attr('src','sprites/popular-royal.gif');
  }
  });
});






	$(".non").mouseenter(function() {
		$(".non-idle").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".non").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".non-idle").hide();
	});


	$(".und").mouseenter(function() {
		$(".und-idle").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".und").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".und-idle").hide();
	});

	$(".pop").mouseenter(function() {
		$(".pop-idle").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".pop").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".pop-idle").hide();
	});




	$(".nonconformist-strong").mouseenter(function() {
		$(".non-strong").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".nonconformist-strong").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".non-strong").hide();
	});


	$(".underdog-strong").mouseenter(function() {
		$(".und-strong").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".underdog-strong").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".und-strong").hide();
	});

	$(".popular-strong").mouseenter(function() {
		$(".pop-strong").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".popular-strong").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".pop-strong").hide();
	});





	$(".nonconformist-dork").mouseenter(function() {
		$(".non-dork").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".nonconformist-dork").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".non-dork").hide();
	});


	$(".underdog-dork").mouseenter(function() {
		$(".und-dork").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".underdog-dork").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".und-dork").hide();
	});

	$(".popular-dork").mouseenter(function() {
		$(".pop-dork").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".popular-dork").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".pop-dork").hide();
	});





	$(".nonconformist-cool").mouseenter(function() {
		$(".non-cool").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".nonconformist-cool").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".non-cool").hide();
	});


	$(".underdog-cool").mouseenter(function() {
		$(".und-cool").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".underdog-cool").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".und-cool").hide();
	});

	$(".popular-cool").mouseenter(function() {
		$(".pop-cool").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".popular-cool").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".pop-cool").hide();
	});






	$(".nonconformist-anti").mouseenter(function() {
		$(".non-anti").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".nonconformist-anti").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".non-anti").hide();
	});


	$(".underdog-anti").mouseenter(function() {
		$(".und-anti").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".underdog-anti").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".und-anti").hide();
	});

	$(".popular-anti").mouseenter(function() {
		$(".pop-anti").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".popular-anti").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".pop-anti").hide();
	});





	$(".nonconformist-epic").mouseenter(function() {
		$(".non-epic").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".nonconformist-epic").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".non-epic").hide();
	});


	$(".underdog-epic").mouseenter(function() {
		$(".und-epic").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".underdog-epic").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".und-epic").hide();
	});

	$(".popular-epic").mouseenter(function() {
		$(".pop-epic").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".popular-epic").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".pop-epic").hide();
	});









	$(".nonconformist-tragic").mouseenter(function() {
		$(".non-tragic").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".nonconformist-tragic").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".non-tragic").hide();
	});


	$(".underdog-tragic").mouseenter(function() {
		$(".und-tragic").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".underdog-tragic").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".und-tragic").hide();
	});

	$(".popular-tragic").mouseenter(function() {
		$(".pop-tragic").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".popular-tragic").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".pop-tragic").hide();
	});









	$(".nonconformist-werewolf").mouseenter(function() {
		$(".non-werewolf").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".nonconformist-werewolf").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".non-werewolf").hide();
	});


	$(".underdog-werewolf").mouseenter(function() {
		$(".und-werewolf").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".underdog-werewolf").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".und-werewolf").hide();
	});

	$(".popular-werewolf").mouseenter(function() {
		$(".pop-werewolf").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".popular-werewolf").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".pop-werewolf").hide();
	});








	$(".nonconformist-vampire").mouseenter(function() {
		$(".non-vampire").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".nonconformist-vampire").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".non-vampire").hide();
	});


	$(".underdog-vampire").mouseenter(function() {
		$(".und-vampire").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".underdog-vampire").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".und-vampire").hide();
	});

	$(".popular-vampire").mouseenter(function() {
		$(".pop-vampire").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".popular-vampire").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".pop-vampire").hide();
	});








	$(".nonconformist-sorcerer").mouseenter(function() {
		$(".non-sorcerer").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".nonconformist-sorcerer").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".non-sorcerer").hide();
	});


	$(".underdog-sorcerer").mouseenter(function() {
		$(".und-sorcerer").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".underdog-sorcerer").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".und-sorcerer").hide();
	});

	$(".popular-sorcerer").mouseenter(function() {
		$(".pop-sorcerer").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".popular-sorcerer").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".pop-sorcerer").hide();
	});








	$(".nonconformist-royal").mouseenter(function() {
		$(".non-royal").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".nonconformist-royal").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".non-royal").hide();
	});


	$(".underdog-royal").mouseenter(function() {
		$(".und-royal").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".underdog-royal").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".und-royal").hide();
	});

	$(".popular-royal").mouseenter(function() {
		$(".pop-royal").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".popular-royal").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".pop-royal").hide();
	});







	$(".nonconformist-assassin").mouseenter(function() {
		$(".non-assassin").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".nonconformist-assassin").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".non-assassin").hide();
	});


	$(".underdog-assassin").mouseenter(function() {
		$(".und-assassin").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".underdog-assassin").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".und-assassin").hide();
	});

	$(".popular-assassin").mouseenter(function() {
		$(".pop-assassin").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".popular-assassin").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".pop-assassin").hide();
	});







	$(".nonconformist-pirate").mouseenter(function() {
		$(".non-pirate").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".nonconformist-pirate").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".non-pirate").hide();
	});


	$(".underdog-pirate").mouseenter(function() {
		$(".und-pirate").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".underdog-pirate").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".und-pirate").hide();
	});

	$(".popular-pirate").mouseenter(function() {
		$(".pop-pirate").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".popular-pirate").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".pop-pirate").hide();
	});







	$(".fantasy-final").mouseenter(function() {
		$(".fan-final").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".fantasy-final").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".fan-final").hide();
	});


	$(".contemp-final").mouseenter(function() {
		$(".con-final").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".contemp-final").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".con-final").hide();
	});

	$(".scifi-final").mouseenter(function() {
		$(".scfi-final").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".scifi-final").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".scfi-final").hide();
	});



	$(".for-hannah").mouseenter(function() {
		$(".fission").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".for-hannah").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".fission").hide();
	});





	$(".mini-non").mouseenter(function() {
		$(".non-mini").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".mini-non").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".non-mini").hide();
	});


	$(".mini-pop").mouseenter(function() {
		$(".pop-mini").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".mini-pop").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".pop-mini").hide();
	});

	$(".mini-und").mouseenter(function() {
		$(".und-mini").show(); // reveals blue strip when cursor is over the yellow square
	});

	$(".mini-und").mouseleave(function() { // this just reverses everything when cursor leaves the yellow square
		$(".und-mini").hide();
	});





});


$(document).on('mousemove', function(e){ // Enables the blue strip to follow the mouse cursor

    $('.follow').css({
       left:  e.pageX + 20,  // Set "0" to any other integer to offset its position 
       top:   e.pageY + -20   // Ditto
    });



});


$(document).on('mousemove', function(e){ // Enables the blue strip to follow the mouse cursor

    $('.follow-fission').css({
       left:  e.pageX + 20,  // Set "0" to any other integer to offset its position 
       top:   e.pageY + -20   // Ditto
    });



});


$(document).on('mousemove', function(e){ // Enables the blue strip to follow the mouse cursor

    $('.follow-mini').css({
       left:  e.pageX + -500,  // Set "0" to any other integer to offset its position 
       top:   e.pageY + -200   // Ditto
    });



});










