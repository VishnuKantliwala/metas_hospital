<?
session_start();
include_once("connect.php");
$cn=new connect(); 
$cn->connectdb();
				
$limit = (intval($_GET['limit']) != 0 ) ? $_GET['limit'] : 1;
$offset = (intval($_GET['offset']) != 0 ) ? $_GET['offset'] : 0;

$cat_id = $_GET['cat_id'];

$sql1 = $cn->selectdb("select * from tbl_project_category where cat_parent_id = ".$cat_id."   order by recordListingID DESC LIMIT $limit OFFSET $offset");

if ($cn->numRows($sql1) > 0) 
{
    while($row = $cn->fetchAssoc($sql1))
    {
        extract($row);

        $sqlHaveSubCat = $cn->selectdb('select cat_id from tbl_project_category where cat_parent_id ='.$cat_id);
        if( $cn->numRows($sqlHaveSubCat) > 0 )
        {
            $href = "project-category/".urlencode($slug);    
        }
        else
        {
            $href = "projects/".urlencode($slug);
        }
        
        
        if($cat_image != "")
            $src = "projectcategory/big_img/".$cat_image;
        else 
            $src = "./images/sample.jpg";

?>
<div class="col-md-4 col-sm-6 grid_item branding design">
    <div class="single_portfoilo_item">
        <span data-gall="portfolio" data-href="<?echo $src?>" class="venobox"></span>
        <div class="portfolio_image">
            <img src="<?echo $src?>" alt="<?echo $cat_name ?>" class="gallery_cat_img">
        </div>
        <div class="portfolio_hover">
            <div class="tag_description">
                <a href="<?echo $href?>">
                    <p><?echo $cat_name ?></p>
                </a>
                <!-- <span>web design</span> -->
            </div>
        </div>
    </div>
</div>


<?
        }
    }
    else{
        //echo "<script>window.open('Products/".$cid."/1/','_SELF');</script>";
    }
					
?>