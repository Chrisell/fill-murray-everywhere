javascript: (function(document){var images = document.getElementsByTagName("img"),length = images.length;for (var i = 0; i < length; i++) {images[i].src = "http://www.fillmurray.com/" + images[i].width + "/" + images[i].height;}})(document);