<?
session_start();
include_once("connect.php");

$cn=new connect(); 
$cn->connectdb();

    $contact_name = $_POST['contact_name'];
    $contact_address = $_POST['contact_address'];
    $contact_message = $_POST['contact_message'];
    $verif_box = $_REQUEST["verif_box"];

    
    if(md5($verif_box).'a4xn' != $_COOKIE['tntcon'])
    {
        display_error('Invalid verification code!');
        exit();
    }

    // $to = "info@metashos.com";

    $subject = "Inquiry from ".$contact_name;

    $html = "<table>";
    $html.= "<tr><td>Name : </td><td>".$contact_name."</td></tr>";
    $html.= "<tr><td>Address : </td><td>".$contact_address."</td></tr>";
    $html.= "<tr><td>Message : </td><td>".$contact_message."</td></tr></table>";


    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <info@metascollege.com>' . "\r\n";

    $domain=$_SERVER['HTTP_HOST'];

    if($domain!="localhost")
    {
        display_success('Message Sent!');
        mail($to,$subject,$html,$headers);
    }
    else
    {
        display_success('Message Sent!');
        // display_error("Message Not Sent!");
    }

 
function display_error($error)
{
    echo '<div class="alert alert-warning"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'.$error.' </div>';
}
function display_success($message)
{
    echo '<div class="alert alert-success"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'.$message.' </div>';
}
// echo "Account successfully updated";		
?>