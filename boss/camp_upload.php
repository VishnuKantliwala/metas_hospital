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
				
				$con->insertdb("UPDATE `tbl_camp_category` SET cat_name='".$cat_name."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."' where cat_id=".$cat_id."");
				}
				else
				{
				
				@unlink("../campcategory/big_img/". $frontimg2);
			    @unlink("../campcategory/". $frontimg2);
				$catImage = createImage('frontimg',"../campcategory/");

				$con->insertdb("UPDATE `tbl_camp_category` SET cat_name='".$cat_name."',cat_image='".$catImage."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."' where cat_id=".$cat_id."");
				}

			// end of image
			
				
				
	         header("location: campCatView.php?page=$page");

	  }
	  
	if(isset($_POST['addProduct']))
	{
	     // print_r($_POST);

			$camp_title=$_POST['camp_title'];
			$description=$_POST['description'];
			$caption=$_POST['caption'];
			$meta_tag_title=$_POST['meta_tag_title'];
			$meta_tag_description=$_POST['meta_tag_description'];
			$meta_tag_keywords=$_POST['meta_tag_keywords'];					  		
		    $slug=$_POST['slug'];
			
			//single image 
			//----------------------
			$single_image = createImage('frontimg', "../camp/");		
				
			// end of single image
			//-------------------------

			//-------------------
			// Multiple images
			//-------------------
			$images_name = createMultiImage('image_title', "../campF/");	
			
		$catID = '';
		//get multiple value of radio (multiple categories)
		foreach ($_POST['mulradio'] as $attributeKey => $attributes){
			// echo $attributeKey.' '.$_POST['mulradio'][$attributeKey].'<br>';
			$catID.= $_POST['mulradio'][$attributeKey].",";
		} //foreach
			
		$con->insertdb("INSERT INTO `tbl_camp` (
							`camp_title` ,
							`description` ,
							`cat_id`,
							`image_name`,
							`meta_tag_title`,
							`meta_tag_description`,
							`meta_tag_keywords`,
							`slug`,
							`multi_images`,
                            `caption`
							)
							VALUES (
							'".$camp_title."',
							'".$description."', 
							'".$catID."', 
							'".$single_image."', 
							'".$meta_tag_title."', 
							'".$meta_tag_description."', 
							'".$meta_tag_keywords."', 
							'".$slug."',
							'".$images_name."',
                            '".$caption."'
                            );");
					
			
			header("location:campView.php");
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
			$catImage = createImage('frontimg', "../campcategory/");			
				
			// end of single image
			//-------------------------
			
			$con->insertdb("insert into tbl_camp_category(cat_parent_id,cat_name,cat_image,meta_tag_title, meta_tag_description, meta_tag_keywords,slug) 
			values(".$cat_parent_id.",'".$cat_name."','".$catImage."', '".$meta_tag_title."', '".$meta_tag_description."', '".$meta_tag_keywords."', '".$slug."')");
			header("location: campCatView.php?page=$page");
	}
	   
	   
	if(isset($_POST['updateProduct']))
	{
			$catID ='';
			$camp_id=$_POST['camp_id'];
			$camp_title=$_POST['camp_title'];
			$description=$_POST['description'];
			$caption=$_POST['caption'];
			$meta_tag_title=$_POST['meta_tag_title'];
			$meta_tag_description=$_POST['meta_tag_description'];
			$meta_tag_keywords=$_POST['meta_tag_keywords'];					  		
		    $slug=$_POST['slug'];				  		
			//$cat_id=$_POST['cat_id'];
			
			//get multiple value of radio (multiple categories)
			foreach ($_POST['mulradio'] as $attributeKey => $attributes){
		   //echo $attributeKey.' '.$_POST['mulradio'][$attributeKey].'<br>';
			
				$catID.= $_POST['mulradio'][$attributeKey].",";
			} //foreach
			
			$frontimg2=$_POST['frontimg2'];

			// single image
			if($_FILES["frontimg"]['error'] > 0)// it means no new image selected insert previous one......
				{
				
					$con->insertdb("UPDATE `tbl_camp` SET camp_title='".$camp_title."',description='".$description."',cat_id='".$catID."',image_name='".$frontimg2."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."', caption='".$caption."'  where camp_id='".$camp_id."'");
					echo "1";
				}
				else
				{
				
				@unlink("../camp/big_img/". $frontimg2);
			    @unlink("../camp/". $frontimg2);
				$single_image = createImage('frontimg',"../camp/");

				$con->insertdb("UPDATE `tbl_camp` SET camp_title='".$camp_title."',description='".$description."',cat_id='".$catID."',image_name='".$single_image."',meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."', caption='".$caption."' where camp_id='".$camp_id."'");
				echo "2";
				}

			// end of image

			//------------------------
			//multiple images
			//------------------------
			
			$size_sum = array_sum($_FILES['image_title']['size']);
			if ($size_sum > 0) 
			{
			 // at least one file has been uploaded
				
				$images_name = createMultiImage('image_title', "../campF/");	
				$records=$con->selectdb("select * from tbl_camp where camp_id='".$camp_id."'");
				 $row=mysqli_fetch_assoc($records);
				//echo $row[2]."<br>";
				//echo $images; die;
			 	$final= $row['multi_images'].$images_name;
					

				$con->insertdb("UPDATE `tbl_camp` SET multi_images='".$final."'  where camp_id='".$camp_id."'");
					
			}

			//-----------------				
			//end of multiple images
			//--------------------

			header("location:campView.php?page=$page");
			
			
	}
	
if(isset($_GET["Image"]))
	{
	//print_r($_POST);die;
	$id= $_GET['id'];
	$records=$con->selectdb("SELECT * FROM tbl_camp_category where cat_id=".$id."");
	while($row=mysqli_fetch_row($records))
	{
	  unlink('../campcategory/'.$row[4]);
	  unlink('../campcategory/big_img/'.$row[4]);

	}
	$con->selectdb("update tbl_camp_category set cat_image='' where cat_id = '".$id."'");
	header("location: campCategory_up.php?category_id=".$id."&page=".$page);



}	

if(isset($_GET["ProImage"]))
	{
	//print_r($_POST);die;
	$id= $_GET['id'];
	$records=$con->selectdb("SELECT * FROM tbl_camp where camp_id=".$id."");
	while($row=mysqli_fetch_row($records))
	{
	  unlink('../camp/'.$row[1]);
	  unlink('../camp/big_img/'.$row[1]);

	}
	$con->selectdb("update tbl_camp set image_name='' where camp_id = '".$id."'");
	header("location: camp_up.php?camp_id=".$id."&page=".$page);


}	
//multiple image delete Product..
if(isset($_REQUEST["btnDeleteImages"]))
{
	$camp_id = $_POST['camp_id'];
	$page = $_POST['page'];

	$image = $_POST['frontimg1'];
	$image_list = explode(',',$image);
	$new_image_list = '';
	
	if(isset($_REQUEST["imageEdit"]))
	{
		foreach($_REQUEST['imageEdit'] as $row)
		{
			 $image = str_replace($row.',' , '' ,$image);
			 @unlink('../campF/big_img/'.$row);
			 @unlink('../campF/'.$row);
		}
		
		$con->selectdb("update tbl_camp set multi_images='".$image."' where camp_id = '".$camp_id."'");
		header("location: camp_up.php?camp_id=".$camp_id."&page=".$page);
	}
	else
	{
		echo 'No Image selected';
	}
		
}


?>