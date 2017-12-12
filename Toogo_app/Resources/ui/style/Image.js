function Image() {
	//Globally available theme object to hold theme colors/constants
	var image = {
	home  : '/image/home.png',
	
	search : '/image/search.png',
	
	arrow : '/image/arrow.png',
	actor_small_frame : '/images/small_frame.png',
	actor             : '/images/ajaydevgan.png' ,
	star              : '/images/star.png',
	destar             : '/images/destar.png',
	
	header : '/images/header.png' ,
	
	sub_tab_start_on :'/images/s_tab_strat_on.png',
	sub_tab_start : '/images/s_tab_start.png' ,
	
	sub_tab_middle_on :'/images/s_tab_middle_on.png',
	sub_tab_middle : '/images/s_tab_middle.png' ,
	
	sub_tab_end_on :'/images/s_tab_end_on.png',
	sub_tab_end : '/images/s_tab_end.png',
	
	row_bg      : '/images/row_bg.png',
	background :'/images/bg.png',
	buttonskin :'/images/button_skin.png',
	spacerRow : {
			backgroundImage:'/images/spacer_row.png',
			height : 30,
			className : 'spacerRow'
	},
	tabStart :{
			backgroundImage:'/images/tab_bg.png',
			className : 'tabBg'
	},
    loginBg :{
			//backgroundImage:'/images/log.png',
			className : 'Login'
	 },
	 panelBg :{
			backgroundImage:'/images/panel.png',
			className : 'Login'
	 }
	 
	 
	
	};
	
	return image;

}

module.exports =Image;