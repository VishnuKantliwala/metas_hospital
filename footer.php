<footer id="footer_area">
    <div class="section-padding">
        <div class="container">
            <div class="col-md-3 col-xs-12 col-sm-6">
                <div class="footer_logo" style="text-align:center;">

                    <?	
                        $sqlLogo = $cn->selectdb("SELECT `logo_id`, `image_name` FROM  `tbl_logo` where logo_id=1" );
                        if ($cn->numRows($sqlLogo) > 0) 
                        {
                            $rowLogo = $cn->fetchAssoc($sqlLogo);
                            extract($rowLogo);
                        }
                    ?>
                    <a href="./"><img src="logo/big_img/<?echo $image_name?>" alt="Metas Adventist
                    Hospital" /></a>
                </div>

                <p style="color:#fff;text-align:center;line-height: 20px;font-size: 14px;">Metas Adventist
                    Hospital<br>(Metas’ Unit)<br>Part of Seventh-day Adventist Organization </p>
                <span class="title_underline"></span>
            </div>

            <div class="col-md-2 col-xs-12 col-sm-3">
                <div class="footer_column_title">
                    <h5>Hospital</h5>
                </div>
                <span class="title_underline"></span>
                <ul class="quick_link">
                    <li><a href="#">Surat</a></li>
                    <li><a href="#">Nuzvid</a></li>
                    <li><a href="#">Ranchi</a></li>

                </ul>
            </div>
            <?
            $sqlContact = $cn->selectdb("SELECT `con_id`, `maptag`, `contact_desc`, `email`, `contact_no`, `opening_hours`, `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords` FROM  `tbl_contact` where con_id=1" );
            //	echo $cn->numRows($sql2);
            if ($cn->numRows($sqlContact) > 0) 
            {
                $rowContact = $cn->fetchAssoc($sqlContact);
                extract($rowContact);
                $contact_no = explode(',',$contact_no);
                if(sizeof($contact_no) >= 2)
                {
                    $helpline_no = $contact_no[0];
                    $landline_no = $contact_no[1];
                }
                else
                {
                    $helpline_no = "96245-55777";
                    $landline_no = "0261-7160-300";
                }

                $email = explode(',',$email);
                if(sizeof($contact_no) >= 2)
                {
                    $email1 = $email[0];
                    $email2 = $email[1];
                }
                else
                {
                    $email1 = "metas1923@gmail.com";
                    $email2 = "mahs@metasofsda.in";
                } 
            }
            ?>
            <div class="col-md-3 col-xs-12 col-sm-3">
                <div class="footer_column_title">
                    <h5>Stay in touch</h5>
                </div>
                <span class="title_underline"></span>
                <ul class="address">
                    <li>
                        <span class="icofont icofont-social-google-map"></span>
                        <p><?echo strip_tags($contact_desc) ?></p>
                    </li>
                    <!--span class="title_underline"></span-->
                    <li>
                        <span class="icofont icofont-iphone"></span>
                        <p><?echo $helpline_no?>, <? echo $landline_no ?></p>
                    </li>

                    <li>
                        <span class="icofont icofont-envelope"></span>
                        <p><?echo $email1 ?></p>
                    </li>
                    <li>
                        <span class="icofont icofont-envelope"></span>
                        <p><?echo $email2 ?></p>
                    </li>
                </ul>
                <div class="footer_social_links">
                    <ul>
                        <?
                            $sql = $cn->selectdb("select * from tbl_socialmedia Order by recordListingID");
                            while($row = $cn->fetchAssoc($sql))
                            {
                                extract($row);
                        ?>
                        <li><a href="<?echo $link_url?>" target="_blank"><span class="icofont <?echo $description?> "></span></a></li>
                        <?
                            }
                        ?>
                    </ul>
                </div>
            </div>

            <div class="col-md-4 col-xs-12 col-sm-12 xs-center">
                <div class="footer_column_title">
                    <h5>Book an Appointment</h5>
                </div>
                <span class="title_underline"></span>


                <div class="row">
                    <div class="col-md-12  col-sm-12 contact_form"
                        style="padding: 18px 35px 25px;border-top: 5px solid #9f7939;">
                        
                        <form id="appointmentForm" class="message_form">
                            <input required name="app_name" type="text" placeholder="Name" style="margin-bottom: 15px;">
                            <input required name="app_email" type="email" placeholder="Email" style="margin-bottom: 15px;">
                            <input required name="app_contact" type="text" placeholder="Contact Number" style="margin-bottom: 15px;">
                            
                            <div class="col-sm-12 mb-10" style="padding: 0;">
                                <div id="result_appointmentForm" ></div>
                            </div>
                            <button type="submit" class="btn arrow_btn btn_messaging btn_submit_appointment_form"><span class="btn-text"
                                    data-hover="Book Appointment">Book Appointment</span> <span
                                    class="icofont icofont-paper-plane btn_icon"></span></button>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    </div>


    <div id="mini_footer">
        <div class="container">
            <div class="copyright_section">
                <p>&copy; Copyrights 2020 by <a href="http://www.icedinfotech.com" target="_blank"
                        style="font-weight:bold;">ICED Infotech</a>. All Rights Reserved.</p>
            </div>

            <a href="#">
                <div class="scroll_top">
                    <span class="icofont icofont-long-arrow-up"></span>
                </div>
            </a>
        </div>
    </div>
</footer>
        
         <!-- jquery latest version -->
    <script src="js/jquery-1.12.3.js"></script>
    
    <!-- bootstrap js -->
    <script src="js/bootstrap.min.js"></script>
    
    <!-- jquery easing 1.3 -->
    <script src="js/jquery.easing1.3.js"></script>
    
    <!-- Owl carousel js-->
    <script src="js/owl.carousel.min.js"></script>
    
    <!-- venobox js -->
    <script src="js/venobox.min.js"></script>
    
    <!-- Isotope js-->
    <script src="js/isotope.js"></script>
    
    <!-- Pakcery layout js-->
    <script src="js/packery.js"></script>
    
    <!-- waypoint js -->
    <script src="js/waypoints.min.js"></script>
    
    <!-- Counter up js-->
    <script src="js/jquery.counterup.min.js"></script>
    
    <!-- Lettering js -->
    <script src="js/jquery.lettering.js"></script>
    
    <!-- textillate js -->
    <script src="js/jquery.textillate.js"></script>
    
    <!-- smoothscroll js -->
    <script src="js/jqury.smooth-scroll.min.js"></script>

    <!-- jquery camera slider js -->
    <script src="js/jquery.camera.min.js"></script>

    <!-- Main js -->
    <script src="js/main.js"></script> 

    <!-- Appointment form   -->
<script src="js/footerForm.js"></script>
   
       
        <script src="jsmenu.js"></script>

<script>
/*$('#about').hover(function(){
$('#about').addClass('active');
}, function(){
    $('#about').removeClass('active');
})

$('#about').mouseenter(function() {
    $('#NotOpen').removeClass('opened');
    $('#scope').hide();  
}).mouseleave(function() {      
    if(!$('#scope').hasClass('active')){
        $('#NotOpen').addClass('opened');
        $('#scope').show();
    }
});*/

$(document).ready(function() {
    $(".no-menu").hover(function() {
        setTimeout(function() {
            $(".no-menu").removeClass("opened");
        },500);
    });
});
</script>

      </body>  
      </html>