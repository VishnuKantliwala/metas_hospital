
<?
$page_id = 24;
include_once("header.php");
$sql = $cn->selectdb("select * from tbl_page where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
?> 

<div class="header-div" style="background:url('page/big_img/<?echo $image?>')">
    <div class="header-div--title">
        <?echo $page_name ?>
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
                        <div class="single_blog_post my_desc">
                        <br/>
                        <?echo $page_desc ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



<?php include 'footer2.php'; ?>
