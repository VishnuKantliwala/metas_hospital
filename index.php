<?php 
$page_id = 1;
include 'header.php'; ?>

<style>
    @media only screen and (max-width: 600px) {
        #divlogo{
            display:none;
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
        <video class="bgVideo" id="videoBg" preload="auto" loop autoplay muted webkit-playsinline playsinline></video>
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
                      <img src="page/big_img/<?echo $image?>"  alt="<?echo $page_name?>">
                  </div>
              </div>
          </div>
          <div class="col-md-6 col-sm-6 v_middle">
             <!-- SECTION TITLE -->
              <div class="section_title">
                  <div class="title_subtext">
                      <span><?echo $slug ?></span>
                  </div>
                  <div class="title">
                      <h1><?echo $page_name ?></h1>
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
                    <h4 class="about_us_point_title"><span class="icofont <?echo $icons[$i]?>"></span> <?echo $title ?></h4>

                    <p class="point_in_detail">  <?echo strip_tags($small_desc) ?></p>
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

<section id="clients">
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
</section>
<section id="our_service" class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
               <!-- SECTION TITLE -->
                <div class="section_title reveal animated" data-reveal-anim="fadeInBottomShort">
                    <div class="title_subtext">
                        <span>services we offer to our patients</span>
                    </div>
                    <div class="title">
                        <h1>Health   <span class="title_word_2">& Wellness</span> </h1>
                    </div>
                </div><!-- /SECTION TITLE ENDS -->
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div class="single_service reveal animated" data-reveal-anim="scaleIn" data-anim-delay="0" data-anim-duration="0.3s">
                    <span class="service_icon">
                        <img src="images/icon/a.png">
                    </span>
                    <div class="service_title">
                        <a href="#"><h4 style="line-height: 27px;">Cancer-Fighting Foods</h4></a>
                    </div>
                    <div class="service_description">
                        <p>METAS Radiology has provided a high quality Radiology service to our community for four...</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="single_service reveal animated" data-reveal-anim="scaleIn" data-anim-delay="0" data-anim-duration="0.3s">
                    <span class="service_icon">
                        <img src="images/icon/c.png">
                    </span>
                    <div class="service_title">
                        <a href="#"><h4 style="line-height: 27px;">Flu Season Information</h4></a>
                    </div>
                    <div class="service_description">
                        <p>METAS Radiology has provided a high quality Radiology service to our community...</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="single_service reveal animated" data-reveal-anim="scaleIn" data-anim-delay="0" data-anim-duration="0.3s">
                    <span class="service_icon">
                        <img src="images/icon/p.png">
                    </span>
                    <div class="service_title">
                        <a href="#"><h4 style="line-height: 27px;">Walnuts and Healthy Aging Study</h4></a>
                    </div>
                    <div class="service_description">
                        <p>The Pharmacy provides a comprehensive range of clinical and community retail services...</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="single_service reveal animated" data-reveal-anim="scaleIn" data-anim-delay="0" data-anim-duration="0.3s">
                    <span class="service_icon">
                        <img src="images/icon/g.png">
                    </span>
                    <div class="service_title">
                        <a href="#"><h4 style="line-height: 27px;">Health benefits of Pomegranate</h4></a>
                    </div>
                    <div class="service_description">
                        <p>At METAS Adventist Hospital, our team of highly skilled surgeons performs a variety...</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="single_service reveal animated" data-reveal-anim="scaleIn" data-anim-delay="0" data-anim-duration="0.3s">
                    <span class="service_icon">
                        <img src="images/icon/m.png">
                    </span>
                    <div class="service_title">
                        <a href="#"><h4 style="line-height: 27px;">Health benefits of Avacado</h4></a>
                    </div>
                    <div class="service_description">
                        <p>Internal medicine is the foundation on which all the medical super specialties are...</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="single_service reveal animated" data-reveal-anim="scaleIn" data-anim-delay="0" data-anim-duration="0.3s">
                    <span class="service_icon">
                        <img src="images/icon/s.png">
                    </span>
                    <div class="service_title">
                        <a href="#"><h4 style="line-height: 27px;">Boosting your Immune</h4></a>
                    </div>
                    <div class="service_description">
                        <p>The breadth of surgical services includes hepatobiliary, transplant, surgical...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
<section id="counter_up">
  <div class="container">
      <div class="row">
          <div class="col-md-4 col-sm-6 left_side v_middle section-padding">
              <span class="title_icon icofont icofont-key"></span>
              <h3 class="sucess">key to success</h3>
              <p>Numbers that tell about us.</p>
          </div>
      
          <div class="col-md-8 col-sm-6 right_side v_middle no-padding">
              <div class="col-md-3 col-xs-6 col-sm-6">
                  <div class="single_count">
                      <span class="counts">100000</span>
                      <p style="line-height: 27px;">Sq. feet Area</p>
                  </div>
              </div>
              <div class="col-md-3 col-xs-6 col-sm-6">
                  <div class="single_count">
                      <span class="counts">800</span>
                      <p style="line-height: 27px;">Worldwide Hospital</p>
                  </div>
              </div>
              <div class="col-md-3 col-xs-6 col-sm-6">
                  <div class="single_count">
                      <span class="counts">202</span>
                      <p style="line-height: 27px;">Countries</p>
                  </div>
              </div>
              <div class="col-md-3 col-xs-6 col-sm-6">
                  <div class="single_count">
                      <span class="counts">150</span>
                      <p style="line-height: 27px;">years of expertise</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>


<section id="testimonial_area" class="section-padding">
  <div class="container">
      <div class="row">
          <div class="col-md-12">
             <!-- SECTION TITLE -->
              <div class="section_title reveal animated" data-reveal-anim="fadeInBottomShort">
                  <div class="title_subtext">
                      <span>meet with our team</span>
                  </div>
                  <div class="title">
                      <h1>OUR <span class="title_word_2"> DEDICATED DOCTORS TEAM</span></h1>
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
                      <div class="single_testimonial">
                          <div class="images">
                              <img src="images/dr/1.jpeg" alt="" style="border-bottom: 2px solid #996c2b;border-radius: 25px;">   
                          </div>
                          <h4>DR.ANURAG BANKA</h4>
                          <span>OPHTHALMOLOGISTS</span>
                      </div>
                      <div class="single_testimonial">
                          <div class="images">
                              <img src="images/dr/2.jpeg" alt="" style="border-bottom: 2px solid #996c2b;border-radius: 25px;">   
                          </div>
                          <h4>DR. AKSHAT KHEMKA</h4>
                          <span>OPHTHALMOLOGISTS</span>
                      </div>
                      <div class="single_testimonial">
                          <div class="images">
                              <img src="images/dr/3.jpeg" alt="" style="border-bottom: 2px solid #996c2b;border-radius: 25px;">   
                          </div>
                          <h4>DR. N.J. SHAH</h4>
                          <span>GYNAECOLOGY</span>
                      </div>
                      <div class="single_testimonial">
                          <div class="images">
                              <img src="images/dr/4.jpeg" alt="" style="border-bottom: 2px solid #996c2b;border-radius: 25px;">   
                          </div>
                          <h4>DR. YUVRAJ SINH</h4>
                          <span>ANAESTHETIST</span>
                      </div>

                     
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

<section id="team">
  <div class="container">
      <div class="row">
          <div class="col-md-12">
             <!-- SECTION TITLE -->
              <div class="section_title reveal animated" data-reveal-anim="fadeInBottomShort">
                  <div class="title_subtext">
                      <span>Latest from blog</span>
                  </div>
                  <div class="title">
                      <h1>Recent Articles <span class="title_word_2">and News</span></h1>
                  </div>
              </div><!-- /SECTION TITLE ENDS -->
          </div>
      </div>
  </div>
      
  <div class="team_area_wrapper">
      <div class="container">
          <div class="row">
             
              <div class="col-md-4 col-sm-4">
                  <div class="single_price_table" style="background-color: #fdf7f7;">
                      <div class="blog_image">
                          <img src="images/blogs/a1.jpg" alt="" style="border: 20px solid #fdf7f7;">
                      </div>
                      <div class="price" style="text-align: left;padding-left: 20px;">
                          <h3>The real heroes</h3>
                      </div>
                      <div class="price_feature">
                          <p align="justify" style="padding: 0 20px;">REAL HEROES AWARD is a social initiative by SMC in collaboration with Youth Nation to honour ordinary Indians for their remarkable contribution to society...</p>
                      </div>
                      <a href="" class="btn arrow_btn btn_pricing"><span class="btn-text" data-hover="Read More">Read More</span></a>
                  </div>
              </div>

              <div class="col-md-4 col-sm-4">
                  <div class="single_price_table" style="background-color: #fdf7f7;">
                      <div class="blog_image">
                          <img src="images/blogs/a4.jpg" alt="" style="border: 20px solid #fdf7f7;">
                      </div>
                      <div class="price" style="text-align: left;padding-left: 20px;">
                          <h3>Metas adventist hospital is now nabh accredited</h3>
                      </div>
                      <div class="price_feature">
                          <p align="justify" style="padding: 0 20px;">“Yes, Metas Adventist Hospital, Surat is now officially an NABH accredited hospital in Surat city”, declares...</p>
                      </div>
                      <a href="" class="btn arrow_btn btn_pricing"><span class="btn-text" data-hover="Read More">Read More</span></a>
                  </div>
              </div>

              <div class="col-md-4 col-sm-4">
                  <div class="single_price_table" style="background-color: #fdf7f7;">
                      <div class="blog_image">
                          <img src="images/blogs/a5.jpg" alt="" style="border: 20px solid #fdf7f7;">
                      </div>
                      <div class="price" style="text-align: left;padding-left: 20px;">
                          <h3>Covid-19 government of india guidelines</h3>
                      </div>
                      <div class="price_feature">
                          <p align="justify" style="padding: 0 20px;">The new decade has shown us how vulnerable we are to diseases and how rapidly a new disease can take root...</p>
                      </div>
                      <a href="" class="btn arrow_btn btn_pricing"><span class="btn-text" data-hover="Read More">Read More</span></a>
                  </div>
              </div>


             
             
          </div>
      </div>
  </div>
</section>
<!--================================
  8.END TEAM SECTION
=================================-->


<section id="testimonial_area" class="section-padding">
  <div class="container">
      <div class="row">
          <div class="col-md-12">
             <!-- SECTION TITLE -->
              <div class="section_title reveal animated" data-reveal-anim="fadeInBottomShort">
                  <div class="title_subtext">
                      <span>some inspiring words from our Patients</span>
                  </div>
                  <div class="title">
                      <h1>What <span class="title_word_2">our Patients Say</span></h1>
                  </div>
              </div><!-- /SECTION TITLE ENDS -->
          </div>
      </div>
      
      <div class="row">
         <div class="testimonial_wrapper">
              <div class="col-md-10 col-sm-8 col-sm-offset-2 col-md-offset-1">
                  <!-- testimonial slider -->
                  <div class="testimonial_slider">
                      <!-- slider 1 -->
                      <div class="single_testimonial">
                          <div class="images">
                              <img src="images/client1.jpg" alt="">
                          </div>
                          <div class="content_area">
                              <div class="testimonial">
                                  <p>Doctors and other staff are very cooperative and help full nature. Equipments and other facilities are also well advanced.</p>
                              </div>
                              <span class="single_line"></span>
                              <div class="client_name">
                                  <h4>Rashmin Jadav</h4>
                              </div>
                          </div>
                          <div class="shaped_border"></div>
                      </div>

                      <!--slider 2-->
                      <div class="single_testimonial">
                          <div class="images">
                              <img src="images/client2.jpg" alt="">
                          </div>
                          <div class="content_area">
                              <div class="testimonial">
                                  <p>one of the best hospital in surat at very low cost and very very carefull nursing hospital.</p>
                              </div>
                              <span class="single_line"></span>
                              <div class="client_name">
                                  <h4>Pathan Aslam</h4>
                              </div>
                          </div>
                          <div class="shaped_border"></div>
                      </div>

                      <!-- slider 3-->
                      <div class="single_testimonial">
                          <div class="images">
                              <img src="images/client1.jpg" alt="">
                          </div>
                          <div class="content_area">
                              <div class="testimonial">
                                  <p>Service good. Also good behavior of the staff. Treated like a family.</p>
                              </div>
                              <span class="single_line"></span>
                              <div class="client_name">
                                  <h4>Mahmadsafi belim</h4>
                              </div>
                          </div>
                          <div class="shaped_border"></div>
                      </div>
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

<?php include 'footer.php'; ?>