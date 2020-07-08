<?php
include_once("../connect.php");
$cn=new connect();
$cn->connectdb();


if($_GET['Del']== 'del')
{
$id=  $_GET['id'];
$page= $_GET['page'];

	
	mysqli_query($cn->getConnection(),"delete from tbl_nurseawards where nurseawards_id=$id");
	//$cn->Deletedata($tablename,$primarykey,$id);
	header("location:nurseawardsView.php?page=$page");	
}
