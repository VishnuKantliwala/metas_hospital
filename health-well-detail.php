<?
$page_id = 26;
$hid = urldecode($_GET['hid']);


include_once("header.php");
$sqlHandw = $cn->selectdb("select * from tbl_handw where slug = '".$hid."' ");
if( $cn->numRows($sqlHandw) > 0 )
{
    $rowHandw = $cn->fetchAssoc($sqlHandw);
    extract($rowHandw);
}
else
{
    echo "<script>window.open('./404','_SELF')</script>";
    exit();
}
$sql = $cn->selectdb("select image from tbl_page where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
?>


<div class="hero-image-area" id="imgBreadcum1" style="height: 40vh;">
    <div id="divImg">
        <h1 class="raleway">
            <?echo $handw_title ?>
        </h1>
    </div>
    <div id="imgBreadcum2" style="height: 40vh;">
        <img src="page/big_img/<?echo $image?>" height="100%" width="100%" alt="<?echo $handw_title?>">
    </div>
</div>




<!-- MAIN PART -->

<!--================================
        2.START BLOG SECTION
    =================================-->
<section id="blog" class="section-padding">
    <div class="container">
        <div class="row">

            <!-- left blog posts -->
            <div class="col-md-8 col-sm-8 pull-right">


                <div class="single_blog_contents reveal animated" data-reveal-anim="fadeInUpShort">
                    <div class="single_blog_header">

                        <div class="blog_title_meta" style="padding: 5px 30px">
                            <div class="blog_title">
                                <h4>
                                    <?echo $handw_title?>
                                </h4>
                                <ul class=single></ul>
                            </div>
                        </div>
                    </div>

                    <!-- single blog post -->
                    <div class="single_blog_post">
                        <blockquote>
                            <?echo $description ?>
                        </blockquote>



                    </div>
                </div>
            </div>

            <!-- left sidebar -->
            <div class="col-md-4 col-sm-4 col-md-offset-0">

                <div class="widget reveal animated" data-reveal-anim="fadeInLeft" style="margin-top:0px">
                    <div class="widget_heading">
                        <h4>Health and Wellness</h4>
                    </div>

                    <div class="catagory_list">
                        <ul>
                            <?
                                
                            $sqlServices = $cn->selectdb("SELECT handw_title, slug from tbl_handw  order by handw_title");
                            if( $cn->numRows($sqlServices) > 0 )
                            {
                                while($rowServices = $cn->fetchAssoc($sqlServices))
                                {
                                    extract($rowServices);
                                    $href = "health-and-wellness/".urlencode($slug);
                            ?>
                            <li <?  if($slug == $hid) {?> class="list-active" <?}?> ><a href="<?echo $href?>"><?echo $handw_title ?></a></li>
                            <?
                                }
                            }
                            ?>


                        </ul>
                    </div>
                </div>


            </div>
        </div>
    </div>
</section>
<!--================================
        2.END BLOG SECTION
    =================================-->
<!-- MAIN PART END -->





<?php include 'footer2.php'; ?>