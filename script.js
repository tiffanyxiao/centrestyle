var x;

function sortcolleagueList(){
	//for the colleague list
	var items = $('.colleagueList li').get();
	items.sort(function(a,b){
 	 var keyA = $(a).text();
  	var keyB = $(b).text();
 	 if (keyA < keyB) return -1;
 	 if (keyA > keyB) return 1;
  	return 0;
	});
	var ul = $('.colleagueList');
	$.each(items, function(i, li){
  	ul.append(li);
	});
}

function sortfamilyList(){
	//for the friends list
	var items = $('.familyList li').get();
	items.sort(function(a,b){
 	 var keyA = $(a).text();
  	var keyB = $(b).text();
 	 if (keyA < keyB) return -1;
 	 if (keyA > keyB) return 1;
  	return 0;
	});
	var ul = $('.familyList');
	$.each(items, function(i, li){
  	ul.append(li);
	});
}

function sortList(){
	var items = $('.alphaList li').get();
	items.sort(function(a,b){
 	 var keyA = $(a).text().toUpperCase();
  	var keyB = $(b).text().toUpperCase();
 	 if (keyA < keyB) return -1;
 	 if (keyA > keyB) return 1;
  	return 0;
	});
	var ul = $('.alphaList');
	$.each(items, function(i, li){
  	ul.append(li);
	});
}

function sortfriendList(){
	//for the friends list
	var items = $('.friendList li').get();
	items.sort(function(a,b){
 	 var keyA = $(a).text();
  	var keyB = $(b).text();
 	 if (keyA < keyB) return -1;
 	 if (keyA > keyB) return 1;
  	return 0;
	});
	var ul = $('.friendList');
	$.each(items, function(i, li){
  	ul.append(li);
	});
}

function checkSignin() {

var userID= document.getElementById('txt-email').value;
var pwd= document.getElementById('txt-password').value;

var pwd1= localStorage.getItem(userID);
if (pwd==pwd1) {

	$.mobile.changePage( "#home", { transition: "slideup"} );
	return false
}
else {
	
	return true
}

}


function saveSignup() {
var userID= document.getElementById('txt-emailUP').value;
var pwd= document.getElementById('txt-passwordUP').value;


localStorage.setItem(userID,pwd); 
localStorage.setItem(userID+'fname',document.getElementById('txt-first-nameUP').value);
localStorage.setItem(userID+'lname',document.getElementById('txt-last-nameUP').value);

}


function addContact() {
//makeNewHistory
	var email = document.getElementById('textinput5').value;
    var name = document.getElementById('textinput1').value;   
    var phone = document.getElementById('textinput2').value;
    var lastname = document.getElementById('textinput6').value;             
	//find the body
	var newpage = document.getElementById("pages");
	//make a new div
	var newDiv = document.createElement("div");
	newDiv.setAttribute("data-role","page");
	//sets the id to new page
	newDiv.setAttribute("id",name+lastname);
	//create the div2
	var newDiv2 = document.createElement("div");
	newDiv2.setAttribute("data-theme","a");
	newDiv2.setAttribute("data-role","header");	
	//create the header
	var newHeader = document.createElement("h1");
	newHeader.setAttribute("class","ui-title");
	//create the header text
	var newHeaderText = document.createTextNode("CONNECTIONS");
	newHeader.appendChild(newHeaderText);
	//create another div
	var newDiv3 = document.createElement("div");
	newDiv3.setAttribute("role","main");	
	newDiv3.setAttribute("class","ui-content");
	//create another div
	var newDiv4 = document.createElement("div");
	newDiv4.setAttribute("data-controltype","textbox");
	//create a p , b and textnode with name 
	var newP = document.createElement("p");
	var newB = document.createElement("b");
	var newText = document.createTextNode(name+" "+lastname);
	//create a p, b and textnode with email (textinput5)
	var newPemail = document.createElement("p");
	var newTemail = document.createTextNode(email);
	//for the number
	var newPphone = document.createElement("p");
	var newTphone = document.createTextNode(phone);
	var notes = document.getElementById('textarea1').value;
	var newPnotes = document.createElement("p");
	var newTnotes = document.createTextNode(notes);	
	
	//create another div
	var newDiv5 = document.createElement("div");
	newDiv5.setAttribute("data-controltype","selectmenu");	
	newDiv5.setAttribute("class","ui-field-contain");
	//create a label with text node
	var newLabel = document.createElement("label");
	newLabel.setAttribute("for","selectmenu1");
	var news = document.createTextNode("Connection Type");
	//create the menu for options
	var newMenu = document.createElement("select");
	newMenu.id = name+"options2";
	newMenu.setAttribute("data-theme","a");	
	//create call option and text node
	var newCall = document.createElement("option");
	newCall.setAttribute("value","call");	
	var newCallText = document.createTextNode("Call");
	//create email option and text node
	var newEmail = document.createElement("option");
	newEmail.setAttribute("value","email");	
	var newEmailText = document.createTextNode("Email");
	//create message option and text node
	var newMessage = document.createElement("option");
	newMessage.setAttribute("value","message");	
	var newMessageText = document.createTextNode("Message");
	//create the meeting option and text node
	var newMeeting = document.createElement("option");
	newMeeting.setAttribute("value","meeting");	
	var newMeetingText = document.createTextNode("Meeting");
	//create the others option and text node
	var newOther = document.createElement("option");
	newOther.setAttribute("value","other");	
	var newOtherText = document.createTextNode("Other");	
	//create the notes "short" 
	
	
	
	var fnotesnewDiv4 = document.createElement("div");
	fnotesnewDiv4.setAttribute("data-controltype","textarea");	
	fnotesnewDiv4.setAttribute("class","ui-field-contain");
	var fnotesnewLabel = document.createElement("label");
	fnotesnewLabel.setAttribute("for","textarea1");
	var fnotesnewlabelt = document.createTextNode("Notes on Connection:");
	var fnotesnewtextarea = document.createElement("textarea");
	fnotesnewtextarea.setAttribute("id",name+lastname+"textarea200");	

	//put the notes into the div
	
	
	
	//create the button
	var newButton = document.createElement("input");
	newButton.setAttribute("type","button");	
	newButton.setAttribute("value","Submit");	
	newButton.setAttribute("data-theme","a");
	
	//make a function test
	newButton.onclick = function() { test() };
	
	//create div6
	var newDiv6 = document.createElement("div");
	newDiv6.setAttribute("role","main");	
	newDiv6.setAttribute("class","ui-content");	
	//create div7
	var newDiv7 = document.createElement("div");
	newDiv7.setAttribute("data-controltype","textblock");
	//create p with text node "history" and new p with id = lines
	var newPP = document.createElement("p");
	var newPPP = document.createElement("p");
	newPPP.id = name+"lines2";
	var newPText = document.createTextNode("History");
	//create the UL for the stuff here
	var newhistoryList = document.createElement("ul");
	newhistoryList.setAttribute("class","historyList");	
	newhistoryList.setAttribute("data-role","listview");
	newhistoryList.id=name+lastname+"historyList";	
	newhistoryList.setAttribute("data-inset","true");	
	newhistoryList.setAttribute("data-filter","true");	
	newhistoryList.setAttribute("data-filter-placeholder","Search Connections...");	
	newPPP.appendChild(newhistoryList);
	
	//creates a back button
	var backbutton = document.createElement("a");
	backbutton.setAttribute("href","#home");		
	backbutton.setAttribute("data-icon","arrow-l");
	backbutton.setAttribute("data-iconpos","left");	
	backbutton.setAttribute("class","ui-btn ui-btn-left ui-icon-arrow-l ui-btn-icon-left");
	var backbuttontext = document.createTextNode("Back");
	//puts back button in
	newDiv2.appendChild(backbutton);
	backbutton.appendChild(backbuttontext);						
			
	
	//add ons	
	newDiv3.appendChild(newDiv5);	
	newDiv3.appendChild(newButton);
	//add the text to the label
	newLabel.appendChild(news);
	//add the label to the div5
	newDiv5.appendChild(newLabel);
	//add the header to div2
	newDiv2.appendChild(newHeader);
	//add the div2 to the div
	newDiv.appendChild(newDiv2);
	//add the name in the b, the b in the p, the p in the div4
	newB.appendChild(newText);
	newP.appendChild(newB);
	newDiv4.appendChild(newP);			
	//add div4 to div1 
	newDiv.appendChild(newDiv4);
	//add div3 to div1
	newDiv.appendChild(newDiv3);
	//add menu to div5
	newDiv5.appendChild(newMenu);
	//add text to option and then option to menu for call
	newCall.appendChild(newCallText);
	newMenu.appendChild(newCall);
	//same with email
	newEmail.appendChild(newEmailText);
	newMenu.appendChild(newEmail);
	//same with message
	newMessage.appendChild(newMessageText);
	newMenu.appendChild(newMessage);
	//same with meeting
	newMeeting.appendChild(newMeetingText);
	newMenu.appendChild(newMeeting);	
		//same with other
	newOther.appendChild(newOtherText);
	newMenu.appendChild(newOther);	
			//put p with id in history
	newPP.appendChild(newPText);
	//put pp in div7		
	newPP.appendChild(newPPP);
	//put history in p
	//put in notes on connection here
	fnotesnewLabel.appendChild(fnotesnewlabelt);
	newDiv5.appendChild(fnotesnewLabel);
	newDiv5.appendChild(fnotesnewtextarea);

	newDiv7.appendChild(newPP);
	newDiv6.appendChild(newDiv7);	
	newDiv.appendChild(newDiv6);
	//add the page to the div
	newpage.appendChild(newDiv);
	newDiv4.appendChild(newPemail);
	newPemail.appendChild(newTemail);
	newDiv4.appendChild(newPphone);
	newPphone.appendChild(newTphone);
	newDiv4.appendChild(newPnotes);
	newPnotes.appendChild(newTnotes);
	
//make updating history
		//making a new page for notes
		var notesnewpage = document.getElementById("pages");
		//make a new div
		var notesnewDiv = document.createElement("div");
		notesnewDiv.setAttribute("data-role","page");
		notesnewDiv.setAttribute("id",name+lastname+"updatedhistory");
		var notesnewDiv2 = document.createElement("div");
		notesnewDiv2.setAttribute("data-theme","a");
		notesnewDiv2.setAttribute("data-role","header");	
		var notesnewHeader = document.createElement("h1");
		notesnewHeader.setAttribute("class","ui-title");	
		var notesnewHeaderText = document.createTextNode("CONNECTIONS");
		notesnewHeader.appendChild(notesnewHeaderText);
		var notesnewDiv3 = document.createElement("div");
		notesnewDiv3.setAttribute("role","main");	
		notesnewDiv3.setAttribute("class","ui-content");
		var notesnewDiv4 = document.createElement("div");
		notesnewDiv4.setAttribute("data-controltype","textblock");
		//create p with text node "history" and new p with id = lines
		var notesnewPP = document.createElement("p");
		var notesnewPPP = document.createElement("p");
		notesnewPPP.id = name+"lines2";
		var notesnewPText = document.createTextNode("History");
		//create the UL for the stuff here
		var notesnewhistoryList = document.createElement("ul");
		notesnewhistoryList.setAttribute("class","historyList");	
		notesnewhistoryList.setAttribute("data-role","listview");
		notesnewhistoryList.id=name+lastname+"notesnewhistoryList";	
		notesnewhistoryList.setAttribute("data-inset","true");	
		notesnewhistoryList.setAttribute("data-filter","true");	
		notesnewhistoryList.setAttribute("data-filter-placeholder","Search Connections...");	
		notesnewPPP.appendChild(notesnewhistoryList);
		
		//create the button
		var notesback = document.createElement("a");
		notesback.setAttribute("href","#home");		
		notesback.setAttribute("data-icon","arrow-l");
		notesback.setAttribute("data-iconpos","left");	
		notesback.setAttribute("class","ui-btn ui-btn-left ui-icon-arrow-l ui-btn-icon-left");
		var notesbacktext = document.createTextNode("Back");					
			
					
		//put stuff in 
		//put p with id in history
		notesnewPP.appendChild(notesnewPText);
		//put pp in div7		
		notesnewPP.appendChild(notesnewPPP);
		//put history in p
		notesnewDiv4.appendChild(notesnewPP);		
		
		notesnewpage.appendChild(notesnewDiv);
		notesnewDiv.appendChild(notesnewDiv2);
		notesnewDiv2.appendChild(notesnewHeader);
		notesnewHeader.appendChild(notesnewHeaderText);
		notesnewDiv.appendChild(notesnewDiv3);
		notesnewDiv3.appendChild(notesnewDiv4);	
		//the button appending
		notesnewDiv2.appendChild(notesback);
		notesback.appendChild(notesbacktext);
			
	
//new contact
    var contactList = document.getElementById("contactList");  
    	//create a new list item	
        var newListItem = document.createElement("li");
		newListItem.setAttribute("data-theme","a");
		//create the ahref	
		var newLink = document.createElement("a");
		//set the link to #new-page
		newLink.setAttribute("href","#"+name+lastname+"updatedhistory");
		//create the text	
        var newName = document.createTextNode(name+" "+lastname);
        //create the img put it in newLink
        var newPic = document.createElement("img");
        
        x = Math.floor((Math.random() * 24) + 1);
        //random pic from 1-24
        newPic.setAttribute("src",x+".png");
        //put the image in the link
        newLink.appendChild(newPic);
		//put the name in the link
		newLink.appendChild(newName);
		//put the link in the list
        newListItem.appendChild(newLink);
		//put the list in the unordered list
        contactList.appendChild(newListItem); 
        /*newLink.onclick = function() { finalHistory() };  */
        
        //create the notes button
		var anotes = document.createElement("a");
		anotes.setAttribute("href","#"+name+lastname);
		newListItem.appendChild(anotes);
        
             
        
function test(){
var value = document.getElementById(name+"options2").value;
  var now = new Date();
  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
  time[0] = time[0] || 12;
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    	}
	}
var stamp = (date.join("/") + " " + time.join(":") + " " + suffix);
var notesvalue = (date+time+suffix);
	if (value == "call") {
		//making a new page for notes
		var notesnewpage = document.getElementById("pages");
		//make a new div
		var notesnewDiv = document.createElement("div");
		notesnewDiv.setAttribute("data-role","page");
		notesnewDiv.setAttribute("id",value+notesvalue);
		var notesnewDiv2 = document.createElement("div");
		notesnewDiv2.setAttribute("data-theme","a");
		notesnewDiv2.setAttribute("data-role","header");	
		var notesnewHeader = document.createElement("h1");
		notesnewHeader.setAttribute("class","ui-title");	
		var notesnewHeaderText = document.createTextNode("CONNECTIONS");
		notesnewHeader.appendChild(notesnewHeaderText);
		var notesnewDiv3 = document.createElement("div");
		notesnewDiv3.setAttribute("role","main");	
		notesnewDiv3.setAttribute("class","ui-content");
		var notesnewDiv4 = document.createElement("div");
		notesnewDiv4.setAttribute("data-controltype","textarea");	
		var notesnewLabel = document.createElement("label");
		notesnewLabel.setAttribute("for","textarea1");
		var notesnewlabelt = document.createTextNode("Short Notes About Connection:");
		var notesnewtextarea = document.createElement("textarea");
		notesnewtextarea.setAttribute("id",name+value+stamp+"textarea100");
		
		
		
		//for the date
		var datediv = document.createElement("div");
		datediv.setAttribute("class","ui-field-contain");	
		datediv.setAttribute("data-controltype","dateinput");
		var dateLabel = document.createElement("label");
		dateLabel.setAttribute("for","dateinput1");
		var datelabelt = document.createTextNode("Date:");
		var datearea = document.createElement("input");
		datearea.setAttribute("id","dateinput1");
		datearea.setAttribute("type","date");
		datearea.setAttribute("placeholder","");
		
		//for the time
		var timediv = document.createElement("div");
		timediv.setAttribute("class","ui-field-contain");	
		timediv.setAttribute("data-controltype","dateinput");
		var timeLabel = document.createElement("label");
		timeLabel.setAttribute("for","dateinput1");
		var timelabelt = document.createTextNode("Time:");
		var timearea = document.createElement("input");
		timearea.setAttribute("id","dateinput1");
		timearea.setAttribute("type","time");
		timearea.setAttribute("placeholder","");
		
		
		notesnewDiv3.appendChild(datediv);
		dateLabel.appendChild(datelabelt);
		datediv.appendChild(dateLabel);						
		datediv.appendChild(datearea);

		notesnewDiv3.appendChild(timediv);
		timeLabel.appendChild(timelabelt);
		timediv.appendChild(timeLabel);						
		timediv.appendChild(timearea);
		
		
		
				
		/*<div class="ui-field-contain" data-controltype="dateinput">
            <label for="dateinput1">
                Date:
            </label>
            <input name="" id="dateinput1" placeholder="" value="" type="date">
        </div>
        <div class="ui-field-contain" data-controltype="dateinput">
            <label for="dateinput2">
                Title
            </label>
            <input name="" id="dateinput2" placeholder="" value="" type="time">
        </div>*/
		
		
		
		//create the button
		var notesback = document.createElement("a");
		notesback.setAttribute("href","#"+name+lastname);		
		notesback.setAttribute("data-icon","arrow-l");
		notesback.setAttribute("data-iconpos","left");	
		notesback.setAttribute("class","ui-btn ui-btn-left ui-icon-arrow-l ui-btn-icon-left");
		var notesbacktext = document.createTextNode("Back");					
			
					
		//put stuff in 
		notesnewpage.appendChild(notesnewDiv);
		notesnewDiv.appendChild(notesnewDiv2);
		notesnewDiv2.appendChild(notesnewHeader);
		notesnewHeader.appendChild(notesnewHeaderText);
		notesnewDiv.appendChild(notesnewDiv3);
		notesnewDiv3.appendChild(notesnewDiv4);
		notesnewDiv4.appendChild(notesnewLabel);
		notesnewLabel.appendChild(notesnewlabelt);
		notesnewLabel.appendChild(notesnewtextarea);	
		//the button appending
		notesnewDiv2.appendChild(notesback);
		notesback.appendChild(notesbacktext);
		
		//putting it into the history
		var history = document.getElementById(name+lastname+"historyList");
		//create a new text item
		var newListText = document.createTextNode("Called " + stamp);
		var newText = document.createElement("a");
		newText.setAttribute("href","#"+value+notesvalue);
		newText.appendChild(newListText);
		//create a new p item 
		var newLine = document.createElement("li");
		newLine.appendChild(newText);
		history.appendChild(newLine);
		
		
		
		//putting it into updated history
		var newhistory = document.getElementById(name+lastname+"notesnewhistoryList");
		var finalnotes = document.getElementById(name+lastname+"textarea200").value;
		
		//create a new text item
		var notesnewListText = document.createTextNode("Called " + stamp + " Notes: "+finalnotes);
		var notesnewText = document.createElement("p");
		notesnewText.appendChild(notesnewListText);
		//create a new p item 
		var notesnewLine = document.createElement("li");
		notesnewLine.appendChild(notesnewText);
		newhistory.appendChild(notesnewLine);
		
		//create the notes button
		/*var anotes = document.createElement("a");
		anotes.setAttribute("href","#"+value+notesvalue);
		var tnotes = document.createTextNode("  Notes");
		anotes.appendChild(tnotes);
		newLine.appendChild(anotes);*/
			
    	/*<ul class="historyList" data-role="listview" id ="historyList" data-inset="true" data-filter="true" data-filter-placeholder="Search Connections..." >  
            <li data-theme="a">
                <a href="#history" data-transition="slide">
                Kim Kardashian
                </a>
            </li>                                             
        </ul>*/
		
		
	}		
	if (value == "email") {
		//making a new page for notes
		var notesnewpage = document.getElementById("pages");
		//make a new div
		var notesnewDiv = document.createElement("div");
		notesnewDiv.setAttribute("data-role","page");
		notesnewDiv.setAttribute("id",value+notesvalue);
		var notesnewDiv2 = document.createElement("div");
		notesnewDiv2.setAttribute("data-theme","a");
		notesnewDiv2.setAttribute("data-role","header");	
		var notesnewHeader = document.createElement("h1");
		notesnewHeader.setAttribute("class","ui-title");	
		var notesnewHeaderText = document.createTextNode("CONNECTIONS");
		notesnewHeader.appendChild(notesnewHeaderText);
		var notesnewDiv3 = document.createElement("div");
		notesnewDiv3.setAttribute("role","main");	
		notesnewDiv3.setAttribute("class","ui-content");
		var notesnewDiv4 = document.createElement("div");
		notesnewDiv4.setAttribute("data-controltype","textarea");	
		var notesnewLabel = document.createElement("label");
		notesnewLabel.setAttribute("for","textarea1");
		var notesnewlabelt = document.createTextNode("Short Notes About Connection:");
		var notesnewtextarea = document.createElement("textarea");
		notesnewtextarea.setAttribute("id",name+value+stamp+"textarea100");
		
		
		
		//for the date
		var datediv = document.createElement("div");
		datediv.setAttribute("class","ui-field-contain");	
		datediv.setAttribute("data-controltype","dateinput");
		var dateLabel = document.createElement("label");
		dateLabel.setAttribute("for","dateinput1");
		var datelabelt = document.createTextNode("Date:");
		var datearea = document.createElement("input");
		datearea.setAttribute("id","dateinput1");
		datearea.setAttribute("type","date");
		datearea.setAttribute("placeholder","");
		
		//for the time
		var timediv = document.createElement("div");
		timediv.setAttribute("class","ui-field-contain");	
		timediv.setAttribute("data-controltype","dateinput");
		var timeLabel = document.createElement("label");
		timeLabel.setAttribute("for","dateinput1");
		var timelabelt = document.createTextNode("Time:");
		var timearea = document.createElement("input");
		timearea.setAttribute("id","dateinput1");
		timearea.setAttribute("type","time");
		timearea.setAttribute("placeholder","");
		
		
		notesnewDiv3.appendChild(datediv);
		dateLabel.appendChild(datelabelt);
		datediv.appendChild(dateLabel);						
		datediv.appendChild(datearea);

		notesnewDiv3.appendChild(timediv);
		timeLabel.appendChild(timelabelt);
		timediv.appendChild(timeLabel);						
		timediv.appendChild(timearea);
		
		//create the button
		var notesback = document.createElement("a");
		notesback.setAttribute("href","#"+name+lastname);		
		notesback.setAttribute("data-icon","arrow-l");
		notesback.setAttribute("data-iconpos","left");	
		notesback.setAttribute("class","ui-btn ui-btn-left ui-icon-arrow-l ui-btn-icon-left");
		var notesbacktext = document.createTextNode("Back");					
	
		
			
					
		//put stuff in 
		notesnewpage.appendChild(notesnewDiv);
		notesnewDiv.appendChild(notesnewDiv2);
		notesnewDiv2.appendChild(notesnewHeader);
		notesnewHeader.appendChild(notesnewHeaderText);
		notesnewDiv.appendChild(notesnewDiv3);
		notesnewDiv3.appendChild(notesnewDiv4);
		notesnewDiv4.appendChild(notesnewLabel);
		notesnewLabel.appendChild(notesnewlabelt);
		notesnewLabel.appendChild(notesnewtextarea);	
		//the button appending
		notesnewDiv2.appendChild(notesback);
		notesback.appendChild(notesbacktext);
		
		//putting it into the history
		var history = document.getElementById(name+lastname+"historyList");
		//create a new text item
		var newListText = document.createTextNode("Emailed " + stamp);
		var newText = document.createElement("a");
		newText.setAttribute("href","#"+value+notesvalue);
		newText.appendChild(newListText);
		//create a new p item 
		var newLine = document.createElement("li");
		newLine.appendChild(newText);
		history.appendChild(newLine);
		
		//putting it into updated history
		var newhistory = document.getElementById(name+lastname+"notesnewhistoryList");
		var finalnotes = document.getElementById(name+lastname+"textarea200").value;
		
		//create a new text item
		var notesnewListText = document.createTextNode("Emailed " + stamp + " Notes: "+finalnotes);
		var notesnewText = document.createElement("p");
		notesnewText.appendChild(notesnewListText);
		//create a new p item 
		var notesnewLine = document.createElement("li");
		notesnewLine.appendChild(notesnewText);
		newhistory.appendChild(notesnewLine);
		
	}
	if (value == "message") {
		//making a new page for notes
		var notesnewpage = document.getElementById("pages");
		//make a new div
		var notesnewDiv = document.createElement("div");
		notesnewDiv.setAttribute("data-role","page");
		notesnewDiv.setAttribute("id",value+notesvalue);
		var notesnewDiv2 = document.createElement("div");
		notesnewDiv2.setAttribute("data-theme","a");
		notesnewDiv2.setAttribute("data-role","header");	
		var notesnewHeader = document.createElement("h1");
		notesnewHeader.setAttribute("class","ui-title");	
		var notesnewHeaderText = document.createTextNode("CONNECTIONS");
		notesnewHeader.appendChild(notesnewHeaderText);
		var notesnewDiv3 = document.createElement("div");
		notesnewDiv3.setAttribute("role","main");	
		notesnewDiv3.setAttribute("class","ui-content");
		var notesnewDiv4 = document.createElement("div");
		notesnewDiv4.setAttribute("data-controltype","textarea");	
		var notesnewLabel = document.createElement("label");
		notesnewLabel.setAttribute("for","textarea1");
		var notesnewlabelt = document.createTextNode("Short Notes About Connection:");
		var notesnewtextarea = document.createElement("textarea");
		notesnewtextarea.setAttribute("id",name+value+stamp+"textarea100");
		
		
		
		//for the date
		var datediv = document.createElement("div");
		datediv.setAttribute("class","ui-field-contain");	
		datediv.setAttribute("data-controltype","dateinput");
		var dateLabel = document.createElement("label");
		dateLabel.setAttribute("for","dateinput1");
		var datelabelt = document.createTextNode("Date:");
		var datearea = document.createElement("input");
		datearea.setAttribute("id","dateinput1");
		datearea.setAttribute("type","date");
		datearea.setAttribute("placeholder","");
		
		//for the time
		var timediv = document.createElement("div");
		timediv.setAttribute("class","ui-field-contain");	
		timediv.setAttribute("data-controltype","dateinput");
		var timeLabel = document.createElement("label");
		timeLabel.setAttribute("for","dateinput1");
		var timelabelt = document.createTextNode("Time:");
		var timearea = document.createElement("input");
		timearea.setAttribute("id","dateinput1");
		timearea.setAttribute("type","time");
		timearea.setAttribute("placeholder","");
		
		
		notesnewDiv3.appendChild(datediv);
		dateLabel.appendChild(datelabelt);
		datediv.appendChild(dateLabel);						
		datediv.appendChild(datearea);

		notesnewDiv3.appendChild(timediv);
		timeLabel.appendChild(timelabelt);
		timediv.appendChild(timeLabel);						
		timediv.appendChild(timearea);
		
		//create the button
		var notesback = document.createElement("a");
		notesback.setAttribute("href","#"+name+lastname);		
		notesback.setAttribute("data-icon","arrow-l");
		notesback.setAttribute("data-iconpos","left");	
		notesback.setAttribute("class","ui-btn ui-btn-left ui-icon-arrow-l ui-btn-icon-left");
		var notesbacktext = document.createTextNode("Back");	
		
		//for the date
		var datediv = document.createElement("div");
		datediv.setAttribute("class","ui-field-contain");	
		datediv.setAttribute("data-controltype","dateinput");
		var dateLabel = document.createElement("label");
		dateLabel.setAttribute("for","dateinput1");
		var datelabelt = document.createTextNode("Date:");
		var datearea = document.createElement("input");
		datearea.setAttribute("id","dateinput1");
		datearea.setAttribute("type","date");
		datearea.setAttribute("placeholder","");
		
		//for the time
		var timediv = document.createElement("div");
		timediv.setAttribute("class","ui-field-contain");	
		timediv.setAttribute("data-controltype","dateinput");
		var timeLabel = document.createElement("label");
		timeLabel.setAttribute("for","dateinput1");
		var timelabelt = document.createTextNode("Time:");
		var timearea = document.createElement("input");
		timearea.setAttribute("id","dateinput1");
		timearea.setAttribute("type","date");
		timearea.setAttribute("placeholder","");
		
		
		notesnewDiv3.appendChild(datediv);
		dateLabel.appendChild(datelabelt);
		datediv.appendChild(dateLabel);						
		datediv.appendChild(datearea);

		notesnewDiv3.appendChild(timediv);
		timeLabel.appendChild(timelabelt);
		timediv.appendChild(timeLabel);						
		timediv.appendChild(timearea);
		
		
						
			
					
		//put stuff in 
		notesnewpage.appendChild(notesnewDiv);
		notesnewDiv.appendChild(notesnewDiv2);
		notesnewDiv2.appendChild(notesnewHeader);
		notesnewHeader.appendChild(notesnewHeaderText);
		notesnewDiv.appendChild(notesnewDiv3);
		notesnewDiv3.appendChild(notesnewDiv4);
		notesnewDiv4.appendChild(notesnewLabel);
		notesnewLabel.appendChild(notesnewlabelt);
		notesnewLabel.appendChild(notesnewtextarea);	
		//the button appending
		notesnewDiv2.appendChild(notesback);
		notesback.appendChild(notesbacktext);
		
		//putting it into the history
		var history = document.getElementById(name+lastname+"historyList");
		//create a new text item
		var newListText = document.createTextNode("Messaged " + stamp);
		var newText = document.createElement("a");
		newText.setAttribute("href","#"+value+notesvalue);
		newText.appendChild(newListText);
		//create a new p item 
		var newLine = document.createElement("li");
		newLine.appendChild(newText);
		history.appendChild(newLine);
		
		//putting it into updated history
		var newhistory = document.getElementById(name+lastname+"notesnewhistoryList");
		var finalnotes = document.getElementById(name+lastname+"textarea200").value;
		
		//create a new text item
		var notesnewListText = document.createTextNode("Messaged " + stamp + " Notes: "+finalnotes);
		var notesnewText = document.createElement("p");
		notesnewText.appendChild(notesnewListText);
		//create a new p item 
		var notesnewLine = document.createElement("li");
		notesnewLine.appendChild(notesnewText);
		newhistory.appendChild(notesnewLine);
	}
	if (value == "meeting") {
		//making a new page for notes
		var notesnewpage = document.getElementById("pages");
		//make a new div
		var notesnewDiv = document.createElement("div");
		notesnewDiv.setAttribute("data-role","page");
		notesnewDiv.setAttribute("id",value+notesvalue);
		var notesnewDiv2 = document.createElement("div");
		notesnewDiv2.setAttribute("data-theme","a");
		notesnewDiv2.setAttribute("data-role","header");	
		var notesnewHeader = document.createElement("h1");
		notesnewHeader.setAttribute("class","ui-title");	
		var notesnewHeaderText = document.createTextNode("CONNECTIONS");
		notesnewHeader.appendChild(notesnewHeaderText);
		var notesnewDiv3 = document.createElement("div");
		notesnewDiv3.setAttribute("role","main");	
		notesnewDiv3.setAttribute("class","ui-content");
		var notesnewDiv4 = document.createElement("div");
		notesnewDiv4.setAttribute("data-controltype","textarea");	
		var notesnewLabel = document.createElement("label");
		notesnewLabel.setAttribute("for","textarea1");
		var notesnewlabelt = document.createTextNode("Short Notes About Connection:");
		var notesnewtextarea = document.createElement("textarea");
		notesnewtextarea.setAttribute("id",name+value+"textarea100");
		
		
		
		//for the date
		var datediv = document.createElement("div");
		datediv.setAttribute("class","ui-field-contain");	
		datediv.setAttribute("data-controltype","dateinput");
		var dateLabel = document.createElement("label");
		dateLabel.setAttribute("for","dateinput1");
		var datelabelt = document.createTextNode("Date:");
		var datearea = document.createElement("input");
		datearea.setAttribute("id","dateinput1");
		datearea.setAttribute("type","date");
		datearea.setAttribute("placeholder","");
		
		//for the time
		var timediv = document.createElement("div");
		timediv.setAttribute("class","ui-field-contain");	
		timediv.setAttribute("data-controltype","dateinput");
		var timeLabel = document.createElement("label");
		timeLabel.setAttribute("for","dateinput1");
		var timelabelt = document.createTextNode("Time:");
		var timearea = document.createElement("input");
		timearea.setAttribute("id","dateinput1");
		timearea.setAttribute("type","time");
		timearea.setAttribute("placeholder","");
		
		
		notesnewDiv3.appendChild(datediv);
		dateLabel.appendChild(datelabelt);
		datediv.appendChild(dateLabel);						
		datediv.appendChild(datearea);

		notesnewDiv3.appendChild(timediv);
		timeLabel.appendChild(timelabelt);
		timediv.appendChild(timeLabel);						
		timediv.appendChild(timearea);
		
		//create the button
		var notesback = document.createElement("a");
		notesback.setAttribute("href","#"+name+lastname);		
		notesback.setAttribute("data-icon","arrow-l");
		notesback.setAttribute("data-iconpos","left");	
		notesback.setAttribute("class","ui-btn ui-btn-left ui-icon-arrow-l ui-btn-icon-left");
		var notesbacktext = document.createTextNode("Back");					
	
		
			
					
		//put stuff in 
		notesnewpage.appendChild(notesnewDiv);
		notesnewDiv.appendChild(notesnewDiv2);
		notesnewDiv2.appendChild(notesnewHeader);
		notesnewHeader.appendChild(notesnewHeaderText);
		notesnewDiv.appendChild(notesnewDiv3);
		notesnewDiv3.appendChild(notesnewDiv4);
		notesnewDiv4.appendChild(notesnewLabel);
		notesnewLabel.appendChild(notesnewlabelt);
		notesnewLabel.appendChild(notesnewtextarea);	
		//the button appending
		notesnewDiv2.appendChild(notesback);
		notesback.appendChild(notesbacktext);
		
		//putting it into the history
		var history = document.getElementById(name+lastname+"historyList");
		//create a new text item
		var newListText = document.createTextNode("Met " + stamp);
		var newText = document.createElement("a");
		newText.setAttribute("href","#"+value+notesvalue);
		newText.appendChild(newListText);
		//create a new p item 
		var newLine = document.createElement("li");
		newLine.appendChild(newText);
		history.appendChild(newLine);
		
		//putting it into updated history
		var newhistory = document.getElementById(name+lastname+"notesnewhistoryList");
		var finalnotes = document.getElementById(name+lastname+"textarea200").value;
		
		//create a new text item
		var notesnewListText = document.createTextNode("Met " + stamp + " Notes: "+finalnotes);
		var notesnewText = document.createElement("p");
		notesnewText.appendChild(notesnewListText);
		//create a new p item 
		var notesnewLine = document.createElement("li");
		notesnewLine.appendChild(notesnewText);
		newhistory.appendChild(notesnewLine);
		
	}	
	if (value == "other") {
		//making a new page for notes
		var notesnewpage = document.getElementById("pages");
		//make a new div
		var notesnewDiv = document.createElement("div");
		notesnewDiv.setAttribute("data-role","page");
		notesnewDiv.setAttribute("id",value+notesvalue);
		var notesnewDiv2 = document.createElement("div");
		notesnewDiv2.setAttribute("data-theme","a");
		notesnewDiv2.setAttribute("data-role","header");	
		var notesnewHeader = document.createElement("h1");
		notesnewHeader.setAttribute("class","ui-title");	
		var notesnewHeaderText = document.createTextNode("CONNECTIONS");
		notesnewHeader.appendChild(notesnewHeaderText);
		var notesnewDiv3 = document.createElement("div");
		notesnewDiv3.setAttribute("role","main");	
		notesnewDiv3.setAttribute("class","ui-content");
		var notesnewDiv4 = document.createElement("div");
		notesnewDiv4.setAttribute("data-controltype","textarea");	
		var notesnewLabel = document.createElement("label");
		notesnewLabel.setAttribute("for","textarea1");
		var notesnewlabelt = document.createTextNode("Short Notes About Connection:");
		var notesnewtextarea = document.createElement("textarea");
		notesnewtextarea.setAttribute("id",name+value+"textarea100");
		
		
		
		//for the date
		var datediv = document.createElement("div");
		datediv.setAttribute("class","ui-field-contain");	
		datediv.setAttribute("data-controltype","dateinput");
		var dateLabel = document.createElement("label");
		dateLabel.setAttribute("for","dateinput1");
		var datelabelt = document.createTextNode("Date:");
		var datearea = document.createElement("input");
		datearea.setAttribute("id","dateinput1");
		datearea.setAttribute("type","date");
		datearea.setAttribute("placeholder","");
		
		//for the time
		var timediv = document.createElement("div");
		timediv.setAttribute("class","ui-field-contain");	
		timediv.setAttribute("data-controltype","dateinput");
		var timeLabel = document.createElement("label");
		timeLabel.setAttribute("for","dateinput1");
		var timelabelt = document.createTextNode("Time:");
		var timearea = document.createElement("input");
		timearea.setAttribute("id","dateinput1");
		timearea.setAttribute("type","time");
		timearea.setAttribute("placeholder","");
		
		
		notesnewDiv3.appendChild(datediv);
		dateLabel.appendChild(datelabelt);
		datediv.appendChild(dateLabel);						
		datediv.appendChild(datearea);

		notesnewDiv3.appendChild(timediv);
		timeLabel.appendChild(timelabelt);
		timediv.appendChild(timeLabel);						
		timediv.appendChild(timearea);
		
		//create the button
		var notesback = document.createElement("a");
		notesback.setAttribute("href","#"+name+lastname);		
		notesback.setAttribute("data-icon","arrow-l");
		notesback.setAttribute("data-iconpos","left");	
		notesback.setAttribute("class","ui-btn ui-btn-left ui-icon-arrow-l ui-btn-icon-left");
		var notesbacktext = document.createTextNode("Back");					
	
		
			
					
		//put stuff in 
		notesnewpage.appendChild(notesnewDiv);
		notesnewDiv.appendChild(notesnewDiv2);
		notesnewDiv2.appendChild(notesnewHeader);
		notesnewHeader.appendChild(notesnewHeaderText);
		notesnewDiv.appendChild(notesnewDiv3);
		notesnewDiv3.appendChild(notesnewDiv4);
		notesnewDiv4.appendChild(notesnewLabel);
		notesnewLabel.appendChild(notesnewlabelt);
		notesnewLabel.appendChild(notesnewtextarea);	
		//the button appending
		notesnewDiv2.appendChild(notesback);
		notesback.appendChild(notesbacktext);
		
		//putting it into the history
		var history = document.getElementById(name+lastname+"historyList");
		//create a new text item
		var newListText = document.createTextNode("Other " + stamp);
		var newText = document.createElement("a");
		newText.setAttribute("href","#"+value+notesvalue);
		newText.appendChild(newListText);
		//create a new p item 
		var newLine = document.createElement("li");
		newLine.appendChild(newText);
		history.appendChild(newLine);
		
		//putting it into updated history
		var newhistory = document.getElementById(name+lastname+"notesnewhistoryList");
		var finalnotes = document.getElementById(name+lastname+"textarea200").value;
		
		//create a new text item
		var notesnewListText = document.createTextNode("Other " + stamp + " Notes: "+finalnotes);
		var notesnewText = document.createElement("p");
		notesnewText.appendChild(notesnewListText);
		//create a new p item 
		var notesnewLine = document.createElement("li");
		notesnewLine.appendChild(notesnewText);
		newhistory.appendChild(notesnewLine);
		
	}	
}


/*function finalHistory(){
	//need to make the text from notes & also put it into the notesnewtext, need to put it somewhere else (afterwards)
	var finalnotes = document.getElementById("textarea100").value;
	var putfinal = document.getElementById("coke");
	putfinal.appendChild(finalnotes);
}*/
}        


/*//remove this later
function updateHistory(){
var value = document.getElementById("options").value;
  var now = new Date();
  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
  time[0] = time[0] || 12;
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    	}
	}
var stamp = (date.join("/") + " " + time.join(":") + " " + suffix);
var notesvalue = (date+time+suffix);
	if (value == "call") {
		//making a new page for notes
		var notesnewpage = document.getElementById("pages");
		//make a new div
		var notesnewDiv = document.createElement("div");
		notesnewDiv.setAttribute("data-role","page");
		notesnewDiv.setAttribute("id",value+notesvalue);
		var notesnewDiv2 = document.createElement("div");
		notesnewDiv2.setAttribute("data-theme","a");
		notesnewDiv2.setAttribute("data-role","header");	
		var notesnewHeader = document.createElement("h1");
		notesnewHeader.setAttribute("class","ui-title");	
		var notesnewHeaderText = document.createTextNode("CONNECTIONS");
		notesnewHeader.appendChild(notesnewHeaderText);
		var notesnewDiv3 = document.createElement("div");
		notesnewDiv3.setAttribute("role","main");	
		notesnewDiv3.setAttribute("class","ui-content");
		var notesnewDiv4 = document.createElement("div");
		notesnewDiv4.setAttribute("data-controltype","textarea");	
		notesnewDiv4.setAttribute("class","ui-field-contain");
		var notesnewLabel = document.createElement("label");
		notesnewLabel.setAttribute("for","textarea1");
		var notesnewlabelt = document.createTextNode("Notes on Connection:");
		var notesnewtextarea = document.createElement("textarea");
		notesnewtextarea.setAttribute("id","textarea1");
		//create the button
		var notesback = document.createElement("a");
		notesback.setAttribute("href","#history");		
		notesback.setAttribute("data-icon","arrow-l");
		notesback.setAttribute("data-iconpos","left");	
		notesback.setAttribute("class","ui-btn ui-btn-left ui-icon-arrow-l ui-btn-icon-left");
		var notesbacktext = document.createTextNode("Back");					
			
					
		//put stuff in 
		notesnewpage.appendChild(notesnewDiv);
		notesnewDiv.appendChild(notesnewDiv2);
		notesnewDiv2.appendChild(notesnewHeader);
		notesnewHeader.appendChild(notesnewHeaderText);
		notesnewDiv.appendChild(notesnewDiv3);
		notesnewDiv3.appendChild(notesnewDiv4);
		notesnewDiv4.appendChild(notesnewLabel);
		notesnewLabel.appendChild(notesnewlabelt);
		notesnewLabel.appendChild(notesnewtextarea);	
		//the button appending
		notesnewDiv2.appendChild(notesback);
		notesback.appendChild(notesbacktext);	
		
		//putting it into the history
		var history = document.getElementById("lines");
		//create a new text item
		var newText = document.createTextNode("Called " + stamp);
		//create a new p item 
		var newLine = document.createElement("p");
		newLine.appendChild(newText);
		history.appendChild(newLine);
		//create the notes button
		var anotes = document.createElement("a");
		anotes.setAttribute("href","#"+value+notesvalue);
		var tnotes = document.createTextNode("  Notes");
		anotes.appendChild(tnotes);
		newLine.appendChild(anotes);			
	}		
	if (value == "email") {
		//find where to put it
		var history = document.getElementById("lines");
		//create a new text item
		var newText = document.createTextNode("Emailed " + stamp);
		//create a new p item 
		var newLine = document.createElement("p");
		//put the text in the p
		newLine.appendChild(newText);
		history.appendChild(newLine);
	}
		if (value == "message") {
		//find where to put it
		var history = document.getElementById("lines");
		//create a new text item
		var newText = document.createTextNode("Messaged " + stamp);
		//create a new p item 
		var newLine = document.createElement("p");
		//put the text in the p
		newLine.appendChild(newText);
		history.appendChild(newLine);
	}	
				
}

//also remove this
function refresh(){
	var refresh = document.getElementById('contactList');
	//make it do something
}*/

function group(){
var value = document.getElementById("groups").value;
var name = document.getElementById('textinput1').value;
var lastname = document.getElementById('textinput6').value;  
	if (value == "friends") {             
   		 var contactList = document.getElementById("friendsList");  
    	//create a new list item	
        var newListItem = document.createElement("li");
		newListItem.setAttribute("data-theme","a");
		//create the ahref	
		var newLink = document.createElement("a");
		//set the link to #new-page
		newLink.setAttribute("href","#"+name+lastname+"updatedhistory");
		//create the text	
        var newName = document.createTextNode(name+" "+lastname);
        var newPic = document.createElement("img");
        newPic.setAttribute("src",x+".png");
        //put the image in the link
        newLink.appendChild(newPic);
		//put the name in the link
		newLink.appendChild(newName);
		//put the link in the list
        newListItem.appendChild(newLink);
		//put the list in the unordered list
        contactList.appendChild(newListItem);
        //create the notes button
		var anotes = document.createElement("a");
		anotes.setAttribute("href","#"+name+lastname);
		newListItem.appendChild(anotes);
        
    }        
    if (value == "family") {
       	var contactList = document.getElementById("familyList");  
    	//create a new list item	
        var newListItem = document.createElement("li");
		newListItem.setAttribute("data-theme","a");
		//create the ahref	
		var newLink = document.createElement("a");
		//set the link to #new-page
		newLink.setAttribute("href","#"+name+lastname+"updatedhistory");
		//create the text	
        var newName = document.createTextNode(name+" "+lastname);
		//put the name in the link
		var newPic = document.createElement("img");
        newPic.setAttribute("src",x+".png");
        //put the image in the link
        newLink.appendChild(newPic);
		newLink.appendChild(newName);
		//put the link in the list
        newListItem.appendChild(newLink);
		//put the list in the unordered list
        contactList.appendChild(newListItem);
		var anotes = document.createElement("a");
		anotes.setAttribute("href","#"+name+lastname);
		newListItem.appendChild(anotes);        
   }
    if (value == "colleagues") {
       	var contactList = document.getElementById("colleagueList");  
    	//create a new list item	
        var newListItem = document.createElement("li");
		newListItem.setAttribute("data-theme","a");
		//create the ahref	
		var newLink = document.createElement("a");
		//set the link to #new-page
		newLink.setAttribute("href","#"+name+lastname+"updatedhistory");
		//create the text	
        var newName = document.createTextNode(name+" "+lastname);
        var newPic = document.createElement("img");
        newPic.setAttribute("src",x+".png");
        //put the image in the link
        newLink.appendChild(newPic);
		//put the name in the link
		newLink.appendChild(newName);
		//put the link in the list
        newListItem.appendChild(newLink);
		//put the list in the unordered list
        contactList.appendChild(newListItem);
		var anotes = document.createElement("a");
		anotes.setAttribute("href","#"+name+lastname);
		newListItem.appendChild(anotes);        
   }                                       
    
}
