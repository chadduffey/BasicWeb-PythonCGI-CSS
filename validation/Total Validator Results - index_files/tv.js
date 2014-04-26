/*
  Copyright (c) Total Validator.
  All Rights Reserved.
  Use is subject to the terms of the license.
*/

//Remove all onclick events for IE9 and earlier
window.onload = function() {
	//This always appears to be true with Safari??
	if (document.getElementsByTagName('body')[0].className == 'ie') {
		var links = document.getElementsByTagName('a');
		for (var i=0; i<links.length; i++) {
			if (links[i].onclick) links[i].setAttribute("onclick", null);
		}
	}
}

//Send word to Pro tool to add to dictionary
function sendWord(event,port) {
	try {
		var e = event || window.event;
		e.returnValue = false;
		
		var link = e.target || e.srcElement;
		if (link.nodeType == 3) link = link.parentNode;
		var word = link.innerText || link.textContent;					
		
		var req = new XMLHttpRequest();
		req.open("GET", "http://127.0.0.1:" + port + "/?word=" + word + "&js=true", false);
		req.send();
		
		if (req.status != 200) {
			alert("Add word failed");
		}
		else if (req.responseText.indexOf('Word') != 0) {
			alert(req.responseText);
		}
		else {
			if (req.responseText.indexOf('Word') == 0) {
				var links = document.getElementsByTagName('a');
				for (var i=0; i<links.length; i++) {
					if (links[i].onclick) {
						var spellWord = links[i].innerText || links[i].textContent;
						if (spellWord.toLowerCase() == word.toLowerCase()) {
							links[i].title = req.responseText;
							links[i].removeAttribute("href");
							links[i].removeAttribute("onclick");
							links[i].parentElement.setAttribute("class", "");
							links[i].nextSibling.style.display = "none";
							//links[i].nextSibling.setAttribute("class", "hidden");
						}
					}
				}
			}
		}
	} catch (e) {
		alert('Failed to contact Pro Tool: ' + e);
	}
}
