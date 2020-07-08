<?
$page_id = 14;
include_once("header.php");
$sql = $cn->selectdb("select * from tbl_page where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
?> 

<div class="hero-image-area" id="imgBreadcum1" style="height: 40vh;">
    <div id="divImg">    
        <h1 class="raleway"><?echo $page_name ?></h1>
    </div>           
    <div id="imgBreadcum2" style="height: 40vh;">
        <img src="page/big_img/<?echo $image?>" height="100%" width="100%" alt="img">
    </div>            
</div>
       
<!-- MAIN PART -->
 
    <!--================================
        8.START TEAM SECTION
    =================================-->
    <?
    $sqlDoctorCategory = $cn->selectdb("SELECT * FROM tbl_doctor_category ORDER BY recordListingID");
    if( $cn->numRows($sqlDoctorCategory) > 0 )
    {
        while($rowDoctorCategory = $cn->fetchAssoc($sqlDoctorCategory))
        {
            extract($rowDoctorCategory);
    ?>
    
    <section id="team" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                   <!-- SECTION TITLE -->
                    <div class="section_title reveal animated" data-reveal-anim="fadeInBottomShort">
                        <div class="title">
                            <h1><span class="title_word_2"><?echo $cat_name ?></span> </h1>
                        </div>
                    </div><!-- /SECTION TITLE ENDS -->
                </div>
            </div>
        </div>
            
        <div class="team_area_wrapper">
            <div class="container">
                <div class="row">
                    <div class="team_sliders_wrapper">
                        <div class="col-md-5 col-xs-12 col-sm-push-6 col-md-push-0 col-sm-6 v_middle">
                            <div class="team_member_info_slider">
                               <!-- info slider 1 -->
                                <?
                                $imgs = array();
                                $sqlDoctor = $cn->selectdb("SELECT * FROM tbl_doctor WHERE cat_id LIKE '%".$cat_id.",%' ORDER BY recordListingID");
                                if( $cn->numRows($sqlDoctor) > 0 )
                                {
                                    while($rowDoctor = $cn->fetchAssoc($sqlDoctor))
                                    {
                                        extract($rowDoctor);
                                        array_push($imgs, $doctor_image);
                                ?>
                                
                                <div class="single_team_member">
                                    <div class="team_member">
                                        <h4><?echo $doctor_name ?> </h4>
                                      
                                    </div>

                                    <p class="member_info"><?echo strip_tags($description) ?></p>

                                    <div class="team_member_social">
                                        <ul>
                                            <?
                                            if($doctor_instagram!="")
                                            {
                                            ?>
                                            <li><a href="<?echo $doctor_instagram?>" target="_BLANK"><span class="icofont icofont-social-instagram"></span></a></li>
                                            <?
                                            }
                                            ?>
                                            <?
                                            if($doctor_facebook!="")
                                            {
                                            ?>
                                            <li><a href="<?echo $doctor_facebook?>" target="_BLANK"><span class="icofont icofont-social-facebook"></span></a></li>
                                            <?
                                            }
                                            ?>

                                            <?
                                            if($doctor_twitter!="")
                                            {
                                            ?>
                                            <li><a href="<?echo $doctor_twitter?>" target="_BLANK"><span class="icofont icofont-social-twitter"></span></a></li>
                                            <?
                                            }
                                            ?>
                                        </ul>
                                    </div>
                                </div>
                                <?
                                    }
                                }
                                ?>
                            </div>   

                                
                        </div>

                        <div class="col-md-4 col-xs-12 col-sm-pull-6 col-md-pull-0 col-sm-6 test v_middle">
                            <div class="team_member_image_slider">
                                <?
                                foreach ($imgs as $img ) 
                                {
                                ?>
                                <div class="member_image_wrapper">
                                    <img class="doctor_img" src="doctor/big_img/<?echo $img?>" alt="<?echo $img?>">
                                </div>
                                <?
                                }
                                ?>
                            </div>

                            <!-- custom team slider control -->
                            <div class="team_slider_control">
                                <div class="left_arrow">
                                    <span class="icofont-long-arrow-left icofont"></span>
                                </div>
                                <div class="right_arrow">
                                    <span class="icofont-long-arrow-right icofont"></span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 navigation_slider col-md-6 col-sm-3 col-md-offset-4 v_middle">
                            <div class="team_thumbnail_slider">
                                <?
                                foreach ($imgs as $img ) 
                                {
                                ?>
                                <div class="thumb">
                                    <img src="doctor/<?echo $img?>" alt="<?echo $img?>">
                                </div>
                                <?
                                }
                                ?>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================================
        8.END TEAM SECTION
    =================================-->
    <?
        }
    }
    ?>



 

<!-- MAIN PART END -->
    
    
   


<?php include 'footer2.php'; ?>
