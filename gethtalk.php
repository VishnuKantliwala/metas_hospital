<?
session_start();
include_once("connect.php");
$cn=new connect(); 
$cn->connectdb();
				
$limit = (intval($_GET['limit']) != 0 ) ? $_GET['limit'] : 1;
$offset = (intval($_GET['offset']) != 0 ) ? $_GET['offset'] : 0;


$sql1 = $cn->selectdb("select htalk_title, slug, description, image_name from tbl_htalk  order by recordListingID ASC LIMIT $limit OFFSET $offset");

if ($cn->numRows($sql1) > 0) 
{
    while($row = $cn->fetchAssoc($sql1))
    {
        extract($row);
        $href = "health-talk/".urlencode($slug);

?>
<!-- single blog item -->
<div class="single_blog_item reveal animated" data-reveal-anim="fadeInUpShort">
    <div class="row " style="background: #eee; padding:10px">
        <!-- left image -->
        <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="blog_image pt-10" style="    margin-top: 14px;">
                <img class="health-talk-img" src="htalk/big_img/<?echo $image_name?>" alt="<?echo $htalk_title?>" style="   border-radius:  30px 0px ;">
            </div>
            
        </div>

        <!-- right content -->
        <div class="col-md-9 col-xs-12 col-sm-6 blog_post">
            
            <div class="blog_title">
                <a href="<?echo $href?>">
                    <h4><?echo $htalk_title ?></h4>
                </a>
            </div>

            <p class="blog_text list-desc list-desc--health-talk">  
                                  <?echo strip_tags($description) ?></p>

            <div class="read_more">
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