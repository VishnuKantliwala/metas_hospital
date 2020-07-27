<?
$page_id = 54;
$aid = urldecode($_GET['aid']);

include_once("header.php");

$sqlAlumni = $cn->selectdb("select * from tbl_alumni where slug = '".$aid."' ");
if( $cn->numRows($sqlAlumni) > 0 )
{
    $rowAlumni = $cn->fetchAssoc($sqlAlumni);
    extract($rowAlumni);
    $alumni_name = $alumni_fname . " ". $alumni_lname;
}
else
{
    echo "<script>window.open('./404','_SELF')</script>";
    exit();
}

$sql = $cn->selectdb("select * from tbl_page where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
?>


<div class="header-div" style="background:url('page/big_img/<?echo $image?>')">
    <div class="header-div--title">
        <?echo $alumni_name ?>
    </div>
</div>

<!-- MAIN PART -->

<section id="testimonial_area" class="section-padding pt-20">
    <div class="container">

        <div class="row">
            <div class="testimonial_wrapper">
                <div class="col-md-10 col-sm-8 col-sm-offset-2 col-md-offset-1 text-center">
                    <!-- testimonial slider -->
                    <div class="row bb-3">
                        <!-- slider 1 -->
                        <div class="col-sm-12 col-md-3 col-lg-4 col-lg-offset-4" style="padding-bottom: 45px;">
                            <div class="images" style="padding-bottom: 15px;">
                                <img class="alumni_img alumni_img--detail" src="alumni/big_img/<?echo $alumni_image?>"
                                    alt="<?echo $alumni_name ?>">
                            </div>
                            <h4>
                                <?echo $alumni_name ?>
                            </h4>

                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="testimonial_wrapper">
                <div class="col-md-10 col-sm-8 col-sm-offset-2 col-md-offset-1 text-center">
                    <!-- testimonial slider -->
                    <br/>
                    <div class="row">
                        <!-- slider 1 -->
                        <div class="col-md-6 br-2">
                            <div class="single_blog_post my_desc text-left">
                                <blockquote style="text-align:left">
                                    Email ID
                                </blockquote>
                                <ul class="pl-35 default-font">
                                    <li>
                                        <?echo $email?>
                                    </li>
                                </ul>

                                <blockquote style="text-align:left">
                                    Gender
                                </blockquote>
                                <ul class="pl-35 default-font">
                                    <li>
                                        <?echo $gender?>
                                    </li>
                                </ul>

                                <blockquote style="text-align:left">
                                    Nationality
                                </blockquote>
                                <ul class="pl-35 default-font">
                                    <li>
                                        <?echo $nationality?>
                                    </li>
                                </ul>

                                <blockquote style="text-align:left">
                                    Country
                                </blockquote>
                                <ul class="pl-35 default-font">
                                    <li>
                                        <?echo $country?>
                                    </li>
                                </ul>

                                


                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="single_blog_post my_desc text-left">
                                

                                <blockquote style="text-align:left">
                                    Birth date
                                </blockquote>
                                <ul class="pl-35 default-font">
                                    <li>
                                        <?
                                    echo date("M d, Y",strtotime($bdate));
                                    ?>

                                    </li>
                                </ul>

                                <blockquote style="text-align:left">
                                    Merital Status
                                </blockquote>
                                <ul class="pl-35 default-font">
                                    <li>
                                        <?
                                    echo $marital_status;
                                    ?>

                                    </li>
                                </ul>

                                <blockquote style="text-align:left">
                                    Year of Completion
                                </blockquote>
                                <ul class="pl-35 default-font">
                                    <li>
                                        <?
                                    echo $year_of_completion;
                                    ?>

                                    </li>
                                </ul>

                                <blockquote style="text-align:left">
                                    Current Position
                                </blockquote>
                                <ul class="pl-35 default-font">
                                    <li>
                                        <?
                                    echo $current_position;
                                    ?>

                                    </li>
                                </ul>


                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="single_blog_post my_desc ">
                            <blockquote >
                                    Course
                                </blockquote>
                                <ul class=" default-font">
                                    <li>
                                        <?
                                    echo $course;
                                    ?>

                                    </li>
                                </ul>
                                </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- MAIN PART END -->





<?php include 'footer2.php'; ?>