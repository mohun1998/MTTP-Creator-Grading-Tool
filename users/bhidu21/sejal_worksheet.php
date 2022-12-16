
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name='theme-color' content='#0d3466'>    <link rel="stylesheet" type="text/css" href="/mttpmx/css/ui.css">
    <link rel="stylesheet" href="/mttpmx/css/keyboard.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
    <script src="/mttpmx/js/jquery.min.js"></script>
    <link rel="apple-touch-icon" sizes="180x180" href="/mttpmx/images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/mttpmx/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/mttpmx/images/favicon-16x16.png">
    <link rel="manifest" href="/mttpmx/images/site.webmanifest">
    <title>MTTP:// MX TakaTak Grading Tool by MT Studios</title>
</head>
<body class="dark blue">

    <div class="titlebar">
        <img src="/mttpmx/images/mttp_logo.svg">
        <font style="pointer-events: none;">MX TakaTak Grading Tool</font><font class="mobileTitle"> by MT Studios</p></font>
        <div class='button_panel_container'><div class='button_panel'><button id='uidCopy' class='button'><div class='material-icons-outlined'>content_copy</div><div class='btnText'>Copy Unique ID</div></button><button id='copyAll' class='button'><div class='material-icons-outlined'>copy_all</div><div class='btnText'>Copy All</div></button><form action='fileCopier.php' method='POST' target='_blank'><button type='submit' name='copyBackup' id='copyBackup' class='button'><div class='material-icons-outlined'>backup</div><div class='btnText'>Copy from Backup</div></button></form><form action='fileSaver.php' method='POST' target='_blank'><textarea id='copyAllDataContainer' name='dataGatherer' style='position:fixed;bottom:0px;z-index:-5;opacity:0;'></textarea><button type='submit' name='save' id='save' class='button'><div class='material-icons-outlined'>save</div><div class='btnText'>Save</div></button></form></div><div class='button_user_panel'><div class='button_panel_separator'></div><button type='button' id='userBtn' class='button'><div class='material-icons-outlined'>account_circle</div><div class='btnText'>Sejal</div><div class='userOptions'><div class='userOptionsPic'><img src='userPic.png'></div><div class='userOptionsUsername'>Sejal Jain</div><div class='separator'></div><a href='/mttpmx/'><div class='button' id='signOut'><div class='material-icons-outlined'>logout</div><div class='btnText2'>Sign Out</div></div></a></div></button></div></div>    </div>

    <div class="tablebody_container">
        <div class="tablebody">
            <table>
                <thead>
                    <tr>
                        <th>&nbsp</th>
                        <th>TakaTak ID</th>
                        <th>Category</th>
                        <th>Bio Filled</th>
                        <th>Region Filled</th>
                        <th>Unique ID</th>
                        <th>Original Content</th>
                        <th>Mostly Vertical</th>
                        <th>Good VideoQ</th>
                        <th>Good AudioQ</th>
                        <th>Gender</th>
                        <th>Beautiful Girl</th>
                        <th>No.&nbspof&nbspVideos</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody id="tableEntries">
                  <tr> <td id='rowIndicator_1'>1</td> <td><input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='takID_1' value='409062322
            </table>
            <div id="vKeyboardSpacer"></div>
        </div>
    </div>

        <div id="vKeyboard" class="vKeyboard_inactive">
            <div id="vKeyboardHeader">
                <div class="vKeyboardDragPillBox"><div class="vKeyboardDragPill"></div></div>
                <button id="vKeyboardClose"><div class="material-icons-round">close</div></button>
            </div>
            <div id="vKeyboardKeys" class="vKeyboardKeysUppercase">
                <div id="vKeyboardRow1">
                    <div id="vKeyboardKey1" class="vKeyboardKey">1</div>
                    <div id="vKeyboardKey2" class="vKeyboardKey">2</div>
                    <div id="vKeyboardKey3" class="vKeyboardKey">3</div>
                    <div id="vKeyboardKey4" class="vKeyboardKey">4</div>
                    <div id="vKeyboardKey5" class="vKeyboardKey">5</div>
                    <div id="vKeyboardKey6" class="vKeyboardKey">6</div>
                    <div id="vKeyboardKey7" class="vKeyboardKey">7</div>
                    <div id="vKeyboardKey8" class="vKeyboardKey">8</div>
                    <div id="vKeyboardKey9" class="vKeyboardKey">9</div>
                    <div id="vKeyboardKey0" class="vKeyboardKey">0</div>
                </div>

                <div id="vKeyboardRow2">
                    <div id="vKeyboardKeyQ" class="vKeyboardKey">q</div>
                    <div id="vKeyboardKeyQ" class="vKeyboardKey">w</div>
                    <div id="vKeyboardKeyE" class="vKeyboardKey">e</div>
                    <div id="vKeyboardKeyR" class="vKeyboardKey">r</div>
                    <div id="vKeyboardKeyT" class="vKeyboardKey">t</div>
                    <div id="vKeyboardKeyY" class="vKeyboardKey">y</div>
                    <div id="vKeyboardKeyU" class="vKeyboardKey">u</div>
                    <div id="vKeyboardKeyI" class="vKeyboardKey">i</div>
                    <div id="vKeyboardKeyO" class="vKeyboardKey">o</div>
                    <div id="vKeyboardKeyP" class="vKeyboardKey">p</div>
                </div>

                <div id="vKeyboardRow3">
                    <div class="vKeyboardKeyfiller"></div>
                    <div id="vKeyboardKeyA" class="vKeyboardKey">a</div>
                    <div id="vKeyboardKeyS" class="vKeyboardKey">s</div>
                    <div id="vKeyboardKeyD" class="vKeyboardKey">d</div>
                    <div id="vKeyboardKeyF" class="vKeyboardKey">f</div>
                    <div id="vKeyboardKeyG" class="vKeyboardKey">g</div>
                    <div id="vKeyboardKeyH" class="vKeyboardKey">h</div>
                    <div id="vKeyboardKeyJ" class="vKeyboardKey">j</div>
                    <div id="vKeyboardKeyK" class="vKeyboardKey">k</div>
                    <div id="vKeyboardKeyL" class="vKeyboardKey">l</div>
                    <div class="vKeyboardKeyfiller"></div>
                </div>

                <div id="vKeyboardRow4">
                    <div id="vKeyboardKeyCL" class="vKeyboardKey vKeyboardKey2 vKeyboardKeyActive"><div class="material-icons-round" id="CLicon">forward</div></div>
                    <div id="vKeyboardKeyZ" class="vKeyboardKey">z</div>
                    <div id="vKeyboardKeyX" class="vKeyboardKey">x</div>
                    <div id="vKeyboardKeyC" class="vKeyboardKey">c</div>
                    <div id="vKeyboardKeyV" class="vKeyboardKey">v</div>
                    <div id="vKeyboardKeyB" class="vKeyboardKey">b</div>
                    <div id="vKeyboardKeyN" class="vKeyboardKey">n</div>
                    <div id="vKeyboardKeyM" class="vKeyboardKey">m</div>
                    <div id="vKeyboardKeyBS" class="vKeyboardKey vKeyboardKey2"><div class="material-icons-outlined" style="font-size: 18px;">backspace</div></div>
                </div>

                <div id="vKeyboardRow5">
                    <div id="vKeyboardKeyNum" class="vKeyboardKey vKeyboardKey2">&123</div>
                    <div id="vKeyboardKeyComma" class="vKeyboardKey vKeyboardKey2" style="font-size: 20px;">,</div>
                    <div id="vKeyboardKeySpace" class="vKeyboardKey"></div>
                    <div id="vKeyboardKeyDot" class="vKeyboardKey vKeyboardKey2" style="font-size: 20px;">.</div>
                    <div id="vKeyboardKeyEnter" class="vKeyboardKey vKeyboardKey2 vKeyboardKeyActive"><div class="material-icons-outlined">keyboard_return</div></div>
                </div>
            </div>
        </div>
        <script src="/mttpmx/js/keyboard.js"></script>

        <div id="dialog" class="hidden"><div class="material-icons-round" id="dialogIcon"></div><div id="dialogMsg"></div></div>

        <div id="fileSaveDiv"></div>

        <script src='/mttpmx/js/index2.js'></script><script src='/mttpmx/Phone/js/Phone.js'></script></body>
</html>
