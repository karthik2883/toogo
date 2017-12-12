function MessageView() {
    var HeaderView = require("ui/common/HeaderView");

    var headerView = new HeaderView("");
    var Font = require("ui/style/Font");
    var fonts = new Font();

    var Color = require("ui/style/Color");
    var fntColor = new Color();

    var msgChatView = require('ui/common/Messages/MessageChatView');
    var MessageChatView = new msgChatView();
    var messageMainView = Ti.UI.createScrollView({
        layout : "vertical",
        width : Ti.UI.FILL,
        height : Ti.UI.FILL,
        top : 0,
        backgroundColor : "#ffffff"

    });
    messageMainView.add(headerView);
    var viewsearch = Ti.UI.createView({
        height : "10%",
        width : "100%",
        backgroundColor : "#6B6868",
        layout : "horizontal",
        bottom : "5%"

    });

    var inputBoxSearch = Ti.UI.createTextField({
        id : "search",
        hintText : "Message",
        color : "black",
        textAlign : "left",
        width : "70%",
        left : "2%",
        top : 5,
        height : '80%',
        borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,

    });

    var btn = Ti.UI.createButton({
        title : "Send",
        width : "20%",
        id : 'usermsg',
        borderRadius : "10",
        borderWidth : 1,
        left : "1%",
        top : 8,
        backgroundColor : "orange",
        color : "white"

    });

    viewsearch.add(inputBoxSearch);
    viewsearch.add(btn);

    var message = Ti.UI.createScrollView({
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        layout : "vertical",

    });
    message.add(MessageChatView);
    messageMainView.add(message);
    messageMainView.add(viewsearch);

    return messageMainView;

}

module.exports = MessageView;
