//FirstView Component Constructor
function UserListView($_arg) {
    var platformWidth = Ti.Platform.displayCaps.platformWidth;
    var Font = require("ui/style/Font");
    var fonts = new Font();

    var Color = require("ui/style/Color");
    var fntColor = new Color();
    var paddingScrollView = Ti.UI.createView({
        height : 12 + 'dp',
        width : 12 + 'dp'
    });
    var userListScrollView = Ti.UI.createScrollView({
        layout : "horizontal",
        top : 0,
        width:platformWidth

    });

    var userListView = Ti.UI.createScrollView({
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        layout : "vertical",
        top : 0,

    });

    function userlist(param) {

        for (var i = 0; i < param; i++) {
            var paddingView = Ti.UI.createView({
                height : 12 + 'dp',
                width : 12 + 'dp'
            });

            var mainView = Ti.UI.createView({
                layout : "vertical",
                width : Ti.UI.SIZE,
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
                width : Ti.UI.SIZE,
                height : Ti.UI.SIZE,

            });

            var profileImage = Ti.UI.createImageView({
                image : 'images/student_tutor_profile_popup/profile_pic.png',
                height : 60,
                width : 60,

            });

            profileImageView.add(profileImage);

            var profileLabel = Ti.UI.createView({
                width : Ti.UI.SIZE,
                height : Ti.UI.SIZE,
                layout : 'vertical',

            });
            var profiletopTitle = Ti.UI.createLabel({
                text : "Allen Siedon",
                color : fntColor.orange,
                width : Ti.UI.SIZE,
                height : Ti.UI.SIZE,
                textAlign : 'left',
                left : 0
            });

            var profiletopSubTitle = Ti.UI.createLabel({
                text : "Tutor",
                // color : fntColor.grayTextColor,
                width : Ti.UI.SIZE,
                height : Ti.UI.SIZE,
                textAlign : 'left',
                left : 0
            });

            profileLabel.add(profiletopTitle);
            profileLabel.add(profiletopSubTitle);

            var viewReply = Ti.UI.createView({
                width : Ti.UI.SIZE,
                height : Ti.UI.SIZE,

            });
            var imgprofileReply = Ti.UI.createImageView({
                image : 'images/messages/Reply.png',
                height : 20,
                width : 30,

            });

            viewReply.add(imgprofileReply);

            var viewline = Ti.UI.createView({
                layout : "vertical",
                height : Ti.UI.SIZE,
                width : Ti.UI.SIZE,

            });
            var viewContent = Ti.UI.createView({
                layout : "vertical",
                width : Ti.UI.SIZE,
                height : Ti.UI.SIZE,

            });
            var profileName = Ti.UI.createView({
                layout : 'vertical',
                width : Ti.UI.SIZE,
                height : Ti.UI.SIZE,

            });

            var profileNamesublbl = Ti.UI.createLabel({
                text : "Gandhinagar: India`s push to sts in large part with  f the Sabarmati river in Gujarat Gandhinagar: India`s push to sts in large part with  f the Sabarmati river in Gujarat",
                color : fntColor.grayTextColor,
                width : Ti.UI.SIZE,
                height : Ti.UI.SIZE,
            });

            profileName.add(profileNamesublbl);

            var imgprofileLine = Ti.UI.createImageView({
                image : 'images/login/line.png',
                width : platformWidth - 5,
                height : Ti.UI.SIZE,

            });

            viewline.add(imgprofileLine);
            view.add(profileImageView);
            view.add(paddingView);
            view.add(profileLabel);
            view.add(paddingView);
            view.add(paddingView);
            view.add(paddingView);
            view.add(paddingView);
            view.add(paddingView);
            view.add(paddingView);
            view.add(paddingView);
            view.add(paddingView);
            view.add(paddingView);
            view.add(viewReply);
            viewContent.add(profileName);
            //   viewContent.add(viewline);
            mainView.add(paddingView);
            mainView.add(view);
            mainView.add(paddingView);
            mainView.add(viewContent);
            mainView.add(paddingView);
            mainView.add(viewline);
            userListView.add(mainView);

        }
        return userListView;
    }


    userListScrollView.add(paddingScrollView);
    userListScrollView.add(userlist(20));
    userListScrollView.add(paddingScrollView);

    return userListScrollView;

}

module.exports = UserListView;
