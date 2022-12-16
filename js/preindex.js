// MTTP:// MX TAKATAK GRADING TOOL
// © MT Studios 2022
// --------------------------------------------------------------------------------
// MAIN PAGE EXPERIENCE JAVASCRIPT

// All Variables
// --------------------------------------------------------------------------------
// Splash Screen related Buttons, Divs, etc
var SplashScreen = document.getElementById("splashScreen");
var DevicePC = document.getElementById("PC");
var DevicePCwr = document.getElementById("PCwr");
var DevicePhone = document.getElementById("Phone");
var DevicePhoneTk = document.getElementById("PhoneTk");
var SplashDevice = document.getElementById("SplashDeviceInner");
var SplashUsername = document.getElementById("SplashUsername");
var SplashID = document.getElementById("SplashID");
var SplashRegion = document.getElementById("SplashRegion");
var SplashUserDisplayName = document.getElementById("splashUserDisplayName");
var SplashDeviceBack = document.getElementById("SplashDeviceBack");
var SplashUserSubmit = document.getElementById("SplashUserSubmit");
var SplashIDSubmit = document.getElementById("SplashIDSubmit");
var SplashRegionSubmit = document.getElementById("SplashRegionSubmit");
var SplashUserBack = document.getElementById("SplashUserBack");
var SplashIDBack = document.getElementById("SplashIDBack");

var usernameInput = null;
var usernameTextBox = document.getElementById("username");

var splashDevicePref = null;
var splashDevicePrefInput= document.getElementById("devicePrefInput");

var formInjestor = document.getElementById("formInjestor");
var RegionSplitter = document.getElementById("RegionSplitter");

var skipToSheetLink = document.getElementById("skipToSheet");


// Forward Button Animation
function splashNextButton(prev, next) {
    prev.classList.add("SplashPageLeftAnim");
    next.classList.remove("hidden");
    next.classList.add("SplashPageRightAnim");
    setTimeout(function() {
        prev.classList.remove("SplashPageLeftAnim");
        next.classList.remove("SplashPageRightAnim");
        prev.classList.add("hidden");
    }, 500);
}

// Back Button Animation
function splashBackButton (prev, next) {
    prev.classList.remove("hidden");
    prev.classList.add("SplashPageLeftAnimrev");
    next.classList.add("SplashPageRightAnimrev");
    setTimeout(function() {
        prev.classList.remove("SplashPageLeftAnimrev");
        next.classList.remove("SplashPageRightAnimrev");
        next.classList.add("hidden");
    }, 500);
}

// Device Preference Buttons
$('.SplashDeviceBtn').on('click', function() {
    splashDevicePref = null;
    splashDevicePref = this.id;
    splashDevicePrefInput.value = splashDevicePref;
    if(splashDevicePref=="PC") {
        formInjestor.action = "/mttpmx/"+splashDevicePref+"/injestor"+splashDevicePref+".php";
    }
    else if(splashDevicePref=="PCwr") {
        formInjestor.action = "/mttpmx/"+splashDevicePref+"/injestor"+splashDevicePref+".php";
    }
    else if(splashDevicePref=="PhoneTk") {
        formInjestor.action = "/mttpmx/"+splashDevicePref+"/injestor"+splashDevicePref+".php";
    }
    else if(splashDevicePref=="Phone") {
        formInjestor.action = "/mttpmx/"+splashDevicePref+"/injestor"+splashDevicePref+".php";
    }

    splashNextButton(SplashDevice, SplashUsername);
});

// Username Checker & Greeter
function userCorrect(name) {
    splashNextButton(SplashUsername, SplashID);
    SplashUserDisplayName.innerHTML="Hello "+name+"!";
}

SplashDeviceBack.onclick = function () {
    splashBackButton(SplashDevice, SplashUsername);
}

SplashUserBack.onclick = function () {
    splashBackButton(SplashUsername, SplashID);
}

SplashIDBack.onclick = function () {
    splashBackButton(SplashID, SplashRegion);
}

// User Sign In button
SplashUserSubmit.onclick = function() {
    usernameInput = usernameTextBox.value;
    if(usernameInput == "mrtechmohit") {
        userCorrect("Mohit");
        skipToSheetLink.href = "/mttpmx/users/mrtechmohit/mohit_worksheet.php";
        splashNextButton(SplashUsername, SplashID);
    }
    else if(usernameInput == "billauti21") {
        userCorrect("Pragati");
        skipToSheetLink.href = "/mttpmx/users/billauti21/pragati_worksheet.php";
        splashNextButton(SplashUsername, SplashID);
    }
    else if(usernameInput == "bhidu21") {
        userCorrect("Sejal");
        skipToSheetLink.href = "/mttpmx/users/bhidu21/sejal_worksheet.php";
        splashNextButton(SplashUsername, SplashID);
    }
    else if(usernameInput == "dharmi2926") {
        userCorrect("Dharmi");
        skipToSheetLink.href = "/mttpmx/users/dharmi2926/dharmi_worksheet.php";
        splashNextButton(SplashUsername, SplashID);
    }
    else if(usernameInput == "") {
        dialogBoxes("error_outline", "Please enter a username first.");
    }
    else {
        dialogBoxes("error_outline", "Please enter a valid username.");
    }
}

// ID Injestor Button
SplashIDSubmit.onclick = function() {
    if(splashDevicePref=="PCwr") {
        SplashUserSubmit.type = "button";
        SplashRegionSubmit.type = "submit";
        SplashUserSubmit.name = "idInjest";
        SplashRegionSubmit.name = "submit";
        splashNextButton(SplashID, SplashRegion);
        RegionSplitter.required = true;
    }
    else if(splashDevicePref=="PC" || splashDevicePref=="PC" || splashDevicePref=="Phone" || splashDevicePref=="PhoneTk") {
        SplashUserSubmit.type = "submit";
        SplashRegionSubmit.type = "button";
        SplashUserSubmit.name = "submit";
        SplashRegionSubmit.name = "region";
        RegionSplitter.required = false;
    }
}