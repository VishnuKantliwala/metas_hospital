
<?
$page_id = 34;
include_once("header.php");
$sql = $cn->selectdb("select extra_icon from tbl_addmore where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
?> 
<?
$sql = $cn->selectdb("select * from tbl_page where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
?>
 
<!--gallery popup-->
<link rel="stylesheet" href="dist/css/lightbox.min.css">

<div class="header-div" style="background:url('icon/big_img/<?echo $extra_icon?>')">
    <div class="header-div--title">
        <?echo $page_name ?>
    </div>
</div>




<!--================================
        2.START BLOG SECTION
    =================================-->
    <section id="blog" class="section-padding pt-20">
        <div class="container">
            <div class="row">

                <!-- left blog posts -->
                <div class="col-md-12 col-sm-12 " style="width:100%">
                    <?
                    if($multi_images != "")
                    {
                        $imgs=explode(",",$multi_images);
                        for($i=0;$i<count($imgs)-1;$i++)
                        {
                            $src="pageF/big_img/". $imgs[$i];
                    ?>
                    
                    <div class="col-md-4 col-sm-6 grid_item branding design">
                        <div class="single_portfoilo_item">
                            <a class="example-image-link" data-lightbox="example-set" href="<?echo $src?>"><span data-gall="portfolio" data-href="<?echo $src?>" class="venobox"></span></a>
                            <div class="portfolio_image">
                                <img src="<?echo $src?>" alt="<?echo $gallery_name?>" class="gallery_cat_img">
                            </div>
                        </div>
                    </div>

                    <?
                        }
                    }
                    ?>
                </div>
                <div class="col-md-12 col-sm-12 pull-right" style="width:100%">
                    
                    <div class="single_blog_contents reveal animated" data-reveal-anim="fadeInUpShort">
                        <div class="single_blog_header">
                            <!-- <div class="single_blog_img">
                                <img src="page/big_img/<?echo $image?>"  alt="<?echo $page_name?>">
                            </div> -->
                            <div class="blog_title_meta" style="padding: 0px 30px;">
                                <div class="blog_title">
                                    <h4><?echo $page_name ?></h4>
                                    <ul class=single></ul>
                                </div>
                            </div>
                        </div>

                        <div class="single_blog_post ">
                            
                        </div>


                    
                        <!-- single blog post -->
                        <div class="single_blog_post my_desc my_desc__table">
                        <?echo $page_desc ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================================
        2.END BLOG SECTION
    =================================-->



<?php include 'footer2.php'; ?>
