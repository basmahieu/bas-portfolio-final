  
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
    menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
  });

 

 /* ==========================================================================
   Smooth Scroll
   ========================================================================== */

window.scroll({
  top: 0, 
  left: 0, 
  behavior: 'smooth'
});



