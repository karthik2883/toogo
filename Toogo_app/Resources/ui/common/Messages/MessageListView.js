//FirstView Component Constructor
function MessageListView($_arg) {
    var platformWidth = Ti.Platform.displayCaps.platformWidth;
    var HeaderView = require("ui/common/HeaderView");

    var headerView = new HeaderView("JHON DEO");
    var Font = require("ui/style/Font");
    var fonts = new Font();

    var Color = require("ui/style/Color");
    var fntColor = new Color();

    var msgListScrollView = Ti.UI.createScrollView({
        layout : "vertical",
        top : 0,

    });

    var msgListView = Ti.UI.createScrollView({
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        layout : "vertical",
        top : 0,
        left : 0,

    });
    msgListView.add(headerView);
    function msglist(param) {

        for (var i = 0; i < param; i++) {

            var mainView = Ti.UI.createView({
                layout : "vertical",
                width : platformWidth,
                height : Ti.UI.SIZE,

            });
            var view = Ti.UI.createView({
                layout : "horizontal",
                width : platformWidth,
                height : Ti.UI.SIZE,

            });
            //Profileview and image change
            var profileImageView = Ti.UI.createView({
                borderRadius : 30,
                width : "25%",
                height : Ti.UI.SIZE,
                left : "5%"
            });

            var profileImage = Ti.UI.createImageView({
                image : '/images/student_tutor_profile_popup/profile_pic.png'
            });
            profileImageView.add(profileImage);

            var profileName = Ti.UI.createView({
                height : "5%",
                left : "10%",
                layout : 'vertical',
                width : "25%",
                top : 5

            });

            var profileNamelbl = Ti.UI.createLabel({
                text : "John",
                color : fntColor.orange
            });

            var profileNamesublbl = Ti.UI.createLabel({
                text : "Michel",
                bottom : "1%",
                color : fntColor.grayTextColor
            });
            profileName.add(profileNamelbl);
            profileName.add(profileNamesublbl);

            var viewReply = Ti.UI.createView({
                layout : "horizontal",
                height : Ti.UI.SIZE,
                left : "15%",
                width : "20%"

            });
            var imgprofileReply = Ti.UI.createImageView({
                image : '/images/messages/Reply.png',
                width : Ti.UI.SIZE,
                height : Ti.UI.SIZE,

            });

            viewReply.add(imgprofileReply);

            var viewline = Ti.UI.createView({
                layout : "vertical",
                height : Ti.UI.SIZE,
                width : "90%",
                left : "10%",
                top : "10"

            });

            var imgprofileLine = Ti.UI.createImageView({
                image : '/images/login/line.png',
                width : Ti.UI.SIZE,
                height : Ti.UI.SIZE,
                left : 0,
            });

            viewline.add(imgprofileLine);
            view.add(profileImageView);
            view.add(profileName);
            view.add(viewReply);
            mainView.add(view);
            mainView.add(viewline);
            msgListView.add(mainView);

        }
        return msgListView;
    }


    msgListScrollView.add(msglist(20));

    return msgListScrollView;

}

module.exports = MessageListView;
