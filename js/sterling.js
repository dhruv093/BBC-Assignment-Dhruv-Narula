var Sterlings = {};

// Array for sterling coin values.
var $coinArray = [200, 100, 50, 20, 10, 5, 2, 1];

Sterlings.init = function(e) {

	var $keynum;				
	$keynum = e.keyCode;
	
	var $validation = document.getElementById('validationMsg');

	// If return key is pushed (keyno 13).
	if($keynum === 13) {
		$validation.innerHTML = "";
		Sterlings.calculateCoinsInArray();
	} else {
		$validation.innerHTML = "Press 'Enter' key.";
	}

};

Sterlings.calculateCoinsInArray = function() {

	// Get the value of the textbox
	var $amount = document.getElementById("coinValue");
	var $val = $amount.value;
	var $div = document.getElementById('coinResult');
	var $validation = document.getElementById('validationMsg');
	
	var setFormState = function ($amount, $div, $state) {
		//$state ? $amount.classList.remove('error') : $amount.classList.add('error');
		if($state){
			$amount.classList.remove('error');
			$validation.innerHTML = "";
		}
		else{
			$amount.classList.add('error');
			$validation.innerHTML = "Please! Enter valid input. Eg. 123p / &pound12.34 / 141";
		}
		$div.innerHTML = "";
	};

	// Reset the form state.
	setFormState($amount, $div, true);

	// Return false on a blank value.
	if($val.length === 0)
		return false;

	// Expression to validate the value entered by the user
	var $reg = /^(\u00A3)?(\d+(\.\d*)?|\.\d+)p?$/;
	
	var $match = $val.match($reg);

	// If the regular expression returns true, the value entered is valid.
	if ($match) {

		if($val.indexOf("£") > -1 || $val.indexOf(".") > -1) {
			$val = $val.replace(/[^\d.-]/g, ''); 
			$val = parseFloat($val).toFixed(2);
			$val = ($val * 100).toFixed(0);
		} 
		else {
			$val = $val.replace(/[^\d.-]/g, '');
			$val = parseFloat($val).toFixed(2);
		}
		
		// Call function to SET the coin values.
		var $coinValues = Sterlings.setCoinValues($val);

		// Output the values to the browser, GET.
		Sterlings.getCoinValues($coinValues, $div);

	} else {
		setFormState($amount, $div, false);
	}

};

Sterlings.setCoinValues = function($val) {

	var $coinValues = [];
	var $calc;

	// Loop through each element of the array, the coinArray. 	 	
	for (var $i = 0; $i < $coinArray.length; $i++) {

		$calc = Math.floor($val / $coinArray[$i]);
		// Add the remainder to the value.
		$val = $val % $coinArray[$i];
		$coinValues[$i] = $calc;

	}

	return $coinValues;

};

Sterlings.getCoinValues = function($coinValues, $div) {

	$div.innerHTML = $div.innerHTML + "<div class='result-container'><h1>RESULT</h1></div>";
	// Loop through values and output to the browser.
	for(var $i = 0; $i < $coinValues.length; $i++) {

		$div.innerHTML = $div.innerHTML + "<div class='coin-area'><div class='coin-inner' id='coin-"+ $coinArray[$i] +"'></div>" + 
						 "<div class='coin-value'>" + $coinValues[$i] + "</div></div>";	

	}

};
