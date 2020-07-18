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
				
				$con->insertdb("UPDATE `tbl_rally_category` SET cat_name='".$cat_name."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."' where cat_id=".$cat_id."");
				}
				else
				{
				
				@unlink("../rallycategory/big_img/". $frontimg2);
			    @unlink("../rallycategory/". $frontimg2);
				$catImage = createImage('frontimg',"../rallycategory/");

				$con->insertdb("UPDATE `tbl_rally_category` SET cat_name='".$cat_name."',cat_image='".$catImage."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."' where cat_id=".$cat_id."");
				}

			// end of image
			
				
				
	         header("location: rallyCatView.php?page=$page");

	  }
	  
	if(isset($_POST['addProduct']))
	{
	     // print_r($_POST);

			$rally_title=$_POST['rally_title'];
			$description=$_POST['description'];
			$meta_tag_title=$_POST['meta_tag_title'];
			$meta_tag_description=$_POST['meta_tag_description'];
			$meta_tag_keywords=$_POST['meta_tag_keywords'];					  		
		    $slug=$_POST['slug'];
			
			//single image 
			//----------------------
			$single_image = createImage('frontimg', "../rally/");		
				
			// end of single image
			//-------------------------

			//-------------------
			// Multiple images
			//-------------------
			$images_name = createMultiImage('image_title', "../rallyF/");	
			
		$catID = '';
		//get multiple value of radio (multiple categories)
		foreach ($_POST['mulradio'] as $attributeKey => $attributes){
			// echo $attributeKey.' '.$_POST['mulradio'][$attributeKey].'<br>';
			$catID.= $_POST['mulradio'][$attributeKey].",";
		} //foreach
			
		$con->insertdb("INSERT INTO `tbl_rally` (
							`rally_title` ,
							`description` ,
							`cat_id`,
							`image_name`,
							`meta_tag_title`,
							`meta_tag_description`,
							`meta_tag_keywords`,
							`slug`,
							`multi_images`
							)
							VALUES (
							'".$rally_title."',
							'".$description."', 
							'".$catID."', 
							'".$single_image."', 
							'".$meta_tag_title."', 
							'".$meta_tag_description."', 
							'".$meta_tag_keywords."', 
							'".$slug."',
							'".$images_name."');");
					
			
			header("location:rallyView.php");
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
			$catImage = createImage('frontimg', "../rallycategory/");			
				
			// end of single image
			//-------------------------
			
			$con->insertdb("insert into tbl_rally_category(cat_parent_id,cat_name,cat_image,meta_tag_title, meta_tag_description, meta_tag_keywords,slug) 
			values(".$cat_parent_id.",'".$cat_name."','".$catImage."', '".$meta_tag_title."', '".$meta_tag_description."', '".$meta_tag_keywords."', '".$slug."')");
			header("location: rallyCatView.php?page=$page");
	}
	   
	   
	if(isset($_POST['updateProduct']))
	{
			$catID ='';
			$rally_id=$_POST['rally_id'];
			$rally_title=$_POST['rally_title'];
			$description=$_POST['description'];
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
				
					$con->insertdb("UPDATE `tbl_rally` SET rally_title='".$rally_title."',description='".$description."',cat_id='".$catID."',image_name='".$frontimg2."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."'  where rally_id='".$rally_id."'");
					echo "1";
				}
				else
				{
				
				@unlink("../rally/big_img/". $frontimg2);
			    @unlink("../rally/". $frontimg2);
				$single_image = createImage('frontimg',"../rally/");

				$con->insertdb("UPDATE `tbl_rally` SET rally_title='".$rally_title."',description='".$description."',cat_id='".$catID."',image_name='".$single_image."',meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."' where rally_id='".$rally_id."'");
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
				
				$images_name = createMultiImage('image_title', "../rallyF/");	
				$records=$con->selectdb("select * from tbl_rally where rally_id='".$rally_id."'");
				 $row=mysqli_fetch_assoc($records);
				//echo $row[2]."<br>";
				//echo $images; die;
			 	$final= $row['multi_images'].$images_name;
					

				$con->insertdb("UPDATE `tbl_rally` SET multi_images='".$final."'  where rally_id='".$rally_id."'");
					
			}

			//-----------------				
			//end of multiple images
			//--------------------

			header("location:rallyView.php?page=$page");
			
			
	}
	
if(isset($_GET["Image"]))
	{
	//print_r($_POST);die;
	$id= $_GET['id'];
	$records=$con->selectdb("SELECT * FROM tbl_rally_category where cat_id=".$id."");
	while($row=mysqli_fetch_row($records))
	{
	  unlink('../rallycategory/'.$row[4]);
	  unlink('../rallycategory/big_img/'.$row[4]);

	}
	$con->selectdb("update tbl_rally_category set cat_image='' where cat_id = '".$id."'");
	header("location: rallyCategory_up.php?category_id=".$id."&page=".$page);



}	

if(isset($_GET["ProImage"]))
	{
	//print_r($_POST);die;
	$id= $_GET['id'];
	$records=$con->selectdb("SELECT * FROM tbl_rally where rally_id=".$id."");
	while($row=mysqli_fetch_row($records))
	{
	  unlink('../rally/'.$row[1]);
	  unlink('../rally/big_img/'.$row[1]);

	}
	$con->selectdb("update tbl_rally set image_name='' where rally_id = '".$id."'");
	header("location: rally_up.php?rally_id=".$id."&page=".$page);


}	
//multiple image delete Product..
if(isset($_REQUEST["btnDeleteImages"]))
{
	$rally_id = $_POST['rally_id'];
	$page = $_POST['page'];

	$image = $_POST['frontimg1'];
	$image_list = explode(',',$image);
	$new_image_list = '';
	
	if(isset($_REQUEST["imageEdit"]))
	{
		foreach($_REQUEST['imageEdit'] as $row)
		{
			 $image = str_replace($row.',' , '' ,$image);
			 @unlink('../rallyF/big_img/'.$row);
			 @unlink('../rallyF/'.$row);
		}
		
		$con->selectdb("update tbl_rally set multi_images='".$image."' where rally_id = '".$rally_id."'");
		header("location: rally_up.php?rally_id=".$rally_id."&page=".$page);
	}
	else
	{
		echo 'No Image selected';
	}
		
}


?>