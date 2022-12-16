// MTTP:// MX TAKATAK GRADING TOOL
// © MT Studios 2022
// --------------------------------------------------------------------------------
// Sub-tool Interface for Phone (Standalone)
// --------------------------------------------------------------------------------


// All variables
// --------------------------------------------------------------------------------

// Injested ID Rows & Textbox related stuff
var inputID, inputIDonlyChar, inputIDonlyNo = null;
var keyID = null;

var thisRowNo, nextRowNo = null;

var vKeyboard = document.getElementById("vKeyboard");

// --------------------------------------------------------------------------------
// All Functions
// --------------------------------------------------------------------------------

// Virtual Keyboard Activate & Deactivate
function vKeyboardActivate() {
	vKeyboard.classList.remove("vKeyboard_inactive");
}

function vKeyboardDeActivate() {
	vKeyboard.classList.add("vKeyboard_inactive");
}

// Keyboard Shortcuts for All Textboxes
// All Textbox function for Focus, Blur and Focus shifter with arrow keys shortcut

$('input').on('focus', function() {
	inputID, inputIDonlyChar, inputIDonlyNo = null;
	inputID = this.id,
	inputIDonlyNo = inputID.replace(/[A-Za-z]/g, ''),
	inputIDonlyChar = inputID.replace(/[0-9_]/g, '');
	thisRowNo, nextRowNo, prevRowNo = null;
	thisRowNo = inputIDonlyNo.replace(/[_]/g, '');
	nextRowNo = Number(thisRowNo)+1;
	prevRowNo = Number(thisRowNo)-1;
	
	vKeyboardActivate();

	function commentCommonFiller(val) {
		document.getElementById("comment"+inputIDonlyNo).value = val;
		document.getElementById("takID_"+nextRowNo).focus();
	}

	function binaryFiller(val, prev, next) {
		document.getElementById(prev+inputIDonlyNo).value = val;
		document.getElementById(next+inputIDonlyNo).focus();
	}

	function binaryFillerNxt(val, prev) {
		document.getElementById(prev+inputIDonlyNo).value = val;
		document.getElementById("takID_"+nextRowNo).focus();
	}

	// Virtual Keyboard All Keys function and event listener
	$('.vKeyboardKey').on('mousedown', function() {

		// Keyboard Shortcuts autofill for Comments Textboxes
		if(inputID === "comment" + inputIDonlyNo) {
			switch (this.id) {
				case 'vKeyboardKeyP':
					nonOGContent();
					commentCommonFiller("Private Account");
					break;
				case 'vKeyboardKeyF':
					nonOGContent();
					commentCommonFiller("Not found");
					break;
				case 'vKeyboardKeyN':
					nonOGContent();
					commentCommonFiller("No videos");
					break;
				case 'vKeyboardKeyL':
					commentCommonFiller("Videos less than 10");
					break;
				case 'vKeyboardKeyA':
					document.getElementById('GA'+inputIDonlyNo).value = "0";
					commentCommonFiller("Bad audio quality");
					break;
				case 'vKeyboardKeyV':
					document.getElementById('GV'+inputIDonlyNo).value = "0";
					commentCommonFiller("Bad video quality");
					break;
				case 'vKeyboardKeyW':
					commentCommonFiller("Weapon Showcase");
				break;
				case 'vKeyboardKeyD':
					commentCommonFiller("Exceptional Dance");
					break;
				case 'vKeyboardKeyS':
					commentCommonFiller("Exceptional Singing");
				break;
			}
		}
		// Keyboard Shortcuts autofill for Original Content Textboxes
		else if(inputID === "ogContent" + inputIDonlyNo) {

			function ogFiller(val) {
				document.getElementById('ogContent'+inputIDonlyNo).value = val;
				document.getElementById('GV'+inputIDonlyNo).value = "1";
				document.getElementById('GA'+inputIDonlyNo).value = "1";
				document.getElementById('bGirl'+inputIDonlyNo).value = "0";
			}
			switch (this.id) {
				case 'vKeyboardKey0':
					ogFiller("0");
					document.getElementById("vertical"+inputIDonlyNo).focus();
					break;
				case 'vKeyboardKey1':
					ogFiller("1");
					document.getElementById("vertical"+inputIDonlyNo).focus();
					break;
				case 'vKeyboardKeyP':
					nonOGContent();
					commentCommonFiller("Private Account");
					break;
				case 'vKeyboardKeyF':
					nonOGContent();
					commentCommonFiller("Not found");
					break;
				case 'vKeyboardKeyN':
					nonOGContent();
					commentCommonFiller("No videos");
					break;
				case 'vKeyboardKeyG':
					ogFiller("0");
					document.getElementById("vertical"+inputIDonlyNo).value = "0";
					document.getElementById("category"+inputIDonlyNo).value = "Games";
					document.getElementById("gender"+inputIDonlyNo).value = "No face";
					document.getElementById("region"+inputIDonlyNo).focus();
					break;
			}
		}
		// Auto shifter from Mostly vertical to Region
		else if(inputID === "vertical" + inputIDonlyNo) {
			switch (this.id) {
				case 'vKeyboardKey0':
					binaryFiller("0", "vertical", "region");
					break;
				case 'vKeyboardKey1':
					binaryFiller("1", "vertical", "region");
					break;
			}
		}
		// Auto shifter from Region to Bio filled
		else if(inputID === "region" + inputIDonlyNo) {
			switch (this.id) {
				case 'vKeyboardKey0':
					binaryFiller("0", "region", "bio");
					break;
				case 'vKeyboardKey1':
					binaryFiller("1", "region", "bio");
					break;
			}
		}
		// Auto shifter from Bio filled to Category
		else if(inputID === "bio" + inputIDonlyNo) {
			if(document.getElementById("category"+inputIDonlyNo).value == "Games") {
				switch (this.id) {
					case 'vKeyboardKey0':
						binaryFillerNxt("0", "bio");
						break;
					case 'vKeyboardKey1':
						binaryFillerNxt("1", "bio");
						break;
				}
			}
			else {
				switch (this.id) {
					case 'vKeyboardKey0':
						binaryFiller("0", "bio", "category");
						break;
					case 'vKeyboardKey1':
						binaryFiller("1", "bio", "category");
						break;
				}
			}
		}

		// Keyboard Shortcuts autofill for Category Content Textboxes
		else if(inputID === "category" + inputIDonlyNo) {
			// Functions to dynamically change sub-key shortcut
			function subKey2 (one, two) {
				switch (this.id) {
					case 'vKeyboardKey1':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = one;
					ogCategory();
					break;
					case 'vKeyboardKey2':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = two;
					ogCategory();
					break;
					default:
					break;
				}
			}
			function subKey3 (one, two, three) {
				switch (this.id) {
					case 'vKeyboardKey1':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = one;
					ogCategory();
					break;
					case 'vKeyboardKey2':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = two;
					ogCategory();
					break;
					case 'vKeyboardKey3':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = three;
					ogCategory();
					break;
					default:
					break;
				}
			}
			function subKey4 (one, two, three, four) {
				switch (this.id) {
					case 'vKeyboardKey1':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = one;
					ogCategory();
					break;
					case 'vKeyboardKey2':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = two;
					ogCategory();
					break;
					case 'vKeyboardKey3':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = three;
					ogCategory();
					break;
					case 'vKeyboardKey4':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = four;
					ogCategory();
					break;
					default:
					break;
				}
			}
			function subKey5 (one, two, three, four, five) {
				switch (this.id) {
					case 'vKeyboardKey1':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = one;
					ogCategory();
					break;
					case 'vKeyboardKey2':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = two;
					ogCategory();
					break;
					case 'vKeyboardKey3':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = three;
					ogCategory();
					break;
					case 'vKeyboardKey4':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = four;
					ogCategory();
					break;
					case 'vKeyboardKey5':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = five;
					ogCategory();
					break;
					default:
					break;
				}
			}
			function ogCategory () {
				document.getElementById("gender"+inputIDonlyNo).focus();
			}
			switch (this.id) {
				case 'vKeyboardKeyA':
					subKey4("Arts & Crafts", "Auto & Vehicle", "Animals", "Astrology");
					break;
				case 'vKeyboardKeyB':
					document.getElementById(inputID).value = "Beauty & Care";
					ogCategory();
					break;
				case 'vKeyboardKeyC':
					document.getElementById(inputID).value = "Comedy";
					ogCategory();
					break;
				case 'vKeyboardKeyD':
					subKey5("Dance", "Daily Life", "Devotional", "Drama", "DIY & Life Hacks");
					break;
				case 'vKeyboardKeyE':
					document.getElementById(inputID).value = "Entertainment Culture";
					ogCategory();
					break;
				case 'vKeyboardKeyF':
					subKey3("Fitness & Health", "Food & Beverage", "Fashion");
					break;
				case 'vKeyboardKeyG':
					document.getElementById(inputID).value = "Games";
					ogCategory();
					break;
				case 'vKeyboardKeyH':
					document.getElementById(inputID).value = "Home & Garden";
					ogCategory();
					break;
				case 'vKeyboardKeyL':
					document.getElementById(inputID).value = "Lip Sync";
					ogCategory();
					break;
				case 'vKeyboardKeyM':
					subKey3("Music", "Motivation & Advice", "Magic");
					break;
				case 'vKeyboardKeyN':
					document.getElementById(inputID).value = "No Classification";
					ogCategory();
					break;
				case 'vKeyboardKeyO':
					document.getElementById(inputID).value = "Oddly Satisfying";
					ogCategory();
					break;
				case 'vKeyboardKeyP':
					subKey3("Photography & Videography", "Poetry", "Patriotism");
					break;
				case 'vKeyboardKeyR':
					document.getElementById(inputID).value = "Romance";
					ogCategory();
					break;
				case 'vKeyboardKeyS':
					subKey4("Sports", "Science & Education", "Society");
					break;
				case 'vKeyboardKeyT':
					subKey2("Travel", "Tech Review");
					break;
			}
		}
		
		// Gender Groups Keyboard shortcut filler
		else if(inputID === "gender" + inputIDonlyNo) {
			function genderFiller(val) {
				document.getElementById(inputIDonlyChar+inputIDonlyNo).value = val;
				document.getElementById("takID_"+nextRowNo).focus();
			}
			switch (this.id) {
				case 'vKeyboardKeyM':
					genderFiller("Male");
					break;
				case 'vKeyboardKeyF':
					genderFiller("Female");
					break;
				case 'vKeyboardKeyC':
					genderFiller("Couple");
					break;
				case 'vKeyboardKeyG':
					genderFiller("Group");
					break;
				case 'vKeyboardKeyK':
					genderFiller("Child");
					break;
				case 'vKeyboardKeyN':
					genderFiller("No face");
					break;
			}
		}
		// Auto shifter from Gender groups to Beautiful Girl
		else if(inputID === "bGirl" + inputIDonlyNo) {
			switch (this.id) {
				case 'vKeyboardKey0':
					binaryFillerNxt("0", "bGirl");
					break;
				case 'vKeyboardKey1':
					binaryFillerNxt("1", "bGirl");
					break;
			}
		}
		// Keyboard Shortcuts for Original vs Aggregator
		else if(inputID === "OGAG" + inputIDonlyNo) {
			switch (this.id) {
				case 'vKeyboardKeyO':
					document.getElementById('OGAG'+inputIDonlyNo).value = "Original";
					document.getElementById("OGreason"+inputIDonlyNo).focus();
					break;
				case 'vKeyboardKeyA':
					document.getElementById('OGAG'+inputIDonlyNo).value = "Aggregator";
					document.getElementById("OGreason"+inputIDonlyNo).focus();
					break;
			}
		}
		// Keyboard Shortcuts for Original vs Aggregator
		else if(inputID === "OGreason" + inputIDonlyNo) {
			switch (this.id) {
				case 'vKeyboardKeyA':
					document.getElementById('OGreason'+inputIDonlyNo).value = "All animals are same";
					document.getElementById("takID_"+nextRowNo).focus();
					break;
				case 'vKeyboardKeyC':
					document.getElementById('OGreason'+inputIDonlyNo).value = "All cars are same";
					document.getElementById("takID_"+nextRowNo).focus();
					break;
				case 'vKeyboardKeyS':
					document.getElementById('OGreason'+inputIDonlyNo).value = "Same shop";
					document.getElementById("takID_"+nextRowNo).focus();
					break;
				case 'vKeyboardKeyV':
					document.getElementById('OGreason'+inputIDonlyNo).value = "Same Voice";
					document.getElementById("takID_"+nextRowNo).focus();
					break;
				case 'vKeyboardKeyB':
					document.getElementById('OGreason'+inputIDonlyNo).value = "same body structure";
					document.getElementById("takID_"+nextRowNo).focus();
					break;
			}
		}

	});

	// Non Original Content value setter function : (Common)
	function nonOGContent() {
		document.getElementById('ogContent'+inputIDonlyNo).value = "0";
		document.getElementById('category'+inputIDonlyNo).value = "";
		document.getElementById('bio'+inputIDonlyNo).value = "";
		document.getElementById('region'+inputIDonlyNo).value = "";
		document.getElementById('unique'+inputIDonlyNo).value = "";
		document.getElementById('vertical'+inputIDonlyNo).value = "";
		document.getElementById('GV'+inputIDonlyNo).value = "";
		document.getElementById('GA'+inputIDonlyNo).value = "";
		document.getElementById('gender'+inputIDonlyNo).value = "";
		document.getElementById('bGirl'+inputIDonlyNo).value = "";
	}
}).on('blur', function() {
	inputID, inputIDonlyChar, inputIDonlyNo = null;
	vKeyboardDeActivate();
});