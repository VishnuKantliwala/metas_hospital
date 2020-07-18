<?
$page_id = 13;
$htid = urldecode($_GET['htid']);


include_once("header.php");
$sqlHandw = $cn->selectdb("select * from tbl_htalk where slug = '".$htid."' ");
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
<!--gallery popup-->
<link rel="stylesheet" href="dist/css/lightbox.min.css">
<div class="header-div" style="background:url('page/big_img/<?echo $image?>')">
    <div class="header-div--title">
        <?echo $htalk_title ?>
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
            <div class="col-md-8 col-sm-8 pull-right mobile_col_md_8" style="z-index:1;background: white;">


                <div class="single_blog_contents reveal animated" data-reveal-anim="fadeInUpShort">
                    <div class="single_blog_header">
                        <div class="single_blog_img">
                            <img src="htalk/big_img/<?echo $image_name?>" alt="<?echo $htalk_title?>">
                        </div>
                        <div class="blog_title_meta" style="padding: 5px 30px">
                            <div class="blog_title">
                                <h4>
                                    <?echo $htalk_title?>
                                </h4>
                                <ul class=single></ul>
                            </div>
                        </div>
                    </div>

                    <!-- single blog post -->
                    <div class="single_blog_post my_desc" style="padding:10px">
                        <br />
                        <?echo $description ?>




                    </div>
                </div>
            </div>

            <!-- left sidebar -->
            <div class="col-md-4 col-sm-4 col-md-offset-0">
                <?
                if($multi_images != "")
                {
                ?>
                <div class="widget reveal animated pt-m-10" data-reveal-anim="fadeInRight" style="margin-top:0">
                    <div class="widget_heading">
                        <h4>Gallery</h4>
                    </div>

                    <div class="recent_posts">
                        <ul>
                            <?
                        
                        
                            $imgs=explode(",",$multi_images);
                            for($i=0;$i<count($imgs)-1;$i++)
                            {
                                $src="htalkF/big_img/". $imgs[$i];
                        ?>

                            <li>
                                <div class="single_portfoilo_item">
                                    <a class="example-image-link" data-lightbox="example-set" href="<?echo $src?>"><span
                                            data-gall="portfolio" data-href="<?echo $src?>" class="venobox"></span></a>
                                    <div class="portfolio_image">
                                        <img src="<?echo $src?>" alt="<?echo $htalk_title?>" class="gallery_cat_img">
                                    </div>
                                </div>
                            </li>

                            <?
                            }
                        ?>
                        </ul>
                    </div>
                </div>
                <?
                    $style= "";
                }
                else {
                    $style= "margin-top:0";
                }
                ?>

                <div class="widget reveal animated" data-reveal-anim="fadeInLeft" style="<? echo $style ?>">
                    <div class="widget_heading">
                        <h4>Health talks</h4>
                    </div>
                    <div class="catagory_list">
                        <ul>
                            <?
                                
                            $sqlServices = $cn->selectdb("SELECT htalk_title, slug from tbl_htalk  order by htalk_title");
                            if( $cn->numRows($sqlServices) > 0 )
                            {
                                while($rowServices = $cn->fetchAssoc($sqlServices))
                                {
                                    extract($rowServices);
                                    $href = "health-talk/".urlencode($slug);
                            ?>
                            <li <? if($slug==$htid) {?> class="list-active"
                                <?}?> ><a href="<?echo $href?>">
                                    <?echo $htalk_title ?></a></li>
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