<?
session_start();
include_once("connect.php");
$cn=new connect(); 
$cn->connectdb();
				
$limit = (intval($_GET['limit']) != 0 ) ? $_GET['limit'] : 1;
$offset = (intval($_GET['offset']) != 0 ) ? $_GET['offset'] : 0;

$cat_id = $_GET['cat_id'];

$sql1 = $cn->selectdb("select * from tbl_gallery where cat_id like  '%".$cat_id.",%'   order by recordListingID ASC LIMIT $limit OFFSET $offset");

if ($cn->numRows($sql1) > 0) 
{
    while($row = $cn->fetchAssoc($sql1))
    {
        extract($row);
        if($multi_images != "")
        {
            $imgs=explode(",",$multi_images);
            for($i=0;$i<count($imgs)-1;$i++)
            {
                $src="galleryF/big_img/". $imgs[$i];
?>

<div class="col-md-4 col-sm-6 grid_item branding design">
    <div class="single_portfoilo_item">
        <a class="example-image-link" data-lightbox="example-set" href="<?echo $src?>"><span data-gall="portfolio" data-href="<?echo $src?>" class="venobox"></span></a>
        <div class="portfolio_image">
            <img src="<?echo $src?>" alt="<?echo $gallery_name?>" class="gallery_cat_img">
        </div>
    </div>
</div>

<?
            }
        }
?>



<?
    }
}
else{
    //echo "<script>window.open('Products/".$cid."/1/','_SELF');</script>";
}
					
?>