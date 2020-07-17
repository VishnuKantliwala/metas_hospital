<?
$page_id = 38;
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
 <!--================================
        4.START SERVICE SECTION
    =================================-->
    <section id="our_service" class="section-padding">
        <div class="container">
           
            
            <div class="row" id="results">                
                
            </div>
            <br />
            <div id="loader_image text-center row" style="width:100%; text-align: center;">
                <img id="loader_image" src="./images/loader.gif" style="width:30px;" />
            </div>
        </div>
    </section>
    <!--================================
        4.END SERVICE SECTION
    =================================-->


    
    
    <!--================================
        3.START MAP
    =================================-->
    <!-- <section id="map_contact">
        <div class="container">
            <div class="row social_contact">
                <div class="col-md-6 social">
                    <div class="social_link">
                        <ul>
                            <li><a href="#"><span class="icofont icofont-social-facebook"></span>facebook</a></li>
                            <li><a href="#"><span class="icofont icofont-social-google-plus"></span>google+</a></li>
                            <li><a href="#"><span class="icofont icofont-social-twitter"></span>twitter</a></li>
                            <li><a href="#"><span class="icofont icofont-social-behance"></span>behance</a></li>
                            <li><a href="#"><span class="icofont icofont-social-dribble"></span>dribble</a></li>
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
                                <h1>GET <span class="title_word_2">IN TOUCH</span></h1>
                            </div>
                            <div class="title_subtext">
                                <span>Feel free to contact with us</span>
                            </div>
                        </div>
                        
                        <form action="#" class="message_form">
                            <input type="text" placeholder="Your Name">
                            <input type="text" placeholder="Email address">
                            <textarea name="textarea"  cols="30" rows="3" placeholder="Message"></textarea>
                            <a href="" class="btn arrow_btn btn_messaging"><span class="btn-text" data-hover="SEnd now">SEnd now</span> <span class="icofont icofont-paper-plane btn_icon"></span></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="google_map">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.206012495161!2d72.80662281424803!3d21.18397358783882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e76ce2b893d%3A0x2fff111c9cc03364!2sMetas%20Of%20Seventh%20-%20Day%20Adventists%20Hospital%20(Mission%20hospital)!5e0!3m2!1sen!2sin!4v1588145557606!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

        </div>
    </section> -->
    <!--================================
        3.END MAP
    =================================-->



<!-- MAIN PART END -->
    
    
   


<?php 
include 'footer2.php'; 
?>
<script src="js/scroll.js" id="helper" cat_id="0" file-name="getopenings.php" limit="10" pid="0"></script>
