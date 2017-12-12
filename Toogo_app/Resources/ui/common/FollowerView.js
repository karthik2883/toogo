function FollowerView() {
    var HeaderView = require("ui/common/HeaderView");

    var headerView = new HeaderView("");
    var Font = require("ui/style/Font");
    var fonts = new Font();
    var userListView = require('ui/common/UserListView/UserListView');
    var UserListView = new userListView();

    var Color = require("ui/style/Color");
    var fntColor = new Color();

    var followMainView = Ti.UI.createView({
        layout : "vertical",
        width : Ti.UI.FILL,
        height : Ti.UI.FILL,
        top : 0,
        backgroundColor : "#fffffff"

    });
   followMainView.add(headerView);
   
    var follower = Ti.UI.createScrollView({
        width : Ti.UI.FILL,
        height : Ti.UI.FILL,
        layout : "vertical",

    });

    var view = Ti.UI.createView({
        layout : "vertical",
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        top : 0,

    });
    var buttonView = Ti.UI.createView({
        layout : "horizontal",
        width : "100%",
        height : Ti.UI.SIZE,
        top : "5%",

    });

    var selectStudent = Ti.UI.createButton({
        backgroundImage : 'images/switch/select_student.png',
        backgroundSelectedImage : 'images/switch/student.png',
        width : "45%",
        left : "5%",
        height : Ti.UI.SIZE,
        title:'INBOX'

    });

    var selectTutor = Ti.UI.createButton({
        backgroundImage : 'images/switch/tutor.png',
        backgroundSelectedImage : 'images/switch/select_tutor.png',
        width : "45%",
        height : Ti.UI.SIZE,
        title:'SENT'
    });

    buttonView.add(selectStudent);
    buttonView.add(selectTutor);

    selectStudent.addEventListener("click", function(e) {

        if (selectStudent.backgroundImage == 'images/switch/select_student.png') {
            selectStudent.backgroundImage = 'images/switch/student.png';
            selectTutor.backgroundImage = 'images/switch/select_tutor.png';

        } else {
            selectStudent.backgroundImage = 'images/switch/select_student.png';
            selectTutor.backgroundImage = 'images/switch/tutor.png';

        }

    });

    selectTutor.addEventListener("click", function(e) {

        if (selectTutor.backgroundImage == 'images/switch/select_tutor.png') {
            selectStudent.backgroundImage = 'images/switch/select_student.png';
            selectTutor.backgroundImage = 'images/switch/tutor.png';

        } else {
            selectStudent.backgroundImage = 'images/switch/student.png';
            selectTutor.backgroundImage = 'images/switch/select_tutor.png';

        }

    });

    var viewsearch = Ti.UI.createView({
        height : "12%",
        width : "100%",
        backgroundColor : "#6B6868",
        layout : "vertical",
        top : "2%"

    });

    var inputBoxSearch = Ti.UI.createTextField({
        id : "search",
        hintText : "Search",
        color : "black",
        textAlign : "left",
        width : "90%",
        left : "5%",
        height : "70%",
        top : "10%",
        bottom : "1%",
        borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,

    });

    viewsearch.add(inputBoxSearch);

    followMainView.add(buttonView);
    followMainView.add(viewsearch);

    follower.add(view);
    follower.add(UserListView);
    followMainView.add(follower);

    return followMainView;

}

module.exports = FollowerView;
