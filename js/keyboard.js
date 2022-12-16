// MTTP:// MX TAKATAK GRADING TOOL
// © MT Studios 2022
// --------------------------------------------------------------------------------
// Virtual Keyboard Javascript

// All variables
// --------------------------------------------------------------------------------
var vKeyboard = document.getElementById("vKeyboard");

var vKeyboardKeyCL = document.getElementById("vKeyboardKeyCL");
var CLicon = document.getElementById("CLicon");
var vKeyboardKeys = document.getElementById("vKeyboardKeys");

var vKeyboardKeyEnter = document.getElementById("vKeyboardKeyEnter");

// All Functions
// --------------------------------------------------------------------------------
function capsLockActive() {
    CLicon.classList.remove("material-icons-outlined");
    CLicon.classList.add("material-icons-round");
    vKeyboardKeyCL.classList.add("vKeyboardKeyActive");
    vKeyboardKeys.classList.add("vKeyboardKeysUppercase");
}

function capsLockInactive() {
    CLicon.classList.add("material-icons-outlined");
    CLicon.classList.remove("material-icons-round");
    vKeyboardKeyCL.classList.remove("vKeyboardKeyActive");
    vKeyboardKeys.classList.remove("vKeyboardKeysUppercase");
}

vKeyboardKeyCL.onclick = function () {
    if(vKeyboardKeys.classList.contains("vKeyboardKeysUppercase")) {
        capsLockInactive();
    }
    else {
        capsLockActive();
    }
};

vKeyboardKeyEnter.onclick = function () {
    vKeyboard.classList.add("vKeyboard_inactive");
    document.getElementById(inputID).blur();
}

// Onload function
window.onload = function() {
    if(vKeyboardKeys.classList.contains("vKeyboardKeysUppercase")) {
        capsLockActive();
    }
};

