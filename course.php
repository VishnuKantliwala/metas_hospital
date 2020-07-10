<?
$page_id = 27;
$coid = urldecode($_GET['coid']);


include_once("header.php");
$sqlCourse = $cn->selectdb("select * from tbl_course where slug = '".$coid."' ");
if( $cn->numRows($sqlCourse) > 0 )
{
    $rowCourse = $cn->fetchAssoc($sqlCourse);
    extract($rowCourse);
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
            Course - <?echo $course_title ?>
        </h1>
    </div>
    <div id="imgBreadcum2" style="height: 40vh;">
        <img src="page/big_img/<?echo $image?>" height="100%" width="100%" alt="<?echo $course_title?>">
    </div>
</div>




<!-- MAIN PART -->


 <!--================================
        2.START ABOUT US SECTION
    =================================-->
    <section class="about_us reveal fadeIns section-padding">
        <div class="container">
            <div class="about_us_wrapper">
                <div class="col-md-6 col-sm-6 v_middle">
                    <div class="image-container">
                        <div class="image">
                            <img src="course/big_img/<?echo $image_name?>" alt="<?echo $course_title?>">
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 v_middle">
                   <!-- SECTION TITLE -->
                    <div class="section_title" style="padding-bottom:5px;">
                        <div class="title">
                            <h1><span class="title_word_2"><?echo $course_title?></span></h1>
                        </div>
                    </div><!-- /SECTION TITLE ENDS -->

                    <!-- ABOUT US CONTENT-->
                    <div class="about_us_text">
                        <?echo $description ?>

                        
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
