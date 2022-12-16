<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<textarea id="tx1" style="opacity:0; position:fixed; z-index:-100;"><?php 
 $fh = fopen("worksheetDataBackup.txt", 'r');
 $pageText = fread($fh, filesize("worksheetDataBackup.txt"));
 echo $pageText; ?></textarea>

<?php 
    if(isset($_POST['copyBackup'])) {
        echo "<script> var copycopy = document.getElementById('tx1');
            navigator.clipboard.writeText(copycopy.value);
            setTimeout ( function () { window.close(); }, 10); </script>";
    }
 ?>
</body>
</html>

