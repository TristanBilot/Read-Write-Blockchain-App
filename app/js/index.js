import EmbarkJS from 'Embark/EmbarkJS';
import SimpleStorage from 'Embark/contracts/simple_storage';
// import your contracts
// e.g if you have a contract named SimpleStorage:
//import SimpleStorage from 'Embark/contracts/SimpleStorage';


$(document).ready(function() {
	alert("test");

	$("button.set").click(function() {
		var value = parseInt($("input.text").val, 10);
		SimpleStorage.setValue(value);
		addToLog("SimpleStorage.setValue(" + value + ")");
	})

	document.getElementByClassName("get")[0].addEventListener('click', function() {
		var value = SimpleStorage.getValue().toNumber();
		$(".value").html(value);
		addToLog("SimpleStorage.getValue()");
	});

	var addToLog = function(txt) {
		$(".logs").append("<br>" + txt);
	}
})