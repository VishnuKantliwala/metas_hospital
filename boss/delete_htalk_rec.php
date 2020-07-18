<?php
include_once("../connect.php");
$cn=new connect();
$cn->connectdb();
$tablename=$_GET['tablename'];
$primarykey=$_GET['primarykey'];
$id=$_GET['id'];

$page = $_GET['page'];
	// second product table 
	$sql=  $cn->selectdb("select * from tbl_htalk where htalk_id=$id");
	while($row = mysqli_fetch_assoc($sql))
	{
		//image
		@unlink('../htalk/big_img/'.$row['image_name']);
		@unlink('../htalk/'.$row['image_name']);
		//end of image

		//multiple images
		$image_list = explode(',',$row['multi_images']);

		foreach($image_list as $rowF)
		{
			//print_r($image_list);die;
			$new_image_list = '';
			@unlink('../htalkF/big_img/'.$rowF);
			@unlink('../htalkF/'.$rowF);
		}
		
		
	}

	$cn->selectdb("delete from tbl_htalk where htalk_id=$id");

	//$cn->Deletedata($tablename,$primarykey,$id);
	header("location: htalkView.php?page=$page");

?>
