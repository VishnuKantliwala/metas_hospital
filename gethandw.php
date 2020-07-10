<?
session_start();
include_once("connect.php");
$cn=new connect(); 
$cn->connectdb();
				
$limit = (intval($_GET['limit']) != 0 ) ? $_GET['limit'] : 1;
$offset = (intval($_GET['offset']) != 0 ) ? $_GET['offset'] : 0;


$sql1 = $cn->selectdb("select handw_title, slug, description, image_name from tbl_handw  order by recordListingID ASC LIMIT $limit OFFSET $offset");

if ($cn->numRows($sql1) > 0) 
{
    while($row = $cn->fetchAssoc($sql1))
    {
        extract($row);
        $href = "health-and-wellness/".urlencode($slug);

?>
<div class="col-md-4 col-sm-6">
    <div class="single_service reveal animated" data-reveal-anim="scaleIn" data-anim-delay="0"
        data-anim-duration="0.3s">
        <span class="service_icon">
            <img src="handw/big_img/<?echo $image_name?>" alt="<?echo $handw_title?>" class="service_img">
        </span>
        <div class="service_title ">
            <a href="<?echo $href?>">
                <h4 style="line-height: 27px;" class="list-title"><?echo $handw_title ?></h4>
            </a>
        </div>
        <div class="service_description list-desc">
            <p><?echo strip_tags($description) ?></p>
        </div>
        <div class="read_more">
            <a href="<?echo $href?>">Read More <span class="icofont icofont-long-arrow-right"></span></a>
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