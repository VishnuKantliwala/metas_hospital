<?php
include_once("../connect.php");
$cn=new connect();
$cn->connectdb();
$tablename=$_GET['tablename'];
$primarykey=$_GET['primarykey'];
$id=$_GET['id'];

$page = $_GET['page'];
	// second product table 
	$sql=  $cn->selectdb("select * from tbl_handw where handw_id=$id");
	while($row = mysqli_fetch_row($sql))
	{
		//image
		@unlink('../handw/big_img/'.$row[1]);
		@unlink('../handw/'.$row[1]);
		//end of image

		//multiple images
		$image_list = explode(',',$row['multi_images']);

		foreach($image_list as $rowF)
		{
			//print_r($image_list);die;
			$new_image_list = '';
			@unlink('../handwF/big_img/'.$rowF);
			@unlink('../handwF/'.$rowF);
		}
		
		
	}

	$cn->selectdb("delete from tbl_handw where handw_id=$id");

	//$cn->Deletedata($tablename,$primarykey,$id);
	header("location: handwView.php?page=$page");

?>
