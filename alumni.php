<?
$page_id = 54;
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

<section id="testimonial_area" class="section-padding pt-20">
    <div class="container">


        <?
        $sqlAB1 = $cn->selectdb("SELECT alumni_id FROM tbl_alumni WHERE `status`=1 ORDER BY recordListingID LIMIT 1");
        if( $cn->numRows($sqlAB1) > 0 )
        {
            
        ?>
        <div class="row">
            <div class="testimonial_wrapper">
                <div class="col-md-10 col-sm-8 col-sm-offset-2 col-md-offset-1 text-center">
                    <!-- testimonial slider -->
                    <div style="text-align:center;    margin-top: 20px;margin-bottom: 36px">
                        <a class="btn__pdfs"  href="alumni-registration">
                            <i class="icofont icofont-list"></i> Registration
                        </a>
                    </div>
                    <hr/>
                    <div class="row" id="results">
                        <!-- slider 1 -->
                        <!-- <div class="col-sm-12 col-md-6 col-lg-4 col-lg-offset-4" style="padding-bottom: 45px;">
                            <div class="images" style="padding-bottom: 15px;">
                                <img class="team_img" src="team/big_img/<?echo $image_name?>" alt="<?echo $team_title ?>"
                                    >
                            </div>
                            <h4><?echo $team_title ?></h4>
                            <span><?echo $team_speciality ?></span>
                        </div> -->

                    </div>
                </div>
            </div>
        </div>
        <?        
        }
        else
        {
        ?>
            <div class="row text-center">
                <h2>No alumni found.</h2>
            </div>
        <?
        }
        
        ?>

        
    </div>
</section>
<!-- MAIN PART END -->





<?php include 'footer2.php'; ?>
<script src="js/scroll.js" id="helper" cat_id="0" file-name="getalumni.php" limit="20"
    pid="0"  ></script>