<?php
if(isset($_POST['save'])) {
    $dataGathered = $_POST['dataGatherer'];
    $myfile = fopen("billauti21_backup.txt", "w") or die("Unable to open file!");
    fwrite($myfile, $dataGathered);
    fclose($myfile);
    echo "<script> window.close(); </script>";
}
?>

<html>
    <head></head>
    <body style="background: #1e2022;"></body>
</html>