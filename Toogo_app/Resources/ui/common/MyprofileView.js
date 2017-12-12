function MyprofileView() {
    var HeaderView = require("ui/common/HeaderView");

    var headerView = new HeaderView("");
    var Font = require("ui/style/Font");
    var fonts = new Font();
    var userListView = require('ui/common/UserListView/UserListView');
    var UserListView = new userListView();

    var Color = require("ui/style/Color");
    var fntColor = new Color();

    var myProfileView = Ti.UI.createView({
        layout : "vertical",
        width : Ti.UI.FILL,
        height : Ti.UI.FILL,
        top : 0,
        backgroundColor : "#fffffff"

    });
    myProfileView.add(headerView);

    var myProFileMainView = Ti.UI.createScrollView({
        width : Ti.UI.FILL,
        height : Ti.UI.FILL,
        layout : "horizontal",

    });

    var viewImage = Ti.UI.createView({
        layout : "vertical",
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        top : 0,

    });

    var viewProfile = Ti.UI.createView({
        layout : "vertical",
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        top : 0,

    });
    myProFileMainView.add(viewImage);
    myProFileMainView.add(viewProfile);
    myProfileView .add(myProFileMainView);
    return myProfileView;

}

module.exports = MyprofileView;
