<?
$page_id = 6;
if(!isset($_GET['gcid']))
{
    $gcid = 0;
}
else
{
    $gcid = urldecode($_GET['gcid']);
}
// echo $gcid;
include_once("header.php");
$sql = $cn->selectdb("select * from tbl_page where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
?>

<?
$sqlGalleryCat = $cn->selectdb("select cat_name, cat_id from tbl_gallery_category where slug like '%".$gcid."%'" );
if( $cn->numRows($sqlGalleryCat) > 0 )
{
    $rowGalleryCat = $cn->fetchAssoc($sqlGalleryCat);
    extract($rowGalleryCat);
    // echo $cat_id;
}
else
{
    $cat_id = 0;
    $cat_name = "Gallery";
}
?>

<div class="hero-image-area" id="imgBreadcum1" style="height: 40vh;">
    <div id="divImg">
        <h1 class="raleway"><?echo $cat_name ?></h1>
    </div>
    <div id="imgBreadcum2" style="height: 40vh;">
        <img src="page/big_img/<?echo $image?>"  alt="<?echo $page_name?>">
    </div>
</div>




<!-- MAIN PART -->

<section id="portfolio" class="section-padding">
    <div class="container">
        <div class="row reveal animated" data-reveal-anim="fadeInUpShort">
            
            <div class="portfolio_items clearfix" id="results">
                <!-- portfolio item1 -->
                
            </div>
            <div id="loader_image text-center row" style="width:100%; text-align: center;">
                <img id="loader_image" src="./images/loader.gif" style="width:30px;" />
            </div>
        </div>
    </div>
</section>


<!-- MAIN PART END -->





<?php include 'footer2.php'; ?>
<script src="js/scroll.js" id="helper" cat_id="<?echo $cat_id?>" file-name="getgallerycategory.php" limit="20"
    pid="0"  ></script>
