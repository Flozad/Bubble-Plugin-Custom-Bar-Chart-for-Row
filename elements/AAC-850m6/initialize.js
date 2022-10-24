function(instance, context) {

function getUniqueStr(length){
 var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

var uuid = getUniqueStr(8);
var uuid_parent = uuid+"_parent";

    //alert(uuid);
    //alert(uuid_parent);
    
var boxchart = $('<div id="'+uuid_parent+'" style="position: relative !important;" ><canvas id="'+uuid+'"></canvas></div>');
boxchart.css("width", "100%");
boxchart.css("height", "100%");

instance.canvas.append(boxchart);
   
 instance.data.id = uuid;
 instance.data.id_p = uuid_parent;
   
	

}