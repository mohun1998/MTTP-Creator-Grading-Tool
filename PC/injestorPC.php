<?php
    if (isset($_POST['submit'])) {
        $username = $_POST['username'];
        $ids = $_POST['IDSplitter'];
        $arr = explode("\n",$ids);
        $ids = wordwrap($ids, 80, "<br>");
        $ids = str_replace(chr(13),"<br>",$ids);
        $lines = explode( "<br>", $ids);
        $count = count( $lines );
    }

    if($username=="mrtechmohit") {
        $user = "Mohit";
        $fullname = "Mohit Nandgirikar";
    }
    else if($username=="billauti21") {
        $user = "Pragati";
        $fullname = "Pragati Pateria";
    }
    else if($username=="bhidu21") {
        $user = "Sejal";
        $fullname = "Sejal Jain";
    }
    else if($username=="dharmi2926") {
        $user = "Dharmi";
        $fullname = "Dharmi Barman";
    }

    ob_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php echo "<meta name='theme-color' content='#0d3466'>"; ?>
    <link rel="stylesheet" type="text/css" href="/mttpmx/css/ui.css">
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
        <?php
            if(isset($_POST['submit'])) {
                echo "<div class='button_panel_container'>";
                echo "<div class='button_panel'>";
                echo "<button id='uidCopy' class='button'><div class='material-icons-outlined'>content_copy</div><div class='btnText'>Copy Unique ID</div></button>";
                echo "<button id='copyAll' class='button'><div class='material-icons-outlined'>copy_all</div><div class='btnText'>Copy All</div></button>";
                echo "<form action='fileCopier.php' method='POST' target='_blank'><button type='submit' name='copyBackup' id='copyBackup' class='button'><div class='material-icons-outlined'>backup</div><div class='btnText'>Copy from Backup</div></button></form>";
                echo "<form action='fileSaver.php' method='POST' target='_blank'><textarea id='copyAllDataContainer' name='dataGatherer' style='position:fixed;bottom:0px;z-index:-5;opacity:0;'></textarea><button type='submit' name='save' id='save' class='button'><div class='material-icons-outlined'>save</div><div class='btnText'>Save</div></button></form>";
                echo "</div>";
                echo "<div class='button_user_panel'><div class='button_panel_separator'></div><button type='button' id='userBtn' class='button'><div class='material-icons-outlined'>account_circle</div>";
                echo "<div class='btnText'>";
                echo $user;
                echo "</div>";
                echo "<div class='userOptions'><div class='userOptionsPic'><img src='userPic.png'></div><div class='userOptionsUsername'>";
                echo $fullname;
                echo "</div><div class='separator'></div><a href='/mttpmx/'><div class='button' id='signOut'><div class='material-icons-outlined'>logout</div><div class='btnText'>Sign Out</div></div></a></div></button></div>";
                echo "</div>";
            }
        ?>
    </div>

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
                  <?php
                    if (isset($_POST['submit'])) {
                        for($i = 1; $i<=$count; $i++) {
                            echo "<tr> <td id='rowIndicator_";
                            echo $i;
                            echo "'>";
                            echo $i;
                            echo "</td> <td>";
                            echo "<input type='text' onClick='this.setSelectionRange(0, this.value.length);' id='takID_";
                            echo $i;
                            echo "' value='";
                            print_r ($arr[$i-1]);
                            echo "' name='takID_";
                            echo $i;
                            echo "'> </td>";

                            echo "<td> <input type='text' onClick='this.setSelectionRange(0, this.value.length);' id='category_";
                            echo $i;
                            echo "' name='category_";
                            echo $i;
                            echo "'> </td>";
                            
                            echo "<td> <input type='text' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='bio_";
                            echo $i;
                            echo "' name='bio_";
                            echo $i;
                            echo "'> </td>";

                            echo "<td> <input type='text' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='region_";
                            echo $i;
                            echo "' name='region_";
                            echo $i;
                            echo "'> </td>";

                            echo "<td> <input type='text' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='unique_";
                            echo $i;
                            echo "' name='unique_";
                            echo $i;
                            echo "'> </td>";

                            echo "<td> <input type='text' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='ogContent_";
                            echo $i;
                            echo "' name='ogContent_";
                            echo $i;
                            echo "'> </td>";

                            echo "<td> <input type='text' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='vertical_";
                            echo $i;
                            echo "' name='vertical_";
                            echo $i;
                            echo "'> </td>";

                            echo "<td> <input type='text' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='GV_";
                            echo $i;
                            echo "' name='GV_";
                            echo $i;
                            echo "'> </td>";

                            echo "<td> <input type='text' maxlength='1' onClick='this.setSelectionRange(0, this.value.length);' id='GA_";
                            echo $i;
                            echo "' name='GA_";
                            echo $i;
                            echo "'> </td>";

                            echo "<td> <input type='text' onClick='this.setSelectionRange(0, this.value.length);' id='gender_";
                            echo $i;
                            echo "' name='gender_";
                            echo $i;
                            echo "'> </td>";

                            echo "<td> <input type='text' onClick='this.setSelectionRange(0, this.value.length);' id='bGirl_";
                            echo $i;
                            echo "' name='bGirl_";
                            echo $i;
                            echo "'> </td>";

                            echo "<td> <input type='text' onClick='this.setSelectionRange(0, this.value.length);' id='nVideos_";
                            echo $i;
                            echo "' name='nVideos_";
                            echo $i;
                            echo "'> </td>";

                            echo "<td> <input type='text' onClick='this.setSelectionRange(0, this.value.length);' id='comment_";
                            echo $i;
                            echo "' name='comment_";
                            echo $i;
                            echo "'> </td> </tr>";
                        }
                    }
                    ?>
                </tbody>
              </table>
            </div>
        </div>

        <div id="dialog" class="hidden"><div class="material-icons-round" id="dialogIcon"></div><div id="dialogMsg"></div></div>

        <div id="fileSaveDiv"></div>

        <?php if (isset($_POST['submit'])) { echo "<script src='/mttpmx/js/index2.js'></script><script src='/mttpmx/PC/js/PC.js'></script>";} ?>
</body>
</html>

<?php
if (isset($_POST['submit'])) {
    if($username=="mrtechmohit") {
        file_put_contents("../users/mrtechmohit/mohit_worksheet.php", ob_get_contents());
        header("Location: ../users/mrtechmohit/mohit_worksheet.php");
    }
    else if($username=="billauti21") {
        file_put_contents("../users/billauti21/pragati_worksheet.php", ob_get_contents());
        header("Location: ../users/billauti21/pragati_worksheet.php");
    }
    else if($username=="bhidu21") {
        file_put_contents("../users/bhidu21/sejal_worksheet.php", ob_get_contents());
        header("Location: ../users/bhidu21/sejal_worksheet.php");
    }
    else if($username=="dharmi2926") {
        file_put_contents("../users/dharmi2926/dharmi_worksheet.php", ob_get_contents());
        header("Location: ../users/dharmi2926/dharmi_worksheet.php");
    }
exit;
}
?>