<?php 
$page_id = 1;
include 'header.php'; ?>

<style>
@media only screen and (max-width: 600px) {
    #divlogo {
        display: none;
    }
}
</style>
<div class="hero-image-area">


    <div id="divlogo">
        <img src="images/logo.png">
        <h1 class="raleway">METAS ADVENTIST HOSPITAL</h1>
        <hr>
    </div>


    <div class="loader"></div>

    <div class="hero-video-area">
        <div id="divOverlay"></div>
        <video class="bgVideo" id="videoBg" preload="auto" loop autoplay muted webkit-playsinline playsinline>
            <?
            $sqlVideoSlider = $cn->selectdb("select video_file from tbl_video2 where video_id = 1");
            if( $cn->numRows($sqlVideoSlider) > 0 )
            {
                $rowVideoSlider = $cn->fetchAssoc($sqlVideoSlider);
                extract($rowVideoSlider);
                ?>
                <!-- <source src="video.mp4" type="video/mp4"/> -->
                <source src="<?echo $video_file?>" type="video/mp4"/>    
                <?
            }
            else
            {
            ?>
            <source src="video.mp4" type="video/mp4"/>
            <?
            }
            ?>
        </video>
    </div>
    <div class="hero-images-area">
        <div class="hero-images-area-inner"></div>
    </div>
</div>

<marquee width="100%" direction="left" height="30px" style="color:#fff;background-color:#996c2b">
    Metas Adventist Hospital, Surat
</marquee>


<!-- MAIN PART -->
<?
$sql = $cn->selectdb("select slug, page_name, page_desc, image, page_id from tbl_page where page_id =3");
$row = $cn->fetchAssoc($sql);
extract($row);
?>

<section id="about_us" class="section-padding reveal animated" data-reveal-anim="fadeIn">
    <div class="container">
        <div class="about_us_wrapper">
            <div class="col-md-6 col-sm-6 v_middle">
                <div class="image-container">
                    <div class="image">
                        <img src="page/big_img/<?echo $image?>" alt="<?echo $page_name?>">
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 v_middle">
                <!-- SECTION TITLE -->
                <div class="section_title">
                    <div class="title_subtext">
                        <span>
                            <?echo $slug ?></span>
                    </div>
                    <div class="title">
                        <h1>
                            <?echo $page_name ?>
                        </h1>
                    </div>
                </div><!-- /SECTION TITLE ENDS -->

                <!-- ABOUT US CONTENT-->
                <div class="about_us_text">
                    <?echo $page_desc ?>
                    <div class="read_more">
                        <a href="who-we-are">Read More <span class="icofont icofont-long-arrow-right"></span></a>
                    </div>
                </div><!-- /ABOUT US CONTENT ENDS -->
            </div>
        </div>
        <?
      $sqlExtraAbout = $cn->selectdb("select title, small_desc from tbl_addmore where page_id = ".$page_id);
      if( $cn->numRows($sqlExtraAbout) > 0 )
      {
          $icons = array('icofont-eye-alt', 'icofont-bullseye', 'icofont-key');
      
      ?>
        <div class="about_us_detail">
            <div class="row">
                <?
            $i=0;
            while($rowExtraAbout = $cn->fetchAssoc($sqlExtraAbout))
            {
                extract($rowExtraAbout);
            ?>
                <div class="col-md-4 col-sm-4">
                    <div class="about_us_point">
                        <h4 class="about_us_point_title"><span class="icofont <?echo $icons[$i]?>"></span>
                            <?echo $title ?>
                        </h4>

                        <p class="point_in_detail">
                            <?echo strip_tags($small_desc) ?>
                        </p>
                    </div>
                </div>
                <?
                $i++;
            }
            ?>


            </div>
        </div>
        <?
      }
      ?>
    </div>
</section>

<!-- <section id="clients">
  <div class="container">
      <div class="row">
          <div class="col-md-4 col-xs-12 col-sm-6 left_side v_middle client_padding">
              <span class="business_man title_icon icofont icofont-man-in-glasses"></span>
              <h3 class="sucess">Centres of Excellence</h3>
          </div>
      
          <div class="col-md-8 col-xs-12 col-sm-6 right_side v_middle">
              <div class="client_organization">
                  <div class="client_logo">
                      <a href="index.html"><img src="images/bariatric-surgery.png" alt="">
                      <p>Bariatric-Surgery</p></a>
                  </div>
                  <div class="client_logo">
                      <a href="index.html"><img src="images/diabetic.png" alt="">
                      <p>Diabetic</p></a>
                  </div>
                  <div class="client_logo">
                      <a href="index.html"><img src="images/heart.png" alt="">
                      <p>Heart</p></a>
                  </div>
                  <div class="client_logo">
                      <a href="index.html"><img src="images/gastroenterology.png" alt="">
                      <p>Gastroenterology</p></a>
                  </div>
                  <div class="client_logo">
                      <a href="index.html"><img src="images/neurosciences.png" alt="">
                      <p>Neurosciences</p></a>
                  </div>
                  <div class="client_logo">
                      <a href="index.html"><img src="images/orthopaedics.png" alt="">
                      <p>Orthopaedics</p></a>
                  </div>
                  <div class="client_logo">
                      <a href="index.html"><img src="images/spine.png" alt="">
                      <p>Spine</p></a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section> -->

<section id="clients">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-xs-12 col-sm-6 left_side v_middle client_padding">
                <span class="business_man title_icon icofont icofont-man-in-glasses"></span>
                <h3 class="sucess">Centres of Excellence</h3>
            </div>

            <div class="col-md-8 col-xs-12 col-sm-6 right_side v_middle">
                <div class="client_organization">
                    <?
                    $sqlServices = $cn->selectdb("SELECT service_title, slug, image_name from tbl_service order by recordListingID LIMIT 8");
                    if( $cn->numRows($sqlServices) > 0 )
                    {
                        while($rowServices = $cn->fetchAssoc($sqlServices))
                        {
                            extract($rowServices);
                            $href = "centre-of-excellence/".urlencode($slug);
                    ?>
                    <div class="client_logo">
                        <a href="<?echo $href?>">
                            <img 
                                class="home-coe"
                                src="service/big_img/<?echo $image_name?>" 
                                alt="<?echo $service_title ?>"
                            >
                            <p><?echo $service_title ?></p>
                        </a>
                    </div>
                    <?
                        }
                    }
                    ?>

                    
                </div>
            </div>
        </div>
    </div>
</section>

<?
$sqlHandwPage = $cn->selectdb("select slug, page_name, page_desc, image, page_id from tbl_page where page_id =40");
if( $cn->numRows($sqlHandwPage) > 0 )
{

    $rowHandwPage = $cn->fetchAssoc($sqlHandwPage);
    extract($rowHandwPage);
?>
<section id="our_service" class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- SECTION TITLE -->
                <div class="section_title reveal animated" data-reveal-anim="fadeInBottomShort">
                    <div class="title_subtext">
                        <span><?echo $slug ?></span>
                    </div>
                    <div class="title">
                        <h1> <span class="title_word_2"><?echo $page_name ?></span> </h1>
                    </div>
                </div><!-- /SECTION TITLE ENDS -->
            </div>
        </div>
        <div class="row">
            <?
            $sqlHandw = $cn->selectdb("select handw_title, slug, description, image_name from tbl_handw  order by recordListingID ASC LIMIT 6");

            if ($cn->numRows($sqlHandw) > 0) 
            {
                while($rowHandw = $cn->fetchAssoc($sqlHandw))
                {
                    extract($rowHandw);
                    $href = "health-and-wellness/".urlencode($slug);
            
            
            ?>
            <div class="col-md-4 col-sm-6">
                <div class="single_service reveal animated" data-reveal-anim="scaleIn" data-anim-delay="0"
                    data-anim-duration="0.3s">
                    <span class="service_icon">
                        <img src="handw/big_img/<?echo $image_name?>" alt="<?echo $handw_title?>" class="service_img">
                    </span>
                    <div class="service_title ">
                        <a href="<?echo $href?>">
                            <h4 style="line-height: 27px;" class="list-title"><?echo $handw_title ?></h4>
                        </a>
                    </div>
                    <div class="service_description list-desc">
                        <p><?echo strip_tags($description) ?></p>
                    </div>
                    <div class="read_more">
                        <a href="<?echo $href?>">Read More <span class="icofont icofont-long-arrow-right"></span></a>
                    </div>
                </div>
            </div>
            <?
                }
            }
            ?>

            
        </div>
    </div>
</section>
<?
}
?>

<?
$sqlNumbersPage = $cn->selectdb("select slug, page_name, page_desc, image, page_id from tbl_page where page_id =41");
if( $cn->numRows($sqlNumbersPage) > 0 )
{

    $rowNumbersPage = $cn->fetchAssoc($sqlNumbersPage);
    extract($rowNumbersPage);
?>
<section id="counter_up">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6 left_side v_middle section-padding">
                <span class="title_icon icofont icofont-key"></span>
                <h3 class="sucess"><?echo $page_name ?></h3>
                <p><?echo $slug ?></p>
            </div>

            <div class="col-md-8 col-sm-6 right_side v_middle no-padding">
                <?
                $sqlNumbers = $cn->selectdb("select title, small_desc from tbl_addmore where page_id = ".$page_id);
                if( $cn->numRows($sqlNumbers) > 0 )
                {
                    while($rowNumbers = $cn->fetchAssoc($sqlNumbers))
                    {
                        extract($rowNumbers);
                
                ?>
                <div class="col-md-3 col-xs-6 col-sm-6">
                    <div class="single_count">
                        <span class="counts"><?echo trim($title) ?></span>
                        <p style="line-height: 27px;"><?echo strip_tags($small_desc) ?></p>
                    </div>
                </div>
                <?
                    }
                }
                ?>
                
            </div>
        </div>
    </div>
</section>
<?
}
?>

<?
$sqlDoctorsPage = $cn->selectdb("select slug, page_name, page_desc, image, page_id from tbl_page where page_id =42");
if( $cn->numRows($sqlDoctorsPage) > 0 )
{

    $rowDoctorsPage = $cn->fetchAssoc($sqlDoctorsPage);
    extract($rowDoctorsPage);
?>
<section id="testimonial_area" class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- SECTION TITLE -->
                <div class="section_title reveal animated" data-reveal-anim="fadeInBottomShort">
                    <div class="title_subtext">
                        <span><?echo $slug ?></span>
                    </div>
                    <div class="title">
                        <h1>OUR <span class="title_word_2"> <?echo $page_name ?></span></h1>
                    </div>
                </div><!-- /SECTION TITLE ENDS -->
            </div>
        </div>

        <div class="row">
            <div class="testimonial_wrapper">
                <div class="col-md-10 col-sm-8 col-sm-offset-2 col-md-offset-1 text-center">
                    <!-- testimonial slider -->
                    <div class="doctor_slider">
                        <!-- slider 1 -->
                        <?
                        $sqlDoctors = $cn->selectdb("SELECT doctor_name, cat_id, doctor_image from tbl_doctor order by rand() LIMIT 8");
                        if( $cn->numRows($sqlDoctors) > 0 )
                        {
                            while($rowDoctors = $cn->fetchAssoc($sqlDoctors))
                            {
                                extract($rowDoctors);
                                $sqlCatName = $cn->selectdb("select cat_name from tbl_doctor_category where cat_id = ".trim($cat_id, ','));
                                // echo "select cat_name from tbl_doctor_category where cat_id = ".$cat_id;
                                if( $cn->numRows($sqlCatName) > 0 )
                                {
                                    $rowCatName = $cn->fetchAssoc($sqlCatName);
                                    $cat_name = $rowCatName['cat_name'];
                                }
                                else
                                    $cat_name = "";
                            
                        ?>
                        <div class="single_testimonial">
                            <div class="images">
                                <img class="home-doc" src="doctor/big_img/<?echo $doctor_image?>" alt="<?echo $doctor_name ?>"
                                    style="border-bottom: 2px solid #996c2b;border-radius: 25px;">
                            </div>
                            <h4><?echo $doctor_name ?></h4>
                            <span><?echo $cat_name ?></span>
                        </div>
                        <?
                            }
                        }
                        ?>
                        


                    </div>

                    <!-- testimonial slider control -->
                    <div class="clinet_slider_control">
                        <div class="left_arrow">
                            <span class="icofont-long-arrow-left icofont"></span>
                        </div>
                        <div class="right_arrow">
                            <span class="icofont-long-arrow-right icofont"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?
}
?>
<?
$sqlBlogsPage = $cn->selectdb("select slug, page_name, page_desc, image, page_id from tbl_page where page_id =43");
if( $cn->numRows($sqlBlogsPage) > 0 )
{

    $rowBlogsPage = $cn->fetchAssoc($sqlBlogsPage);
    extract($rowBlogsPage);
?>
<section id="team">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- SECTION TITLE -->
                <div class="section_title reveal animated" data-reveal-anim="fadeInBottomShort">
                    <div class="title_subtext">
                        <span><?echo $slug ?></span>
                    </div>
                    <div class="title">
                        <h1> <span class="title_word_2"><?echo $page_name ?></span></h1>
                    </div>
                </div><!-- /SECTION TITLE ENDS -->
            </div>
        </div>
    </div>

    <div class="team_area_wrapper">
        <div class="container">
            <div class="row">
                <?
                $sqlBlogs = $cn->selectdb("select blog_name, slug, description, blog_image, bdate from tbl_blog  order by recordListingID ASC LIMIT  3");

                if ($cn->numRows($sqlBlogs) > 0) 
                {
                    while($rowBlogs = $cn->fetchAssoc($sqlBlogs))
                    {
                        extract($rowBlogs);
                        $href = "blogs/".urlencode($slug);
                        $date = date("M d, Y",strtotime($bdate));
                
                ?>
                <div class="col-md-4 col-sm-4">
                    <div class="single_price_table" style="background-color: #fdf7f7;">
                        <div class="blog_image">
                            <a href="<?echo $href?>" style="text-decoration:none">
                                <img src="blog/big_img/<?echo $blog_image?>" alt="<?echo $blog_name?>" class="workshop_img" style="border: 20px solid #fdf7f7;">
                            </a>
                        </div>
                        <div class="price" style="text-align: left;padding-left: 20px;">
                            <h3> <?echo $blog_name ?></h3>
                            
                        </div>
                        <div class="price_feature">
                            <p class="blog_text list-desc list-desc--workshop "><?echo strip_tags($description) ?></p>
                        </div>
                        <a href="<?echo $href?>" class="btn arrow_btn btn_pricing"><span class="btn-text" data-hover="Read More">Read
                                More</span></a>
                    </div>
                </div>
                <?
                    }
                }
                ?>

                
            </div>
        </div>
    </div>
</section>
<!--================================
  8.END TEAM SECTION
=================================-->
<?
}
?>

<?
$sqlTestimonialPage = $cn->selectdb("select slug, page_name, page_desc, image, page_id from tbl_page where page_id =44");
if( $cn->numRows($sqlTestimonialPage) > 0 )
{

    $rowTestimonialPage = $cn->fetchAssoc($sqlTestimonialPage);
    extract($rowTestimonialPage);
?>
<section id="testimonial_area" class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- SECTION TITLE -->
                <div class="section_title reveal animated" data-reveal-anim="fadeInBottomShort">
                    <div class="title_subtext">
                        <span><?echo $slug ?></span>
                    </div>
                    <div class="title">
                        <h1>What <span class="title_word_2"><?echo $page_name ?></span></h1>
                    </div>
                </div><!-- /SECTION TITLE ENDS -->
            </div>
        </div>

        <div class="row">
            <div class="testimonial_wrapper">
                <div class="col-md-10 col-sm-8 col-sm-offset-2 col-md-offset-1">
                    <!-- testimonial slider -->
                    <div class="testimonial_slider">
                        <?
                            $sqlTestimonials = $cn->selectdb("select image_title, description, image_name from tbl_testimonial  order by recordListingID ASC LIMIT  8");

                            if ($cn->numRows($sqlTestimonials) > 0) 
                            {
                                while($rowTestimonials = $cn->fetchAssoc($sqlTestimonials))
                                {
                                    extract($rowTestimonials);
                        ?>
                        <!-- slider 1 -->
                        <div class="single_testimonial">
                            <div class="images">
                                <img class="home-testimonial" src="testimonial/big_img/<?echo $image_name?>" alt="<?echo $image_title ?>">
                            </div>
                            <div class="content_area">
                                <div class="testimonial">
                                    <p><?echo strip_tags( $description) ?></p>
                                </div>
                                <span class="single_line"></span>
                                <div class="client_name">
                                    <h4><?echo $image_title ?></h4>
                                </div>
                            </div>
                            <div class="shaped_border"></div>
                        </div>
                        <?
                                }
                            }
                        ?>

                        
                    </div>

                    <!-- testimonial slider control -->
                    <div class="clinet_slider_control">
                        <div class="left_arrow">
                            <span class="icofont-long-arrow-left icofont"></span>
                        </div>
                        <div class="right_arrow">
                            <span class="icofont-long-arrow-right icofont"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?
}
?>

<?php include 'footer.php'; ?>