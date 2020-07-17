<?
$page_id = 38;
$coid = urldecode($_GET['coid']);


include_once("header.php");
$sqlWorkshop = $cn->selectdb("select * from tbl_openings where slug = '".$coid."' ");
if( $cn->numRows($sqlWorkshop) > 0 )
{
    $rowWorkshop = $cn->fetchAssoc($sqlWorkshop);
    extract($rowWorkshop);
}
else
{
    echo "<script>window.open('./404','_SELF')</script>";
    exit();
}
$sql = $cn->selectdb("select image from tbl_page where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
$date = date("M d, Y",strtotime($openings_date));
?>
<!--gallery popup-->
<link rel="stylesheet" href="dist/css/lightbox.min.css">
<div class="header-div" style="background:url('page/big_img/<?echo $image?>')">
    <div class="header-div--title">
        <?echo $openings_title ?>
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

                <div class="widget reveal animated  mt-0" data-reveal-anim="fadeInRight">
                    <div class="widget_heading">
                        <h4>
                            <?echo $openings_title ?>
                        </h4>
                    </div>

                    <div class="recent_posts">
                        <div class="row">
                            <div class="col-lg-12">    
                                <span class="recent_post_meta pl-10">Posting date: <?echo $date ?></span>
                            </div>
                            <div class="col-lg-12">

                                <ul>
                                    <li>
                                        <a>
                                            <div class="single_blog_post my_desc my_desc__table pl-10">
                                                <?echo $description ?>
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div class="col-lg-12">
                                
                                <h3>Apply now</h3>
                                <hr/>
                                <br/>
                                <form id="openingsForm" class="message_form row" enctype="multipart/form-data">
                                    <div class="col-md-4">
                                        <input type="text" placeholder="First name" name="first_name" required>
                                        <input type="hidden"  name="openings_title" value="<?echo $openings_title?>" >
                                    </div>
                                    <div class="col-md-4">
                                        <input type="text" placeholder="Middle name" name="middle_name" required>
                                    </div>
                                    <div class="col-md-4">
                                        <input type="text" placeholder="Last name" name="last_name" required>
                                    </div>
                                    <div class="col-md-4">
                                        <input type="email" placeholder="Email ID" name="email" required>
                                    </div>
                                    <div class="col-md-4">
                                        <select name="c_job" class="my_ddl">
                                            <option value="Accounting / Tax / Company Secretary / Audit">
                                                Accounting / Tax / Company Secretary / Audit </option>
                                            <option value="  Finance and Insurance"> Finance and Insurance
                                            </option>
                                            <option value="  Online &amp; Offline Marketing / MR / Media Planning">
                                                Online &amp;
                                                Offline Marketing / MR / Media Planning </option>
                                            <option value="  Business Development"> Business Development
                                            </option>
                                            <option value="  Advertising / Public Relation / Events">
                                                Advertising / Public Relation / Events </option>
                                            <option value="  Front Office Staff / Secretarial / Computer Operator">
                                                Front Office
                                                Staff / Secretarial / Computer Operator </option>
                                            <option value="  Administration / Operations"> Administration /
                                                Operations </option>
                                            <option value="  Human Resource / IR / Training &amp; Development"> Human
                                                Resource / IR
                                                / Training &amp; Development </option>
                                            <option value="  IT Hardware - Control / Networking / Support">
                                                IT Hardware - Control / Networking / Support </option>
                                            <option value="  Content / Editors / Journalists"> Content /
                                                Editors / Journalists </option>
                                            <option value="  Corporate Planning / Consulting / Strategy">
                                                Corporate Planning / Consulting / Strategy </option>
                                            <option value="  Doctors / Nurses / Medical Professional">
                                                Doctors / Nurses / Medical Professional </option>
                                            <option value="  Legal / Law"> Legal / Law </option>
                                            <option value="  Education / Teachers / Professors / Lecturers / Academics">
                                                Education /
                                                Teachers / Professors / Lecturers / Academics </option>
                                            <option value=" Other"> Other </option>
                                        </select>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="col-md-2 col-xs-2">
                                            <input type="radio" name="cast" value="Adventist" class="rradio_a" />
                                        </div>
                                        <div class="col-md-3 col-xs-10">
                                            <p class="radio_text radio_a">Adventist</p>
                                        </div>
                                        <div class="col-md-2 col-xs-2">
                                            <input checked type="radio" name="cast" value="Non-Adventist"
                                                class="rradio_na" /></div>
                                        <div class="col-md-5 col-xs-10">
                                            <p class="radio_text radio_na">Non-Adventist</p>
                                        </div>

                                    </div>
                                    <div class="col-md-4">
                                        <input type="text" placeholder="Total Experience" name="experience" required>
                                    </div>
                                    <div class="col-md-4">
                                        <input type="file" name="file" required>
                                    </div>




                                    <div class="col-md-2">
                                        <input type="text" placeholder="Code" name="verif_box" required>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group mb-20">
                                            <img style="width:100px;height:50px" src="verificationimage.php?1092"
                                                alt="verification image, type it in the box" width="50px" height="50px"
                                                align="absbottom" />
                                        </div>
                                    </div>
                                    <div class="col-sm-12 mb-10">
                                        <div id="result_openingsForm"></div>
                                    </div>
                                    <div class="col-md-12 ">
                                        <div id="loader_openings_form" style="width:100%; text-align: center;">
                                            <img style="display:none;width:30px;" class="loader_openings_form"
                                                src="./images/loader.gif" />
                                        </div>
                                    </div>
                                    <div class="col-sm-12 mb-10">

                                        <button type="submit"
                                            class="btn arrow_btn btn_messaging btn_submit_openings_form"><span
                                                class="btn-text" data-hover="SEnd now">SEnd
                                                now</span> <span
                                                class="icofont icofont-paper-plane btn_icon"></span></button>
                                    </div>

                                </form>

                            </div>



                        </div>
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





<?php 
include 'footer2.php'; 
?>
<script src="js/forms.js"></script>
