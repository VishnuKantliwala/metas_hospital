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
				
				$con->insertdb("UPDATE `tbl_programme_category` SET cat_name='".$cat_name."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."' where cat_id=".$cat_id."");
				}
				else
				{
				
				@unlink("../programmecategory/big_img/". $frontimg2);
			    @unlink("../programmecategory/". $frontimg2);
				$catImage = createImage('frontimg',"../programmecategory/");

				$con->insertdb("UPDATE `tbl_programme_category` SET cat_name='".$cat_name."',cat_image='".$catImage."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."' where cat_id=".$cat_id."");
				}

			// end of image
			
				
				
	         header("location: programmeCatView.php?page=$page");

	  }
	  
	if(isset($_POST['addProduct']))
	{
	     // print_r($_POST);

			$programme_title=$_POST['programme_title'];
			$description=$_POST['description'];
			$caption=$_POST['caption'];
			$meta_tag_title=$_POST['meta_tag_title'];
			$meta_tag_description=$_POST['meta_tag_description'];
			$meta_tag_keywords=$_POST['meta_tag_keywords'];					  		
		    $slug=$_POST['slug'];
			
			//single image 
			//----------------------
			$single_image = createImage('frontimg', "../programme/");		
				
			// end of single image
			//-------------------------

			//-------------------
			// Multiple images
			//-------------------
			$images_name = createMultiImage('image_title', "../programmeF/");	
			
		$catID = '';
		//get multiple value of radio (multiple categories)
		foreach ($_POST['mulradio'] as $attributeKey => $attributes){
			// echo $attributeKey.' '.$_POST['mulradio'][$attributeKey].'<br>';
			$catID.= $_POST['mulradio'][$attributeKey].",";
		} //foreach
			
		$con->insertdb("INSERT INTO `tbl_programme` (
							`programme_title` ,
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
							'".$programme_title."',
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
					
			
			header("location:programmeView.php");
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
			$catImage = createImage('frontimg', "../programmecategory/");			
				
			// end of single image
			//-------------------------
			
			$con->insertdb("insert into tbl_programme_category(cat_parent_id,cat_name,cat_image,meta_tag_title, meta_tag_description, meta_tag_keywords,slug) 
			values(".$cat_parent_id.",'".$cat_name."','".$catImage."', '".$meta_tag_title."', '".$meta_tag_description."', '".$meta_tag_keywords."', '".$slug."')");
			header("location: programmeCatView.php?page=$page");
	}
	   
	   
	if(isset($_POST['updateProduct']))
	{
			$catID ='';
			$programme_id=$_POST['programme_id'];
			$programme_title=$_POST['programme_title'];
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
				
					$con->insertdb("UPDATE `tbl_programme` SET programme_title='".$programme_title."',description='".$description."',cat_id='".$catID."',image_name='".$frontimg2."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."', caption='".$caption."'  where programme_id='".$programme_id."'");
					echo "1";
				}
				else
				{
				
				@unlink("../programme/big_img/". $frontimg2);
			    @unlink("../programme/". $frontimg2);
				$single_image = createImage('frontimg',"../programme/");

				$con->insertdb("UPDATE `tbl_programme` SET programme_title='".$programme_title."',description='".$description."',cat_id='".$catID."',image_name='".$single_image."',meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."', caption='".$caption."' where programme_id='".$programme_id."'");
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
				
				$images_name = createMultiImage('image_title', "../programmeF/");	
				$records=$con->selectdb("select * from tbl_programme where programme_id='".$programme_id."'");
				 $row=mysqli_fetch_assoc($records);
				//echo $row[2]."<br>";
				//echo $images; die;
			 	$final= $row['multi_images'].$images_name;
					

				$con->insertdb("UPDATE `tbl_programme` SET multi_images='".$final."'  where programme_id='".$programme_id."'");
					
			}

			//-----------------				
			//end of multiple images
			//--------------------

			header("location:programmeView.php?page=$page");
			
			
	}
	
if(isset($_GET["Image"]))
	{
	//print_r($_POST);die;
	$id= $_GET['id'];
	$records=$con->selectdb("SELECT * FROM tbl_programme_category where cat_id=".$id."");
	while($row=mysqli_fetch_row($records))
	{
	  unlink('../programmecategory/'.$row[4]);
	  unlink('../programmecategory/big_img/'.$row[4]);

	}
	$con->selectdb("update tbl_programme_category set cat_image='' where cat_id = '".$id."'");
	header("location: programmeCategory_up.php?category_id=".$id."&page=".$page);



}	

if(isset($_GET["ProImage"]))
	{
	//print_r($_POST);die;
	$id= $_GET['id'];
	$records=$con->selectdb("SELECT * FROM tbl_programme where programme_id=".$id."");
	while($row=mysqli_fetch_row($records))
	{
	  unlink('../programme/'.$row[1]);
	  unlink('../programme/big_img/'.$row[1]);

	}
	$con->selectdb("update tbl_programme set image_name='' where programme_id = '".$id."'");
	header("location: programme_up.php?programme_id=".$id."&page=".$page);


}	
//multiple image delete Product..
if(isset($_REQUEST["btnDeleteImages"]))
{
	$programme_id = $_POST['programme_id'];
	$page = $_POST['page'];

	$image = $_POST['frontimg1'];
	$image_list = explode(',',$image);
	$new_image_list = '';
	
	if(isset($_REQUEST["imageEdit"]))
	{
		foreach($_REQUEST['imageEdit'] as $row)
		{
			 $image = str_replace($row.',' , '' ,$image);
			 @unlink('../programmeF/big_img/'.$row);
			 @unlink('../programmeF/'.$row);
		}
		
		$con->selectdb("update tbl_programme set multi_images='".$image."' where programme_id = '".$programme_id."'");
		header("location: programme_up.php?programme_id=".$programme_id."&page=".$page);
	}
	else
	{
		echo 'No Image selected';
	}
		
}


?>