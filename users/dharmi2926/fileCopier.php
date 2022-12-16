<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body style="background: #1e2022;">
<textarea id="tx1" style="opacity:0; position:fixed; z-index:-100;"><?php 
 $fh = fopen("dharmi2926_backup.txt", 'r');
 $pageText = fread($fh, filesize("dharmi2926_backup.txt"));
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

