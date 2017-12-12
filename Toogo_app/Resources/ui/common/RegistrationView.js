function RegistrationView() {

    var HeaderView = require("ui/common/HeaderView");

    var headerView = new HeaderView("");
    var Font = require("ui/style/Font");
    var fonts = new Font();

    var Color = require("ui/style/Color");
    var fntColor = new Color();

    var registration = Ti.UI.createScrollView({
        width : Ti.UI.FILL,
        height : Ti.UI.FILL,

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

    //name
    var viewName = Ti.UI.createView({
        layout : "vertical",
        height : "10%",
        width : "80%",
        left : "10%",
        top : "2%"

    });

    var inputBoxName = Ti.UI.createTextField({
        id : "usernameTextField",
        borderRadius : "0sp",
        borderWidth : "0px",
        //backgroundColor : "transparent",
        borderColor : "none",
        hintText : "FIRST + LAST NAME",
        //backgroundImage : '/images/form/3.png',
        //width : wd,
        color : "black",
        left : 0,
        textAlign : "left",
        width : "80%"

    });
    var imgNameLine = Ti.UI.createImageView({
        image : '/images/login/line.png',
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        left : 0,
    });

    viewName.add(inputBoxName);
    viewName.add(imgNameLine);
    //

    var viewEmail = Ti.UI.createView({
        layout : "vertical",
        height : "10%",
        width : "80%",
        left : "10%",
        top : "2%"

    });

    var inputBoxEmail = Ti.UI.createTextField({
        id : "usernameTextField",
        borderRadius : "0sp",
        borderWidth : "0px",
        //backgroundColor : "transparent",
        borderColor : "none",
        hintText : "EMAIL",
        color : "black",
        left : 0,
        textAlign : "left",
        width : "80%"

    });
    var imgEmailLine = Ti.UI.createImageView({
        image : '/images/login/line.png',
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        left : 0,
    });

    viewEmail.add(inputBoxEmail);
    viewEmail.add(imgEmailLine);

    //New password
    var viewPassword = Ti.UI.createView({
        layout : "vertical",
        height : "10%",
        width : "80%",
        left : "10%",
        top : "2%"

    });

    var inputBoxPassword = Ti.UI.createTextField({
        id : "usernameTextField",
        borderRadius : "0sp",
        borderWidth : "0px",
        //backgroundColor : "transparent",
        borderColor : "none",
        hintText : "NEW PASSWORD",
        //backgroundImage : '/images/form/3.png',
        //width : wd,
        color : "black",
        left : 0,
        textAlign : "left",
        width : "80%"

    });
    var imgPasswordLine = Ti.UI.createImageView({
        image : '/images/login/line.png',
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        left : 0,
    });

    viewPassword.add(inputBoxPassword);
    viewPassword.add(imgPasswordLine);

    //confirmPassword

    var viewconfirmPassword = Ti.UI.createView({
        layout : "vertical",
        height : "10%",
        width : "80%",
        left : "10%",
        top : "2%"

    });

    var inputBoxconfirmPassword = Ti.UI.createTextField({
        id : "usernameTextField",
        borderRadius : "0sp",
        borderWidth : "0px",
        borderColor : "none",
        hintText : "CONFIRM PASSWORD",
        color : "black",
        left : 0,
        textAlign : "left",
        width : "80%"

    });
    var imgconfirmPasswordLine = Ti.UI.createImageView({
        image : '/images/login/line.png',
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        left : 0,
    });

    viewconfirmPassword.add(inputBoxconfirmPassword);
    viewconfirmPassword.add(imgconfirmPasswordLine);
    // Signup as
    var signUpAs = Ti.UI.createLabel({
        text : "SIGN UP AS:",
        bottom : "0",
        color : fntColor.grayTextColor,
        textAlign : "left",
        left : "10%",

    });

    //signup

    var buttonView = Ti.UI.createView({
        layout : "horizontal",
        width : "90%",
        height : "10%",
        left : "10%",
        bottom : "2%"

    });

    var selectStudent = Ti.UI.createButton({
        backgroundImage : '/images/switch/select_student.png',
        backgroundSelectedImage : '/images/switch/student.png',
        width : "45%",
        height : "80%",
        title : "Student"

    });

    var selectTutor = Ti.UI.createButton({
        backgroundImage : '/images/switch/tutor.png',
        backgroundSelectedImage : '/images/switch/select_tutor.png',
        width : "45%",
        height : "80%",
        title : "Tutor"

    });

    buttonView.add(selectStudent);
    buttonView.add(selectTutor);

    selectStudent.addEventListener("click", function(e) {

        if (selectStudent.backgroundImage == '/images/switch/select_student.png') {
            selectStudent.backgroundImage = '/images/switch/student.png';
            selectTutor.backgroundImage = '/images/switch/select_tutor.png';

        } else {
            selectStudent.backgroundImage = '/images/switch/select_student.png';
            selectTutor.backgroundImage = '/images/switch/tutor.png';

        }

    });

    selectTutor.addEventListener("click", function(e) {

        if (selectTutor.backgroundImage == '/images/switch/select_tutor.png') {
            selectStudent.backgroundImage = '/images/switch/select_student.png';
            selectTutor.backgroundImage = '/images/switch/tutor.png';

        } else {
            selectStudent.backgroundImage = '/images/switch/student.png';
            selectTutor.backgroundImage = '/images/switch/select_tutor.png';

        }

    });

    //signup
    var studentDiscl = Ti.UI.createLabel({
        text : "Student can also be Tutor , Please check in menu section",
        bottom : 0,
        color : fntColor.grayTextColor,
        textAlign : "left",
        left : "10%",

    });

    var signUpButton = Ti.UI.createButton({
        backgroundImage : '/images/login/btn_bg.png',
        title : "SIGN UP",
        width : "80%",
        height : "10%",
        top : "4%"

    });

    signUpButton.addEventListener("click", function(e) {
        var profile = "STUDENT PROFILE SETUP";
        if (selectTutor.backgroundImage == '/images/switch/select_tutor.png') {
            profile = "TUTOR PROFILE SETUP";
            Ti.App.fireEvent('changeIndex', {
                idx : 2,
                profile : profile
            });
        } else {

            Ti.App.fireEvent('changeIndex', {
                idx : 2,
                profile : profile
            });
        }

    });

    view.add(viewName);
    view.add(viewEmail);
    view.add(viewPassword);
    view.add(viewconfirmPassword);
    view.add(signUpAs);
    view.add(buttonView);
    view.add(studentDiscl);
    view.add(signUpButton);
    registration.add(view);
    return registration;

}

module.exports = RegistrationView;
