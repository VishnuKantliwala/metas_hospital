<?
session_start();
include_once("connect.php");

$cn=new connect(); 
$cn->connectdb();

    $app_name = $_POST['app_name'];
    $app_email = $_POST['app_email'];
    $app_contact = $_POST['app_contact'];

    
    

    // $to = "info@metashos.com";

    $subject = "Appointment from ".$app_name;

    $html = "<table style='border:1px'>";
    $html.= "<tr><td>Name : </td><td>".$app_name."</td></tr>";
    $html.= "<tr><td>Email : </td><td>".$app_email."</td></tr>";
    $html.= "<tr><td>Contact No : </td><td>".$app_contact."</td></tr></table>";


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
    echo '<div class="alert alert-success"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'.$message.'</div>';
}
// echo "Account successfully updated";		
?>