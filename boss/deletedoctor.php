<?php
include_once("../connect.php");
$cn=new connect();
$cn->connectdb();


if($_GET['Del']== 'del')
{
$id=  $_GET['id'];
$page= $_GET['page'];

	$sql=mysqli_query($cn->getConnection(),"select * from tbl_doctor where doctor_id=$id");
	while($row = $cn->fetchAssoc($sql))
	{
		unlink("../doctor/". $row['doctor_image']);	
		unlink("../doctor/big_img/". $row['doctor_image']);
		
			
	}
	mysqli_query($cn->getConnection(),"delete from tbl_doctor where doctor_id=$id");
	//$cn->Deletedata($tablename,$primarykey,$id);
	header("location:doctorView.php?page=$page");	
}

?>
