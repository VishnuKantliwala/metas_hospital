<?
$page_id = 35;
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
$sqlGalleryCat = $cn->selectdb("select cat_name, cat_id from tbl_project_category where slug like '%".$gcid."%'" );
if( $cn->numRows($sqlGalleryCat) > 0 )
{
    $rowGalleryCat = $cn->fetchAssoc($sqlGalleryCat);
    extract($rowGalleryCat);
    // echo $cat_id;
}
else
{
    $cat_id = 0;
    $cat_name = "Project";
}
?>


<div class="header-div" style="background:url('page/big_img/<?echo $image?>')">
    <div class="header-div--title">
        <?echo $cat_name ?>
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
<script src="js/scroll.js" id="helper" cat_id="<?echo $cat_id?>" file-name="getprojectcategory.php" limit="20"
    pid="0"  ></script>
