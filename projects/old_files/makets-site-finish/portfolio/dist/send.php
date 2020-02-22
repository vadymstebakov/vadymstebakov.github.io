<?php
//Принимаем постовые данные
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$textarea=$_POST['message'];

//Тут указываем на какой ящик посылать письмо
$to = "vadim.stebakov.94@gmail.com";
//Далее идет тема и само сообщение
$subject = "Заявка с сайта";
$message = "Письмо отправлено из моей формы<br />
Имя: ".htmlspecialchars($name)."<br />
E-mail: ".htmlspecialchars($email)."<br />
Телефон: ".htmlspecialchars($phone)."<br />
Сообщение: ".htmlspecialchars($textarea);
$headers = "From: Vadym Stebakov <my-portfolio.ua>\r\nContent-type: text/html; charset=utf-8 \r\n";
mail ($to, $subject, $message, $headers);
header('Location: thankyou.html');
exit;
?>
