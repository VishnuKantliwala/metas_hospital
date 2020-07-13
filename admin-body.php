<?
$page_id = 9;
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

<section id="testimonial_area" class="section-padding">
    <div class="container">


        <?
        $sqlAB1 = $cn->selectdb("SELECT team_title, image_name, team_speciality FROM tbl_team ORDER BY recordListingID LIMIT 1");
        if( $cn->numRows($sqlAB1) > 0 )
        {
            while($rowAB1 = $cn->fetchAssoc($sqlAB1))
            {
                extract($rowAB1);
        ?>
        <div class="row">
            <div class="testimonial_wrapper">
                <div class="col-md-10 col-sm-8 col-sm-offset-2 col-md-offset-1 text-center">
                    <!-- testimonial slider -->
                    <div class="row">
                        <!-- slider 1 -->
                        <div class="col-sm-12 col-md-6 col-lg-4 col-lg-offset-4" style="padding-bottom: 45px;">
                            <div class="images" style="padding-bottom: 15px;">
                                <img class="team_img" src="team/big_img/<?echo $image_name?>" alt="<?echo $team_title ?>"
                                    >
                            </div>
                            <h4><?echo $team_title ?></h4>
                            <span><?echo $team_speciality ?></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <?        
            }
        }
        ?>

        <div class="row">
            <div class="testimonial_wrapper">
                <div class="col-md-10 col-sm-8 col-sm-offset-2 col-md-offset-1 text-center">
                    <!-- testimonial slider -->
                    <div class="row">
                        <!-- slider 1 -->
                        <?
                        $sqlAB1 = $cn->selectdb("SELECT team_title, image_name, team_speciality FROM tbl_team ORDER BY recordListingID LIMIT 100 OFFSET 1");
                        if( $cn->numRows($sqlAB1) > 0 )
                        {
                            while($rowAB1 = $cn->fetchAssoc($sqlAB1))
                            {
                                extract($rowAB1);
                        ?>
                        <div class="col-sm-12 col-md-6 col-lg-4 " style="padding-bottom: 45px;">
                            <div class="images" style="padding-bottom: 15px;">
                                <img class="team_img" src="team/big_img/<?echo $image_name?>" alt="<?echo $team_title ?>"
                                    >
                            </div>
                            <h4><?echo $team_title ?></h4>
                            <span><?echo $team_speciality ?></span>
                        </div>
                        <?
                            }
                        }
                        ?>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- MAIN PART END -->





<?php include 'footer2.php'; ?>