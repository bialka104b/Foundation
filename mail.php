<?php
$result = 0;
$data = array();

$subject = strip_tags(trim($_POST["subject"]));
$subject = str_replace(array("\r", "\n"), array(" ", " "), $subject);
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$phone = trim($_POST["phone"]);
$message = trim($_POST["message"]);

if (empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $result = -1;
    $data["reason"] = "errro in request data";
} else {
    $recipient = "andret2344@gmail.com";
    $recipient = "kontakt@mfpkis.pl";
    $recipient = "bialka104b@interia.pl";

    $email_content = "Nowa wiadomość!";
    $email_content .= "Email: $email\n\n" . "Message:\n\n$message";

    $email_headers = "From: Ktoś <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        $result = 0;
    } else {
        $result = 1;
        $data["reason"] = "Mail not sent";
    }
}
echo json_encode(array("result" => $result, "data" => $data));
