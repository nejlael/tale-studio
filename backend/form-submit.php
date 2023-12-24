<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $societyName = $_POST["society-name"] ?? "";
    $name = $_POST["name"] ?? "";
    $email = $_POST["email"] ?? "";
    $message = $_POST["project-message"] ?? "";

    $to = "info@tale-studio.com";
    $subject = "Nouveau message de tale-studio.com !";
    $headers = "From: $email";

    $mailBody = "Society Name: $societyName\n";
    $mailBody .= "Name: $name\n";
    $mailBody .= "Email: $email\n";
    $mailBody .= "Message:\n$message";

    mail($to, $subject, $mailBody, $headers);
}
?>
