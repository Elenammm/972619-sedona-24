var link = document.querySelector(".interested-button");
var popup = document.querySelector(".booking");
	popup.classList.remove("booking-show");
	link.addEventListener("click", function (evt) {
	    evt.preventDefault();
    });
	popup.classList.toggle("booking-show");
	close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("booking-show");
 	    });
var mapPopup = document.querySelector(".map");
var mapLink = document.querySelector(".map");
	mapPopup.classList.remove("booking-show");
	mapLink.addEventListener("click", function (evt) {
   		evt.preventDefault();
    	mapPopup.classList.toggle("booking-show");
  		});