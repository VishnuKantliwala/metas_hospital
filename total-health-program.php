
<?
$page_id = 18;
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



<div class="header-div" style="background:url('icon/big_img/<?echo $extra_icon?>')">
    <div class="header-div--title">
        <?echo $page_name ?>
    </div>
</div>
       





<!--================================
        2.START BLOG SECTION
    =================================-->
    <section id="blog" class="section-padding">
        <div class="container">
            <div class="row">

                <!-- left blog posts -->
                <div class="col-md-12 col-sm-12 pull-right">
                    
                    <div class="single_blog_contents reveal animated" data-reveal-anim="fadeInUpShort">
                        <div class="single_blog_header">
                            <div class="single_blog_img">
                                <img src="page/big_img/<?echo $image?>"  alt="<?echo $page_name?>">
                            </div>
                            <div class="blog_title_meta" style="padding: 0px 30px;">
                                <div class="blog_title">
                                    <h4><?echo $page_name ?></h4>
                                    <ul class=single></ul>
                                </div>
                            </div>
                        </div>
                    
                        <!-- single blog post -->
                        <div class="single_blog_post">
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
