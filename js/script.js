jQuery('h1').click(function(){
    alert("this is a heading tag")
});
jQuery('p').click(function(){
    alert("This is a paragraph")
  });

  jQuery('img').click(function(){
    alert("This is an image")
  });
  jQuery(document).ready(function() {
    jQuery("h1").click(function() {
      alert("This is a header.");
    });
  
    jQuery("p").click(function() {
      alert("This is a paragraph.");
    });
  
    jQuery("img").click(function() {
      alert("This is an image.");
    });
  });