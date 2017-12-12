function ProfileSetView() {
    var platformHeight = Ti.Platform.displayCaps.platformHeight;
    var HeaderView = require("ui/common/HeaderView");

    var headerView = new HeaderView("");

    var Font = require("ui/style/Font");
    var fonts = new Font();

    var Color = require("ui/style/Color");
    var fntColor = new Color();

    var profileset = Ti.UI.createScrollView({
        width : Ti.UI.FILL,
        height : Ti.UI.FILL,
        //  contentHeight:platformHeight+150

    });
    var paddingView = Ti.UI.createView({
        height : (platformHeight / 25) + 'dp'
    });
    var view = Ti.UI.createView({
        layout : "vertical",
        width : Ti.UI.FILL,
        height : Ti.UI.FILL,
        backgroundColor : "#ffffff",
        left : 0,
        bottom : 0,
        right : 0,
        top : 0

    });
    view.add(headerView);

    var profileImageView = Ti.UI.createView({
        borderRadius : 50,
        width : 100,
        height : 100,
        top : "3%"
    });

    var profileImage = Ti.UI.createImageView({
        image : "images/student_tutor_profile_popup/profile_pic.png"

    });
    profileImageView.add(profileImage);

    var profileName = Ti.UI.createLabel({
        text : 'SET PROFILE PICTURE',
        color : fntColor.orange,
        font : {
            fontSize : fonts.fontvSmallText
        }
    });

    profileImage.addEventListener("click", function() {
        Titanium.Media.openPhotoGallery({
            success : function(event) {
                // called when media returned from the camera
                Ti.API.debug('Our type was: ' + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    var imageView = Ti.UI.createImageView({
                        width : profileImageView.width,
                        height : profileImageView.height,
                        image : event.media
                    });
                    profileImage.add(imageView);
                } else {
                    alert("got the wrong type back =" + event.mediaType);
                }
            },
            cancel : function() {
                // called when user cancels taking a picture
            },
            error : function(error) {
                // called when there's an error
                var a = Titanium.UI.createAlertDialog({
                    title : 'Camera'
                });
                if (error.code == Titanium.Media.NO_CAMERA) {
                    a.setMessage('Please run this test on device');
                } else {
                    a.setMessage('Unexpected error: ' + error.code);
                }
                a.show();
            },
            saveToPhotoGallery : true,
            // allowEditing and mediaTypes are iOS-only settings
            allowEditing : true,
            mediaTypes : [Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO]
        });

    });

    var viewName = Ti.UI.createView({
        layout : "vertical",
        height : Ti.UI.SIZE,
        width : Ti.UI.SIZE,
        left : "10%",

    });

    var inputBoxName = Ti.UI.createTextField({
        id : "usernameTextField",
        borderRadius : "0sp",
        borderWidth : "0px",
        borderColor : "none",
        hintText : "SCHOOL",
        color : "black",
        left : 0,
        textAlign : "left",
        width : "80%"

    });
    var imgNameLine = Ti.UI.createImageView({
        image : 'images/login/line.png',
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        left : 0,
    });

    viewName.add(inputBoxName);
    viewName.add(imgNameLine);

    var viewEmail = Ti.UI.createView({
        layout : "vertical",
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        left : "10%",

    });

    var inputBoxEmail = Ti.UI.createTextField({
        id : "usernameTextField",
        borderRadius : "0sp",
        borderWidth : "0px",

        borderColor : "none",
        hintText : "MAJOR",

        color : "black",
        left : 0,
        textAlign : "left",
        width : "80%"

    });
    var imgEmailLine = Ti.UI.createImageView({
        image : 'images/login/line.png',
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        left : 0,
    });

    viewEmail.add(inputBoxEmail);
    viewEmail.add(imgEmailLine);

    //New password
    var viewPassword = Ti.UI.createView({
        layout : "vertical",
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        left : "10%",

    });

    var inputBoxPassword = Ti.UI.createTextField({
        id : "usernameTextField",
        borderRadius : "0sp",
        borderWidth : "0px",
        //backgroundColor : "transparent",
        borderColor : "none",
        hintText : "CLASS OFF",
        //backgroundImage : '/images/form/3.png',
        //width : wd,
        color : "black",
        left : 0,
        textAlign : "left",
        width : "80%"

    });
    var imgPasswordLine = Ti.UI.createImageView({
        image : 'images/login/line.png',
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        left : 0,
    });

    viewPassword.add(inputBoxPassword);
    viewPassword.add(imgPasswordLine);

    //confirmPassword

    var viewconfirmPassword = Ti.UI.createView({
        layout : "vertical",
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        left : "10%",
        top : "2%"

    });

    var inputBoxconfirmPassword = Ti.UI.createTextField({
        id : "usernameTextField",
        borderRadius : "0sp",
        borderWidth : "0px",
        borderColor : "none",
        hintText : "CLASS",
        color : "black",
        left : 0,
        textAlign : "left",
        width : "80%"

    });
    var imgconfirmPasswordLine = Ti.UI.createImageView({
        image : 'images/login/line.png',
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        left : 0,
    });

    viewconfirmPassword.add(inputBoxconfirmPassword);
    viewconfirmPassword.add(imgconfirmPasswordLine);

    //signup
    var studentDiscl = Ti.UI.createLabel({
        text : "YOU CAN ADD A CLASS LATER IN THE MENU SECTION ",
        bottom : 0,
        color : fntColor.orange,
        textAlign : "left",
        left : "10%",
        font : {
            fontSize : fonts.fontvSmallText
        }

    });

    var saveButton = Ti.UI.createButton({
        backgroundImage : 'images/login/btn_bg.png',
        title : "SAVE PROFILE",
        width : "80%",
        height : "10%",

    });

    saveButton.addEventListener("click", function(e) {

        Ti.App.fireEvent('changeIndex', {
            idx : 3,
        });
    });
    view.add(profileImageView);
    view.add(profileName);
    view.add(paddingView);
    view.add(viewName);
    view.add(paddingView);

    view.add(viewEmail);
    view.add(paddingView);
    view.add(viewPassword);
    view.add(paddingView);
    view.add(viewconfirmPassword);
    view.add(paddingView);
    view.add(studentDiscl);
    view.add(saveButton);
    view.add(paddingView);
    profileset.add(view);
    return profileset;

}

module.exports = ProfileSetView;
