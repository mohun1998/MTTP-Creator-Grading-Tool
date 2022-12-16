// MTTP:// MX TAKATAK GRADING TOOL
// © MT Studios 2022
// --------------------------------------------------------------------------------
// MASTER INDEX JAVASCRIPT

// All variables
// --------------------------------------------------------------------------------
// Nav Bar Buttons & Their related functional elements
var copyAllBtn = document.getElementById('copyAll');
var copyAllDataContainer = document.getElementById('copyAllDataContainer');
var copyBackupBtn = document.getElementById('copyBackup');
var uidCopyBtn = document.getElementById('uidCopy');
var saveBtn = document.getElementById('save');
var fileSaveDiv = document.getElementById('fileSaveDiv');

// Injested ID Rows & Textbox related stuff
var totalRowCount, rowCount, table, rows, finalRowCount = null;

var takname, category, bio, region, uid, ogContent, vertical, GV, GA, comment, gender, bGirl, nVideos, takVal, categoryVal, bioVal, regionVal, uidVal, ogContentVal, verticalVal, GVVal, GAVal, commentVal, genderVal, bGirlVal, nVideosVal = null;

var t = null;

var inputID, inputIDonlyChar, inputIDonlyNo, rowIndicator = null;

var thisRowNo, nextRowNo, prevRowNo = null;

// --------------------------------------------------------------------------------
// All Functions
// --------------------------------------------------------------------------------

// Dialog Box Complete
function dialogBoxes(icon, msg) {
	var dialogBox = document.getElementById("dialog");
	var dialogIcon = document.getElementById("dialogIcon");
	var dialogMsg = document.getElementById("dialogMsg");
    dialogIcon.innerHTML = icon;
    dialogMsg.innerHTML = msg;
    dialogBox.classList.remove("hidden");
    setTimeout(function() {
        dialogBox.classList.add("hidden");
    }, 2000);
}

// Count number of rows injested
function rowsCheck() {
	totalRowCount = 0;
	rowCount = 0;
	table = document.getElementById("tableEntries");
	rows = table.getElementsByTagName("tr")
	for (var i = 0; i < rows.length; i++) {
		totalRowCount++;
		if (rows[i].getElementsByTagName("td").length > 0) {
			rowCount++;
		}
	}
	finalRowCount = totalRowCount;
}

// For loop: All columns & cells ID generator with values
function columnCellChecker() {
	takname = "takID_"+t;
	category = "category_"+t;
	bio = "bio_"+t;
	region = "region_"+t;
	uid = "unique_"+t;
	ogContent = "ogContent_"+t;
	vertical = "vertical_"+t;
	GV = "GV_"+t;
	GA = "GA_"+t;
	comment = "comment_"+t;
	gender = "gender_"+t;
	bGirl = "bGirl_"+t;
	nVideos = "nVideos_"+t;
	takVal = document.getElementById(takname).value;
	categoryVal = document.getElementById(category).value;
	bioVal = document.getElementById(bio).value;
	regionVal = document.getElementById(region).value;
	uidVal = document.getElementById(uid).value;
	ogContentVal = document.getElementById(ogContent).value;
	verticalVal = document.getElementById(vertical).value;
	GVVal = document.getElementById(GV).value;
	GAVal = document.getElementById(GA).value;
	commentVal = document.getElementById(comment).value;
	genderVal = document.getElementById(gender).value;
	bGirlVal = document.getElementById(bGirl).value;
	nVideosVal = document.getElementById(nVideos).value;
}

// Onload Function
window.onload = function() {

	// Auto save feature that saves progress every 1 minate but starts after 2 minutes
	setTimeout(function() {
		function saveFiler(){
			setTimeout(saveFiler, 60000);
			saveBtn.click();
		}
		
		saveFiler();
	}, 120000);

	rowsCheck();
	t = null;
	for (t=1; t<= finalRowCount; t++) {

		columnCellChecker();

		// Unique ID Generator Logic
		if(!isNaN(takVal)){
			document.getElementById(uid).value = "0";
		}
		else {
			if(takVal.match(/^[tT]\d[0-9]+$/)) {
				document.getElementById(uid).value = "0";
			}
			else {
				document.getElementById(uid).value = "1";
			}
		}
		
	}
}

// Copy All Entries data Button
copyAllBtn.onclick = function () {
	copyAllDataContainer.value=null;

	rowsCheck();

	var copyDataArray = new Array(finalRowCount);
	t = null;
	for (t=1; t<= finalRowCount; t++) {
		columnCellChecker();
    	copyDataArray[t] = categoryVal+"\t"+bioVal+"\t"+regionVal+"\t"+uidVal+"\t"+ogContentVal+"\t"+verticalVal+"\t"+GVVal+"\t"+GAVal+"\t"+genderVal+"\t"+bGirlVal+"\t"+nVideosVal+"\t"+"\t"+commentVal;
	}

	copyAllDataContainer.value = copyDataArray.join("\n");
	var newText = $(copyAllDataContainer).val().replace(/^.*\n/g,"");
    copyAllDataContainer.value = newText;
	copyAllDataContainer.select();
	document.execCommand('copy');

	dialogBoxes("content_copy", "Copied to Clipboard");
}

// Copy from Backup Button
copyBackupBtn.onclick = function () {
	dialogBoxes("content_copy", "Copied to Clipboard");
}

// All Unique IDs Column Copier Button
uidCopyBtn.onclick = function () {
	copyAllDataContainer.value=null;
	
	rowsCheck();

	var copyDataArray = new Array(finalRowCount);

	t = null; 
	for (t=1; t<= finalRowCount; t++) {
		columnCellChecker();
    	copyDataArray[t] = uidVal;
	}

	copyAllDataContainer.value = copyDataArray.join("\n");
	var newText = $(copyAllDataContainer).val().replace(/^.*\n/g,"");
    copyAllDataContainer.value = newText;
	copyAllDataContainer.select();
	document.execCommand('copy');

	dialogBoxes("content_copy", "Copied to Clipboard");
}

// Common save function to save all progress with PHP File saver script
function fileSave() {
	copyAllDataContainer.value=null;

	rowsCheck();
	var copyDataArray = new Array(finalRowCount);

	t = null;
	for (t=1; t<= finalRowCount; t++) {
		columnCellChecker();
		copyDataArray[t] = categoryVal+"\t"+bioVal+"\t"+regionVal+"\t"+uidVal+"\t"+ogContentVal+"\t"+verticalVal+"\t"+GVVal+"\t"+GAVal+"\t"+genderVal+"\t"+bGirlVal+"\t"+nVideosVal+"\t"+"\t"+commentVal;
	}
	copyAllDataContainer.value = copyDataArray.join("\n");
}

// Save all progress button
saveBtn.onclick = function() { fileSave() };


// Global CTRL+ Keyboard Shortcuts
$(window).bind('keydown', function(event) {
    if (event.ctrlKey || event.metaKey) {
        switch (String.fromCharCode(event.which).toLowerCase()) {
        case 's':
		case 'S':
			event.preventDefault();
			document.getElementById('save').click();
			dialogBoxes("save", "Saved to Backup");
			break;
        case 'c':
		case 'C':
			event.preventDefault();
			document.getElementById('copyAll').click();
			break;
        case 'u':
		case 'U':
			event.preventDefault();
			document.getElementById('uidCopy').click();
			break;
		case 'b':
		case 'B':
			event.preventDefault();
			document.getElementById('copyBackup').click();
			break;
        }
    }
});


// Individual jQuery Input function
$('input').on('focus', function() {
	inputID = this.id,
	inputIDonlyNo = inputID.replace(/[A-Za-z]/g, ''),
	inputIDonlyChar = inputID.replace(/[0-9_]/g, '');
	thisRowNo, nextRowNo, prevRowNo = null;
	thisRowNo = inputIDonlyNo.replace(/[_]/g, '');
	nextRowNo = Number(thisRowNo)+1;
	prevRowNo = Number(thisRowNo)-1;

	// TakaTak ID Copier and shift to Original Content
	if(inputID === "takID" + inputIDonlyNo) {
		this.select();
		document.execCommand('copy');
		setTimeout( function() {
			document.getElementById("nVideos"+inputIDonlyNo).focus();
		}, 300);
	}
	
	document.getElementById("rowIndicator"+inputIDonlyNo).classList.add("rowIndicatorActive");
}).on('blur', function() {
	document.getElementById("rowIndicator"+inputIDonlyNo).classList.remove("rowIndicatorActive");
	inputID, inputIDonlyChar, inputIDonlyNo, thisRowNo, prevRowNo, nextRowNo = null;
}).keyup(function (e) {
	// Textbox Focus shifter with Arrow keys Keyboard shortcut
	var input = $(this),
		td = input.closest("td"),
		next;
	
	switch (e.which) {
		case 37: next = td.prev().find("input"); break;
		case 39: next = td.next().find("input"); break;
		case 38: next = input.closest("tr").prev().find("td:eq(" + td.index() + ")").find("input"); break;
		case 40: next = input.closest("tr").next().find("td:eq(" + td.index() + ")").find("input"); break;
	}
	
	if (next) {
		next.focus();
		next.select();
	}
});

// Hook before Reload of the page
window.onbeforeunload = function()
{
	return confirm("Warning : All data entered will be lost if not saved. Are you sure to reload the tool?");
};