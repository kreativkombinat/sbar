<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>S-BAR sushi &amp; cocktails</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
  <meta name="viewport" content="width=device-width" />
  <meta name="keywords" content="Sushi,Sushibar,Sbar,S-bar,esbar,essbar, Japanisch,suschi,essen, restaurant,bar,augsburg,speise,speisen,lokal,sushilokal,sushirestaurant,thai,food,asia,cocktails,happyhour,drinks,drink,trinken,spaß,spass,lounge,dinner,nightlife,">
  <meta name="description" content="S-bar ist das Sushi-Restaurant und die Sushi Bar in Augsburg. Zahlreiche Sushi-Gerichte im Angebot - natürlich auch als Take Away. Wir führen neben Sushi auch viele Thai-Spezialitäten und Asia-Food. Location: Augsburg Ecke Klinkertor und Am Katzenstadl.">
  <meta name="robots" content="All" /> 
  <meta name="author" content="Serge Davidov, sd@kreativkombinat.de" />

<link rel="stylesheet" type="text/css" href="css/styles.css" media="screen" />

<link rel="icon" href="images/favicon.ico" />
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-10614277-17']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</head>

<body class="tnx">

<?php
$email_to = "info@kreativkombinat.de";
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$text = "NAME: $name<br>
         EMAIL: $email<br>	 
         MESSAGE: $message";
$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
$headers .= "From: <$email>" . "\r\n";
mail($email_to, "Nachricht via das Kontaktformular", $text, $headers);
?>



<div class="danke">

 <div>
  <a href="/">
    <img src="images/logo.png" title="S-BAR sushi &amp; cocktails" alt="S-BAR sushi &amp; cocktails" />
  </a>
</div>

<h2>Vielen Dank f&uuml;r Ihre Nachricht.</h2>
<p>Wir werden uns umgehend um Ihr Anliegen k&uuml;mmern oder wenn gew&uuml;nscht, bei Ihnen melden.</p>

<p>Eure S-Bar in Augsburg</p>
</div>

</body>
</html>
