
<?
$page_id = 23;
include_once("header.php");
$sql = $cn->selectdb("select * from tbl_page where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
?> 



<div class="hero-image-area" id="imgBreadcum1" style="height: 40vh;">
    <div id="divImg">    
        <h1 class="raleway"><?echo $page_name ?></h1>
    </div>           
    <div id="imgBreadcum2" style="height: 40vh;">
        <img src="page/big_img/<?echo $image?>" height="100%" width="100%" alt="<?echo $page_name?>">
    </div>            
</div>
       



<!-- MAIN PART -->


<section id="blog" class="section-padding">
        <div class="container">
            <div class="row">

                <!-- left blog posts -->
                <div class="col-md-12 col-sm-12 pull-right">
                    
                    <div class="single_blog_contents reveal animated" data-reveal-anim="fadeInUpShort">
                        <div class="single_blog_header">
                            <div class="blog_title_meta" style="padding: 0px 30px;">
                                <div class="blog_title">
                                    <h4><?echo $page_name ?></h4>
                                    <ul class=single></ul>
                                </div>
                            </div>
                        </div>
                    
                        <!-- single blog post -->
                        <div class="single_blog_post my-desc">
                        <br/>
                        <?echo $page_desc ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



<?php include 'footer2.php'; ?>
