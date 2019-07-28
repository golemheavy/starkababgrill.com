		
		var bgImages = [
			"background2-reduced.JPEG",
			"background3-reduced.JPEG",
			"background4-reduced.JPEG",
			"background5-reduced.JPEG"
		];
		
		var bgMobileImages = [
			"background3-reduced-mobile.JPEG",
			"background5-reduced-mobile.JPEG"
		];
		
		var elem = document.getElementsByClassName("bigbackimg2");
		
		
		if (elem.length === 1) {
			elem[0].style.backgroundPositionX = "center";
			//elem[0].style.backgroundPositionY = "center";
			elem[0].style.backgroundSize = "cover";
    		elem[0].style.backgroundRepeat = "no-repeat";
			
			elem[0].style.backgroundAttachment = "fixed";
			elem[0].style.backgroundOrigin = "initial";
			elem[0].style.backgroundClip = "initial";
			elem[0].style.backgroundColor = "currentColor";
		}
		else {
			elem[0].style.background = "currentColor url(./assets/images/background/background2-reduced.JPEG) no-repeat center/cover fixed";
		}
		
		function changeToMobileImg(x) {
			let bodyElem = document.getElementsByTagName("body")[0];
			if (x.matches && bodyElem) { // If media query matches
				bodyElem.style.backgroundImage = "url(./assets/images/background/" + bgMobileImages[Math.floor(Math.random() * bgMobileImages.length)] + ")";
				//bodyElem.style.backgroundPositionX = "center";
				bodyElem.style.backgroundPositionY = "top";
			} else {
				//bodyElem.style.backgroundPositionX = "center";
				bodyElem.style.backgroundPositionY = "center";
				bodyElem.style.backgroundImage = "url(./assets/images/background/" + bgImages[Math.floor(Math.random() * bgImages.length)] + ")";
  }
}

var x = window.matchMedia("(max-width: 700px)");
changeToMobileImg(x); // Call listener function at run time
x.addListener(changeToMobileImg); // Attach listener function on state changes