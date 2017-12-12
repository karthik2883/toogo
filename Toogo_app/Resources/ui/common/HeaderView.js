//FirstView Component Constructor
function HeaderView($_arg) {

    var Font = require("ui/style/Font");
    var fonts = new Font();
    var Color = require("ui/style/Color");
    var colors = new Color();
    var txt;

   
    var header = Ti.UI.createScrollView({
        
        height : Ti.UI.SIZE,
        width : '100%',
        zIndex : 1,
        layout : "horrizontal",
        top : 0,
        height : 55,
        
    });

    var headview = Ti.UI.createView({
        height : 55,
        width : Ti.Platform.displayCaps.platformWidth,
        layout : "horrizontal",
        top : 0

    });
    
    

    var listMenu = Ti.UI.createButton({
        backgroundImage : '/images/student_tutor_profile_popup/menu.png',
        left : 0,
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
      
    });
        

    if ($_arg != "") {
        txt = Ti.UI.createLabel({
            text : $_arg,
            color : colors.orange,
            font : {
                fontSize : 20,
                fontFamily : 'Inherit',
                fontWeight : 'bold'
            },
            textAlign : "center"

        });
    } else {
        txt = Ti.UI.createLabel({
            text : "",
            color : colors.orange,
        });

    }
    headview.add(txt);
  
    

    Ti.App.addEventListener('nameChange', function(e) {
        
        headview.backgroundImage = '';
        headview.remove(txt);
       

        txt = Ti.UI.createLabel({
            text : "" + e.data + "",
            color : colors.orange,
            font : {
                fontSize : 20,
                fontFamily : 'Inherit',
                fontWeight : 'bold'
            }

        });
        headview.add(txt);
       

        if (e.data != "") {
           Ti.API.info(e.data +"");
            headview.add(listMenu);
            headview.backgroundImage= '/images/student_tutor_profile_popup/header_bg.png';
            
             } else {
            headview.remove(listMenu);
           
           

        }

    });

    header.add(headview);
    
    return header;
}

module.exports = HeaderView;
