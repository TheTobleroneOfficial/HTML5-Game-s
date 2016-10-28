//variable storage

var audio_welcome = new Audio("welcome_birch.mp3");

//started when webpage is loaded


function onLoad() {

audio_welcome.play()
	setTimeout(function() { search() }, 6000);
}

function search() {



var searchBox = prompt("You Can Open, Search And Other Things!");

if(searchBox == "files") {

var searchBox_filesInput = alert("Here Is The File Manager");

setTimeout(function() { window.open("file:///C://Users/"); })

}



if (searchBox == "help") {

alert("To Open A Website Enter : open");
alert("To Look Through Your Files Enter : files");
alert("To Search On The Internet Enter : search");
setTimeout(function() { search() }, 0001)

}

if (searchBox == "open") {

var searchBox_searchInput_address = prompt("Which Ending Does The Website Have?");
var searchBox_openInput = prompt("Which Website Would You Like To Open?");

setTimeout(function() { window.open("http://www." + searchBox_openInput + "." + searchBox_searchInput_address ) }, 500);

}


if (searchBox == "search") {

var searchBox_searchInput = prompt("What What You Like To Search?");

setTimeout(function() { window.open("https://www.google.co.uk/?gfe_rd=cr&ei=FNdJV-TnAsHS8Af2uJAQ#q=" + searchBox_searchInput) }, 500);

}

}