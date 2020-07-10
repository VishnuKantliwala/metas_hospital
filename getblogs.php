<?
session_start();
include_once("connect.php");
$cn=new connect(); 
$cn->connectdb();
				
$limit = (intval($_GET['limit']) != 0 ) ? $_GET['limit'] : 1;
$offset = (intval($_GET['offset']) != 0 ) ? $_GET['offset'] : 0;


$sql1 = $cn->selectdb("select blog_name, slug, description, blog_image, bdate from tbl_blog  order by recordListingID ASC LIMIT $limit OFFSET $offset");

if ($cn->numRows($sql1) > 0) 
{
    while($row = $cn->fetchAssoc($sql1))
    {
        extract($row);
        $href = "blogs/".urlencode($slug);
        $date = date("M d, Y",strtotime($bdate));

?>
<!-- single blog item -->
<div class="col-md-6 col-sm-6">
    <div class="single_blog_item">
        <div class="row">
            <div class="col-md-6 col-xs-12 col-sm-12 v_middle">
                <div class="blog_image">
                    <a href="<?echo $href?>"> 
                        <img src="blog/big_img/<?echo $blog_image?>" alt="<?echo $blog_name?>" class="workshop_img">
                    </a>
                </div>
                <span class="blog_meta"><?echo $date ?></span>
            </div>
            <div class="col-md-6 col-xs-12 col-sm-12 v_middle blog_post">
                <div class="blog_title">
                    <a href="<?echo $href?>">
                        <h4 style="line-height: 27px;" class="list-title list-title--workshop"><?echo $blog_name ?></h4>
                    </a>
                </div>
                <p class="blog_text list-desc list-desc--workshop "><?echo strip_tags($description) ?></p>

                <div class="read_more">
                    <a href="<?echo $href?>">Read More <span
                            class="icofont icofont-long-arrow-right"></span></a>
                </div>
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