<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $number = $_POST['number'];
    $mail = $_POST['mail'];

    $mailTo = "joelbleijenburg@gmail.com";
    $header = "From: ".$name;
    $txt = "Je hebt een email gekregen van: ".$name.".\n\n Ik wil het graag hebben over".$subject.".\n Je kunt contact met me opnemen op".$number.".of via mijn mail".$mail;
   
    mail($mailTo, $header, $txt);
    header("Location: index.html?mailsend");
}