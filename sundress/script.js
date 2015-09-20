

function temperature(){
var value = document.getElementById("gender").value;
	if (value == "boy"){
		jQuery(document).ready(function($) {
	  		$.ajax({
	  		url : "http://api.wunderground.com/api/0aa24545eea92c2b/geolookup/conditions/q/IA/Cedar_Rapids.json",
	  		dataType : "jsonp",
	  		success : function(parsed_json) {
	  		var location = parsed_json['location']['city'];
	  		var temp_f = parsed_json['current_observation']['temp_f'];
	  		alert("Current temperature in " + location + " is: " + temp_f);
	  		}
		  });
	});
	
	}
	
	
	
	//if its a girl
	
	if (value == "girl"){
	}
	jQuery(document).ready(function($) {
	  		$.ajax({
	  		url : "http://api.wunderground.com/api/0aa24545eea92c2b/geolookup/conditions/q/IA/Cedar_Rapids.json",
	  		dataType : "jsonp",
	  		success : function(parsed_json) {
	  		var location = parsed_json['location']['city'];
	  		var temp_f = parsed_json['current_observation']['temp_f'];
	  		alert("Current temperature in " + location + " is: " + temp_f);
	  		}
		  });
	});
}  