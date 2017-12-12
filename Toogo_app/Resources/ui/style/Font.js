function Font() {
	//Globally available theme object to hold theme colors/constants
	var fontFamily;
	if (Titanium.Platform.name == "iPhone OS") {

		fontFamily = {
			font : 'inherit',
			fontSmallText : 15,
			fontvSmallText : 12,
			fontvvSmallText : 5,

		};

	} else {

		fontFamily = {
			font : 'inherit',
			fontSmallText : 15,
			fontvSmallText : 12,
			fontvvSmallText : 5,
		};
	}

	return fontFamily;
}

module.exports = Font; 