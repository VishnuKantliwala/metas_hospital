<?
$page_id = 30;
$eid = urldecode($_GET['eid']);


include_once("header.php");
$sqlWorkshop = $cn->selectdb("select * from tbl_event where slug = '".$eid."' ");
if( $cn->numRows($sqlWorkshop) > 0 )
{
    $rowWorkshop = $cn->fetchAssoc($sqlWorkshop);
    extract($rowWorkshop);
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
        <?echo $event_title ?>
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
                <div class="col-md-8 col-sm-8">
                    

                    <div class="single_blog_contents reveal animated" data-reveal-anim="fadeInUpShort">
                        <div class="single_blog_header">
                            <div class="single_blog_img">
                                <img src="event/big_img/<?echo $image_name?>" alt="Images">
                            </div>
                            <div class="blog_title_meta" style="padding: 5px 30px">
                                <div class="blog_title">
                                    <h4><?echo $event_title ?></h4>
                                    <ul class=single></ul>
                                </div>
                            </div>
                        </div>
                    
                        <!-- single blog post -->
                        <div class="row">
                            
                        <?
                        
                        if($multi_images != "")
                        {
                            $imgs=explode(",",$multi_images);
                            for($i=0;$i<count($imgs)-1;$i++)
                            {
                                $src="eventF/big_img/". $imgs[$i];
                        ?>
                        
                        <div class="col-md-4 col-sm-6 grid_item branding design">
                            <div class="single_portfoilo_item">
                                <a class="example-image-link" data-lightbox="example-set" href="<?echo $src?>"><span data-gall="portfolio" data-href="<?echo $src?>" class="venobox"></span></a>
                                <div class="portfolio_image">
                                    <img src="<?echo $src?>" alt="<?echo $event_title?>" class="gallery_cat_img">
                                </div>
                            </div>
                        </div>

                        <?
                            }
                        }
                        
                        ?>
                        <?
                        for($i=1 ; $i<=10 ; $i++)
                        /*{
                            $src="images/event/".$i.".jpg";
                        ?>
                            <div class="col-md-4 col-sm-6 grid_item branding design">
                                <div class="single_portfoilo_item">
                                    <a class="example-image-link" data-lightbox="example-set" href="<? echo $src ?>"><span data-gall="portfolio" data-href="<?echo $src?>" class="venobox"></span></a>
                                    <div class="portfolio_image">
                                        <img src="<? echo $src ?>" alt="<?echo $gallery_name?>" class="gallery_cat_img">
                                    </div>
                                </div>
                            </div>
                        <?
                        }*/
                        ?>

                        </div>
                        <div class="single_blog_post">
                            <?echo $description ?>
                        
                        </div>
                    </div>
                </div>

                <!-- left sidebar -->
                <div class="col-md-4 col-sm-4 col-md-offset-0">
                  
                    <div class="widget reveal animated" data-reveal-anim="fadeInRight">
                        <div class="widget_heading">
                            <h4>Latest Events</h4>
                        </div>

                        <div class="recent_posts">
                            <ul>
                                <?
                                // WHERE event_id != ".$event_id." 
                                $sqlEvents = $cn->selectdb("SELECT event_title, image_name, slug, event_date from tbl_event  order by event_date");
                                if( $cn->numRows($sqlEvents) > 0 )
                                {
                                    while($rowEvents = $cn->fetchAssoc($sqlEvents))
                                    {
                                        extract($rowEvents);
                                        $href = "events/".urlencode($slug);
                                        $date = date("M d, Y",strtotime($event_date));
                                ?>
                                <li><a href="<?echo $href?>">
                                    <div class="single_recent_post v_middle">
                                        <p><?echo $event_title ?></p>
                                        <span class="recent_post_meta"><?echo $date ?></span>
                                     </div>
                                </a></li>
                                <?
                                    }
                                }
                                ?>
                                
                            </ul>
                        </div>
                    </div>

                    <!-- <div class="recent_tags reveal animated" data-reveal-anim="fadeInBottomShort">
                        <h4 class="recent_tg_title">Recent Tags</h4>
                        <ul>
                            <li><a href="#">Adventure</a></li>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Technology</a></li>
                            <li><a href="#">Culture</a></li>
                        </ul>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
    <!--================================
        2.END BLOG SECTION
    =================================-->
<!-- MAIN PART END -->
    
    
   


<?php 
// $page_id = 30;
include 'footer2.php'; ?>
