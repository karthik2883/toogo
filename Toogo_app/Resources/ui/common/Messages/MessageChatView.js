function MessageChatView() {
    var Font = require("ui/style/Font");
    var fonts = new Font();

    var Color = require("ui/style/Color");
    var fntColor = new Color();
    var chtListScrollView = Ti.UI.createScrollView({
        layout : "vertical",
        top : 0,
        height : "60%"

    });
    var customerCht = Ti.UI.createView({
        width : "25%",
        height : Ti.UI.SIZE,
        top : "4%",
    });

    var customerChtImage = Ti.UI.createImageView({
        image : '/images/messages/chat_gray.png',
    });

    var customerChtNamelbl = Ti.UI.createLabel({
        text : "Hi",
        color : "#000",
        font : {
            fontSize : 1
        },
    });

    customerChtImage.add(customerChtNamelbl);

    customerCht.add(customerChtImage);

    var userCht = Ti.UI.createView({
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        top : "10%",
    });

    var userChtImage = Ti.UI.createImageView({
        image : '/images/messages/chat.png',
    });

    var userChtNamelbl = Ti.UI.createLabel({
        text : "Hi",
        color : "#000",
        font : {
            fontSize : 1
        },
    });

    /*  var viewsearch = Ti.UI.createView({
     height:"10%",
     width : "100%",
     backgroundColor:"#6B6868",
     layout : "vertical",
     bottom:"0%"

     });

     var inputBoxSearch = Ti.UI.createTextField({
     id : "search",
     hintText : "Search",
     color : "black",
     textAlign : "left",
     width : "80%",
     left : "10%",
     height :"90%",
     top:"4%",
     bottom:"1%",
     borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,

     });

     viewsearch.add(inputBoxSearch);

     */

    userChtImage.add(userChtNamelbl);
    userCht.add(userChtImage);
    chtListScrollView.add(customerCht);
    chtListScrollView.add(userCht);

    return chtListScrollView;

}

module.exports = MessageChatView;
