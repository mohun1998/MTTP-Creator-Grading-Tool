// MTTP:// MX TAKATAK GRADING TOOL
// © MT Studios 2022
// --------------------------------------------------------------------------------
// Sub-tool Interface for Phone (Standalone)
// --------------------------------------------------------------------------------


// All variables
// --------------------------------------------------------------------------------

// Injested ID Rows & Textbox related stuff
var inputID, inputIDonlyChar, inputIDonlyNo = null;
var keyID, keyIDpost = null;

var thisRowNo, nextRowNo = null;

var vKeyboard = document.getElementById("vKeyboard");
var vKeyboardSpacer = document.getElementById("vKeyboardSpacer");

// --------------------------------------------------------------------------------
// All Functions
// --------------------------------------------------------------------------------

// Virtual Keyboard Activate & Deactivate
function vKeyboardActivate() {
	vKeyboard.classList.remove("vKeyboard_inactive");
	vKeyboardSpacer.classList.add("vKeyboardSpacerActive");
}

function vKeyboardDeActivate() {
	vKeyboard.classList.add("vKeyboard_inactive");
	vKeyboardSpacer.classList.remove("vKeyboardSpacerActive");
}

// Keyboard Shortcuts for All Textboxes
// All Textbox function for Focus, Blur and Focus shifter with arrow keys shortcut

// Virtual Keyboard All Keys function and event listener
$('.vKeyboardKey').on('mousedown', function() {
	keyID = this.id;

	function subCategory(one, oneVal, two, twoVal, three, threeVal, four, fourVal, five, fiveVal) {
		switch(keyID) {
			case one:
				document.getElementById(inputID).value = oneVal;
				ogCategory();
				break;
			case two:
				document.getElementById(inputID).value = twoVal;
				ogCategory();
				keyIDpost=null;
				break;
			case three:
				document.getElementById(inputID).value = threeVal;
				ogCategory();
				keyIDpost=null;
				break;
			case four:
				document.getElementById(inputID).value = fourVal;
				ogCategory();
				keyIDpost=null;
				break;
			case five:
				document.getElementById(inputID).value = fiveVal;
				ogCategory();
				keyIDpost=null;
				break;
		}
	}

	function subCategoryOne(one, oneVal) {
		switch(keyID) {
			case one:
				document.getElementById(inputID).value = oneVal;
				ogCategory();
				break;
		}
	}
	
	function nVideoFiller(one, two, three) {
        switch (keyID) {
			case 'vKeyboardKey1':
				document.getElementById("nVideos"+inputIDonlyNo).value = one;
				if(document.getElementById("category"+inputIDonlyNo).value !== "") {
				    document.getElementById("region"+inputIDonlyNo).focus();
				}
				else {
				    document.getElementById("ogContent"+inputIDonlyNo).focus();
				}
				keyIDpost=null;
				break;
			case 'vKeyboardKey2':
				document.getElementById("nVideos"+inputIDonlyNo).value = two;
				if(document.getElementById("category"+inputIDonlyNo).value !== "") {
				    document.getElementById("region"+inputIDonlyNo).focus();
				}
				else {
				    document.getElementById("ogContent"+inputIDonlyNo).focus();
				}
				keyIDpost=null;
				break;
			case 'vKeyboardKey3':
				document.getElementById("nVideos"+inputIDonlyNo).value = three;
				if(document.getElementById("category"+inputIDonlyNo).value !== "") {
				    document.getElementById("region"+inputIDonlyNo).focus();
				}
				else {
				    document.getElementById("ogContent"+inputIDonlyNo).focus();
				}
				keyIDpost=null;
				break;
        }
	}

	function ogFiller(val) {
		document.getElementById('ogContent'+inputIDonlyNo).value = val;
		document.getElementById('GV'+inputIDonlyNo).value = "1";
		document.getElementById('GA'+inputIDonlyNo).value = "1";
		document.getElementById('bGirl'+inputIDonlyNo).value = "0";
	}

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
	
	function exclShortFiller(one, two, three) {
	    document.getElementById("vertical"+inputIDonlyNo).value = one;
		document.getElementById("category"+inputIDonlyNo).value = two;
		document.getElementById("gender"+inputIDonlyNo).value = three;
		document.getElementById("region"+inputIDonlyNo).focus();
	}
	
	function exclShortFiller2(one, two, three) {
	    document.getElementById("vertical"+inputIDonlyNo).value = one;
		document.getElementById("category"+inputIDonlyNo).value = two;
		document.getElementById("gender"+inputIDonlyNo).value = three;
		document.getElementById("nVideos"+inputIDonlyNo).value = "";
		document.getElementById("nVideos"+inputIDonlyNo).focus();
	}

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
		document.getElementById('nVideos'+inputIDonlyNo).value = "";
	}
	
	// Keyboard Shortcuts autofill for Comments Textboxes
	if(inputID === "comment" + inputIDonlyNo) {
		switch (keyID) {
			case 'vKeyboardKeyP':
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
		switch (keyID) {
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
			case 'vKeyboardKeyV':
				nonOGContent();
				commentCommonFiller("No videos");
				break;
			case 'vKeyboardKeyG':
				ogFiller("0");
				exclShortFiller("0", "Games", "No face");
				break;
			case 'vKeyboardKeyC':
				ogFiller("0");
				exclShortFiller("0", "Comedy", "Group");
				break;
			case 'vKeyboardKeyN':
				ogFiller("0");
				exclShortFiller("0", "No Classification", "Group");
				break;
			case 'vKeyboardKeyE':
				ogFiller("0");
				exclShortFiller("0", "Entertainment Culture", "Group");
				break;
		}
	}
	// Auto shifter from Mostly vertical to Region
	else if(inputID === "vertical" + inputIDonlyNo) {
		switch (keyID) {
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
		switch (keyID) {
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
		if(document.getElementById("category"+inputIDonlyNo).value == "Games" || document.getElementById("category"+inputIDonlyNo).value == "Comedy" || document.getElementById("category"+inputIDonlyNo).value == "Entertainment Culture" || document.getElementById("category"+inputIDonlyNo).value == "No Classification") {
			switch (keyID) {
				case 'vKeyboardKey0':
					binaryFillerNxt("0", "bio");
					break;
				case 'vKeyboardKey1':
					binaryFillerNxt("1", "bio");
					break;
			}
		}
		else {
			switch (keyID) {
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
		function ogCategory () {
			document.getElementById("gender"+inputIDonlyNo).focus();
		}
		switch (keyIDpost) {
			case 'vKeyboardKeyA':
				subCategory('vKeyboardKey1', "Arts & Crafts", 'vKeyboardKey2', "Auto & Vehicle", 'vKeyboardKey3', "Animals", 'vKeyboardKey4', "Astrology", 'vKeyboardKey5', "");
				keyID=null;
				break;
			case 'vKeyboardKeyD':
				subCategory('vKeyboardKey1', "Daily Life", 'vKeyboardKey2', "Dance", 'vKeyboardKey3', "Devotional", 'vKeyboardKey4', "Drama", 'vKeyboardKey5', "DIY & Life Hacks");
				keyID=null;
				break;
			case 'vKeyboardKeyF':
				subCategory('vKeyboardKey1', "Fitness & Health", 'vKeyboardKey2', "Food & Beverage", 'vKeyboardKey3', "Fashion", 'vKeyboardKey4', "", 'vKeyboardKey5', "");
				keyID=null;
				break;
			case 'vKeyboardKeyM':
				subCategory('vKeyboardKey1', "Music", 'vKeyboardKey2', "Motivation & Advice", 'vKeyboardKey3', "Magic", 'vKeyboardKey4', "", 'vKeyboardKey5', "");
				keyID=null;
				break;
			case 'vKeyboardKeyP':
				subCategory('vKeyboardKey1', "Photography & Videography", 'vKeyboardKey2', "Poetry", 'vKeyboardKey3', "Patriotism", 'vKeyboardKey4', "", 'vKeyboardKey5', "");
				keyID=null;
				break;
			case 'vKeyboardKeyS':
				subCategory('vKeyboardKey1', "Sports", 'vKeyboardKey2', "Science & Education", 'vKeyboardKey3', "Society", 'vKeyboardKey4', "", 'vKeyboardKey5', "");
				keyID=null;
				break;
			case 'vKeyboardKeyT':
				subCategory('vKeyboardKey1', "Travel", 'vKeyboardKey2', "Tech Review", 'vKeyboardKey3', "", 'vKeyboardKey4', "", 'vKeyboardKey5', "");
				keyID=null;
				break;
		}
		switch (keyID) {
			case 'vKeyboardKeyB':
				document.getElementById(inputID).value = "Beauty & Care";
				ogCategory();
				break;
			case 'vKeyboardKeyC':
				document.getElementById(inputID).value = "Comedy";
				ogCategory();
				break;
			case 'vKeyboardKeyE':
				document.getElementById(inputID).value = "Entertainment Culture";
				ogCategory();
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
			case 'vKeyboardKeyN':
				document.getElementById(inputID).value = "No Classification";
				ogCategory();
				break;
			case 'vKeyboardKeyO':
				document.getElementById(inputID).value = "Oddly Satisfying";
				ogCategory();
				break;
			case 'vKeyboardKeyR':
				document.getElementById(inputID).value = "Romance";
				ogCategory();
				break;
		}
	}
	
	// Gender Groups Keyboard shortcut filler
	else if(inputID === "gender" + inputIDonlyNo) {
		function genderFiller(val) {
			document.getElementById(inputIDonlyChar+inputIDonlyNo).value = val;
			document.getElementById("takID_"+nextRowNo).focus();
		}
		switch (keyID) {
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
		switch (keyID) {
			case 'vKeyboardKey0':
				binaryFillerNxt("0", "bGirl");
				break;
			case 'vKeyboardKey1':
				binaryFillerNxt("1", "bGirl");
				break;
		}
	}
	// Keyboard Shortcuts for Original vs Aggregator
	else if(inputID === "nVideos" + inputIDonlyNo) {
		switch (keyIDpost) {
			case 'vKeyboardKeyL':
				nVideoFiller("less than 10", "less than 20 but more than 10", "less than 30 but more than 20");
				break;
			case 'vKeyboardKeyE':
				nVideoFiller("equal to 10", "equal to 20", "Equal to or more than 30");
				break;
		}
		switch (keyID) {
			case 'vKeyboardKeyP':
				nonOGContent();
				commentCommonFiller("Private Account");
				break;
			case 'vKeyboardKeyF':
				nonOGContent();
				commentCommonFiller("Not found");
				break;
			case 'vKeyboardKeyV':
				nonOGContent();
				commentCommonFiller("No videos");
				break;
			case 'vKeyboardKeyG':
				ogFiller("0");
				exclShortFiller2("0", "Games", "No face");
				break;
			case 'vKeyboardKeyC':
				ogFiller("0");
				exclShortFiller2("0", "Comedy", "Group");
				break;
			case 'vKeyboardKeyN':
				ogFiller("0");
				exclShortFiller2("0", "No Classification", "Group");
				break;
		}
	}

}).on('mouseup', function() {
	document.getElementById(inputID).focus();
	keyIDpost=this.id;
	keyID=null;
});


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

	

}).on('blur', function() {
	inputID, inputIDonlyChar, inputIDonlyNo = null;
	vKeyboardDeActivate();
});