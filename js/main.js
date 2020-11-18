  
/* ==========================================================================
   Mobile - Navigation
   ========================================================================== */

 let menuIcon = $(".nav-menu");  
 let menuToggle = new TimelineMax({paused:true, reversed:true});
 let slideDown = $(".menu-container-mobile");
 let listItems = $(".list-items-mobile > li");

  TweenMax.set(slideDown, {
        y: '-100%'
    });
  
  // TweenMax.set(listItems, {
  //       y: '0'
  //   });
  
  menuToggle  
    .to(menuIcon, .5, {
    x:'-30',
    ease: Back.easeOut
    // ease: Back.easeIn.config(2.2)
    })
    .to(slideDown, 1, {
    y: '0%',
    ease: Back.easeOut
    })
    .staggerFrom(listItems, .25, {
      y: '-30',
      ease: Power1.easeOut
    }, .1);
  
  menuIcon.click(function () {
    menuToggle.reversed() ? menuToggle.restart(): menuToggle.reverse() ;
  });

function closeMenu (){
  menuToggle.reverse();
  console.log("menu-closed");
}

  document.getElementById("close-menu-1").addEventListener("click", closeMenu);
  document.getElementById("close-menu-2").addEventListener("click", closeMenu);




 

 /* ==========================================================================
   Smooth Scroll
   ========================================================================== */

window.scroll({
  top: 0, 
  left: 0, 
  behavior: 'smooth'
});



 /* ==========================================================================
   Tab Change
   ========================================================================== */
$(function() {
	// Get page title
  	var pageTitle = $("title").text();

	// Change page title on blur
	$(window).blur(function() {
	  $("title").text("Bas | I miss you! ♥");
	});

	// Change page title back on focus
	$(window).focus(function() {
	  $("title").text(pageTitle);
	});
});


 /* ==========================================================================
   Top button
   ========================================================================== */
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}