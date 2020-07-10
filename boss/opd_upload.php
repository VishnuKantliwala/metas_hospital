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
				
				$con->insertdb("UPDATE `tbl_opd_category` SET cat_name='".$cat_name."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."' where cat_id=".$cat_id."");
				}
				else
				{
				
				@unlink("../opdcategory/big_img/". $frontimg2);
			    @unlink("../opdcategory/". $frontimg2);
				$catImage = createImage('frontimg',"../opdcategory/");

				$con->insertdb("UPDATE `tbl_opd_category` SET cat_name='".$cat_name."',cat_image='".$catImage."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."' where cat_id=".$cat_id."");
				}

			// end of image
			
				
				
	         header("location: opdCatView.php?page=$page");

	  }
	  
	if(isset($_POST['addOPD']))
	{
	     // print_r($_POST);

         $opd_name=$_POST['opd_name'];
         $doctor_name = $_POST['doctor_name'];
         $day1 = $_POST['day1'];
         $day2 = $_POST['day2'];


         $time1 = $_POST['time1'];
         $time2 = $_POST['time2'];

		 
		 $meta_tag_title=$_POST['meta_tag_title'];
		 $meta_tag_description=$_POST['meta_tag_description'];
		 $meta_tag_keywords=$_POST['meta_tag_keywords'];					  		
		 $slug=$_POST['slug'];
		 
		 
 
	 $catID = '';
	 //get multiple value of radio (multiple categories)
	 foreach ($_POST['mulradio'] as $attributeKey => $attributes){
		// echo $attributeKey.' '.$_POST['mulradio'][$attributeKey].'<br>';
		 $catID.= $_POST['mulradio'][$attributeKey].",";
	 } //foreach
	 $RES = $con->insertdb("INSERT INTO `tbl_opd` (
						 `opd_name`, `doctor_name`, `day1`, `time1`, `day2`, `time2`, `cat_id`, `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords`, `slug`)
						 VALUES (
						 '".$opd_name."',
						 '".$doctor_name."',  
						 '".$day1."',  
						 '".$time1."',  
						 '".$day2."',  
						 '".$time2."',  
						 '".$catID."', 
						 '".$meta_tag_title."', 
						 '".$meta_tag_description."', 
						 '".$meta_tag_keywords."', 
						 '".$slug."'
                         );");
                         
            
				 
		 header("location:opdView.php");
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
			$catImage = createImage('frontimg', "../opdcategory/");			
				
			// end of single image
			//-------------------------
			
			$con->insertdb("insert into tbl_opd_category(cat_parent_id,cat_name,cat_image,meta_tag_title, meta_tag_description, meta_tag_keywords,slug) 
			values(".$cat_parent_id.",'".$cat_name."','".$catImage."', '".$meta_tag_title."', '".$meta_tag_description."', '".$meta_tag_keywords."', '".$slug."')");
			header("location: opdCatView.php?page=$page");
	}
	   
	if(isset($_POST['updateOPD']))
	{
	$catID ='';
	$opd_id=$_POST['opd_id'];
	$opd_name=$_POST['opd_name'];
	$slug=$_POST['slug'];
    $doctor_name = $_POST['doctor_name'];
    $day1 = $_POST['day1'];
    $day2 = $_POST['day2'];

    $time1 = $_POST['time1'];
    $time2 = $_POST['time2'];

	$meta_tag_title=$_POST['meta_tag_title'];
	$meta_tag_description=$_POST['meta_tag_description'];
	$meta_tag_keywords=$_POST['meta_tag_keywords'];		
	  
	//get multiple value of radio (multiple categories)
	foreach ($_POST['mulradio'] as $attributeKey => $attributes){
		//echo $attributeKey.' '.$_POST['mulradio'][$attributeKey].'<br>';
		$catID.= $_POST['mulradio'][$attributeKey].",";
	} //foreach
	  

	
    $con->insertdb("UPDATE `tbl_opd` SET opd_name='".$opd_name."',doctor_name='".$doctor_name."',cat_id='".$catID."',day1='".$day1."',day2='".$day2."' ,meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."',time1='".$time1."',time2='".$time2."'  where opd_id='".$opd_id."'");
	  
	header("location:opdView.php?page=$page");
	  
	  
}

	
if(isset($_GET["Image"]))
	{
	//print_r($_POST);die;
	$id= $_GET['id'];
	$records=$con->selectdb("SELECT * FROM tbl_opd_category where cat_id=".$id."");
	while($row=mysqli_fetch_row($records))
	{
	  unlink('../opdcategory/'.$row[4]);
	  unlink('../opdcategory/big_img/'.$row[4]);

	}
	$con->selectdb("update tbl_opd_category set cat_image='' where cat_id = '".$id."'");
	header("location: opdCategory_up.php?category_id=".$id."&page=".$page);



}	

if(isset($_GET["ProImage"]))
	{
	//print_r($_POST);die;
	$id= $_GET['id'];
	$records=$con->selectdb("SELECT * FROM tbl_opd where opd_id=".$id."");
	while($row=mysqli_fetch_row($records))
	{
	  unlink('../opd/'.$row[4]);
	  unlink('../opd/big_img/'.$row[4]);

	}
	$con->selectdb("update tbl_opd set opd_image='' where opd_id = '".$id."'");
	header("location: opd_up.php?opd_id=".$id."&page=".$page);


}	


//multiple image delete opd..
if(isset($_REQUEST["btnDeleteImages"]))
{
	$opd_id = $_POST['opd_id'];
	$page = $_POST['page'];

	$image = $_POST['frontimg1'];
	$image_list = explode(',',$image);
	$new_image_list = '';
	
	if(isset($_REQUEST["imageEdit"]))
	{
		foreach($_REQUEST['imageEdit'] as $row)
		{
			 $image = str_replace($row.',' , '' ,$image);
			 @unlink('../opdF/big_img/'.$row);
			 @unlink('../opdF/'.$row);
		}
		
		$con->selectdb("update tbl_opd set multi_images='".$image."' where opd_id = '".$opd_id."'");
		header("location: opd_up.php?opd_id=".$opd_id."&page=".$page);
	}
	else
	{
		echo 'No Image selected';
	}
		
}

//multiple pdf delete opd..
 if(isset($_REQUEST["btnDeletepdfs"]))
{
	$opd_id = $_POST['opd_id'];
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
		
		$con->selectdb("update tbl_opd set pdf_file='".$pdf."' where opd_id = '".$opd_id."'");
		header("location: opd_up.php?opd_id=".$opd_id."&page=".$page);
	}
	else
	{
		echo 'No pdf selected';
	}
		
}


?>