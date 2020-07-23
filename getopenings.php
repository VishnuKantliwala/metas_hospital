<?
session_start();
include_once("connect.php");
$cn=new connect(); 
$cn->connectdb();
				
$limit = (intval($_GET['limit']) != 0 ) ? $_GET['limit'] : 1;
$offset = (intval($_GET['offset']) != 0 ) ? $_GET['offset'] : 0;


$sql1 = $cn->selectdb("select openings_title, slug, description, image_name, openings_date from tbl_openings  order by openings_date DESC LIMIT $limit OFFSET $offset");

if ($cn->numRows($sql1) > 0) 
{
    while($row = $cn->fetchAssoc($sql1))
    {
        extract($row);
        $href = "current-openings/".urlencode($slug);
        $date = date("M d, Y",strtotime($openings_date));

?>

<div class="col-md-12 col-sm-12">
    <div class="single_service reveal animated" data-reveal-anim="scaleIn" data-anim-delay="0"
        data-anim-duration="0.3s">
        <div class="service_title">
            <a href="<?echo $href?>">
                <h4><?echo $openings_title ?></h4>
            </a>
        </div>
        <div class="service_description list-desc myDESC">
            <p><?echo strip_tags($description);?>...</p>
            
        </div>
        <span class="recent_post_meta color2"><strong>Posting date:</strong> <?echo $date ?></span>
        <div class="read_more my_read_more pl-0">
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

