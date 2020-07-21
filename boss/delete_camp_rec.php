<?php
include_once("../connect.php");
$cn=new connect();
$cn->connectdb();
$tablename=$_GET['tablename'];
$primarykey=$_GET['primarykey'];
$id=$_GET['id'];

$page = $_GET['page'];
	// second product table 
	$sql=  $cn->selectdb("select * from tbl_camp where camp_id=$id");
	while($row = mysqli_fetch_assoc($sql))
	{
		//image
		@unlink('../camp/big_img/'.$row['image_name']);
		@unlink('../camp/'.$row['image_name']);
		//end of image

		//multiple images
		$image_list = explode(',',$row['multi_images']);

		foreach($image_list as $rowF)
		{
			//print_r($image_list);die;
			$new_image_list = '';
			@unlink('../campF/big_img/'.$rowF);
			@unlink('../campF/'.$rowF);
		}
		
		
	}

	$cn->selectdb("delete from tbl_camp where camp_id=$id");

	//$cn->Deletedata($tablename,$primarykey,$id);
	header("location: campView.php?page=$page");

?>
