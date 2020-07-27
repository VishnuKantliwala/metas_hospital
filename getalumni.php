<?
session_start();
include_once("connect.php");
$cn=new connect(); 
$cn->connectdb();
				
$limit = (intval($_GET['limit']) != 0 ) ? $_GET['limit'] : 1;
$offset = (intval($_GET['offset']) != 0 ) ? $_GET['offset'] : 0;


$sql1 = $cn->selectdb("SELECT slug, alumni_fname, alumni_lname, alumni_image FROM tbl_alumni WHERE `status`=1  order by recordListingID ASC LIMIT $limit OFFSET $offset");

if ($cn->numRows($sql1) > 0) 
{
    while($row = $cn->fetchAssoc($sql1))
    {
        extract($row);
        $href = "alumni-list/".urlencode($slug);

?>
<!-- slider 1 -->
<div class="col-sm-12 col-md-3 col-lg-3 " style="padding-bottom: 20px;">
    <a href="<?echo $href?>"> 
    <div class="images" style="padding-bottom: 15px;">
        <img class="alumni_img" src="alumni/big_img/<?echo $alumni_image?>" alt="<?echo $alumni_fname ?>"
            >
    </div>
    <h4 style="color-link"><?echo $alumni_fname . " ". $alumni_lname ?></h4>
    </a>
</div>




<?
        }
    }
    else{
        //echo "<script>window.open('Products/".$cid."/1/','_SELF');</script>";
    }
					
?>