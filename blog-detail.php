<?
$page_id = 28;
$bid = urldecode($_GET['bid']);


include_once("header.php");
$sqlWorkshop = $cn->selectdb("select * from tbl_blog where slug = '".$bid."' ");
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
<div class="hero-image-area" id="imgBreadcum1" style="height: 40vh;">
    <div id="divImg">
        <h1 class="raleway">
            <?echo $blog_name ?>
        </h1>
    </div>
    <div id="imgBreadcum2" style="height: 40vh;">
        <img src="page/big_img/<?echo $image?>" height="100%" width="100%" alt="<?echo $blog_name?>">
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
                                <img src="blog/big_img/<?echo $blog_image?>" alt="Images">
                            </div>
                            <div class="blog_title_meta" style="padding: 5px 30px">
                                <div class="blog_title">
                                    <h4><?echo $blog_name ?></h4>
                                    <ul class=single></ul>
                                </div>
                            </div>
                        </div>
                    
                        <!-- single blog post -->
                        <div class="single_blog_post">
                            <?echo $description ?>
                        

                            <div class="tag_share">
                                <div class="tags">
                                    <ul>
                                        <li>TAGS</li>
                                        <?
                                        $tags = explode(',',$blog_video);
                                        foreach($tags as $tag)
                                        {
                                        ?>
                                        <li><a href="javascript:void(0)"><?echo trim($tag) ?></a></li>
                                        <?
                                        }
                                        ?>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- left sidebar -->
                <div class="col-md-4 col-sm-4 col-md-offset-0">
                  
                    <div class="widget reveal animated" data-reveal-anim="fadeInRight">
                        <div class="widget_heading">
                            <h4>Latest News</h4>
                        </div>

                        <div class="recent_posts">
                            <ul>
                                <?
                                
                                $sqlBlogs = $cn->selectdb("SELECT blog_name, blog_image, slug, bdate from tbl_blog WHERE blog_id != ".$blog_id."  order by bdate");
                                if( $cn->numRows($sqlBlogs) > 0 )
                                {
                                    while($rowBlogs = $cn->fetchAssoc($sqlBlogs))
                                    {
                                        extract($rowBlogs);
                                        $href = "blogs/".urlencode($slug);
                                        $date = date("M d, Y",strtotime($bdate));
                                ?>
                                <li><a href="<?echo $href?>">
                                    <span class="recent_blog_img v_middle">
                                        <img 
                                            src="blog/<?echo $blog_image?>" 
                                            alt="<?echo $blog_name ?>"
                                            style=""
                                            class="blog_img--suggetions"
                                            >
                                    </span>

                                     <div class="single_recent_post v_middle">
                                        <p><?echo $blog_name ?></p>
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
    
    
   


<?php include 'footer2.php'; ?>
