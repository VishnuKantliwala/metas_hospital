<?
$page_id = 35;
$bid = urldecode($_GET['pdid']);


include_once("header.php");
$sqlWorkshop = $cn->selectdb("select * from tbl_project where slug = '".$bid."' ");
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
        <?echo $project_name ?>
    </div>
</div>

<style>

.proDesc ul li:before{
content: "\ed88";
    color: #9f7939;
    font-family: 'IcoFont' !important;
    display: inline-block;
    margin-left: 1.4em;
    margin-right: 20px;
}
.proDesc ul li{
content: "\ed88";
   padding:10px 0;
}
</style>

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
                                <img src="project/big_img/<?echo $project_image?>" alt="Images">
                            </div>
                            <div class="blog_title_meta" style="padding: 5px 30px">
                                <div class="blog_title">
                                    <h4><?echo $project_name ?></h4>
                                    <ul class=single></ul>
                                </div>
                            </div>
                        </div>
                        <div class="single_blog_post proDesc" style="padding-top:20px;">
                            <?echo $description ?>
                        </div>
                        <hr>
                        <!-- single blog post -->
                        <div class="row">
                            
                        <?
                        if($multi_images != "")
                        {
                            $imgs=explode(",",$multi_images);
                            for($i=0;$i<count($imgs)-1;$i++)
                            {
                                $src="projectF/big_img/". $imgs[$i];
                        ?>
                        
                        <div class="col-md-4 col-sm-6 grid_item branding design">
                            <div class="single_portfoilo_item">
                                <a class="example-image-link" data-lightbox="example-set" href="<?echo $src?>"><span data-gall="portfolio" data-href="<?echo $src?>" class="venobox"></span></a>
                                <div class="portfolio_image">
                                    <img src="<?echo $src?>" alt="<?echo $project_name?>" class="gallery_cat_img">
                                </div>
                            </div>
                        </div>

                        <?
                            }
                        }
                        ?>
                        </div>
                        <hr>
                        <a href="javascript:void(0);" class="btn arrow_btn btn_messaging"><span class="btn-text" data-hover="Donate">Donate</span> <span class="icofont icofont-paper-plane btn_icon"></span></a>
                        <hr>
                    </div>
                </div>

                <!-- left sidebar -->
                <div class="col-md-4 col-sm-4 col-md-offset-0">
                  
                    <div class="widget reveal animated" data-reveal-anim="fadeInRight">
                        <div class="widget_heading">
                            <h4>Related Projects</h4>
                        </div>

                        <div class="recent_posts">
                            <ul>
                                <?
                                
                                $sqlBlogs = $cn->selectdb("SELECT project_name, project_image, slug from tbl_project WHERE project_id != ".$project_id."  order by project_name LIMIT 7");
                                if( $cn->numRows($sqlBlogs) > 0 )
                                {
                                    while($rowBlogs = $cn->fetchAssoc($sqlBlogs))
                                    {
                                        extract($rowBlogs);
                                        $href = "project-detail/".urlencode($slug);
                                        // $date = date("M d, Y",strtotime($bdate));
                                ?>
                                <li><a href="<?echo $href?>">
                                    <span class="recent_blog_img v_middle">
                                        <img 
                                            src="project/<?echo $project_image?>" 
                                            alt="<?echo $project_name ?>"
                                            style=""
                                            class="blog_img--suggetions"
                                            >
                                    </span>

                                     <div class="single_recent_post v_middle">
                                        <p><?echo $project_name ?></p>
                                        <!-- <span class="recent_post_meta"><?echo $date ?></span> -->
                                     </div>
                                </a></li>
                                <?
                                    }
                                }
                                ?>
                                
                            </ul>
                        </div>
                    </div>




                    <div class="widget reveal animated" data-reveal-anim="fadeInRight">
                        <div class="widget_heading">
                            <h4>Inquiry Now</h4>
                        </div>

                        <div class="recent_posts">
                            


                        <form id="contactForm" class="message_form">
                        <input type="text" placeholder="Your Name" name="contact_name" required>
                        <input type="text" placeholder="Email address" name="contact_address" required>
                        <textarea cols="30" rows="2" placeholder="Message" name="contact_message" required></textarea>
                        

                        <div class="col-sm-6">
                            <input type="text" placeholder="Code" name="verif_box" required>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group mb-20">
                            <img style="width:100px;height:50px"
                                src="verificationimage.php?1092"
                                alt="verification image, type it in the box" width="50px" height="50px"
                                align="absbottom" />  
                            </div>
                        </div>
                        <div class="col-sm-12 mb-10" style="padding: 0;">
                            <div id="result_contactForm" ></div>
                        </div>
                        <button type="submit" class="btn arrow_btn btn_messaging btn_submit_contact"><span class="btn-text" data-hover="SEnd now">SEnd
                                now</span> <span class="icofont icofont-paper-plane btn_icon"></span></button>
                    </form>


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
