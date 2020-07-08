<?php
include_once("../connect.php");
include_once("image_lib_rname.php"); 

$con=new connect();
$con->connectdb();

 
 
	  
  $parseurl=parse_url($_SERVER['HTTP_REFERER']);
  //echo "<br/>";
 // echo $parseurl['path'];die;

	  if(isset($_POST['updateCategory']))
	  {
	  			$cat_id=$_POST['cat_id'];
				$cat_name=$_POST['cat_name'];
				$page = $_POST['page'];
				$meta_tag_title=$_POST['meta_tag_title'];
				$meta_tag_description=$_POST['meta_tag_description'];
				$meta_tag_keywords=$_POST['meta_tag_keywords'];					  		
			

                
				$slug=$_POST['slug'];
				$frontimg2=$_POST['frontimg2'];
				//if($frontimg2
				
				// single image
			if($_FILES["frontimg"]['error'] > 0)// it means no new image selected insert previous one......
				{
				
				$con->insertdb("UPDATE `tbl_doctor_category` SET cat_name='".$cat_name."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."' where cat_id=".$cat_id."");
				}
				else
				{
				
				@unlink("../doctorcategory/big_img/". $frontimg2);
			    @unlink("../doctorcategory/". $frontimg2);
				$catImage = createImage('frontimg',"../doctorcategory/");

				$con->insertdb("UPDATE `tbl_doctor_category` SET cat_name='".$cat_name."',cat_image='".$catImage."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."' where cat_id=".$cat_id."");
				}

			// end of image
			
				
				
	         header("location: doctorCatView.php?page=$page");

	  }
	  
	if(isset($_POST['addDoctor']))
	{
	    //  print_r($_POST);

		 $doctor_name=$_POST['doctor_name'];
		 $description=$_POST['description'];
		 $meta_tag_title=$_POST['meta_tag_title'];
		 $meta_tag_description=$_POST['meta_tag_description'];
		 $meta_tag_keywords=$_POST['meta_tag_keywords'];					  		
		 $slug=$_POST['slug'];
		 
		 $doctor_instagram=$_POST['doctor_instagram'];
		 $doctor_twitter=$_POST['doctor_twitter'];
		 $doctor_facebook=$_POST['doctor_facebook'];
		 
		 //single image 
		 //----------------------
		 $single_image = createImage('frontimg', "../doctor/");			
			 
		 // end of single image
		 //-------------------------
		 
		 //-----------------------------
		 //pdf
		 //-----------------------------
		 
		//  $pdf_file = createMultiPDF('download_file', "../download_pdf/");			
		 //--------------------		
		 //end of pdf
		 //--------------------

		 //-------------------
		 // Multiple images
		 //-------------------
		//  $images_name = createMultiImage('image_title', "../doctorF/");			
		 
		 //-------------------
		 // end of Multiple images
		 //-------------------
		 
 
	 $catID = '';
	 //get multiple value of radio (multiple categories)
	 foreach ($_POST['mulradio'] as $attributeKey => $attributes){
		// echo $attributeKey.' '.$_POST['mulradio'][$attributeKey].'<br>';
		 $catID.= $_POST['mulradio'][$attributeKey].",";
	 } //foreach
	 $RES = $con->insertdb("INSERT INTO `tbl_doctor` (
						 `doctor_name` ,
						 `description` ,
						 `cat_id`,
						 `doctor_image`,
						 `meta_tag_title`,
						 `meta_tag_description`,
						 `meta_tag_keywords`,
						 `doctor_facebook`,
						 `doctor_twitter`,
						 `doctor_instagram`,
						 `slug`
						 )
						 VALUES (
						 '".$doctor_name."',
						 '".$description."',  
						 '".$catID."', 
						 '".$single_image."', 
						 '".$meta_tag_title."', 
						 '".$meta_tag_description."', 
						 '".$meta_tag_keywords."', 
						 '".$doctor_facebook."',
						 '".$doctor_twitter."',
						 '".$doctor_instagram."',
						 '".$slug."'
						 );");
				 
		 header("location:doctorView.php");
		
		 }
	
	
	   
	if(isset($_POST['addCategory']))
	{
	  
	   
	   		$cat_parent_id=$_POST['cat_parent_id'];
			$page = $_POST['page'];
			$cat_name=$_POST['cat_name'];
			$meta_tag_title=$_POST['meta_tag_title'];
			$meta_tag_description=$_POST['meta_tag_description'];
			$meta_tag_keywords=$_POST['meta_tag_keywords'];					  		
			
			$slug=$_POST['slug'];
			
			//single image 
			//----------------------
			$catImage = createImage('frontimg', "../doctorcategory/");			
				
			// end of single image
			//-------------------------
			
			$con->insertdb("insert into tbl_doctor_category(cat_parent_id,cat_name,cat_image,meta_tag_title, meta_tag_description, meta_tag_keywords,slug) 
			values(".$cat_parent_id.",'".$cat_name."','".$catImage."', '".$meta_tag_title."', '".$meta_tag_description."', '".$meta_tag_keywords."', '".$slug."')");
			header("location: doctorCatView.php?page=$page");
	}
	   
	if(isset($_POST['updateDoctor']))
	{
	$catID ='';
	$doctor_id=$_POST['doctor_id'];
	$doctor_name=$_POST['doctor_name'];
	$slug=$_POST['slug'];
	$description=$_POST['description'];
	$page = $_POST['page'];
	$meta_tag_title=$_POST['meta_tag_title'];
	$meta_tag_description=$_POST['meta_tag_description'];
	$meta_tag_keywords=$_POST['meta_tag_keywords'];		

	
	$doctor_instagram=$_POST['doctor_instagram'];
	$doctor_twitter=$_POST['doctor_twitter'];
	$doctor_facebook=$_POST['doctor_facebook'];
	// $cat_id=$_POST['cat_id'];
	  
	//get multiple value of radio (multiple categories)
	foreach ($_POST['mulradio'] as $attributeKey => $attributes){
		//echo $attributeKey.' '.$_POST['mulradio'][$attributeKey].'<br>';
		$catID.= $_POST['mulradio'][$attributeKey].",";
	} //foreach
	  
	$frontimg2=$_POST['frontimg2'];

	// single image
	if($_FILES["frontimg"]['error'] > 0)// it means no new image selected insert previous one......
	{
	
		$con->insertdb("UPDATE `tbl_doctor` SET doctor_name='".$doctor_name."',description='".$description."',cat_id='".$catID."',doctor_image='".$frontimg2."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."', `doctor_instagram` = '".$doctor_instagram."', `doctor_facebook` = '".$doctor_facebook."', `doctor_twitter` = '".$doctor_twitter."'   where doctor_id='".$doctor_id."'");
	}
	else
	{
		@unlink("../doctor/big_img/". $frontimg2);
		@unlink("../doctor/". $frontimg2);
		$single_image = createImage('frontimg',"../doctor/");

		$con->insertdb("UPDATE `tbl_doctor` SET doctor_name='".$doctor_name."',description='".$description."',cat_id='".$catID."',doctor_image='".$single_image."' ,meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."', `doctor_instagram` = '".$doctor_instagram."', `doctor_facebook` = '".$doctor_facebook."', `doctor_twitter` = '".$doctor_twitter."' where doctor_id='".$doctor_id."'");
	}

	  // end of image
			   
	//   //-----------------				
	//   //multi pdf
	//   //--------------------
				  
	//   $size_sum_pdf = array_sum($_FILES['download_file']['size']);
	//   if ($size_sum_pdf > 0) 
	//   // if($_FILES["download_file"]["name"]=="")
	//   {
	// 	  $pdf_file = createMultiPDF('download_file', "../download_pdf/");
	// 	  $records=$con->selectdb("select * from tbl_doctor where doctor_id='".$doctor_id."'");
	// 	  $row=mysqli_fetch_row($records);
	// 	  //echo $row[2]."<br>";
	// 	  //echo $images; die;
	// 	  $final= $row[7].$pdf_file;
		  
		  
	// 	  $con->insertdb("UPDATE `tbl_doctor` SET doctor_name='".$doctor_name."',description='".$description."',cat_id='".$catID."', pdf_file='".$final."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."'  where doctor_id='".$doctor_id."'");
	//   }
	//   else
	//   {
	// 	  $con->insertdb("UPDATE `tbl_doctor` SET doctor_name='".$doctor_name."',description='".$description."',cat_id='".$catID."',pdf_file='".$frontimgpdf2."' ,meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."' where doctor_id='".$doctor_id."'");
	//   }

			   
			   
	//   //-----------------				
	//   //end of multi pdf
	//   //--------------------
	  
	  
	//   //------------------------
	//   //multiple images
	//   //------------------------
	  
	//   $size_sum = array_sum($_FILES['image_title']['size']);
	//   if ($size_sum > 0) 
	//   {
	//    // at least one file has been uploaded
		  
	// 	  $images_name = createMultiImage('image_title', "../doctorF/");	
	// 	  $records=$con->selectdb("select * from tbl_doctor where doctor_id='".$doctor_id."'");
	// 	   $row=mysqli_fetch_row($records);
	// 	  //echo $row[2]."<br>";
	// 	  //echo $images; die;
	// 	   $final= $row[11].$images_name;
			  

	// 	  $con->insertdb("UPDATE `tbl_doctor` SET doctor_name='".$doctor_name."',description='".$description."',cat_id='".$catID."',multi_images='".$final."' ,meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."' ,date='".$date."',month='".$month."',year='".$year."' where doctor_id='".$doctor_id."'");
			  
	// 	  }
	// 	  else
	// 	  {
	// 	  $con->insertdb("UPDATE `tbl_doctor` SET doctor_name='".$doctor_name."',description='".$description."',cat_id='".$catID."',multi_images='".$frontimg1."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."'  ,date='".$date."',month='".$month."',year='".$year."' where doctor_id='".$doctor_id."'");	
	// 	  }

	  //-----------------				
	  //end of multiple images
	  //--------------------
	  
	  header("location:doctorView.php?page=$page");
	  
	  
	 }

	
if(isset($_GET["Image"]))
	{
	//print_r($_POST);die;
	$id= $_GET['id'];
	$records=$con->selectdb("SELECT * FROM tbl_doctor_category where cat_id=".$id."");
	while($row=mysqli_fetch_row($records))
	{
	  unlink('../doctorcategory/'.$row[4]);
	  unlink('../doctorcategory/big_img/'.$row[4]);

	}
	$con->selectdb("update tbl_doctor_category set cat_image='' where cat_id = '".$id."'");
	header("location: doctorCategory_up.php?category_id=".$id."&page=".$page);



}	

if(isset($_GET["ProImage"]))
	{
	//print_r($_POST);die;
	$id= $_GET['id'];
	$records=$con->selectdb("SELECT * FROM tbl_doctor where doctor_id=".$id."");
	while($row=mysqli_fetch_row($records))
	{
	  unlink('../doctor/'.$row[4]);
	  unlink('../doctor/big_img/'.$row[4]);

	}
	$con->selectdb("update tbl_doctor set doctor_image='' where doctor_id = '".$id."'");
	header("location: doctor_up.php?doctor_id=".$id."&page=".$page);


}	


//multiple image delete doctor..
if(isset($_REQUEST["btnDeleteImages"]))
{
	$doctor_id = $_POST['doctor_id'];
	$page = $_POST['page'];

	$image = $_POST['frontimg1'];
	$image_list = explode(',',$image);
	$new_image_list = '';
	
	if(isset($_REQUEST["imageEdit"]))
	{
		foreach($_REQUEST['imageEdit'] as $row)
		{
			 $image = str_replace($row.',' , '' ,$image);
			 @unlink('../doctorF/big_img/'.$row);
			 @unlink('../doctorF/'.$row);
		}
		
		$con->selectdb("update tbl_doctor set multi_images='".$image."' where doctor_id = '".$doctor_id."'");
		header("location: doctor_up.php?doctor_id=".$doctor_id."&page=".$page);
	}
	else
	{
		echo 'No Image selected';
	}
		
}

//multiple pdf delete doctor..
 if(isset($_REQUEST["btnDeletepdfs"]))
{
	$doctor_id = $_POST['doctor_id'];
	$page = $_POST['page'];

	$pdf = $_POST['frontpdf'];
	$pdf_list = explode(',',$pdf);
	$new_pdf_list = '';
	
	if(isset($_REQUEST["pdfEdit"]))
	{
		foreach($_REQUEST['pdfEdit'] as $row)
		{
			 $pdf = str_replace($row.',' , '' ,$pdf);
			 @unlink('../download_pdf/'.$row);
		}
		
		$con->selectdb("update tbl_doctor set pdf_file='".$pdf."' where doctor_id = '".$doctor_id."'");
		header("location: doctor_up.php?doctor_id=".$doctor_id."&page=".$page);
	}
	else
	{
		echo 'No pdf selected';
	}
		
}


?>