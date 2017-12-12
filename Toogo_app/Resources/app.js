var MASlidingMenu = require('/lib/MASlidingMenu');

var MenuView = require('/ui/MenuView');

//load component dependencies

var platformWidth = Ti.Platform.displayCaps.platformWidth;
var views = new Array();

var loginView = require('ui/common/LoginView');
var registrationView = require('ui/common/RegistrationView');
var profileSetView = require('ui/common/ProfileSetView');
var profileView = require('ui/common/ProfileView');
var followerView = require('ui/common/FollowerView');
var localTutorView = require('ui/common/LocalTutorView');
var nearMeViewView = require('ui/common/NearMeView');
var messageView = require('ui/common/MessageView');
var myprofileView = require('ui/common/MyprofileView');

var messageListView = require('ui/common/MessageList');

var LoginView = new loginView();
var RegistrationView = new registrationView();
var ProfileSetView = new profileSetView();
var ProfileView = new profileView();
var FollowerView = new followerView();
var LocalTutorView = new localTutorView();
 
var MessageView = new messageView();
var MyprofileView = myprofileView();
var MessageList = new messageListView();
var NearMeView = new nearMeViewView();

views.push(LoginView);
views.push(RegistrationView);
views.push(ProfileSetView);
views.push(ProfileView);
views.push(FollowerView);

views.push(MessageList);
views.push(MessageView);
views.push(NearMeView);
views.push(LocalTutorView);

var RotatingView = require('ui/common/RotatingView');
var RotatingView = new RotatingView(views);
var slidingMenuFirst = "";

// Each row with a view property when clicked will change to that view (any view works except tabgroups and windows)
// If the row does not have a view property, but the switch event still fires
Ti.App.addEventListener('makeItslideOpenFirstInstance', function(e) {
    var data = [
    {
        title : '',
        hasDetail : false,
        view : RotatingView,
        img : '',
        ht : 44
    },
    {
        title : 'Near Me',
        hasDetail : false,
        view : RotatingView[4],
        img : '/images/slidenav/near_me.png',
        ht : 44
    }, {
        title : 'Messages',
        hasDetail : false,
        view : RotatingView[4],
        img : '/images/slidenav/msg.png',
        ht : 44
    }, {
        title : 'Profile',
        hasDetail : false,
        view : RotatingView[2],
        img : '/images/slidenav/profile.png',
        ht : 44
    }, {
        title : 'Status',
        hasDetail : false,
        //view : RotatingView,
        img : '/images/slidenav/status.png',
        ht : 44
    }, {
        title : 'Tips',
        hasDetail : false,
        //view : RotatingView,
        img : '/images/slidenav/status.png',
        ht : 44
    }, {
        title : 'Supports/Feedback',
        hasDetail : false,
        // view : RotatingView,
        img : '/images/slidenav/Support.png',
        ht : 44
    }, {
        title : 'Setting',
        hasDetail : false,
        // view : RotatingView,
        img : '/images/slidenav/setting.png',
        ht : 44
    }];
    var menu = new MenuView({
        rowData : data,

    });
 

     slidingMenuFirst = new MASlidingMenu({
        left : menu, // the menu... only accepts a tableview
        draggable : true,

    });

    slidingMenuFirst.open();
});

 
 
  Ti.App.fireEvent('makeItslideOpenFirstInstance'); 
// event fired when user selects a view from the nav

// event fired when user selects a view from the nav
// slidingMenu.addEventListener('switch', function(e) {
// alert(slidingMenu.menuRow);
// alert(slidingMenu.index);
// alert(slidingMenu.view); // This is the new view your switching to
// });

// event fired while user is dragging the view to expose the menu

//Expose / close the menu programaticly

//slidingMenu.slideView('view');

// Access the currently displayed view
//slidingMenu.activeView();
