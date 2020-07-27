<?
$page_id = 55;
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
        2.START BLOG SECTION
    =================================-->
<section id="blog" class="section-padding pt-20">
    <div class="container">
        <div class="row">

            <div class="col">

                <div class="widget reveal animated" data-reveal-anim="fadeInRight">
                    <div class="widget_heading">
                        <h4>
                            <?echo $page_name ?>
                        </h4>
                    </div>

                    <div class="recent_posts">



                        <form id="alumniForm" class="message_form row" enctype="multipart/form-data">
                            <div class="col-md-4">
                                <input type="text" placeholder="First name" name="alumni_fname" required>
                            </div>
                            <div class="col-md-4">
                                <input type="text" placeholder="Last name" name="alumni_lname" required>
                            </div>
                            <div class="col-md-4">
                                <input type="email" placeholder="Email ID" name="email" required>
                            </div>

                            <div class="col-md-4" style="    height: 48px;">
                                <input class="my_ddl" type="date" placeholder="Birth date" name="bdate" required>
                            </div>

                            <div class="col-md-4">
                                <select name="country" class="my_ddl">
                                    <option value="0" selected>-----SELECT COUNTRY-----</option>
                                    <?
                                    $sqlCountries = $cn->selectdb("SELECT countryname from country order by countryname");
                                    if( $cn->numRows($sqlCountries) > 0 )
                                    {
                                        while($rowCountries = $cn->fetchAssoc($sqlCountries))
                                        {
                                    ?>
                                    <option value="<?echo $rowCountries['countryname'] ?>">
                                        <?echo $rowCountries['countryname'] ?>
                                    </option>
                                    <?
                                        }
                                    }
                                    ?>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <div class="col-md-1 col-xs-2 p-0">
                                    <input checked type="radio" name="gender" value="Male" class="rradio_m" />
                                </div>
                                <div class="col-md-3 col-xs-10">
                                    <p class="radio_text radio_m">Male</p>
                                </div>
                                <div class="col-md-1 col-xs-2 p-0">
                                    <input type="radio" name="gender" value="Female" class="rradio_f" />
                                </div>
                                <div class="col-md-3 col-xs-10">
                                    <p class="radio_text radio_f">Female</p>
                                </div>
                                <div class="col-md-1 col-xs-2 p-0">
                                    <input type="radio" name="gender" value="Other" class="rradio_o" />
                                </div>
                                <div class="col-md-3 col-xs-10">
                                    <p class="radio_text radio_o">Other</p>
                                </div>

                            </div>

                            <div class="col-md-4">
                                <input type="text" placeholder="Nationality" name="nationality" required>
                            </div>
                            <div class="col-md-4">
                                <input type="text" placeholder="Marital Status" name="marital_status" required>
                            </div>
                            <div class="col-md-4">
                                <input type="text" placeholder="Year of completion" name="year_of_completion" required>
                            </div>
                            <div class="row m-0">
                                <div class="col-md-4">
                                    <input type="text" placeholder="Current Position" name="current_position" required>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" placeholder="Course" name="course" required>
                                </div>
                                <div class="col-md-4">
                                    <button type="button" class="btn my_ddl btn_select_file">Select Profile
                                        picture</button>
                                    <input type="file" class="select_file" name="file" 
                                        placeholder="Profile picture" style="display:none">
                                </div>
                            </div>




                            <div class="col-md-4">
                                <input type="text" placeholder="Code" name="verif_box" required>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group mb-20">
                                    <img style="width:100px;height:50px" src="verificationimage.php?1092"
                                        alt="verification image, type it in the box" width="50px" height="50px"
                                        align="absbottom" />
                                </div>
                            </div>
                            <div class="col-sm-12 mb-10">
                                <div id="result_alumniForm"></div>
                            </div>
                            <div class="col-md-12 ">
                                <div id="loader_contact_form" style="width:100%; text-align: center;">
                                    <img style="display:none;width:30px;" class="loader_contact_form"
                                        src="./images/loader.gif" />
                                </div>
                            </div>
                            <div class="col-sm-12 mb-10">

                                <button type="submit" class="btn arrow_btn btn_messaging btn_submit_alumni_form"><span
                                        class="btn-text" data-hover="SEnd now">SEnd
                                        now</span> <span class="icofont icofont-paper-plane btn_icon"></span></button>
                            </div>

                        </form>


                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
<!--================================
        2.END BLOG SECTION
    =================================-->

<!-- MAIN PART END -->





<?php include 'footer2.php'; ?>
<script src="js/forms.js"></script>