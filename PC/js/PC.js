// MTTP:// MX TAKATAK GRADING TOOL
// © MT Studios 2022
// --------------------------------------------------------------------------------
// Sub-tool Interface for PC
// --------------------------------------------------------------------------------


// All variables
// --------------------------------------------------------------------------------

// Injested ID Rows & Textbox related stuff
var inputID, inputIDonlyChar, inputIDonlyNo = null;

var thisRowNo, nextRowNo = null;

// --------------------------------------------------------------------------------
// All Functions
// --------------------------------------------------------------------------------


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
	
	function ogFiller(val) {
		document.getElementById('ogContent'+inputIDonlyNo).value = val;
		document.getElementById('GV'+inputIDonlyNo).value = "1";
		document.getElementById('GA'+inputIDonlyNo).value = "1";
		document.getElementById('bGirl'+inputIDonlyNo).value = "0";
	}
	
	function nVideoFiller(one, two, three) {
        document.getElementById(inputID).onkeyup = function (event) {
			const { key } = event;
			thisRowNo, nextRowNo = null;
			thisRowNo = inputIDonlyNo.replace(/[_]/g, '');
			nextRowNo = Number(thisRowNo)+1;
	        switch (key) {
				case '1':
					document.getElementById("nVideos"+inputIDonlyNo).value = one;
					if(document.getElementById("category"+inputIDonlyNo).value !== "") {
					    document.getElementById("region"+inputIDonlyNo).focus();
					}
					else {
					    document.getElementById("ogContent"+inputIDonlyNo).focus();
					}
					break;
				case '2':
					document.getElementById("nVideos"+inputIDonlyNo).value = two;
					if(document.getElementById("category"+inputIDonlyNo).value !== "") {
					    document.getElementById("region"+inputIDonlyNo).focus();
					}
					else {
					    document.getElementById("ogContent"+inputIDonlyNo).focus();
					}
					break;
				case '3':
					document.getElementById("nVideos"+inputIDonlyNo).value = three;
					if(document.getElementById("category"+inputIDonlyNo).value !== "") {
					    document.getElementById("region"+inputIDonlyNo).focus();
					}
					else {
					    document.getElementById("ogContent"+inputIDonlyNo).focus();
					}
					break;
	        }
	    }
	}

	// Keyboard Shortcuts autofill for Comments Textboxes
	if(inputID === "comment" + inputIDonlyNo) {

		document.getElementById(inputID).onkeyup = function (event) {
			const { key } = event;
			thisRowNo, nextRowNo = null;
			thisRowNo = inputIDonlyNo.replace(/[_]/g, '');
			nextRowNo = Number(thisRowNo)+1;
			switch (key) {
				case 'p':
				case 'P':
					nonOGContent();
					commentCommonFiller("Private Account");
					break;
				case 'f':
				case 'F':
					nonOGContent();
					commentCommonFiller("Not found");
					break;
				case 'n':
				case 'N':
					nonOGContent();
					commentCommonFiller("No videos");
					break;
				case 'l':
				case 'L':
					commentCommonFiller("Videos less than 10");
					break;
				case 'a':
				case 'A':
					document.getElementById('GA'+inputIDonlyNo).value = "0";
					commentCommonFiller("Bad audio quality");
					break;
				case 'v':
				case 'V':
					document.getElementById('GV'+inputIDonlyNo).value = "0";
					commentCommonFiller("Bad video quality");
					break;
				case 'w':
				case 'W':
					commentCommonFiller("Weapon Showcase");
				break;
				case 'd':
				case 'D':
					commentCommonFiller("Exceptional Dance");
					break;
				case 's':
				case 'S':
					commentCommonFiller("Exceptional Singing");
				break;
			}
		}
	}
	// Keyboard Shortcuts autofill for Original Content Textboxes
	else if(inputID === "ogContent" + inputIDonlyNo) {

		document.getElementById(inputID).onkeyup = function (event) {
			const { key } = event;
			thisRowNo, nextRowNo = null;
			thisRowNo = inputIDonlyNo.replace(/[_]/g, '');
			nextRowNo = Number(thisRowNo)+1;
			switch (key) {
				case '0':
					ogFiller("0");
					document.getElementById("vertical"+inputIDonlyNo).focus();
					break;
				case '1':
					ogFiller("1");
					document.getElementById("vertical"+inputIDonlyNo).focus();
					break;
				case 'p':
				case 'P':
					nonOGContent();
					commentCommonFiller("Private Account");
					break;
				case 'f':
				case 'F':
					nonOGContent();
					commentCommonFiller("Not found");
					break;
				case 'v':
				case 'V':
					nonOGContent();
					commentCommonFiller("No videos");
					break;
				case 'g':
				case 'G':
					ogFiller("0");
					exclShortFiller("0", "Games", "No face");
					break;
				case 'c':
				case 'C':
					ogFiller("0");
					exclShortFiller("0", "Comedy", "Group");
					break;
				case 'n':
				case 'N':
					ogFiller("0");
					exclShortFiller("0", "No Classification", "Group");
					break;
				case 'e':
				case 'E':
					ogFiller("0");
					exclShortFiller("0", "Entertainment Culture", "Group");
					break;
			}
		}
	}
	// Auto shifter from Mostly vertical to Region
	else if(inputID === "vertical" + inputIDonlyNo) {
		document.getElementById(inputID).onkeyup = function (event) {
			const { key } = event;
			switch (key) {
				case '0':
					binaryFiller("0", "vertical", "region");
					break;
				case '1':
					binaryFiller("1", "vertical", "region");
					break;
			}
		}
	}
	// Auto shifter from Region to Bio filled
	else if(inputID === "region" + inputIDonlyNo) {
		document.getElementById(inputID).onkeyup = function (event) {
			const { key } = event;
			switch (key) {
				case '0':
					binaryFiller("0", "region", "bio");
					break;
				case '1':
					binaryFiller("1", "region", "bio");
					break;
			}
		}
	}
	// Auto shifter from Bio filled to Category
	else if(inputID === "bio" + inputIDonlyNo) {
		document.getElementById(inputID).onkeyup = function (event) {
			const { key } = event;
			if(document.getElementById("category"+inputIDonlyNo).value == "Games" || document.getElementById("category"+inputIDonlyNo).value == "Comedy" || document.getElementById("category"+inputIDonlyNo).value == "Entertainment Culture" || document.getElementById("category"+inputIDonlyNo).value == "No Classification") {
				switch (key) {
					case '0':
						binaryFillerNxt("0", "bio");
						break;
					case '1':
						binaryFillerNxt("1", "bio");
						break;
				}
			}
			else {
				switch (key) {
					case '0':
						binaryFiller("0", "bio", "category");
						break;
					case '1':
						binaryFiller("1", "bio", "category");
						break;
				}
			}
		}
	}

	// Keyboard Shortcuts autofill for Category Content Textboxes
	else if(inputID === "category" + inputIDonlyNo) {
		// Functions to dynamically change sub-key shortcut
		function subKey2 (one, two) {
			document.getElementById(inputID).onkeyup = function (event) {
				const { key } = event;
				switch (key) {
					case '1':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = one;
					ogCategory();
					break;
					case '2':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = two;
					ogCategory();
					break;
					default:
					break;
				}
			}
		}
		function subKey3 (one, two, three) {
			document.getElementById(inputID).onkeyup = function (event) {
				const { key } = event;
				switch (key) {
					case '1':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = one;
					ogCategory();
					break;
					case '2':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = two;
					ogCategory();
					break;
					case '3':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = three;
					ogCategory();
					break;
					default:
					break;
				}
			}
		}
		function subKey4 (one, two, three, four) {
			document.getElementById(inputID).onkeyup = function (event) {
				const { key } = event;
				switch (key) {
					case '1':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = one;
					ogCategory();
					break;
					case '2':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = two;
					ogCategory();
					break;
					case '3':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = three;
					ogCategory();
					break;
					case '4':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = four;
					ogCategory();
					break;
					default:
					break;
				}
			}
		}
		function subKey5 (one, two, three, four, five) {
			document.getElementById(inputID).onkeyup = function (event) {
				const { key } = event;
				switch (key) {
					case '1':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = one;
					ogCategory();
					break;
					case '2':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = two;
					ogCategory();
					break;
					case '3':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = three;
					ogCategory();
					break;
					case '4':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = four;
					ogCategory();
					break;
					case '5':
					document.getElementById(inputIDonlyChar+inputIDonlyNo).value = five;
					ogCategory();
					break;
					default:
					break;
				}
			}
		}

		function ogCategory () {
			document.getElementById("gender"+inputIDonlyNo).focus();
		}
		document.getElementById(inputID).onkeyup = function (event) {
			const { key } = event;
			switch (key) {
				case 'a':
				case 'A':
					subKey4("Arts & Crafts", "Auto & Vehicle", "Animals", "Astrology");
					break;
				case 'b':
				case 'B':
					document.getElementById(inputID).value = "Beauty & Care";
					ogCategory();
					break;
				case 'c':
				case 'C':
					document.getElementById(inputID).value = "Comedy";
					ogCategory();
					break;
				case 'd':
				case 'D':
					subKey5("Daily Life", "Dance", "Devotional", "Drama", "DIY & Life Hacks");
					break;
				case 'e':
				case 'E':
					document.getElementById(inputID).value = "Entertainment Culture";
					ogCategory();
					break;
				case 'f':
				case 'F':
					subKey3("Fitness & Health", "Food & Beverage", "Fashion");
					break;
				case 'g':
				case 'G':
					document.getElementById(inputID).value = "Games";
					ogCategory();
					break;
				case 'h':
				case 'H':
					document.getElementById(inputID).value = "Home & Garden";
					ogCategory();
					break;
				case 'l':
				case 'L':
					document.getElementById(inputID).value = "Lip Sync";
					ogCategory();
					break;
				case 'm':
				case 'M':
					subKey3("Music", "Motivation & Advice", "Magic");
					break;
				case 'n':
				case 'N':
					document.getElementById(inputID).value = "No Classification";
					ogCategory();
					break;
				case 'o':
				case 'O':
					document.getElementById(inputID).value = "Oddly Satisfying";
					ogCategory();
					break;
				case 'p':
				case 'P':
					subKey3("Photography & Videography", "Poetry", "Patriotism");
					break;
				case 'r':
				case 'R':
					document.getElementById(inputID).value = "Romance";
					ogCategory();
					break;
				case 's':
				case 'S':
					subKey4("Sports", "Science & Education", "Society");
					break;
				case 't':
				case 'T':
					subKey2("Travel", "Tech Review");
					break;
			}
		}
	}
	
	// Gender Groups Keyboard shortcut filler
	else if(inputID === "gender" + inputIDonlyNo) {
		document.getElementById(inputID).onkeyup = function (event) {
			function genderFiller(val) {
				document.getElementById(inputIDonlyChar+inputIDonlyNo).value = val;
				document.getElementById("takID_"+nextRowNo).focus();
			}
			const { key } = event;
			switch (key) {
				case 'm':
				case 'M':
					genderFiller("Male");
					break;
				case 'f':
				case 'F':
					genderFiller("Female");
					break;
				case 'c':
				case 'C':
					genderFiller("Couple");
					break;
				case 'g':
				case 'G':
					genderFiller("Group");
					break;
				case 'k':
				case 'K':
					genderFiller("Child");
					break;
				case 'n':
				case 'N':
					genderFiller("No face");
					break;
			}
		}
	}
	// Auto shifter from Gender groups to Beautiful Girl
	else if(inputID === "bGirl" + inputIDonlyNo) {
		document.getElementById(inputID).onkeyup = function (event) {
			const { key } = event;
			thisRowNo, nextRowNo = null;
			thisRowNo = inputIDonlyNo.replace(/[_]/g, '');
			nextRowNo = Number(thisRowNo)+1;
			switch (key) {
				case '0':
					binaryFillerNxt("0", "bGirl");
					break;
				case '1':
					binaryFillerNxt("1", "bGirl");
					break;
			}
		}
	}
	// Keyboard Shortcuts for No. of videos
	else if(inputID === "nVideos" + inputIDonlyNo) {
	    
		document.getElementById(inputID).onkeyup = function (event) {
			const { key } = event;
			thisRowNo, nextRowNo = null;
			thisRowNo = inputIDonlyNo.replace(/[_]/g, '');
			nextRowNo = Number(thisRowNo)+1;
			switch (key) {
				case 'l':
				case 'L':
					nVideoFiller("less than 10", "less than 20 but more than 10", "less than 30 but more than 20");
					break;
				case 'e':
				case 'E':
					nVideoFiller("equal to 10", "equal to 20", "Equal to or more than 30");
					break;
				case 'p':
				case 'P':
					nonOGContent();
					commentCommonFiller("Private Account");
					break;
				case 'f':
				case 'F':
					nonOGContent();
					commentCommonFiller("Not found");
					break;
				case 'v':
				case 'V':
					nonOGContent();
					commentCommonFiller("No videos");
					break;
				case 'g':
				case 'G':
					ogFiller("0");
					exclShortFiller2("0", "Games", "No face");
					break;
				case 'c':
				case 'C':
					ogFiller("0");
					exclShortFiller2("0", "Comedy", "Group");
					break;
				case 'n':
				case 'N':
					ogFiller("0");
					exclShortFiller2("0", "No Classification", "Group");
					break;
			}
		}
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
}).on('blur', function() {
	inputID, inputIDonlyChar, inputIDonlyNo = null;
});