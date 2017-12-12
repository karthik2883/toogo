function NearMeView() {
    var convertMapPoints = require('ui/common/helper/convertMapPoints'),
        mapViewScroll = Ti.UI.createView({
        // width : Ti.UI.SIZE,
        // height : Ti.UI.SIZE,
        // layout : "vertical",
        // top : 0,
        // left : 0,

    }),
        pop = new createPopView(),
        popView = pop.view,
        popLabel = pop.label,
        defaultLatitude = 37,
        defaultLongitude = -122,
        selectedPin = null;

    var HeaderView = require("ui/common/HeaderView");
    var headerView = new HeaderView("Near Me");
    var Map = require('ti.map');
    var Font = require("ui/style/Font");
    var fonts = new Font();

    var Color = require("ui/style/Color");
    var fntColor = new Color();

    // var mapViewScroll = Ti.UI.createView({
    // width : Ti.UI.SIZE,
    // height : Ti.UI.SIZE,
    // layout : "vertical",
    // top : 0,
    // left : 0,
    // });
    mapViewScroll.add(headerView);
    var viewsearch = Ti.UI.createView({
        height : "12%",
        width : "100%",
        backgroundColor : "#6B6868",
        layout : "vertical",
        top : 0

    });
    var inputBoxSearch = Ti.UI.createTextField({
        id : "search",
        hintText : "Search (For John Doe) ",
        color : "black",
        textAlign : "left",
        width : "90%",
        left : "5%",
        height : "70%",
        top : "10%",
        bottom : "1%",
        borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,

    });

    viewsearch.add(inputBoxSearch);
    mapViewScroll.add(viewsearch);

    //var a = [];
    //var mapview = "";
    //event added

    // for ( i = 0; i < locations.length; i++) {

    var mapview = Map.createView({
        mapType : Map.NORMAL_TYPE,
        mapType : Map.NORMAL_TYPE,
        animate : true,
        region : {
            latitude : defaultLatitude,
            longitude : defaultLongitude,
            latitudeDelta : 0.1,
            longitudeDelta : 0.1
        },
        regionFit : true,
        userLocation : false,
        annotations : createPins(5)

        //annotations : [municiplalityView,municiplalityView_second]
    });
    mapview.addEventListener('click', mapClick);

    mapview.addEventListener('regionchanged', movePopView);
    mapViewScroll.add(mapview);
    mapViewScroll.add(popView);
    //mapViewScroll.add(mapview);

    // var municiplalityView = Map.createAnnotation({
    // latitude : locations[i][1],
    // longitude : locations[i][2],
    // title : locations[i][0],
    // subtitle : locations[i][0],
    // animate : true,
    // myid : i,
    //
    // });
    //
    // if (i % 2 != 0) {
    // municiplalityView.pincolor = Map.ANNOTATION_GREEN;
    //
    // } else {
    //
    // municiplalityView.pincolor = Map.ANNOTATION_RED;
    // }
    // a.push(municiplalityView);
    // municiplalityView.addEventListener('click', function(evt) {
    // // alert('pin clicked');
    // Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
    // Ti.API.info(" clicked, event: " + evt.clicksource);
    // // Check for all of the possible names that clicksouce
    // // can report for the left button/view.
    // if (evt.clicksource == 'leftButton' || evt.clicksource == 'leftPane' || evt.clicksource == 'leftView') {
    //
    // Ti.API.info("Annotation " + evt.title + ", left button clicked.");
    // }
    // });
    // mapview.annotations = a;

    //   }

    // mapViewScroll.add(mapview);

    var buttonView = Ti.UI.createView({
        layout : "horizontal",
        width : "100%",
        height : Ti.UI.SIZE,
        bottom : "20%",

    });
    var selectStudent = Ti.UI.createButton({
        backgroundImage : 'images/switch/select_student.png',
        backgroundSelectedImage : 'images/switch/student.png',
        width : "45%",
        left : "5%",
        height : Ti.UI.SIZE,
        title : 'STUDENTS'

    });

    var selectTutor = Ti.UI.createButton({
        backgroundImage : 'images/switch/tutor.png',
        backgroundSelectedImage : 'images/switch/select_tutor.png',
        width : "45%",
        height : Ti.UI.SIZE,
        title : 'TUTORS'
    });

    buttonView.add(selectStudent);
    buttonView.add(selectTutor);

    selectStudent.addEventListener("click", function(e) {

        if (selectStudent.backgroundImage == 'images/switch/select_student.png') {
            selectStudent.backgroundImage = 'images/switch/student.png';
            selectTutor.backgroundImage = 'images/switch/select_tutor.png';

        } else {
            selectStudent.backgroundImage = 'images/switch/select_student.png';
            selectTutor.backgroundImage = 'images/switch/tutor.png';

        }

    });

    selectTutor.addEventListener("click", function(e) {

        if (selectTutor.backgroundImage == 'images/switch/select_tutor.png') {
            selectStudent.backgroundImage = 'images/switch/select_student.png';
            selectTutor.backgroundImage = 'images/switch/tutor.png';

        } else {
            selectStudent.backgroundImage = 'images/switch/student.png';
            selectTutor.backgroundImage = 'images/switch/select_tutor.png';

        }

    });
    mapview.add(buttonView);
    mapViewScroll.add(popView);
    return mapViewScroll;
    function createPins(count) {

        var pins = [];

        for (var i = 0,
            l =
            count; i < l; i++) {

            var pin = Map.createAnnotation({
                latitude : defaultLatitude,
                longitude : defaultLongitude,
                title : "Map Pin " + i,
                animate : true,
                image : 'images/nearme/pin_stu.png',
                pinImage : 'images/nearme/pin_tut.png',
                selectedPinImage : 'images/nearme/pin_tut.png',
            });

            pins.push(pin);

            defaultLatitude += Math.random() * 0.10;
            defaultLongitude += Math.random() * 0.10;
        }

        return pins;
    }

    function mapClick(evt) {

        if (evt.clicksource === 'pin' && evt.annotation != selectedPin) {
            evt.source.deselectAnnotation(evt.annotation);
            showPopView(evt);
            evt.annotation.setImage(evt.annotation.selectedPinImage);
            if (selectedPin) {
                selectedPin.setImage(selectedPin.pinImage);
                selectedPin = evt.annotation;
            } else {
                selectedPin = evt.annotation;
            }
        } else {
            evt.source.deselectAnnotation(evt.annotation);
        }

    };

    function createPopView(params) {

        var params = params || {};

        var contentView = Ti.UI.createView({
            top : 0,
            width :171,
            height : 84,
            backgroundColor : "#000000",
            borderRadius : 10,
            opacity : params.opacity ? params.opacity : 0.8
        });

        var arrowView = Ti.UI.createView({
            bottom : 0,
            height : 20,
            width : 20,
             backgroundImage : "arrow.png",
             opacity : params.opacity ? params.opacity : 0.8
        });

        var closeBtn = Ti.UI.createButton({
            backgroundImage : "images/nearme/img.png",
            top : 10,
            left : 10,
            height : 30,
            width : 30
        });

        this.label = Ti.UI.createLabel({
            top : 20,
            left : 35,
            right : 35,
            color : "#ffffff",
            height : Ti.UI.SIZE,
            font : {
                fontSize : 20
            },
            minimumFontSize : 8
        });

        this.view = Ti.UI.createView({
            height : contentView.height + arrowView.height,
            width : contentView.width,
            visible : false,
            opacity : 0.0
        });

        this.view.add(contentView, arrowView, closeBtn, this.label);

        closeBtn.addEventListener('click', closePopView);

    }

    function closePopView(evt) {

        popView.hide();
        selectedPin.setImage(selectedPin.pinImage);
        selectedPin = null;

    }

    function movePopView(evt) {
        evt.source.setRegion(evt);
        if (selectedPin) {
            var point = convertMapPoints({
                map : evt.source,
                annotation : selectedPin,
                view : mapViewScroll
            });
            popView.center = {
                x : point.x,
                y : (point.y - (popView.height / 2) - 20)
            };
        }
    }

    function showPopView(evt) {

        var point = convertMapPoints({
            map : evt.source,
            annotation : evt.annotation ? evt.annotation : selectedPin,
            view : mapViewScroll
        });
        popLabel.text = evt.annotation.title;
        popView.center = {
            x : point.x,
            y : (point.y - (popView.height / 2) - 20)
        };
        popView.show();
        popView.animate({
            opacity : 1.0,
            duration : 250
        });

    }

}

module.exports = NearMeView;
