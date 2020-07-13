
<?
$page_id = 29;
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


<!-- MAIN PART -->

   <!--================================
        2.START ABOUT US SECTION
    =================================-->
    <section id="about_us" class="section-padding reveal animated" data-reveal-anim="fadeIn">
        <div class="container">
            <div class="about_us_wrapper">
                <div class="col-md-6 col-sm-6 v_middle">
                    <div class="image-container">
                        <div class="image">
                            <img src="page/big_img/<?echo $image?>"  alt="<?echo $page_name?>">
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 v_middle">
                   <!-- SECTION TITLE -->
                    <div class="section_title" style="padding-bottom:0px">
                        <div class="title">
                            <h1><span class="title_word_2"><?echo $page_name ?></span></h1>
                        </div>
                    </div><!-- /SECTION TITLE ENDS -->

                    <!-- ABOUT US CONTENT-->
                    <div class=" single_blog_post  my_desc">
                        <?echo $page_desc ?>

                      
                    </div><!-- /ABOUT US CONTENT ENDS -->
                </div>
            </div>
        </div>
    </section>
    <!--================================
        2.END ABOUT US SECTION
    =================================-->

<!-- MAIN PART END -->
    
    
   


<?php include 'footer2.php'; ?>
