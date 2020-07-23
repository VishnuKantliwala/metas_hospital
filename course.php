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


<div class="header-div" style="background:url('page/big_img/<?echo $image?>')">
    <div class="header-div--title">
        Course - <?echo $course_title ?>
    </div>
</div>




<!-- MAIN PART -->


 <!--================================
        2.START ABOUT US SECTION
    =================================-->
    <section class="about_us reveal fadeIns section-padding">
        <div class="container">
            <div class="about_us_wrapper">
                <div class="col-md-12 col-sm-12 ">
                    <div class="section_title" style="padding-bottom:5px;">
                        <div class="title">
                            <h1><span class="title_word_2"><?echo $course_title?></span></h1>
                        </div>
                    </div><!-- /SECTION TITLE ENDS -->
                </div>
                <div class="col-md-3 col-sm-6 ">
                    <div class="">
                        <div class="image">
                            <img style="width:100%" src="course/big_img/<?echo $image_name?>" alt="<?echo $course_title?>">
                        </div>
                    </div>
                </div>
                <div class="col-md-9 col-sm-6 col-xs-12 v_middle" style="overflow-x:scroll">
                   <!-- SECTION TITLE -->
                    

                    <!-- ABOUT US CONTENT-->
                    <div class="single_blog_post  my_desc">
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
