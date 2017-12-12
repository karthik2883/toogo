exports.call = function (options) {
    //create the titanium HTTPClient
    var httpClient = Titanium.Network.createHTTPClient();

    //set the httpclient's properties with the provided options
    httpClient.setTimeout(options.timeout);
    httpClient.onerror = options.error;
       
    //if and when response comes back
    //the success function is called
    httpClient.onload = function(){
        options.success({
            data: httpClient.responseData, 
            text: httpClient.responseText
        });
        //return options;
    };
        
    //open the connection
    httpClient.open(options.type, options.url, true);

    //send the request
    httpClient.send(options.d);
};


