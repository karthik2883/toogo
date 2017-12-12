function LoaderWindow() {
	var platformHeight = Ti.Platform.displayCaps.platformHeight;
	var LoaderWin = Ti.UI.createWindow({
		navBarHidden : true,
		exitOnClose : true,
		titleControl : false,
		orientationModes : [Ti.UI.PORTRAIT],
		height : platformHeight,
		width : Ti.UI.FILL,
		left : 0,

	});

	var imageView = Titanium.UI.createImageView({
		top :(platformHeight / 2) - 10,
		height : 50,
		width : 50,
		backgroundColor : 'transparent'
	});

	var loaderIndex = 1;
	// this function will be called by the setInterval
	function loadingAnimation() {
		// set the image property of the imageview by constructing the path with the loaderIndex variable
		imageView.image = '/images/loader/' + loaderIndex + '.png';
		//increment the index so that next time it loads the next image in the sequence
		loaderIndex++;
		// if you have reached the end of the sequence, reset it to 1
		if (loaderIndex === 8)
			loaderIndex = 1;
	}

	// start the setInverval -- adjust the time to make a smooth animation
	var loaderAnimate = setInterval(loadingAnimation, 150);
	LoaderWin.add(imageView);
	
	return LoaderWin;

};

module.exports = LoaderWindow;
