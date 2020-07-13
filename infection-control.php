
<?
$page_id = 20;
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

                <div class="col">
                    
                    <div class="widget reveal animated" data-reveal-anim="fadeInRight">
                        <div class="widget_heading">
                            <h4><?echo $page_name ?></h4>
                        </div>
                        <div class="recent_posts">
                            <div class="row">
                                <div class="col-lg-4">
                                    <img src="page/big_img/<?echo $image?>"  alt="<?echo $page_name?>"> 
                                </div>
                                <div class="col-lg-8">
                                    <ul>
                                        <li><a >
                                                <div class="my_desc single_blog_post v_middle" style="width: 100%;padding:10px">
                                                <?echo $page_desc ?>
                                            </div>
                                        </a></li>
                                    </ul>
                                </div>

                            </div>    
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
    <!--================================
        2.END BLOG SECTION
    =================================-->


<?php include 'footer2.php'; ?>