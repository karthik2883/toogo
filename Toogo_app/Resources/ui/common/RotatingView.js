function RotatingView(_args) {
    Ti.API.info("Create rotating  view ");

    var HeaderView = require("ui/common/HeaderView");

    var headerView = new HeaderView("");

    var Font = require("ui/style/Font");
    var fonts = new Font();

    var Image = require("ui/style/Image");
    var img = new Image();

    var animationDuration = 600;
    var platformWidth = Ti.Platform.displayCaps.platformWidth;

    var root = Ti.UI.createView({
        top : 0,
        left : 0,
        bottom : 0,
        right : 0,
        height : Ti.UI.SIZE,
        layout : 'vertical',
        width : Ti.UI.SIZE,

    });

    // root.add(headerView);

    var container = Ti.UI.createScrollableView({
        showPagingControl : false,
        scrollingEnabled : false,

    });
    var newView;
    for (var i = 0,
        l = _args.length; i < l; i++) {
        newView = Ti.UI.createView({
            top : 0,
            width : platformWidth,
            height : Ti.UI.SIZE,
            zIndex : 1
        });

        newView.add(_args[i]);
        container.addView(newView);

    }

    root.add(container);

    //set the currently visible index
    Ti.App.addEventListener('changeIndex', function(e) {

        switch(e.idx) {

        case 0:

            Ti.App.fireEvent('nameChange', {
                data : ""
            });
            break;

        case 1:

            Ti.App.fireEvent('nameChange', {
                data : "SIGN UP"
            });
            container.scrollToView(1);

            break;

        case 2:

            Ti.App.fireEvent('nameChange', {
                data : "STUDENT PROFILE SETUP"
            });
            container.scrollToView(2);
            break;

        case 3:

            Ti.App.fireEvent('nameChange', {
                data : "STUDENT PROFILE SETUP"
            });
            container.scrollToView(3);
            break;

        case 4:

            Ti.App.fireEvent('nameChange', {
                data : "MESSAGE"
            });
            container.scrollToView(6);
            break;

        case 5:

            Ti.App.fireEvent('nameChange', {
                data : "NEAR ME"
            });
            container.scrollToView(7);
            break;

        case 6:

            Ti.App.fireEvent('nameChange', {
                data : "FOLLOWERS"
            });
            container.scrollToView(4);
            break;

        default:

            Ti.App.fireEvent('nameChange', {
                data : ""
            });

            break;

        }
    });

    return root;
}

module.exports = RotatingView;
