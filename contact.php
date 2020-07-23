<?
$page_id = 5;
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
<?
$sqlContact = $cn->selectdb("SELECT `con_id`, `maptag`, `contact_desc`, `email`, `contact_no`, `opening_hours`, `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords` FROM  `tbl_contact` where con_id=1" );
//	echo $cn->numRows($sql2);
if ($cn->numRows($sqlContact) > 0) 
{
    $rowContact = $cn->fetchAssoc($sqlContact);
    extract($rowContact);

    $contact_no = explode(',',$contact_no);
    if(sizeof($contact_no) > 2)
    {
        $helpline_no = $contact_no[0];
        $landline_no = $contact_no[1];
    }
    else
    {
        $helpline_no = "298-844-0468";
        $landline_no = "298-844-0468";
    }
}
?>



<section class="about_us reveal fadeIns section-padding">
        <div class="container">

        <div class="about_us_detail">
                <div class="row">
                    

                   

                <div class="col-md-4 col-sm-4" style="padding-right:0px;padding-left:0px">
                    <div class="about_us_point backcolor1" style="padding:10px 20px; height:240px;">
                            <h4 class="about_us_point_title"> <span class="icofont icofont-map-pins"></span> Location</h4>

                            <p class="point_in_detail">
                            <?echo strip_tags($contact_desc); ?>
                            </p>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-4" style="padding-right:0px;padding-left:0px">
                    <div class="about_us_point backcolor2" style="padding:10px 20px; height:240px;">
                            <h4 class="about_us_point_title"><span class="icofont icofont-iphone"></span> Phone</h4>

                            <p class="point_in_detail">
                            Landline Number :<a style="color:#fff" href="tel:<?echo $landline_no ?>"><?echo $landline_no ?></a> <br>
                            Helpline Number : <a style="color:#fff" href="tel:<?echo $helpline_no ?>"><?echo $helpline_no ?></a>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4" style="padding-right:0px;padding-left:0px">
                    <div class="about_us_point backcolor3" style="padding:10px 20px; height:240px;">
                        <div class="about_us_point">
                            <h4 class="about_us_point_title"><span class="icofont icofont-envelope"></span> Email</h4>

                            <p class="point_in_detail">
                            <a style="color:#fff" href="mailto:<?echo $email ?>"><?echo $email ?></a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <style>
                .image-container .image::before{
                    background: #fcfcfc00 none repeat scroll 0 0;
                }
               .bg_form{
                   /* border:5px solid #222; */
                   background:#fff;
               }
               @media only screen and (max-width: 600px) {
                    #mapCOL{
                        height:300px !important;
                    }
                }
                .about_us_wrapper{
                    padding: 51px 0px 0px;
                }
               
            </style>
            <div class="about_us_wrapper" style=" background:#fff;">
                <div class="col-md-6 col-sm-6 " id="mapCOL">
                    
                            <?echo $maptag ?>
                       
                </div>
                

                <div class="col-md-6  col-sm-6 v_middle bg_form">
                    <!-- SECTION TITLE -->
                    <div class="section_title contact_title">
                        <div class="title">
                            <h1 style="margin:0">GET <span class="title_word_2">IN TOUCH</span></h1>
                        </div>
                    </div><!-- /SECTION TITLE ENDS -->

                    <form id="contactForm" class="message_form">
                        <input type="text" placeholder="Your Name" name="contact_name" required>
                        <input type="text" placeholder="Email address" name="contact_address" required>
                        <textarea cols="30" rows="2" placeholder="Message" name="contact_message" required></textarea>
                        

                        <div class="col-sm-6">
                            <input type="text" placeholder="Code" name="verif_box" required>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group mb-20">
                            <img style="width:100px;height:50px"
                                src="verificationimage.php?<?php echo rand(0,9999);?>"
                                alt="verification image, type it in the box" width="50px" height="50px"
                                align="absbottom" />  
                            </div>
                        </div>
                        <div class="col-sm-12 mb-10" style="padding: 0;">
                            <div id="result_contactForm" ></div>
                        </div>
                        <button type="submit" class="btn arrow_btn btn_messaging btn_submit_contact"><span class="btn-text" data-hover="SEnd now">SEnd
                                now</span> <span class="icofont icofont-paper-plane btn_icon"></span></button>
                    </form>
                </div>


            </div>

            
        </div>
    </section>



<!-- 
<section class="contact_info_banner">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="contact_info">
                    <ul>
                        <li><span class="icofont icofont-envelope"></span><span><?echo $email ?></span></li>
                        <li><span class="icofont icofont-iphone"></span><span>Landline Number : <?echo $landline_no ?></span>
                        </li>
                        <li><span class="icofont icofont-iphone"></span><span>Helpline Number : <?echo $helpline_no ?></span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>


<section id="map_contact">
    <div class="container">
        <div class="row social_contact">
            <div class="col-md-6 social">
                <div class="social_link">
                    <ul>
                        <?
                            $sql = $cn->selectdb("select * from tbl_socialmedia Order by recordListingID");
                            while($row = $cn->fetchAssoc($sql))
                            {
                                extract($row);
                        ?>
                        <li> <a href="<?echo $link_url?>" target="_BLANK"> <span class="icofont <?echo $icon_name?>"></span> <?echo $social_title ?></a></li>
                        <?
                            }
                        ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-6  col-sm-6 contact_form">
                 
                    <div class="section_title contact_title">
                        <div class="title">
                            <h1 style="margin:0">GET <span class="title_word_2">IN TOUCH</span></h1>
                        </div>
                    </div>

                    <form id="contactForm" class="message_form">
                        <input type="text" placeholder="Your Name" name="contact_name" required>
                        <input type="text" placeholder="Email address" name="contact_address" required>
                        <textarea cols="30" rows="2" placeholder="Message" name="contact_message" required></textarea>
                        

                        <div class="col-sm-6">
                            <input type="text" placeholder="Code" name="verif_box" required>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group mb-20">
                            <img style="width:100px;height:50px"
                                src="verificationimage.php?<?php echo rand(0,9999);?>"
                                alt="verification image, type it in the box" width="50px" height="50px"
                                align="absbottom" />  
                            </div>
                        </div>
                        <div class="col-sm-12 mb-10" style="padding: 0;">
                            <div id="result_contactForm" ></div>
                        </div>
                        <button type="submit" class="btn arrow_btn btn_messaging btn_submit_contact"><span class="btn-text" data-hover="SEnd now">SEnd
                                now</span> <span class="icofont icofont-paper-plane btn_icon"></span></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div id="google_map">
        <?echo $maptag ?>
        

    </div>
</section> -->
<!--================================
        3.END MAP
    =================================-->





<?php 
include 'footer2.php'; 
?>

<script src="js/forms.js"></script>
