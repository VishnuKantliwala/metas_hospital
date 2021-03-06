<?php
session_start();
if(!isset($_SESSION['user']))
{
	header("location:Login.php");
}

include_once("../connect.php");
include_once("../navigationfun.php");
include_once("../sitemap.php");

include_once('image_lib.php'); 
$con=new connect();
$con->connectdb();
$cn=new connect();
$cn->connectdb();

$pageID= 'page29';

$team_id=$_GET['team_id'];

  
if(isset($_POST['updateSlider']))
{
		
			$service_title = $_POST['service_title'];
            $team_speciality=$_POST['team_speciality'];
			$description = $_POST['description'];
			$meta_tag_title=$_POST['meta_tag_title'];
			$meta_tag_description=$_POST['meta_tag_description'];
			$meta_tag_keywords=$_POST['meta_tag_keywords'];	
		    $slug = $_POST['slug'];

			
					  		
				
			$frontimg2=$_POST['frontimg2'];
				
				if($_FILES["image_name"]['error']>0)
				
				{
				$con->insertdb("UPDATE `tbl_team` SET `team_title` = '".$service_title."', `description` = '".$description."', `image_name` = '".$frontimg2."', meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."', team_speciality= '".$team_speciality."' WHERE `tbl_team`.`team_id` = '".$team_id."'");
				}
				else
				{
				@unlink("../team/big_img/". $frontimg2);
				@unlink("../team/". $frontimg2);
				$sliderImage = createImage('image_name',"../team/");
				
				$con->insertdb("UPDATE `tbl_team` SET `team_title` = '".$service_title."', `description` = '".$description."', `image_name` = '".$sliderImage."',meta_tag_title='".$meta_tag_title."',meta_tag_description='".$meta_tag_description."',meta_tag_keywords='".$meta_tag_keywords."',slug='".$slug."', team_speciality= '".$team_speciality."' WHERE `tbl_team`.`team_id` = '".$team_id."'");
				}
				


	
	header("location: teamView.php?page=$page");
}

if(isset($_GET["Image"]))
	{
	//print_r($_GET);die;
	$page=$_GET['page'];
	$team_id= $_GET['team_id'];
	$records=$con->selectdb("SELECT * FROM tbl_team where team_id=".$team_id."");
	while($row=mysqli_fetch_row($records))
	{
	  unlink('../team/'.$row[1]);
	  unlink('../team/big_img/'.$row[1]);

	}
	$con->selectdb("update tbl_team set image_name='' where team_id = '".$team_id."'");
	header("location: teamUpdate.php?team_id=".$team_id."&page=".$page);


}	


?>
<!DOCTYPE html>
<html lang="en">
    
<head>
        <meta charset="utf-8" />
        <title>Master Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- App favicon -->
                <?$sqlF = $cn->selectdb("select * from tbl_favicon where fav_id= 1 ");
            $rowF = mysqli_fetch_assoc($sqlF);
        ?>
        <link rel="<?echo $rowF['relation'];?>" href="../favicon/big_img/<?echo $rowF['image_name'];?>" />


        <!--Morris Chart-->
        <link rel="stylesheet" href="assets/libs/morris-js/morris.css" />

        <!-- App css -->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/app.min.css?v=<?echo time();?>" rel="stylesheet" type="text/css" />

        <!-- dropify -->
        <link href="assets/libs/dropify/dropify.min.css" rel="stylesheet" type="text/css" />


</head>

<body>

    <!-- Begin page -->
    <div id="wrapper">
        <!-- Topbar Start -->
        <div class="navbar-custom">

                <!-- LOGO -->
                <div class="logo-box">
                    <a href="index.php" class="logo text-center">
                        <span class="logo-lg">
                        <?$sqlL = $cn->selectdb("select * from tbl_logo where logo_id= 1 ");
                            $rowL = mysqli_fetch_assoc($sqlL);
                        ?>
                            <img src="<?if($rowL['image_name']!=''){echo "../logo/big_img/".$rowL['image_name'];}?>" alt="" height="16">
                        </span>
                    </a>
                </div>

            <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
                <li>
                    <button class="button-menu-mobile disable-btn waves-effect">
                        <i class="fe-menu"></i>
                    </button>
                </li>

                <li>
                    <h4 class="page-title-main">Administrative Body</h4>
                </li>
    
            </ul>
        </div>
        <!-- end Topbar -->

        <!-- ========== Left Sidebar Start ========== -->
        <?include_once("menu.php");?>
        <!-- Left Sidebar End -->

        <!-- ============================================================== -->
        <!-- Start Page Content here -->
        <!-- ============================================================== -->

        <div class="content-page">
            <div class="content">

                <!-- Start Content-->
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-12">
                            <div class="card-box">
                                <h4 class="mt-0 mb-2 header-title">Administrative Body Form</h4>
                                <form class="form-horizontal" method="post" action="#" id="myform" name="myform" enctype="multipart/form-data">
									 <input type="hidden" name="page" id="page" value="<? echo $_GET['page'];?>">
									 
									 <?php
										$records=$con->selectdb("SELECT * FROM tbl_team where team_id=".$team_id."");
										while($row=mysqli_fetch_assoc($records))
										{
										?>
										
										<div class="form-group">
                                            <label for="inputEmail3" class="col-sm-2 control-label">Slug</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="slug" name="slug" placeholder="Slug" value="<? echo $row['slug']; ?>">
                                            </div>
                                        </div>
															
										<div class="form-group">
                                            <label for="inputEmail3" class="col-sm-2 control-label">Name</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="service_title" name="service_title" placeholder="Name" value="<? echo $row['team_title']; ?>">
                                            </div>
                                        </div>	
                                        
                                        <div class="form-group">
                                            <label for="inputEmail3" class="col-sm-2 control-label">Speciality</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="team_speciality" name="team_speciality" placeholder="Speciality" value="<? echo $row['team_speciality']; ?>">
                                            </div>
                                        </div>	
										
										
										<div class="form-group">
                                            <label for="inputEmail3" class="col-sm-2 control-label">Description</label>
                                            <div class="col-sm-10">
                                                <textarea type="text" class="ckeditor" id="description" name="description" placeholder="Description"><? echo $row['description']; ?></textarea>
                                            </div>
                                        </div>
										
										<div class="form-group">
                                            <label for="inputEmail3" class="col-sm-2 control-label">Image:</label>
                                            <div class="col-sm-4">
                                                <input type="file" id="image_name" name="image_name" class="dropify" data-default-file="<?if($row['image_name']!=''){echo "../team/".$row['image_name'];}?>"/>
												
											<? if($row['image_name']!=''){?>
											    <a class="btn btn-lighten-danger" href="teamUpdate.php?team_id=<?php echo $row['team_id']; ?>&Image=Del" onClick="return confirm('Are you sure want to delete?');">Delete</a>
											<? } ?>
											<input type="hidden" id="frontimg2" name="frontimg2" value="<?php echo $row['image_name']?>"  />
                                            </div>
                                        </div>
										
											
										<div class="form-group">
                                            <label for="inputEmail3" class="col-sm-2 control-label"><span style="color:#F00; font-weight:bold;">*</span> Meta Tag Title</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="meta_tag_title" name="meta_tag_title" placeholder="Meta Tag Title"  value="<?php echo $row['meta_tag_title']?>">
                                            </div>
                                        </div>
										
										<div class="form-group">
                                            <label for="inputEmail3" class="col-sm-2 control-label">Meta Tag Description</label>
                                            <div class="col-sm-10">
                                                <textarea rows="5" class="form-control" id="meta_tag_description" name="meta_tag_description" placeholder="Meta Tag Description" ><?php echo $row['meta_tag_description']?></textarea>
                                            </div>
                                        </div>
										
										<div class="form-group">
                                            <label for="inputEmail3" class="col-sm-2 control-label">Meta Tag Keywords</label>
                                            <div class="col-sm-10">
                                                <textarea rows="5" class="form-control" id="meta_tag_keywords" name="meta_tag_keywords" placeholder="Meta Tag Keywords"><?php echo $row['meta_tag_keywords']?></textarea>
                                            </div>
                                        </div>
										                              
                                        
                                        <div class="form-group">
                                            <div class="col-sm-offset-2 col-sm-10">
                                                <button type="submit" name="updateSlider" id="updateSlider" class="btn btn-success">Update</button>
                                                <button type="submit" name="myButton" id="myButton" class="btn btn-lighten-danger" onClick="window.location.href='teamView.php'; return false;" >Cancel</button>	
                                            </div>
                                        </div>
										
										<? } ?>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    <!-- Vendor js -->
    <script src="assets/js/vendor.min.js"></script>

    <!-- dropify js -->
    <script src="assets/libs/dropify/dropify.min.js"></script>

    <!-- form-upload init -->
    <script src="assets/js/pages/form-fileupload.init.js"></script>

    <!-- App js -->
    <script src="assets/js/app.min.js"></script>
    
    <!-- ckeditor -->
    <script src="assets/libs/ckeditor/ckeditor.js"></script>

    </body>

</html>