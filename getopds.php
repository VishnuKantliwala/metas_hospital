<?
session_start();
include_once("connect.php");
$cn=new connect(); 
$cn->connectdb();
				

$cat_id = $_GET['cat_id'];
// echo $cat_id;

$sql1 = $cn->selectdb("SELECT opd_name, doctor_name, day1, time1, day2, time2, concat(cat_id,',') as cat_id FROM tbl_opd WHERE cat_id  like '%".$cat_id.",%' ORDER BY recordListingID ASC ");
// echo "opd_name, doctor_name, day1, time1, day2, time2 FROM tbl_opd WHERE cat_id like '%".$cat_id.",%' ORDER BY recordListingID ASC ";

if ($cn->numRows($sql1) > 0) 
{
    while($row = $cn->fetchAssoc($sql1))
    {
        extract($row);

?>

<!-- single blog item -->
<div class="col">
    <div class="single_blog_contents reveal animated" data-reveal-anim="fadeInUpShort">
        <div class="single_blog_post">
            <blockquote>
                <ul class="text-center">
                    <li><strong>OPD :</strong>
                        <?echo $opd_name ?>
                    </li>
                    <li><strong>DOCTOR’S NAME :</strong>
                        <?echo $doctor_name ?>
                    </li>
                    <li><strong>DAYS :</strong>
                        <?echo $day1 ?> <strong>TIME :</strong>
                        <?echo $time1 ?>
                    </li>
                    <?
                                                    if($day2!="")
                                                    {
                                                    ?>
                    <li><strong>DAYS :</strong>
                        <?echo $day2 ?> <strong>TIME :</strong>
                        <?echo $time2 ?>
                    </li>
                    <?
                                                    }
                                                    ?>
                </ul>
            </blockquote>
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