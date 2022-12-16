
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name='theme-color' content='#0d3466'>    <link rel="stylesheet" type="text/css" href="/mttpmx/css/ui.css">
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
<body >

    <div class="titlebar">
        <img src="/mttpmx/images/mttp_logo.svg">
        <font style="pointer-events: none;">MX TakaTak Grading Tool</font><font class="mobileTitle"> by MT Studios</p></font>
        <div class='button_panel_container'><div class='button_panel'><button id='uidCopy' class='button'><div class='material-icons-outlined'>content_copy</div><div class='btnText'>Copy Unique ID</div></button><button id='copyAll' class='button'><div class='material-icons-outlined'>copy_all</div><div class='btnText'>Copy All</div></button><form action='fileCopier.php' method='POST' target='_blank'><button type='submit' name='copyBackup' id='copyBackup' class='button'><div class='material-icons-outlined'>backup</div><div class='btnText'>Copy from Backup</div></button></form><form action='fileSaver.php' method='POST' target='_blank'><textarea id='copyAllDataContainer' name='dataGatherer' style='position:fixed;bottom:0px;z-index:-5;opacity:0;'></textarea><button type='submit' name='save' id='save' class='button'><div class='material-icons-outlined'>save</div><div class='btnText'>Save</div></button></form></div><div class='button_user_panel'><div class='button_panel_separator'></div><button type='button' id='userBtn' class='button'><div class='material-icons-outlined'>account_circle</div><div class='btnText'>Dharmi</div><div class='userOptions'><div class='userOptionsPic'><img src='userPic.png'></div><div class='userOptionsUsername'>Dharmi Barman</div><div class='separator'></div><a href='/mttpmx/'><div class='button' id='signOut'><div class='material-icons-outlined'>logout</div><div class='btnText'>Sign Out</div></div></a></div></button></div></div>    </div>

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
                  <tr> <td id='rowIndicator_1'>1</td> <td><input type='text' onClick='this.setSelectionRange(0, this.value.length);' id='takID_1' value='oasifsdlkgsdf
              </table>
            </div>
        </div>

        <div id="dialog" class="hidden"><div class="material-icons-round" id="dialogIcon"></div><div id="dialogMsg"></div></div>

        <div id="fileSaveDiv"></div>

        <script src='/mttpmx/js/index2.js'></script><script src='/mttpmx/PC/js/PC.js'></script></body>
</html>
