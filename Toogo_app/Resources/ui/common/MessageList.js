function MessageList() {
    var Font = require("ui/style/Font");
    var fonts = new Font();
    var Color = require("ui/style/Color");
    var fntColor = new Color();
    var msgListView = require('ui/common/Messages/MessageListView');
    var MessageListView = new msgListView();

    MessageListView.addEventListener('click', function() {
        
         Ti.App.fireEvent('changeIndex', {
            idx : 2
        });
         
    });
    
    var messageList = Ti.UI.createScrollView({
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        layout : "vertical",
        backgroundColor:"#ffffff"
        
        
    });

    messageList.add(MessageListView);

    return messageList;

}

module.exports = MessageList;
