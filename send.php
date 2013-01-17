<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>KREATIVKOMBINAT - ON/OFF-LINE MEDIEN AGENTUR - V.9</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
  <meta name="viewport" content="width=device-width" />
  <meta name="description" content="Kreativkombinat ist eine Fullservice-Agentur aus dem Bereich interaktive &amp; klassiche Medien mit Sitz in Augsburg. Auf Basis von Open-Source-Komponenten wie Python, Django, Zope, Plone, TYPO3 und PHP setzen wir Internetportale, Webseiten, Webapplikationen, Intranet und Shopl&ouml;sungen um. Im Bereich der klassischen Werbung entwickeln wir von Werbekonzepten &uuml;ber Corporate Identity (CI) bis hin zu Werbemitteln wie Flyer oder Kataloge - alles zur Zufriedenheit unserer Kunden. Kreativ, schnell und kosteng&uuml;nstig." />
  <meta name="keywords" content="web, design, kreativ, strategy, development, markenentwicklung, werbung, marketing, communication, html, css, online, internet, cms, plone" />
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

<body>

<?php
$email_to = "info@kreativkombinat.de";
$name = $_POST["name"];
$email = $_POST["email"];
$url = $_POST["url"];
$message = $_POST["message"];
$text = "NAME: $name<br>
         EMAIL: $email<br>
		 URL: $url<br>		 
         MESSAGE: $message";
$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
$headers .= "From: <$email>" . "\r\n";
mail($email_to, "Nachricht via das Kontaktformular", $text, $headers);
?>

<div class="section-title home">

<h2>Vielen Dank f&uuml;r Ihre Nachricht.</h2>
<h3>Wir werden uns umgehend um Ihr Anliegen k&uuml;mmern oder wenn gew&uuml;nscht, bei Ihnen melden.</h3>

<h3>Eure S-Bar in Augsburg</h3>
</div>

</body>
</html>
