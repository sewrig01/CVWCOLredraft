//thanks to treehouse for the code which I modified slightly for this gallery
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");



//A caption to overlay
$overlay.append($caption);

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image

$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");

  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);

  //Show the overlay.
  $overlay.show();

  //Get child's alt attribute and set caption

  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);

    //prevent scrolling
  var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
      ];
      var html = jQuery('html');
      html.data('scroll-position', scrollPosition);
      html.data('previous-overflow', html.css('overflow'));
      html.css('overflow', 'hidden');
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
  //restore scrolling
  var html = jQuery('html');
     var scrollPosition = html.data('scroll-position');
     html.css('overflow', html.data('previous-overflow'));
     window.scrollTo(scrollPosition[0], scrollPosition[1])

});
