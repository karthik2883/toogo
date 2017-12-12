function LoginView() {
var platformWidth = Ti.Platform.displayCaps.platformWidth;
var vwwidth =  platformWidth-80 ;
var platformHeight = Ti.Platform.displayCaps.platformHeight;
	
	var Font = require("ui/style/Font");
	var fonts = new Font();

	var Color = require("ui/style/Color");
	var fntColor = new Color();
    
	var login = Ti.UI.createScrollView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		layout : "vertical",
		left:0,
		bottom:0,
		right:0,
		top:0,
	  
	});

	var view = Ti.UI.createView({
	    layout : "vertical",
		width :Ti.UI.FILL,
		height : Ti.UI.FILL,
		left:0,
        bottom:0,
        right:0,
        top:0,
        backgroundColor:"#ffffff",
	  
	});
    var paddingView = Ti.UI.createView({  height : (platformHeight/30)+'dp' });
	
	var imgView = Ti.UI.createImageView({
		image : '/images/login/logo.png',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	var viewUser = Ti.UI.createView({
		layout : "vertical",
		width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
		 

	});

	var inputBoxUser = Ti.UI.createTextField({
		id : "usernameTextField",
		borderRadius : "0sp",
		borderWidth : "0px",
		borderColor : "none",
		hintText : "USERNAME",
		left:0, 
		color : "black",
		textAlign : "left",
		width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,

	});
	var imgUserLine = Ti.UI.createImageView({
		image : 'images/login/line.png',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		 
	});

	viewUser.add(inputBoxUser);
	viewUser.add(imgUserLine);

	 
	var viewPass = Ti.UI.createView({
		layout : "vertical",
		width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
		 
		 
	});

	var inputboxPass = Ti.UI.createTextField({
		id : "passwordTextField",
		hintText : "PASSWORD",
		borderRadius : "0sp",
		borderWidth : "0px",
		borderColor : "none",
	 	textAlign : "left",
		color : "black",
		width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        left:0, 
	 

	});

	var imgPassLine = Ti.UI.createImageView({
		image : '/images/login/line.png',
		width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
		 
	});

	viewPass.add(inputboxPass);
	viewPass.add(imgPassLine);

	var loginbutton = Ti.UI.createButton({
		backgroundImage : '/images/login/btn_bg.png',
		title : "LOGIN",
		width :  vwwidth,
        height : "10%",
		textAlign:"center"
		 

	});

	var regbutton = Ti.UI.createButton({
		backgroundImage : '/images/login/btn_bg.png',
		title : "REGISTRATION",
		width :  vwwidth,
         height : "10%",
		textAlign:"center"
		
		 
	});
	regbutton.addEventListener('click', function() {
		var send = {
		   name: 'add_user',
		   user_id: 5,
		   pass: 'user',
		   role: 1,
		};
		// var NetcallReciver = require("ui/handheld/netcall/NetcallReciver");
		// var netcallReciver = new NetcallReciver("users/adduser",
		// function(data, xhr) {
				// if (data) {
// 					
		 		// alert(data);
		      // }
		// },send);
		 Ti.App.fireEvent('changeIndex', {
			idx : 1
		});
		 
	});

	loginbutton.addEventListener('click', function() {
		Ti.App.fireEvent('changeIndex', {
			idx : 5
		});
	});

	var forPass = Ti.UI.createLabel({
		text : "FORGET PASSWORD?",
		color : fntColor.grayTextColor
	});

	var fb = Ti.UI.createButton({
		backgroundImage : '/images/login/fb_btn.png',
	    width :  vwwidth,
        height : Ti.UI.SIZE,
       
	});
	view.add(paddingView);
    view.add(paddingView);
	view.add(imgView);
	view.add(paddingView);
	view.add(paddingView);
	view.add(paddingView);
	view.add(viewUser);
	view.add(paddingView);
	view.add(viewPass);
	view.add(paddingView);
    view.add(paddingView);
	view.add(loginbutton);
	view.add(paddingView);
	view.add(regbutton);
	view.add(paddingView);
	view.add(forPass);
	view.add(paddingView);
	view.add(fb);

	return view;

}

module.exports = LoginView; 