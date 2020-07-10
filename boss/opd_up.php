<?php
session_start();
if(!isset($_SESSION['user']))
{
	header("location:Login.php");
}

include_once("../connect.php");
//include_once("fckeditor/fckeditor.php");
include_once("../navigationfun.php");
include_once("../sitemap.php");
$con=new connect();
$con->connectdb();
$pageID= 'page3';

$opd_id=$_GET['opd_id'];

$query = $con->selectdb('SELECT * FROM tbl_opd_category');
if(mysqli_num_rows($query)>0)
{
    while ($row = dbFetchAssoc($query))
    {
        $menu_items[$row['cat_id']] = array('cat_name' => $row['cat_name'],'cat_parent_id' => $row['cat_parent_id']);
    }
}
else{
    $menu_items = array();
}


// reterive selected value
$sqlC=$con->selectdb("SELECT cat_id FROM tbl_opd where opd_id=".$opd_id."");
while($rowC=mysqli_fetch_assoc($sqlC))
{
    $arraycat_id= explode(",",$rowC['cat_id']);
}

$finalarray= array_filter($arraycat_id);

// end of selected value
global $menuItems;
global $parentMenuIds;
global $finalarray;
    //create an array of parent_menu_ids to search through and find out if the current items have an children
    foreach($menu_items as $parentId)
    {
        $parentMenuIds[] = $parentId['cat_parent_id'];
    }
    //assign the menu items to the global array to use in the function
    $menuItems = $menu_items;
    
    //recursive function that prints categories as a nested html unorderd list
    function generate_menu($parent)
    {
            $has_childs = false;
            //this prevents printing 'ul' if we don't have subcategories for this category
            global $menuItems;
            global $parentMenuIds;
            global $finalarray;
            //use global array variable instead of a local variable to lower stack memory requierment
            foreach($menuItems as $key => $value)
            {
                if ($value['cat_parent_id'] == $parent)
                {    
                    //if this is the first child print '<ul>'
                    if ($has_childs === false)
                    {
                        //don't print '<ul>' multiple times
                        $has_childs = true;
                        
                        echo '<ul>';
                        
                    }
                    // checked mark in radio button
                        $sel ='';
                        $sel1 ='';

                    if(in_array($key,$finalarray))
                    {
                        $sel= 'checked="checked"';
                    }
                    //end of checked mark 
                    
                    if($value['cat_parent_id'] == 0 && in_array($key, $parentMenuIds))
                    {
                        echo '<li data-jstree='.'{"opened":true}'.'><a href="opdcategory.php?id=' . $key . '">' . $value['cat_name'] . '<b class="caret"></b></a>';
                    }
                    else if($value['cat_parent_id'] != 0 && in_array($key, $parentMenuIds))
                    {
                        echo '<li data-jstree='.'{"opened":true}'.'><a href="opdcategory.php?id=' . $key . '">' . $value['cat_name'] . '</a>';
                    }
                    else
                    {
                        echo '<li data-jstree='.'{"opened":true,"type":"file"}'.'>'.
                        '<div style="display: inline!important;" class="custom-control custom-switch">'.
                            '<input type="checkbox" class="custom-control-input" id="customSwitch'.$key.'" name="mulradio[]" value="'.$key.'"  '.$sel.' />'.
                            '<label class="custom-control-label" for="customSwitch'.$key.'">' . $value['cat_name'] .'</label>'.
                        '</div>';
                    }
                    generate_menu($key);
                    
                    //call function again to generate nested list for subcategories belonging to this category
                    echo '</li>';
                }
            }
            if ($has_childs === true) echo '</ul>';
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
        
        <!--Morris Chart-->
        <link rel="stylesheet" href="assets/libs/morris-js/morris.css" />
        
        <!-- App favicon -->
                <?$sqlF = $cn->selectdb("select * from tbl_favicon where fav_id= 1 ");
            $rowF = mysqli_fetch_assoc($sqlF);
        ?>
        <link rel="<?echo $rowF['relation'];?>" href="../favicon/big_img/<?echo $rowF['image_name'];?>" />

        
        <!-- dropify -->
        <link href="assets/libs/dropify/dropify.min.css" rel="stylesheet" type="text/css" />
        
        <!-- Treeview css -->
        <link href="assets/libs/treeview/style.css" rel="stylesheet" type="text/css" />
        
        <!-- App css -->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/app.min.css?v=<?echo time();?>" rel="stylesheet" type="text/css" />
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
                    <h4 class="page-title-main">opd</h4>
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
                                <h4 class="mt-0 header-title">opd Form</h4>
                                
                                <form class="form-horizontal" method="post" action="opd_upload.php" id="myform" name="myform" enctype="multipart/form-data">
                                    <input type="hidden" name="page" id="page" value="<? echo isset($_GET['page']);?>">

                                    <?php
                                    $records=$cn->selectdb("SELECT * FROM tbl_opd where opd_id=".$opd_id."");
                                    while($row=mysqli_fetch_array($records))
                                    {
                                    ?>
                                    <input type="hidden" name="opd_id" id="opd_id" value="<?php echo $row[0]; ?>" />
                                    <input type="hidden" name="cat_id" id="cat_id" value="<?php echo $row[3]; ?>" />

                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-12 control-label">Category List</label>
                                        <div class="col-sm-10">
                                            <div class="panel-body">
                                                <div id="basicTree" >
                                                    <ul>
                                                        <li data-jstree='{"opened":true}'>Category List
                                                            <?php generate_menu(0);	?>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-12 control-label">Slug</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="slug" name="slug" placeholder="Slug" value="<?php echo $row['slug']; ?>">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-12 control-label">opd Name</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="opd_name" name="opd_name" value="<?php echo $row['opd_name']; ?>" placeholder="opd Name">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">Doctor's Name</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="doctor_name" name="doctor_name" placeholder="Doctor's Name" value="<?php echo $row['doctor_name']; ?>">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">Day 1</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="day1" name="day1" placeholder="Day 1" value="<?php echo $row['day1']; ?>">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">Time 1</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="time1" name="time1" placeholder="Time 1"  value="<?php echo $row['time1']; ?>">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">Day 2</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="day2" name="day2" placeholder="Day 2" value="<?php echo $row['day2']; ?>">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">Time 2</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="time2" name="time2" placeholder="Time 2" value="<?php echo $row['time2']; ?>">
                                        </div>
                                    </div>                                    

                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-12 control-label"><span style="color:#F00; font-weight:bold;">*</span> Meta Tag Title</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="meta_tag_title" name="meta_tag_title" placeholder="Meta Tag Title" value="<?php echo $row['meta_tag_title']?>">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-12 control-label">Meta Tag Description</label>
                                        <div class="col-sm-12">
                                            <textarea cols="5" rows="5" class="form-control" id="meta_tag_description" name="meta_tag_description" placeholder="Meta Tag Description"><?php echo $row['meta_tag_description']?></textarea>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-12 control-label">Meta Tag Keywords</label>
                                        <div class="col-sm-12">
                                            <textarea cols="5" rows="5" class="form-control" id="meta_tag_keywords" name="meta_tag_keywords" placeholder="Meta Tag Keywords"><?php echo $row['meta_tag_keywords']?></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-offset-2 col-sm-10">
                                            <button type="submit" name="updateOPD" id="updateOPD" class="btn btn-success">Update</button>
                                            <button type="submit" name="myButton" id="myButton" class="btn btn-lighten-danger" onClick="window.location.href='opdView.php'; return false;">Cancel</button>
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

    </div><!-- End page -->

    
    <!-- form-upload init -->
    <script src="assets/js/pages/form-fileupload.init.js"></script>
    
    <!-- ckeditor -->
    <script src="assets/libs/ckeditor/ckeditor.js"></script>
    
    <!-- Vendor js -->
    <script src="assets/js/vendor.min.js"></script>
    
    <!-- Tree view js -->
    <script src="assets/libs/treeview/jstree.min.js?v=<?echo time();?>"></script>
    <script src="assets/js/pages/treeview.init.js"></script>
    
    <!-- App js -->
    <script src="assets/js/app.min.js?v=<?echo time();?>"></script>

    <!-- dropify js -->
    <script src="assets/libs/dropify/dropify.min.js"></script>
    
    <!-- form-upload init -->
    <script src="assets/js/pages/form-fileupload.init.js"></script>

</body>


</html>