
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
        <div class='button_panel_container'><div class='button_panel'><button id='uidCopy' class='button'><div class='material-icons-outlined'>content_copy</div><div class='btnText'>Copy Unique ID</div></button><button id='copyAll' class='button'><div class='material-icons-outlined'>copy_all</div><div class='btnText'>Copy All</div></button><form action='fileCopier.php' method='POST' target='_blank'><button type='submit' name='copyBackup' id='copyBackup' class='button'><div class='material-icons-outlined'>backup</div><div class='btnText'>Copy from Backup</div></button></form><form action='fileSaver.php' method='POST' target='_blank'><textarea id='copyAllDataContainer' name='dataGatherer' style='position:fixed;bottom:0px;z-index:-5;opacity:0;'></textarea><button type='submit' name='save' id='save' class='button'><div class='material-icons-outlined'>save</div><div class='btnText'>Save</div></button></form></div><div class='button_user_panel'><div class='button_panel_separator'></div><button type='button' id='userBtn' class='button'><div class='material-icons-outlined'>account_circle</div><div class='btnText'>Mohit</div><div class='userOptions'><div class='userOptionsPic'><img src='userPic.png'></div><div class='userOptionsUsername'>Mohit Nandgirikar</div><div class='separator'></div><a href='/mttpmx/'><div class='button' id='signOut'><div class='material-icons-outlined'>logout</div><div class='btnText2'>Sign Out</div></div></a></div></button></div></div>    </div>

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
                  <tr> <td id='rowIndicator_1'>1</td> <td><input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='takID_1' value='Jdjduudhf' name='takID_1'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='category_1' name='category_1'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='bio_1' name='bio_1'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='region_1' name='region_1'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='unique_1' name='unique_1'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='ogContent_1' name='ogContent_1'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='vertical_1' name='vertical_1'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='GV_1' name='GV_1'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='GA_1' name='GA_1'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='gender_1' name='gender_1'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='bGirl_1' name='bGirl_1'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='nVideos_1' name='nVideos_1'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='comment_1' name='comment_1'> </td> </tr><tr> <td id='rowIndicator_2'>2</td> <td><input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='takID_2' value='Fuhfueudufy' name='takID_2'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='category_2' name='category_2'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='bio_2' name='bio_2'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='region_2' name='region_2'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='unique_2' name='unique_2'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='ogContent_2' name='ogContent_2'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='vertical_2' name='vertical_2'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='GV_2' name='GV_2'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='GA_2' name='GA_2'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='gender_2' name='gender_2'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='bGirl_2' name='bGirl_2'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='nVideos_2' name='nVideos_2'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='comment_2' name='comment_2'> </td> </tr><tr> <td id='rowIndicator_3'>3</td> <td><input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='takID_3' value='Hshdyrhehfb' name='takID_3'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='category_3' name='category_3'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='bio_3' name='bio_3'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='region_3' name='region_3'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='unique_3' name='unique_3'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='ogContent_3' name='ogContent_3'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='vertical_3' name='vertical_3'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='GV_3' name='GV_3'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='GA_3' name='GA_3'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='gender_3' name='gender_3'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='bGirl_3' name='bGirl_3'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='nVideos_3' name='nVideos_3'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='comment_3' name='comment_3'> </td> </tr><tr> <td id='rowIndicator_4'>4</td> <td><input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='takID_4' value='Jfjfjdhehf' name='takID_4'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='category_4' name='category_4'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='bio_4' name='bio_4'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='region_4' name='region_4'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='unique_4' name='unique_4'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='ogContent_4' name='ogContent_4'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='vertical_4' name='vertical_4'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='GV_4' name='GV_4'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='GA_4' name='GA_4'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='gender_4' name='gender_4'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='bGirl_4' name='bGirl_4'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='nVideos_4' name='nVideos_4'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='comment_4' name='comment_4'> </td> </tr><tr> <td id='rowIndicator_5'>5</td> <td><input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='takID_5' value='Jfjfjrhrh' name='takID_5'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='category_5' name='category_5'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='bio_5' name='bio_5'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='region_5' name='region_5'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='unique_5' name='unique_5'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='ogContent_5' name='ogContent_5'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='vertical_5' name='vertical_5'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='GV_5' name='GV_5'> </td><td> <input type='text' inputmode='none' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='GA_5' name='GA_5'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='gender_5' name='gender_5'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='bGirl_5' name='bGirl_5'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='nVideos_5' name='nVideos_5'> </td><td> <input type='text' inputmode='none' onClick='this.setSelectionRange(0, this.value.length);' id='comment_5' name='comment_5'> </td> </tr>                </tbody>
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

