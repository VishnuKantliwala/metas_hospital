<?
$page_id = 14;
include_once("header.php");
$page = $_GET['page'];
// $page = trim($page, '/');

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



<?

$sqlDoctorCategory = $cn->selectdb("SELECT * FROM tbl_doctor_category ORDER BY recordListingID");
$totRec=$cn->numRows($sqlDoctorCategory);
$i=0;
if( $cn->numRows($sqlDoctorCategory) > 0 )
{
    while($rowDoctorCategory = $cn->fetchAssoc($sqlDoctorCategory))
    {
        $i++;
        extract($rowDoctorCategory);
?>



<style>
    
.teams .shadow-effect {
		    background: #fff;
		    padding: 20px;
		    border-radius: 20px;
		    text-align: center;
	border:1px solid #ECECEC;
		    box-shadow: 0 19px 38px rgba(0,0,0,0.10), 0 15px 12px rgba(0,0,0,0.02);
		}
		
		#customers-teams<?echo $i; ?> .item {
			 /* height:470px !important; */
		    text-align: center;
		    padding:0;
				margin-bottom:40px;
		    opacity: .2;
		    -webkit-transform: scale3d(0.8, 0.8, 1);
		    transform: scale3d(0.8, 0.8, 1);
		    -webkit-transition: all 0.3s ease-in-out;
		    -moz-transition: all 0.3s ease-in-out;
		    transition: all 0.3s ease-in-out;
		}
#customers-teams<?echo $i; ?> .item p{
	font-size:12px;
}
#customers-teams<?echo $i; ?> .item h2{
	font-size:17px !important;
	font-weight:600 !important;
    color:#445ba1;
}
#customers-teams<?echo $i; ?> .item .title{
	font-size:14px;
    text-align: center;
    padding-top:15px
}
#pastexp{
	margin-top:20px;
}
#customers-teams<?echo $i; ?> .item h5{
	font-size:15px !important;
	font-weight:700 !important;
}
		#customers-teams<?echo $i; ?> .owl-item.active.center .item {
		    opacity: 1;
		    -webkit-transform: scale3d(1.0, 1.0, 1);
		    transform: scale3d(1.0, 1.0, 1);
		}
		.teams .owl-carousel .owl-item .img-circle {
		    transform-style: preserve-3d;
		    max-width: 170px;
    		margin: 0 auto 17px;
			  transition: transform .5s;
		}
.teams .owl-carousel .owl-item .img-circle:hover {
		    transform: scale(0.9);
		}
		#customers-teams<?echo $i; ?>.owl-carousel .owl-dots .owl-dot.active span,
#customers-teams<?echo $i; ?>.owl-carousel .owl-dots .owl-dot:hover span {
		    background: rgba(215,67,77,0.8);
		    transform: translate3d(0px, -50%, 0px) scale(0.7);
		}
#customers-teams<?echo $i; ?>.owl-carousel .owl-dots{
	display: inline-block;
	width: 100%;
	text-align: center;
}
#customers-teams<?echo $i; ?>.owl-carousel .owl-dots .owl-dot{
	display: inline-block;
}
		#customers-teams<?echo $i; ?>.owl-carousel .owl-dots .owl-dot span {
		    background: rgba(215,67,77,0.8);
		    display: inline-block;
		    height: 20px;
		    margin: 0 2px 5px;
			  margin-top:50px;
		    transform: translate3d(0px, -50%, 0px) scale(0.3);
		    transform-origin: 50% 50% 0;
		    transition: all 250ms ease-out 0s;
		    width: 20px;
			  outline: none;
				border-radius:50% !important;
		}
.owl-dot, .owl-dot:active, .owl-dot:focus { 
	outline: 0 !important;
}


#customers-teams<?echo $i; ?>.owl-carousel .owl-prev{
    position: absolute;
    text-align: center;
    left: 0px;
    top: 30%;
    background: #222 !important;
    color: #fff !important;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-size: 25px !important;
    line-height: 30px !important;
    opacity: 1;
    -webkit-transition: 0.5s;
    transition: 0.5s;
}

#customers-teams<?echo $i; ?>.owl-carousel .owl-next{

    position: absolute;
    text-align: center;
    left: inherit;
    right: 0px;
    top: 30%;
    background: #222 !important;
    color: #fff !important;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-size: 25px !important;
    line-height: 30px !important;
    opacity: 1;
    -webkit-transition: 0.5s;
    transition: 0.5s;

}



@media only screen and (max-width: 1000px){
	#customers-teams<?echo $i; ?>.owl-carousel .owl-dots .owl-dot span {
	height:20px;
	width:20px;
	margin-top:30px;
	}
}


 #teamsocial {
   align-items: center;
	 justify-content: center;
	 display: flex;
	 margin:10px auto;
	 margin-top:20px;
  
}
  #teamsocial #socialicon {
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 position: relative;
	 width:40px;
	 height: 40px;
	 margin: 0 0.5rem;
	 border-radius: 50%;
	 cursor: pointer;
	 font-size: 1.5rem;
	 text-decoration: none;
	 transition: all 0.3s ease;
	
}
  #teamsocial #socialicon:hover {
	 font-size: 2rem;
	 width:50px;
	 height: 50px;
}
 
.section_title{
    padding-bottom:0px !important;
}
.img-circle {
    border-radius: 7% !important;
}


</style>



<section class="teams" style="width: 100%;">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- SECTION TITLE -->
                <div class="section_title reveal animated" data-reveal-anim="fadeInBottomShort">
                    <div class="title">
                        <h1><span class="title_word_2">  <?echo $cat_name ?></span></h1>
                    </div>
                </div>
                <!-- /SECTION TITLE ENDS -->
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div id="customers-teams<?echo $i?>" class="owl-carousel">
                    <!--team 1 -->

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

                    <div class="item">
                        <div class="shadow-effect">
                        
                            <img class="img-circle" src="doctor/big_img/<?echo $doctor_image?>" alt="<?echo $doctor_name ?>" />
                     
                            <h2><?echo $doctor_name ?></h2>
                            <p class="title">
                            <?echo strip_tags($description) ?>
                            </p>

                            <div class="social-icons" id="teamsocial">
                                <?
                                if($doctor_facebook!="")
                                {
                                ?>
                                    <a class="social-icon social-icon--facebook" href="<?echo $doctor_facebook?>" target="_BLANK" id="socialicon">
                                        <img src="images/socialicon/facebook.png" />
                                    </a>
                                <?php } ?>
                                <?
                                    if($doctor_twitter!="")
                                    {
                                ?>
                                    <a class="social-icon social-icon--twitter" href="<?echo $doctor_twitter?>" target="_BLANK" id="socialicon">
                                        <img src="images/socialicon/twitter.png" />
                                    </a>
                                <?php } ?>
                                <?
                                    if($doctor_instagram!="")
                                    {
                                ?>
                                    <a class="social-icon social-icon--instagram" href="<?echo $doctor_instagram?>" target="_BLANK" id="socialicon">
                                        <img src="images/socialicon/instagram.png" />
                                    </a>
                                <?php } ?>
                            </div>
                            <!--Social Icons End Here-->
                        </div>
                    </div>
                    <!--END OF team 1 -->
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
    }
}
else
{
    $page_count = 0;
?>
<section id="team" class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>No records found!</h3>
            </div>
        </div>
    </div>
</section>
<?
}
?>




<!-- MAIN PART END -->



<?php include 'footer2.php'; ?>




