<?php
include_once("../connect.php");
$cn=new connect();
$cn->connectdb();
$tablename=$_GET['tablename'];
$primarykey=$_GET['primarykey'];
$id=$_GET['id'];

$page = $_GET['page'];
	// second product table 
	$sql=  $cn->selectdb("select * from tbl_event where event_id=$id");
	

	$cn->selectdb("delete from tbl_event where event_id=$id");

	//$cn->Deletedata($tablename,$primarykey,$id);
	header("location: eventView.php?page=$page");

?>
