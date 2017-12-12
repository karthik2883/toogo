function NetCallReciver(_args,cb,data) {
 
	var LoaderWindow = require("ui/common/LoaderWindow/LoaderWindow");
	var loaderWindow = new LoaderWindow();
	
	loaderWindow.open();
	var Netcall = require("ui/handheld/netcall/Netcall");
	var u = "http://node.bizmoapps.com:3003/";
	u += _args;
	Netcall.call({
		type : "POST",
		url : u,
		d:data,
		error : function(error) {
		
			
		},
		success : function(response) {
			if (cb) {
			   loaderWindow.close();
				cb(response, this);
			}

		},
		timeout : 20000
	});

}

module.exports = NetCallReciver; 