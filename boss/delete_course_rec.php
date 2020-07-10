<?php
include_once("../connect.php");
$cn=new connect();
$cn->connectdb();
$tablename=$_GET['tablename'];
$primarykey=$_GET['primarykey'];
$id=$_GET['id'];

$page = $_GET['page'];
	// second product table 
	$sql=  $cn->selectdb("select * from tbl_course where course_id=$id");
	while($row = mysqli_fetch_row($sql))
	{
		//image
		@unlink('../course/big_img/'.$row[1]);
		@unlink('../course/'.$row[1]);
		//end of image
		
	}

	$cn->selectdb("delete from tbl_course where course_id=$id");

	//$cn->Deletedata($tablename,$primarykey,$id);
	header("location: courseView.php?page=$page");

?>
