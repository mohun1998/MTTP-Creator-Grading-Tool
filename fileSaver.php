<?php
if(isset($_POST['save'])) {
    $dataGathered = $_POST['dataGatherer'];
    $myfile = fopen("worksheetDataBackup.txt", "w") or die("Unable to open file!");
    fwrite($myfile, $dataGathered);
    fclose($myfile);
    echo "<script> window.close(); </script>";
}
?>