<?php
session_start();
if(!isset($_SESSION['user']))
{
	header("location:Login.php");
}
include_once("../connect.php");

$cn=new connect();
$cn->connectdb();
$pageID= 'page29';

$auto_code = 0;

include_once("../connect.php");
include_once("image_lib_rname.php");
$con=new connect();
$con->connectdb();
    $error = "";

    if(isset($_POST['updatePdf']))
    {	    
	  //print_r($_POST);die;
        $pdf_name=$_POST['pdf_name'];
        $description = $_POST['description'];
        $frontimgpdf2=$_POST['frontimgpdf2'];
        $sqlFile = "";
        
        // -------------------
        //pdf
        //------------------------
        
        // if($_FILES["download_file"]["name"]!="")
        // {
        //     if ( $_FILES["download_file"]['type'] != "application/pdf") 
        //     {
        //         $error = "Please select PDF file";
        //     }
        //     else
        //     {
        //         //-----
        //         @unlink("../accreditation_pdf/". $frontimgpdf2);

        //         $pdf_file = createPDF('download_file',"../accreditation_pdf/");

        //         $sqlFile = ",pdf_file='".$pdf_file."'";
        //     }
        // }

        //-----------------				
	  //multi pdf
	  //--------------------
				  
	  $size_sum_pdf = array_sum($_FILES['download_file']['size']);
	  if ($size_sum_pdf > 0) 
	  // if($_FILES["download_file"]["name"]=="")
	  {
		  $pdf_file = createMultiPDF('download_file', "../accreditation_pdf/");
		  $records=$con->selectdb("select * from tbl_pdf where pdf_id=1");
		  $row=mysqli_fetch_assoc($records);
		  $final= $row['pdf_file'].$pdf_file;
		  
		  
		  $sqlFile = " ,pdf_file='".$final."'" ;
	  }
        
        
		$con->insertdb("UPDATE `tbl_pdf` SET pdf_name='".$pdf_name."', `description`='".$description."' ".$sqlFile." where pdf_id =  1");
				
				
			
		// header("location:accreditation.php");
			
    }
    if(isset($_POST['btnDeletePdf']))
    {
        $frontimgpdf2=$_POST['frontimgpdf2'];
        @unlink("../accreditation_pdf/". $frontimgpdf2);   
        $con->insertdb("UPDATE `tbl_pdf` SET pdf_file='' where pdf_id =  1");	

    }
    //multiple pdf delete project..
    if(isset($_REQUEST["btnDeletepdfs"]))
    {
        // $project_id = $_POST['project_id'];
        $page = $_POST['page'];
    
        $pdf = $_POST['frontpdf'];
        $pdf_list = explode(',',$pdf);
        $new_pdf_list = '';
        
        if(isset($_REQUEST["pdfEdit"]))
        {
            foreach($_REQUEST['pdfEdit'] as $row)
            {
                $pdf = str_replace($row.',' , '' ,$pdf);
                @unlink('../accreditation_pdf/'.$row);
            }
            
            $con->selectdb("update tbl_pdf set pdf_file='".$pdf."' where pdf_id = 1");
            header("location:accreditation.php");
        }
        else
        {
            echo 'No pdf selected';
        }
            
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
                    <h4 class="page-title-main">Accreditation</h4>
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
                                <?
                                $sqlPdf = $cn->selectdb("select * from tbl_pdf where pdf_id = 1");
                                if( $cn->numRows($sqlPdf) > 0 )
                                {
                                    $rowPdf = $cn->fetchAssoc($sqlPdf);
                                    extract($rowPdf);
                                }
                                ?>
                                <h4 class="mt-0 mb-2 header-title">Accreditation Form</h4>
                                <form action="" class="form-horizontal" method="post"  id="myform" name="myform" enctype="multipart/form-data">				
									   
                                    <div class="form-group" >
                                        <span style="color:red"><?echo $error?></span>

                                    </div>

                                    
                                                    
                                    <div class="form-group" style="display:none"> 
                                        <label for="inputEmail3" class="col-sm-2 control-label">Name</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="pdf_name" name="pdf_name" placeholder="Name" value="<?echo $pdf_name?>">
                                        </div>
                                    </div>	
                                    
                                    
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">Description</label>
                                        <div class="col-sm-12">
                                            <textarea type="text" class="ckeditor" id="description" name="description" placeholder="Description">
                                                <?echo $description?>
                                            </textarea>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-12 control-label">PDF File</label>
                                        <input type="hidden" class="form-control" id="frontpdf" name="frontpdf" placeholder="Multiple pdfs" value="<? echo $rowPdf['pdf_file']; ?>">
                                        <div class="col-sm-12">
                                            <input type="file" id="download_file" name="download_file[]" class="dropify" multiple />
                                            <div class="attached-files mt-4">
                                                <div class="task-tags mt-2">
                                                    <?
                                                    
                                                    $pdf = $rowPdf['pdf_file'];
                                                        
                                                        if($pdf!="" || $pdf!=NULL)
                                                        {
                                                    ?>
                                                    <h5>PDF's</h5>
                                                    <?
                                                            $pdf_list = explode(',',$pdf);
                                                            $cnt = 1;
                                                                
                                                            for($i=0;$i<count($pdf_list)-1;$i++)
                                                            {
                                                    ?>
                                                                <div class="bootstrap-tagsinput">
                                                                    <span class="tag label label-info bg-light">
                                                                        <div class=" custom-control custom-switch">
                                                                            <input class="custom-control-input" type="checkbox" id="<?php echo $pdf_list[$i]; ?>" name="pdfEdit[]" value="<?php echo $pdf_list[$i]; ?>">
                                                                            <label class="custom-control-label" for="<?php echo $pdf_list[$i]; ?>"><?echo $pdf_list[$i];?></label>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                    <?php
                                                            }
                                                            echo '<div class="row mt-2 mb-2"><div class="col-12"><input type="submit" class="btn btn-lighten-danger" name="btnDeletepdfs" value="Delete Selected pdfs"></div></div>';
                                                        }
                                                    
                                                    ?>
                                                </div>
                                            </div>
                                            <input type="hidden" id="frontimgpdf2" name="frontimgpdf2" value="<?php echo $rowPdf['pdf_file']?>" />
                                        </div>
                                    </div>
                                    
                                    <!-- <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">PDF</label>
                                        <div class="col-sm-4">
                                            <input type="file" id="download_file" name="download_file" class="dropify" />
                                        </div>
                                        
                                        <input type="hidden" id="frontimgpdf2" name="frontimgpdf2" value="<?php echo $pdf_file?>" />
                                        <?
                                        if($pdf_file!="")
                                        {
                                        ?>
                                        <div class="col-sm-12">
                                            <?echo $pdf_file?>
                                            <input type="submit" class="btn btn-lighten-danger" name="btnDeletePdf" value="Delete pdf">
                                        </div>
                                        <?
                                        }
                                        ?>
                                    </div> -->
                                    
                                    
                                    
                                                
                                    <div class="form-group">
                                        <div class="col-sm-offset-2 col-sm-10">
                                            <button type="submit" name="updatePdf" id="updatePdf" class="btn btn-success">Save</button>
                                        </div>
                                    </div>
                                    
                                    
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