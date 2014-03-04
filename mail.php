<?php

    // hate this shit.

    $name = stripslashes($_POST[name]);
    $back = stripslashes($_POST[back]);
    $text = stripslashes($_POST[text]);
    $referer = $_POST[referer];
    $remote_host = $_SERVER[REMOTE_ADDR];
    $server = $_SERVER[SERVER_NAME];
    $browser = $_SERVER[HTTP_USER_AGENT];


    $myemail = 'sales@vesna56.ru';
    $subject = 'Заявка';

    if(!$back){
        $status .= "No back.<br>";
    }

    $_COOKIE['nospam'] = "";

    if($_COOKIE['nospam'] == ""){
     if(!$status){
            $header = "From: $myemail\r\nReply-To: $myemail\r\n";

    		$message = "
    		Имя отправителя: $name
    		Обратная связь: $back

    		$text

    		---

    		IP: $remote_host
    		CL: $browser
    		";

            if(mail($myemail, $subject, $message, $header)){
                $status = "Thank you for your Feedback!!<br><br>";
    			setcookie("nospam", $remote_host, time()+500);
            }

        }

    	$current = $status."<br><br>".$header."<br><br>name: ".$name."<br>back: ".$back."<br><br>text: ".$text."<br><br><br>current: ".$current."<br><br><hr>".$_COOKIE['sent'];

    }

 /*$current = "Cookie = ".$_COOKIE['nospam']; */
$file = 'debug.html';

file_put_contents($file, $current);


    $referer = $_SERVER[HTTP_REFERER];

    if(!preg_match('#^http://[a-z0-9-]+.([a-z0-9-]+.)?[a-z]+#i', $referer))
    {
        unset($referer);
    }
