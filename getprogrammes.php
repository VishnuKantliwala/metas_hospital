<?
session_start();
include_once("connect.php");
$cn=new connect(); 
$cn->connectdb();
				
$limit = (intval($_GET['limit']) != 0 ) ? $_GET['limit'] : 1;
$offset = (intval($_GET['offset']) != 0 ) ? $_GET['offset'] : 0;


$sql1 = $cn->selectdb("select programme_title, slug, caption, image_name from tbl_programme  order by recordListingID ASC LIMIT $limit OFFSET $offset");

if ($cn->numRows($sql1) > 0) 
{
    while($row = $cn->fetchAssoc($sql1))
    {
        extract($row);
        $href = "health-awareness-programme/".urlencode($slug);

?>
<!-- single blog item -->
<div class="col-md-4 single_blog_item reveal animated" data-reveal-anim="fadeInUpShort">
    <div class="row " style="background: #eee; padding:10px">
        <!-- left image -->
        <div class="col-md-12 col-xs-12 col-sm-6">
            <div class="blog_image pt-10" style="    margin-bottom: 10px;">
                <img class="health-talk-img bb-3" src="programme/big_img/<?echo $image_name?>" alt="<?echo $programme_title?>" style="   border-radius:  30px 0px ;">
            </div>
            
        </div>

        <!-- right content -->
        <div class="col-md-12 col-xs-12 col-sm-6 blog_post">
            
            <div class="blog_title">
                <a href="<?echo $href?>">
                    <h4 class="list-title list-title--programme-title color-link"><?echo $programme_title ?></h4>
                </a>
            </div>
            

            <p class="blog_text list-desc list-desc--programme" style="border-top: 1px solid #445ba1;margin-top:10px">  
                                  <?echo strip_tags($caption) ?></p>

            <div class="read_more" >
                <a href="<?echo $href?>">Read More <span
                        class="icofont icofont-long-arrow-right"></span></a>
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