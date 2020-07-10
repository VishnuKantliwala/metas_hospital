<?php
session_start();
if(!isset($_SESSION['user']))
{
	header("location:Login.php");
}
include_once("../connect.php");
include_once("../navigationfun.php");
$cn=new connect();
$cn->connectdb();
$pageID= 'page21';

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

    <!-- sorting -->
    <script type="text/javascript" src="boss-asset/js/jquery-1.3.2.min.js"></script>
    <script type="text/javascript" src="boss-asset/js/jquery-ui-1.7.1.custom.min.js"></script>
<script type="text/javascript">
    $(document).ready(function(){ 
        
        $(function() {
            $(".sortable").sortable({ opacity: 0.6, cursor: 'move', update: function() {
                var order = $(this).sortable("serialize") + '&action=updateRecordsListings'; 
                $.post("update_event.php", order, function(theResponse){
                    // $(".sortable").html(theResponse);
                }); 															 
            }								  
        });
    });
    

    });	
</script>
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
                    <h4 class="page-title-main">Events</h4>
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
                            <h4 class="mt-0 header-title">Events</h4>
                            <div class="card-box">
                            <div class="sortable">
                                <?php
								$query  = "SELECT * FROM tbl_event ORDER BY recordListingID ASC";
								$result = $cn->selectdb($query);
								
								while($row = mysqli_fetch_assoc($result))
								{
								?>
                                <div id="recordsArray_<?php echo $row['event_id']; ?>" class="card card-draggable">
                                    <div class="card-body bg-light">
                                        <p class="card-text"><?php echo $row['recordListingID'] . ". " . $row['event_title']; ?></p>
                                    </div>
                                </div>
								<?php } ?>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div><!-- end content -->
                
            </div>
        </div>

    </div><!-- End page -->


    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script> -->
    <!-- Vendor js -->
    <script src="assets/js/vendor.min.js"></script>

    <!-- Datatables init -->
    <script src="assets/js/pages/datatables.init.js"></script>

    <!-- App js -->
    <script src="assets/js/app.min.js"></script>

    
    <script src="assets/libs/jquery-ui/jquery-ui.min.js"></script>

    <!-- draggable init -->
    <script src="assets/js/pages/draggable.init.js"></script>
</body>

</html>