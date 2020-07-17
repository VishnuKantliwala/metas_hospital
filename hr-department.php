<?
$page_id = 36;
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

<!--================================
        2.START BLOG SECTION
    =================================-->
<section id="blog" class="section-padding pt-20">
    <div class="container">
        <div class="row">

            <div class="col">

                <div class="widget reveal animated  mt-0" data-reveal-anim="fadeInRight">
                    <div class="widget_heading">
                        <h4>
                            <?echo $page_name ?>
                        </h4>
                    </div>

                    <div class="recent_posts">
                        <div class="row">
                            
                            <div style="text-align:center;    margin-top: 40px;">
                                <a class="btn__pdfs"  href="apply-now">
                                    <i class="icofont icofont-list"></i> Apply Online
                                </a>
                            </div>
                            <div class="col-lg-12">

                                <ul>
                                    <li>
                                        <a>
                                            <div class="single_blog_post my_desc my_desc__table pl-10">
                                                <?echo $page_desc ?>
                                            </div>
                                        </a>
                                    </li>

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





<?php include 'footer2.php'; ?>