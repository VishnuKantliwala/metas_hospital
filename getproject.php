<?
session_start();
include_once("connect.php");
$cn=new connect(); 
$cn->connectdb();
				
$limit = (intval($_GET['limit']) != 0 ) ? $_GET['limit'] : 1;
$offset = (intval($_GET['offset']) != 0 ) ? $_GET['offset'] : 0;

$cat_id = $_GET['cat_id'];

$sql1 = $cn->selectdb("select * from tbl_project where cat_id like  '%".$cat_id.",%'   order by recordListingID ASC LIMIT $limit OFFSET $offset");

if ($cn->numRows($sql1) > 0) 
{
    while($row = $cn->fetchAssoc($sql1))
    {
        extract($row);
       
?>



<div class="col-md-4 col-sm-6 grid_item branding design">
    <div class="single_portfoilo_item">
        <span data-gall="portfolio" data-href="project-detail/<? echo $slug ?>" class="venobox"></span>
        <div class="portfolio_image">
            <img src="project/big_img/<?php echo $project_image; ?>" alt="<?echo $project_name ?>" class="gallery_cat_img">
        </div>
        <div class="portfolio_hover">
            <div class="tag_description">
                <a href="project-detail/<? echo $slug ?>">
                    <p><?echo $project_name ?></p>
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