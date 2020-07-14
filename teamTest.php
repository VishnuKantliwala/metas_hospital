<?
$page_id = 14;
include_once("header.php");
$page = $_GET['page'];
$page = trim($page, '/');

$sql = $cn->selectdb("select * from tbl_page where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
?>
<div class="header-div" style="background:url('page/big_img/<?echo $image?>')">
    <div class="header-div--title">
        <?echo $page_name ?>
    </div>
</div>



  <!--================================
        8.START TEAM SECTION
    =================================-->
    <section id="team" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- SECTION TITLE -->
                    <div class="section_title reveal animated" data-reveal-anim="fadeInBottomShort">
                        <div class="title_subtext">
                            <span>meet with our team</span>
                        </div>
                        <div class="title">
                            <h1>AWESOME <span class="title_word_2">TEAM</span></h1>
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
                                <div class="single_team_member">
                                    <div class="team_member">
                                        <h4>Xavoyer Prof</h4>
                                        <div class="designation">
                                            <p>Designer</p>
                                        </div>
                                    </div>

                                    <p class="member_info">Lorem ipsum dolor sit amet, tota accusam aliquando ius in,
                                        facete epicurei pertinacia sea id. Per te adhuc nostrud, est quas repudiare in.
                                        Graece noluisse sdebitis tacimates at.</p>

                                    <div class="team_member_social">
                                        <ul>
                                            <li><a href="#"><span class="icofont icofont-social-facebook"></span></a>
                                            </li>
                                            <li><a href="#"><span class="icofont icofont-social-twitter"></span></a>
                                            </li>
                                            <li><a href="#"><span class="icofont icofont-social-behance"></span></a>
                                            </li>
                                            <li><a href="#"><span class="icofont icofont-social-dribble"></span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- info slider 2 -->
                                <div class="single_team_member">
                                    <div class="team_member">
                                        <h4>Tony Stank</h4>
                                        <div class="designation">
                                            <p>Developer</p>
                                        </div>
                                    </div>

                                    <p class="member_info">Lorem ipsum dolor sit amet, tota accusam aliquando ius in,
                                        facete epicurei pertinacia sea id. Per te adhuc nostrud, est quas repudiare in.
                                        Graece noluisse sdebitis tacimates at.</p>

                                    <div class="team_member_social">
                                        <ul>
                                            <li><a href="#"><span class="icofont icofont-social-facebook"></span></a>
                                            </li>
                                            <li><a href="#"><span class="icofont icofont-social-twitter"></span></a>
                                            </li>
                                            <li><a href="#"><span class="icofont icofont-social-behance"></span></a>
                                            </li>
                                            <li><a href="#"><span class="icofont icofont-social-dribble"></span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- info slider 3 -->
                                <div class="single_team_member">
                                    <div class="team_member">
                                        <h4>Black Window</h4>
                                        <div class="designation">
                                            <p>UI Designer</p>
                                        </div>
                                    </div>

                                    <p class="member_info">Lorem ipsum dolor sit amet, tota accusam aliquando ius in,
                                        facete epicurei pertinacia sea id. Per te adhuc nostrud, est quas repudiare in.
                                        Graece noluisse sdebitis tacimates at.</p>

                                    <div class="team_member_social">
                                        <ul>
                                            <li><a href="#"><span class="icofont icofont-social-facebook"></span></a>
                                            </li>
                                            <li><a href="#"><span class="icofont icofont-social-twitter"></span></a>
                                            </li>
                                            <li><a href="#"><span class="icofont icofont-social-behance"></span></a>
                                            </li>
                                            <li><a href="#"><span class="icofont icofont-social-dribble"></span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xs-12 col-sm-pull-6 col-md-pull-0 col-sm-6 test v_middle">
                            <div class="team_member_image_slider">
                                <div class="member_image_wrapper">
                                    <img src="images/team_1.jpg" alt="">
                                </div>
                                <div class="member_image_wrapper">
                                    <img src="images/team_2.jpg" alt="">
                                </div>
                                <div class="member_image_wrapper">
                                    <img src="images/team_3.jpg" alt="">
                                </div>
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
                                <div class="thumb">
                                    <img src="images/team_thumb1.jpg" alt="">
                                </div>
                                <div class="thumb">
                                    <img src="images/team_thumb2.jpg" alt="">
                                </div>
                                <div class="thumb">
                                    <img src="images/team_thumb3.jpg" alt="">
                                </div>
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






<!-- Main js -->
<script src="js2/main.js"></script>

