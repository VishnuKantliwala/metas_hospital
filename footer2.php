<footer id="footer_area">
    <div class="section-padding">
        <div class="container">
            <div class="col-md-3 col-xs-12 col-sm-6">
                <div class="footer_logo" style="text-align:center;">
                    <a href="#">
                        <img src="images/logo.png">
                    </a>
                </div>
            
                 <p style="color:#fff;text-align:center;line-height: 20px;font-size: 14px;">Metas Adventist Hospital<br>(Metas’ Unit)<br>Part of Seventh-day Adventist Organization  </p>    
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
            
            <div class="col-md-3 col-xs-12 col-sm-3">
                <div class="footer_column_title">
                    <h5>Stay in touch</h5>
                </div>
                <span class="title_underline"></span>
                <ul class="address">
                    <li>
                        <span class="icofont icofont-social-google-map"></span>
                        <p>#24, Metas Adventist Hospital, Opp. KP Commerce College, Athwalines, Surat – 395001 Gujarat, India</p>
                   </li>
                   <!--span class="title_underline"></span-->
                   <li>
                        <span class="icofont icofont-iphone"></span>
                        <p>96245-55777, 0261-7160-300</p>
                   </li>
                 
                   <li>
                        <span class="icofont icofont-envelope"></span><p>metas1923@gmail.com</p>
                   </li>
                   <li>
                        <span class="icofont icofont-envelope"></span><p>mahs@metasofsda.in</p>
                   </li>
                </ul>
                <div class="footer_social_links">
                    <ul>
                        <li><a href="#"><span class="icofont icofont-social-facebook"></span></a></li>
                        <li><a href="#"><span class="icofont icofont-social-youtube"></span></a></li>
                        <li><a href="#"><span class="icofont icofont-social-twitter"></span></a></li>
                        <li><a href="#"><span class="icofont icofont-social-instagram"></span></a></li>
                    </ul>
                </div>
            </div>
            
            <div class="col-md-4 col-xs-12 col-sm-12 xs-center">
                <div class="footer_column_title">
                    <h5>Book an Appointment</h5>
                </div>
                <span class="title_underline"></span>
              
  
                <div class="row">
                      <div class="col-md-12  col-sm-12 contact_form" style="padding: 18px 35px 25px;border-top: 5px solid #9f7939;">
                          
                          <form action="#" class="message_form">
                              <input type="text" placeholder="Email" style="margin-bottom: 15px;">
                              <input type="text" placeholder="Contact Number" style="margin-bottom: 15px;">
                              <input type="text" placeholder="Address" style="margin-bottom: 15px;">
                        
                              <a href="" class="btn arrow_btn btn_messaging"><span class="btn-text" data-hover="Book Appointment">Book Appointment</span> <span class="icofont icofont-paper-plane btn_icon"></span></a>
                          </form>
                      </div>
                  </div>
  
                
            </div>
        </div>
    </div>
  
  
    <div id="mini_footer">
        <div class="container">
            <div class="copyright_section">
                <p>&copy; Copyrights 2020 by <a href="http://www.icedinfotech.com" target="_blank" style="font-weight:bold;">ICED Infotech</a>. All Rights Reserved.</p>
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

    <?
    $page_arr = array(17, 26, 28, 30, 33, 34, 35);
    if(in_array ($page_id, $page_arr))
    {
    ?>
    <script src="dist/js/lightbox-plus-jquery.min.js"></script>
    <?
    }
    ?>

    <!-- Main js -->
  


<?
if($page_id == 14){
for($i=1 ; $i<=$totRec ;$i++)
{ 
?>
<script>
		        $('#customers-teams<?echo $i; ?>').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            // autoplay: true,
		          dots:false,
                    nav:true,
                    navText: ["<i class='icofont icofont-long-arrow-left' aria-hidden='true'></i>", "<i class='icofont icofont-long-arrow-right' aria-hidden='true'></i>"],
		            autoplayTimeout: 4500,
							  checkVisibility: true,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 3
		              }
		            }
		        });
            </script>

<?
}}
?>






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
<script src="js/main.js"></script>  
       
<script src="newjs.js"></script>
      </body>  
      </html>