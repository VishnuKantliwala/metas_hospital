<?php
include_once("../connect.php");
$cn=new connect();
$cn->connectdb();
$tablename=$_GET['tablename'];
$primarykey=$_GET['primarykey'];
$id=$_GET['id'];

$page = $_GET['page'];
	// second product table 
	$sql=  $cn->selectdb("select * from tbl_rally where rally_id=$id");
	while($row = mysqli_fetch_assoc($sql))
	{
		//image
		@unlink('../rally/big_img/'.$row['image_name']);
		@unlink('../rally/'.$row['image_name']);
		//end of image

		//multiple images
		$image_list = explode(',',$row['multi_images']);

		foreach($image_list as $rowF)
		{
			//print_r($image_list);die;
			$new_image_list = '';
			@unlink('../rallyF/big_img/'.$rowF);
			@unlink('../rallyF/'.$rowF);
		}
		
		
	}

	$cn->selectdb("delete from tbl_rally where rally_id=$id");

	//$cn->Deletedata($tablename,$primarykey,$id);
	header("location: rallyView.php?page=$page");

?>
