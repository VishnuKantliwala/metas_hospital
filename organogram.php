<?
$page_id = 10;
include_once('header.php');
$sql = $cn->selectdb("select extra_icon from tbl_addmore where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
?> 
<?
$sql = $cn->selectdb("select * from tbl_page where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
?>

<div class="hero-image-area" id="imgBreadcum1" style="height: 40vh;">
    <div id="divImg">
        <h1 class="raleway">
            <?echo $page_name ?>
        </h1>
    </div>
    <div id="imgBreadcum2" style="height: 40vh;">
        <img src="icon/big_img/<?echo $extra_icon?>" alt="<?echo $page_name?>">
    </div>
</div>

<!-- MAIN PART -->

<section id="testimonial_area" class="section-padding">
    <div class="container">


        
        <div class="row">
            <div class="testimonial_wrapper">
                <div class="col-md-12 col-sm-12 ">
                    <!-- testimonial slider -->
                    <div class="row">
                        <!-- slider 1 -->
                        <div class="col-sm-12" style="padding-bottom: 45px;">
                            <a download href="page/big_img/<?echo $image?>"><img src="page/big_img/<?echo $image?>"/></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        
    </div>
</section>
<!-- MAIN PART END -->





<?php include 'footer2.php'; ?>