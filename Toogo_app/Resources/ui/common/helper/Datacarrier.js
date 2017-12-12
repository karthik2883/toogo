var instance = null;
 
var getInstance = function() {
    if(instance == null) {
        instance = new DataCarrier();
    }
    return instance;
};
 
 
function DataCarrier() {
 
    var DataProfile;
    var DataAsigned;
    var DataStructure;
 
    var getData = function() { 
        return DataProfile;
    };
 
    var setData = function(value) {
        DataProfile = value;
    };
    
    
    
     var getDataAsigned = function() { 
        return DataAsigned;
    };
 
    var setDataAsigned = function(value) {
    	if(value==""){
    		 DataAsigned = null;
    	}else{
         DataAsigned = value;
        }
    };
    
    var removeDataAsigned = function() {
        DataAsigned = null;
        
    };
    
    
    
    var getDataStructure = function() { 
        return DataStructure;
    };
 
    var setDataStructure = function(value) {
        DataStructure = value;
    };
 
    return {
        getData : getData,  
        setData : setData,
        getDataAsigned : getDataAsigned,  
        setDataAsigned : setDataAsigned,
        getDataStructure : getDataStructure,
        setDataStructure : setDataStructure,
        removeDataAsigned:removeDataAsigned
    };
 
};
 
exports.getInstance = getInstance;