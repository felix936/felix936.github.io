<?php

if (isset($_POST['submit'])) {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "felix.b.burger@gmx.de";
    $headers = "From: ".$email;
    $txt = "You have recieved a mail from ".$firstName." ".$lastName.". \n\n".$subject." \n".$message;

    mail ($mailTo, $subject, $txt, $headers);
}