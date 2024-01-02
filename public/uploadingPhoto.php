<?php
if(isset($_POST['submit'])){
    if(!empty($_FILES['upload'] ['name'])){
    }else{
        $Message = '<p style="color: red;">please choose a file</p>';
    }
}
?>

