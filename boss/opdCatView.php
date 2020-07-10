<?php
session_start();
if(!isset($_SESSION['user']))
{
	header("location:Login.php");
}

include_once("../connect.php");
include_once("../navigationfun.php");
include_once("imagefunction.php");
include_once("image_lib_rname.php"); 
require('./Classes/PHPExcel.php');
$cn=new connect();
$cn->connectdb();

$pageID= 'page20';

if(isset($_GET['parentid']))
{
	$parentid=$_GET['parentid'];
}
else
{
	$parentid=0;
}
   
$result = $cn->selectdb("SELECT cat_id,cat_parent_id,cat_name,cat_description,cat_image FROM tbl_opd_category where cat_parent_id=".$parentid." order by cat_id desc");
			
			
?>

<?php


// delete multi rec
function delmultirec($id)
{
	$cn=new connect();
	$cn->connectdb();
	$id = (int)$id;

	// find all the children categories
	$children = getChildren($id);
	
	// make an array containing this category and all it's children
	$categories  = array_merge($children, array($id));
    $numCategory = count($categories);

    for($i=0; $i<$numCategory;$i++)
	{
	
	$sql = "SELECT cat_id,opd_id
	        FROM tbl_opd
			WHERE FIND_IN_SET('".$categories[$i]."',cat_id)>0";
	//echo $sql;die;
	
	/*$sql = "SELECT pro_id,pro_image
	        FROM tbl_opd
			WHERE cat_id IN (" . implode(',', $categories) . ")";*/
			//echo $sql;die;
	$result = dbQuery($sql);
	
	
		//unlink(SRV_ROOT . PRODUCT_IMAGE_DIR . $row['pd_image']);	
		//unlink(SRV_ROOT . PRODUCT_IMAGE_DIR . $row['pd_thumbnail']);
		//print_r($row);die;
		if (dbNumRows($result)>0) {
		//echo 'hi';die;
		while ($row = dbFetchAssoc($result)) {
			//unlink(SRV_ROOT . PRODUCT_IMAGE_DIR . $row['pd_image']);	
			//unlink(SRV_ROOT . PRODUCT_IMAGE_DIR . $row['pd_thumbnail']);
			//echo $row[0];die;
				$catID =array_filter(explode(",",$row['cat_id']));
				$cntCatId =count($catID);
				//print_r($cntCatId);die;
				if($cntCatId>1)
				{
				  $sqlupdate =mysqli_query("UPDATE tbl_opd SET cat_id = replace(cat_id, '".$categories[$i].",', '') WHERE FIND_IN_SET('".$categories[$i]."',cat_id)>0");

				}
				elseif($cntCatId== 1)
				{
					
					
					// delete the products
					$sqlD = "DELETE FROM tbl_opd
							WHERE opd_id='".$row['opd_id']."'";
					dbQuery($sqlD);
					
					
			   }//elseif		

		}//while
	}//if	
	
	}//for
		
	
	
	// then remove the categories image
	_deleteImage($categories);

    // finally remove the category from database;
    $sql = "DELETE FROM tbl_opd_category 
            WHERE cat_id IN (" . implode(',', $categories) . ")";
    dbQuery($sql);
    
//}


/*
	Recursively find all children of $catId
*/
}


function getChildren($catId)
{
    $sql = "SELECT cat_id ".
           "FROM tbl_opd_category ".
           "WHERE cat_parent_id = $catId ";
    $result = dbQuery($sql);
    
	$cat = array();
	if (dbNumRows($result) > 0) {
		while ($row = dbFetchRow($result)) {
			$cat[] = $row[0];
			
			// call this function again to find the children
			$cat  = array_merge($cat, getChildren($row[0]));
		}
    }

    return $cat;
}

/*
    Remove a category image
*/
function deleteImage()
{
    if (isset($_GET['catId']) && (int)$_GET['catId'] > 0) {
        $catId = (int)$_GET['catId'];
    } else {
        header('Location: index.php');
    }
    
	_deleteImage($catId);
	
	// update the image name in the database
	$sql = "UPDATE tbl_opd_category
			SET cat_image = ''
			WHERE cat_id = $catId";
	dbQuery($sql);        

    header("Location: index.php?view=modify&catId=$catId");
}

/*
	Delete a category image where category = $catId
*/
function _deleteImage($id)
{
    // we will return the status
    // whether the image deleted successfully
    $deleted = false;

	// get the image(s)
    $sql = "SELECT cat_image 
            FROM tbl_opd_category
            WHERE cat_id ";
	
	if (is_array($id)) {
		$sql .= " IN (" . implode(',', $id) . ")";
	} else {
		$sql .= " = $id";
	}	

    $result = dbQuery($sql);
    
    if (dbNumRows($result)) {
        while ($row = dbFetchAssoc($result)) {
	        // delete the image file
    	    //$deleted = @unlink(SRV_ROOT . CATEGORY_IMAGE_DIR . $row['cat_image']);
			// $deleted = @unlink("../opdcategory/". $row['cat_image']);	
			// @unlink("../opdcategory/big_img/". $row['cat_image']);	
        }	
        $deleted = true;
    }
    
    return $deleted;
}
// delete multi rec
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

        <!-- third party css -->
        <link href="assets/libs/datatables/dataTables.bootstrap4.css" rel="stylesheet" type="text/css" />
        <link href="assets/libs/datatables/responsive.bootstrap4.css" rel="stylesheet" type="text/css" />
        <link href="assets/libs/datatables/buttons.bootstrap4.css" rel="stylesheet" type="text/css" />
        <link href="assets/libs/datatables/select.bootstrap4.css" rel="stylesheet" type="text/css" />
        <!-- third party css end -->

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
                    <h4 class="page-title-main">OPD Category</h4>
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
                                <h4 class="mt-0 header-title">OPD Category View</h4>
                                <?php
                                    if(isset($_POST['delete']))
                                    {
                                        $cnt=array();
                                        $cnt=count($_POST['chkbox']);
                                        for($i=0;$i<$cnt;$i++)
                                        {
                                            $del_id=$_POST['chkbox'][$i];
                                            delmultirec($del_id);
                                            // $sql=  $cn->selectdb("select * from tbl_opd_category where cat_id=$del_id");
                                            // while($row = mysqli_fetch_assoc($sql))
                                            // {
                                            //     //image
                                            //     @unlink('../opdcategory/big_img/'.$row['cat_image']);
                                            //     @unlink('../opdcategory/'.$row['cat_image']);
                                                
                                            // }
                                            
                                            //echo "<script>alert('".$del_id."');</script>";
                                            //$query="delete from product where product_id=".$del_id;
                                            // $con->selectdb("delete from `tbl_opd_category` where cat_id=".$del_id);
                                        }
                                        echo "<script>window.open('opdCatView.php','_SELF')</script>";
                                    }
                                ?>
                                <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post" enctype="multipart/form-data">
                                    <div class="row mt-2 mb-2">
                                        <div class="col-lg-12">
                                            <a href="opdCategory.php?parentid=<?php echo $parentid; ?>" class="btn btn-success m-b-sm">Add Category</a>
								            <a href="sorting_opd_category.php" class="btn btn-success m-b-sm">Sorting</a>
								            <input type="submit" class="btn btn-lighten-danger m-b-sm"name="delete" value="delete"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            
                                            <table id="datatable" class="table table-bordered dt-responsive nowrap">
                                                <thead>
                                                <tr>
                                                    <th><input type="checkbox" id="checkall" class="checkall" name="sample"/> Select all</th>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Copy</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr>
                                                        <th><input type="checkbox" id="checkall" class="checkall" name="sample"/> Select all</th>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Copy</th>
                                                        <th>Edit</th>
                                                        <th>Delete</th>
                                                    </tr>
                                                </tfoot>
                                                <tbody>
                                                <?php
                                                if (mysqli_num_rows($result) > 0) 
                                                {
                                                    while($row = mysqli_fetch_assoc($result)) 
                                                    {
                                                        extract($row);
                                                        ?>
                                                    <tr>
                                                        <td><input type="checkbox" name="chkbox[]" class="chkbox"  value="<?echo $cat_id;?>"/></td>
                                                        <td><?php echo $cat_id; ?></td>
                                                        <td><a href="opdCatView.php?parentid=<?php echo $cat_id; ?>"><?php echo $cat_name; ?></a></td>
                                                        
                                                        <td><a href='opdCategory_copy.php?id=<?php echo $cat_id ?>&page=<? echo isset($_GET['page']);?>'><i class="fa fa-copy"></i></a></td>
                                                        <td><a href='opdcategory_up.php?category_id=<?php echo $cat_id; ?>&page=<? echo isset($_GET['page']);?>'><i class="fa fa-edit"></i></a></td>
                                                        <td><a href='deleteOPDCat.php?catId=<?php echo $cat_id; ?>&page=<? echo isset($_GET['page']);?>' onClick="return confirm('Are you sure want to delete?');"><i class="fa fa-trash"></i></a></td>
                                                        
                                                    </tr>
                                                    <? } } ?>
                                                    <input type="hidden" name="page" id="page" value="<? echo isset($_GET['page']);?>">

                                                    
                                                </tbody>
                                            </table>
                                            
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div><!-- End page -->


    <!-- Vendor js -->
    <script src="assets/js/vendor.min.js"></script>

    <!-- third party js -->
    <script src="assets/libs/datatables/jquery.dataTables.min.js"></script>
    <script src="assets/libs/datatables/dataTables.bootstrap4.js"></script>
    <script src="assets/libs/datatables/dataTables.responsive.min.js"></script>
    <script src="assets/libs/datatables/responsive.bootstrap4.min.js"></script>
    <script src="assets/libs/datatables/dataTables.buttons.min.js"></script>
    <script src="assets/libs/datatables/buttons.bootstrap4.min.js"></script>
    <script src="assets/libs/datatables/buttons.html5.min.js"></script>
    <script src="assets/libs/datatables/buttons.flash.min.js"></script>
    <script src="assets/libs/datatables/buttons.print.min.js"></script>
    <script src="assets/libs/datatables/dataTables.keyTable.min.js"></script>
    <script src="assets/libs/datatables/dataTables.select.min.js"></script>
    <script src="assets/libs/pdfmake/vfs_fonts.js"></script>
    <!-- third party js ends -->

    <!-- Datatables init -->
    <script src="assets/js/pages/datatables.init.js"></script>

    <!-- App js -->
    <script src="assets/js/app.min.js?v=<?echo time();?>"></script>
    
</body>

</html>