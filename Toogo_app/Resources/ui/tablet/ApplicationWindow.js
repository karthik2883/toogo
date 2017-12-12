//Application Window Component Constructor
function ApplicationWindow() {
    //load component dependencies

    var platformWidth = Ti.Platform.displayCaps.platformWidth;
    var views = new Array();
    
    var loginView = require('ui/common/LoginView');
    var  registrationView= require('ui/common/RegistrationView');
    var  profileSetView= require('ui/common/ProfileSetView');
    var  profileView= require('ui/common/ProfileView');
    var  followerView = require('ui/common/FollowerView');
    var  localTutorView= require('ui/common/LocalTutorView');
    var  nearMeViewView= require('ui/common/NearMeView'); 
    var messageView = require('ui/common/MessageView'); 
    
    var messageListView =require('ui/common/MessageList');  
    
    
    
    var LoginView = new loginView();
    var RegistrationView = new registrationView();
    var ProfileSetView = new profileSetView();
    var ProfileView = new profileView();
    var FollowerView = new followerView();
    var LocalTutorView = new localTutorView();
    var NearMeViewView  = new nearMeViewView();
    var MessageView = new messageView();
    var MessageList = new messageListView();
     
    views.push(LoginView);
    views.push(RegistrationView);
    views.push(ProfileSetView);
    views.push(ProfileView);
    views.push(FollowerView);
  
    views.push(MessageList);
    views.push(MessageView);
    views.push(LocalTutorView);
    views.push(NearMeViewView);
    

    var RotatingView = require('ui/common/RotatingView');
    var RotatingView = new RotatingView(views);

    

    var Image = require("ui/style/Image");
    var img = new Image();



    //create component instance
    var self = Ti.UI.createWindow({
        backgroundColor:'#ffffff',
        fullscreen : true,
        navBarHidden : true,
        exitOnClose : false,
        titleControl: false,
        orientationModes : [Ti.UI.PORTRAIT],
        layout : 'vertical',
        height : Ti.Platform.displayCaps.platformHeight,
        backgroundImage : img.background,

    });
     
    self.add(RotatingView);
        
    return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;

