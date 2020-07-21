<?
session_start();
include_once("connect.php");
$cn=new connect();
$cn->connectdb();

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?
$sql = $cn->selectdb("SELECT  `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords` FROM  `tbl_page` where page_id=$page_id" );
//	echo $cn->numRows($sql2);
if ($cn->numRows($sql) > 0) 
{
    $row1 = $cn->fetchAssoc($sql);
    $page_id_f=$page_id;
}
?>
<?
if(isset($pid))
{
    $sql = $cn->selectdb("SELECT  `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords` FROM  `tbl_product` where slug='".$pid."'" );
//	echo $cn->numRows($sql2);
    if ($cn->numRows($sql) > 0) 
    {
        $row1 = $cn->fetchAssoc($sql);
    }
}
?>
<?
if(isset($cid))
{
    $sql = $cn->selectdb("SELECT  `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords` FROM  `tbl_category` where slug='".$cid."'" );
//	echo $cn->numRows($sql2);
    if ($cn->numRows($sql) > 0) 
    {
        $row1 = $cn->fetchAssoc($sql);
    }
}
?>
<?
if(isset($gcid))
{
    $sql = $cn->selectdb("SELECT  `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords` FROM  `tbl_gallery_category` where slug='".$gcid."'" );
//	echo $cn->numRows($sql2);
    if ($cn->numRows($sql) > 0) 
    {
        $row1 = $cn->fetchAssoc($sql);
    }
}
?>
<?
if(isset($sid))
{
    $sql = $cn->selectdb("SELECT  `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords` FROM  `tbl_service` where slug='".$sid."'" );
//	echo $cn->numRows($sql2);
    if ($cn->numRows($sql) > 0) 
    {
        $row1 = $cn->fetchAssoc($sql);
    }
}
?>
<?
if(isset($hid))
{
    $sql = $cn->selectdb("SELECT  `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords` FROM  `tbl_handw` where slug='".$hid."'" );
//	echo $cn->numRows($sql2);
    if ($cn->numRows($sql) > 0) 
    {
        $row1 = $cn->fetchAssoc($sql);
    }
}
?>

<?
if(isset($coid))
{
    $sql = $cn->selectdb("SELECT  `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords` FROM  `tbl_course` where slug='".$coid."'" );
//	echo $cn->numRows($sql2);
    if ($cn->numRows($sql) > 0) 
    {
        $row1 = $cn->fetchAssoc($sql);
    }
}
?>

<?
if(isset($wid))
{
    $sql = $cn->selectdb("SELECT  `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords` FROM  `tbl_workshop` where slug='".$wid."'" );
//	echo $cn->numRows($sql2);
    if ($cn->numRows($sql) > 0) 
    {
        $row1 = $cn->fetchAssoc($sql);
    }
}
?>
<?
// Current Openings
if(isset($coid))
{
    $sql = $cn->selectdb("SELECT  `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords` FROM  `tbl_openings` where slug='".$coid."'" );
//	echo $cn->numRows($sql2);
    if ($cn->numRows($sql) > 0) 
    {
        $row1 = $cn->fetchAssoc($sql);
    }
}
// Health talk
if(isset($htid))
{
    $sql = $cn->selectdb("SELECT  `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords` FROM  `tbl_htalk` where slug='".$htid."'" );
//	echo $cn->numRows($sql2);
    if ($cn->numRows($sql) > 0) 
    {
        $row1 = $cn->fetchAssoc($sql);
    }
}

// Rally
if(isset($rid))
{
    $sql = $cn->selectdb("SELECT  `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords` FROM  `tbl_rally` where slug='".$rid."'" );
//	echo $cn->numRows($sql2);
    if ($cn->numRows($sql) > 0) 
    {
        $row1 = $cn->fetchAssoc($sql);
    }
}

?>




    <title>| Metas Adventist Hospital |
        <?echo $row1['meta_tag_title']?>
    </title>
    <meta name="description" content="<?echo $row1['meta_tag_description']?>">
    <meta name="keywords" content="<?echo $row1['meta_tag_keywords']?>">
    <meta name="title" content="<?echo $row1['meta_tag_title']?>">

    <meta property="og:site_name" content="Metas Adventist Hospital">
    <meta property="og:title" content="Metas Adventist Hospital" />
    <meta property="og:description" content="<?echo $row1['meta_tag_description']?> " />
    <meta property="og:image" itemprop="image" content="<?echo $_SERVER['HTTP_HOST']?>/favicon/big_img/<?echo $image_name?>">
    <meta property="og:type" content="website" />
    <meta property="og:updated_time" content="1594536757" />


    <meta name="shareOpts"
        content="{&#34;TweetText&#34;:&#34;{WEBPAGE_TITLE},&#34;,&#34;TweetURL&#34;:&#34;{WEBSITE_FULL_URL}&#34;,&#34;TweetVia&#34;:&#34;intSchools&#34;,&#34;EmailSubject&#34;:&#34;SHARED : {WEBPAGE_TITLE} &#34;,&#34;EmailBody&#34;:&#34;I saw this page and thought you may like to see it too: {WEBSITE_FULL_URL}&#34;,&#34;FacebookURL&#34;:&#34;{WEBSITE_FULL_URL}&#34;}">

    <?
    $cn->setdomain();
    ?>

    <!-- Favicon and Touch Icons -->
    <?
    $sqlFav = $cn->selectdb("SELECT image_name FROM  `tbl_favicon` " );
    if ($cn->numRows($sqlFav) > 0) 
    {
        $rowFav = $cn->fetchAssoc($sqlFav);
        extract($rowFav);
        ?>
    <link href="favicon/big_img/<?echo $image_name?>" rel="shortcut icon" type="image/png">
    <?
    }
    ?>
    <!-- bootstrap -->
    <link rel="stylesheet" href="css/bootstrap.min.css" />

    <!-- animte css -->
    <link rel="stylesheet" href="css/animate.css" />

    <!-- reset css-->
    <link rel="stylesheet" href="css/reset.css">

    <!-- camera css goes here -->
    <link rel="stylesheet" href="css/camera.css">

    <!-- style css -->
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="css/responsive.css">


    <link rel="stylesheet" href="css/owl.carousel.css" />
    <!-- font awesome -->
    <link rel="stylesheet" href="css/icofont.css" />

    <link rel="stylesheet" href="menuMain.css" />

    <!-- Custom css file -->
    <link rel="stylesheet" href="css/styles.css" />

</head>

<body class="">
    <?
  $sqlContact = $cn->selectdb("SELECT `contact_no` FROM  `tbl_contact` where con_id=1" );
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
        $helpline_no = "96245-55777";
        $landline_no = "0261-7160-300";
    }
  }
  ?>
    <section id="hero_section" class="hero_section hero_section_style2 TinyMenu">
        <div class="hero-wrapper">

            <!-- tiny header -->
            <div class="tiny_header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-md-10">
                            <div class="contact_info">
                                <ul>
                                    <li><span class="icofont icofont-contact-add"></span> Helpline Number : <a
                                            href="tel:<?echo $helpline_no ?>"><?echo $helpline_no ?></a></li>
                                    <li> <span class="icofont icofont-telephone"></span> Landline Number : <a
                                            href="tel:<?echo $landline_no ?>"><?echo $landline_no ?></a></li>
                                    <li> <span class="icofont icofont-user-alt-4"></span> <a href="javascript:void(0)"> Alumni</a></li>
                                    <li> <span class="icofont icofont-globe-alt"></span> <a href="javascript:void(0)"> Location </a></li>
                                    <?
                                        $sql = $cn->selectdb("select * from tbl_socialmedia Order by recordListingID");
                                        while($row = $cn->fetchAssoc($sql))
                                        {
                                            extract($row);
                                    ?>
                                    <li> <a href="<?echo $link_url?>" target="_BLANK"> <span class="icofont <?echo $icon_name?>"></span> </a></li>
                                    <?
                                        }
                                    ?>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2">
                            <div class="search_bar">
                                <form action="javascript:void(0)" class="tiny_search">
                                    <input type="text" placeholder="Search..." class="form-control">
                                    <button type="submit" class="tiny_search_btn"><span
                                            class="icofont icofont-search"></span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div id='sbbfrcc' style='position: absolute; top: -10px; left: 30px; font-size:1px'></div>


    <div class="hp-nav-left nav-left-btn"></div>
    <div class="hp-nav-right nav-right-btn"></div>
    <div class="template-main-menu">

        <div class="t-menu-bgg"></div>
        <div class="template-main-menu-scroll-able">
            <div class="t-menu-bg"></div>

            <div class="close-menu round-btn-icon" title="Close Menu">
                <div>
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                </div><span>Close</span>
            </div>


            <div class="template-main-menu-links clearfix">
                <div class="template-main-menu-links-inner">
                    <ul class="main-menu-items">


                        <li class="no-menu"><a href="./">Home</a>
                            <div class="menu-display-table"></div>
                        </li>


                        <li><a href="javascript:void(0)">About Us</a>
                            <div class="menu-display-table">
                                <div class="menu-display-table-cell">
                                    <ul>
                                        <li><a href="who-we-are">Who We Are</a>
                                        <li><a href="javascript:void(0)">Administrative Body</a>
                                        <li><a href="accreditation">Accreditation</a>
                                        <li><a href="javascript:void(0)">Corporate</a>
                                            <div class="menu-display-table">
                                                <div class="menu-display-table-cell">
                                                    <ul>
                                                        <!-- <li><a href="organogram">Organogram</a> -->
                                                        <li><a href="javascript:void(0)">Organogram</a>
                                                        <!-- <li><a href="nurses-award">Nurses Award</a>
                                                        <li><a href="doctors-award">Doctors Award</a> -->
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        <li><a href="javascript:void(0)">Initiatives</a>
                                            <div class="menu-display-table">
                                                <div class="menu-display-table-cell">
                                                    <ul>
                                                        <li><a href="health-checkup-camps">Health Check Up Camps</a>
                                                        <li><a href="health-awareness-programme">Health Awareness Programme</a>
                                                        
                                                        
                                                        
                                                        <!-- <li><a href="total-health-programme">Total Health
                                                                Programme</a> -->

                                                    </ul>
                                                </div>
                                            </div>
                                    </ul>
                                </div>
                            </div>

                        <li><a href="javascript:void(0)">Patient Care</a>
                            <div class="menu-display-table">
                                <div class="menu-display-table-cell">
                                    <ul>
                                        <li><a href="find-a-doctor/1">Find a Doctor</a>
                                        <li><a href="opd-schedule">OPD Schedule</a>
                                        <li><a href="javascript:void(0)">Clinical Quality</a>
                                            <div class="menu-display-table">
                                                <div class="menu-display-table-cell">
                                                    <ul>
                                                        <li><a href="patient-safety">Patient Safety</a>
                                                        <li><a href="infection-control">Infection Control</a>
                                                        <li><a href="it-excellence">IT Excellence</a>
                                                    </ul>
                                                </div>
                                            </div>

                                        <!-- <li><a href="javascript:void(0)">Lab Reports</a> -->
                                        <li><a href="javascript:void(0)">International Patients</a>
                                            <div class="menu-display-table">
                                                <div class="menu-display-table-cell">
                                                    <ul>
                                                        <li><a href="international-patients">International Patient Safely Protocol</a>
                                                    </ul>
                                                </div>
                                            </div>


                                        <li><a href="javascript:void(0)">Chaplaincy</a>
                                            <div class="menu-display-table">
                                                <div class="menu-display-table-cell">
                                                    <ul>
                                                        <li><a href="what-we-do">What We Do</a>
                                                       <li><a href="newstart-programme">NEWSTART Programme </a>
                                                    </ul>
                                                </div>
                                            </div>
                                        
                                        <li><a href="javascript:void(0)">Health care</a>
                                            <div class="menu-display-table">
                                                <div class="menu-display-table-cell">
                                                    <ul>
                                                        <li><a href="health-talk">Health Talks</a>
                                                        <li><a href="health-and-wellness">Health & Wellness </a>
                                                        <li><a href="rallies">Rally</a>
                                                    </ul>
                                                </div>
                                            </div>


                                    </ul>
                                </div>
                            </div>

                        <li><a href="javascript:void(0)">Centres of Excellence</a>
                            <div class="menu-display-table">
                                <div class="menu-display-table-cell">
                                    <ul>
                                        <?
                                        $sqlServices = $cn->selectdb("SELECT service_title, slug from tbl_service order by recordListingID");
                                        if( $cn->numRows($sqlServices) > 0 )
                                        {
                                            while($rowServices = $cn->fetchAssoc($sqlServices))
                                            {
                                                extract($rowServices);
                                                $href = "centre-of-excellence/".urlencode($slug);
                                        ?>
                                        <li><a href="<?echo $href?>"> <?echo $service_title ?> </a></li>
                                        <?
                                            }
                                        }
                                        ?>
                                    </ul>
                                </div>
                            </div>
                        <li><a href="javascript:void(0)">Media</a>
                            <div class="menu-display-table">
                                <div class="menu-display-table-cell">
                                    <ul>
                                        <li><a href="galleries">Gallery</a>
                                        <li><a href="videos">Video</a>

                                    </ul>
                                </div>
                            </div>
                        <li><a href="javascript:void(0)">Academics & Research</a>
                            <div class="menu-display-table">
                                <div class="menu-display-table-cell">
                                    <ul>
                                        <li><a href="">Course</a>
                                            <div class="menu-display-table">
                                                <div class="menu-display-table-cell">
                                                    <ul>
                                                        <?
                                                        $sqlCourses = $cn->selectdb("SELECT course_title, slug FROM tbl_course ORDER BY recordListingID");
                                                        if( $cn->numRows($sqlCourses) > 0 )
                                                        {
                                                            while($rowCourses = $cn->fetchAssoc($sqlCourses))
                                                            {
                                                                extract($rowCourses);
                                                                $href="course-detail/".urlencode($slug);
                                                        ?>
                                                        <li><a href="<?echo $href?>"><?echo $course_title ?></a>
                                                        <?
                                                            }
                                                        }
                                                        ?>

                                                    </ul>
                                                </div>
                                            </div>
                                        <li><a href="clinical-research">Clinical Research</a>
                                        <li><a href="workshops">Workshop</a>

                                    </ul>
                                </div>
                            </div>
                            <li class="no-menu"><a href="project-category">Project</a>
                            <div class="menu-display-table"></div>
                        </li>
                        <li><a href="javascript:void(0)">Blog</a>
                            <div class="menu-display-table">
                                <div class="menu-display-table-cell">
                                    <ul>
                                        <li><a href="blogs">News</a>
                                        <li><a href="events">Events</a>
                                        <li><a href="javascript:void(0)">Journal</a>
                                    </ul>
                                </div>
                            </div>
                        <li><a href="javascript:void(0)">Career</a>
                            <div class="menu-display-table">
                                <div class="menu-display-table-cell">
                                    <ul>
                                        <li><a href="hr-department">HR Department</a>
                                        <!-- <li><a href="javascript:void(0)">HR Portal</a> -->
                                        <li><a href="current-openings">Current Openings</a>

                                    </ul>
                                </div>
                            </div>
                        <li class="no-menu"><a href="contact-us">Contact Us</a>
                            <div class="menu-display-table"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="template-header-sticky">
        <div class="close-menu round-btn-icon" title="Close Menu">
            <div>
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
            </div><span>Close</span>
        </div>
        <div class="t-menu-bgg"></div>
        <div class="template-header-sticky-inner">
            <div class="open-menu round-btn-icon on-sticky-header" title="Open Menu">
                <div>
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                </div><span></span>
            </div>

            <a href="javascript:void(0)" class="sticky-mobile-brandlg"></a>
            <div class="t-menu-bg"></div>
            <ul class="main-menu-items">


                <li class="no-menu"><a href="./">Home</a>
                    <div class="menu-display-table"></div>
                </li>


                <li><a href="javascript:void(0)">About Us</a>
                    <div class="menu-display-table">
                        <div class="menu-display-table-cell">
                            <ul>
                                <li><a href="who-we-are">Who We Are</a>
                                <li><a href="javascript:void(0)">Administrative Body</a>
                                <li><a href="accreditation">Accreditation</a>
                                <li><a href="javascript:void(0)">Corporate</a>
                                    <div class="menu-display-table">
                                        <div class="menu-display-table-cell">
                                            <ul>
                                                <!-- <li><a href="organogram">Organogram</a> -->
                                                <li><a href="javascript:void(0)">Organogram</a>
                                                <!-- <li><a href="nurses-award">Nurses Award</a>
                                                <li><a href="doctors-award">Doctors Award</a> -->
                                                
                                            </ul>
                                        </div>
                                    </div>
                                <li><a href="javascript:void(0)">Initiatives</a>
                                    <div class="menu-display-table">
                                        <div class="menu-display-table-cell">
                                            <ul>
                                                <li><a href="health-checkup-camps">Health Check Up Camps</a>
                                                        <li><a href="health-awareness-programme">Health Awareness Programme</a>
                                                <!-- <li><a href="total-health-programme">Total Health Programme</a> -->

                                            </ul>
                                        </div>
                                    </div>
                            </ul>
                        </div>
                    </div>

                <li><a href="javascript:void(0)">Patient Care</a>
                    <div class="menu-display-table">
                        <div class="menu-display-table-cell">
                            <ul>
                                <li><a href="find-a-doctor/1">Find a Doctor</a>
                                <li><a href="opd-schedule">OPD Schedule</a>
                                <li><a href="javascript:void(0)">Clinical Quality</a>
                                    <div class="menu-display-table">
                                        <div class="menu-display-table-cell">
                                            <ul>
                                                <li><a href="patient-safety">Patient Safety</a>
                                                <li><a href="infection-control">Infection Control</a>
                                                <li><a href="it-excellence">IT Excellence</a>
                                            </ul>
                                        </div>
                                    </div>

                                <!-- <li><a href="javascript:void(0)">Lab Reports</a> -->
                                <li><a href="javascript:void(0)">International Patients</a>
                                    <div class="menu-display-table">
                                                <div class="menu-display-table-cell">
                                                    <ul>
                                                        <li><a href="international-patients">International Patient Safely Protocol</a>
                                                    </ul>
                                                </div>
                                            </div>


                                <li><a href="javascript:void(0)">Chaplaincy</a>
                                    <div class="menu-display-table">
                                        <div class="menu-display-table-cell">
                                            <ul>
                                                <li><a href="what-we-do">What We Do</a>
                                                <li><a href="newstart-programme">NEWSTART Programme </a>
                                            </ul>
                                        </div>
                                    </div>

                                <li><a href="javascript:void(0)">Health care</a>
                                        <div class="menu-display-table">
                                            <div class="menu-display-table-cell">
                                                <ul>
                                                    <li><a href="health-talk">Health Talks</a>
                                                    <li><a href="health-and-wellness">Health & Wellness </a>
                                                    <li><a href="rallies">Rally</a>
                                                </ul>
                                            </div>
                                        </div>
                            </ul>
                        </div>
                    </div>

                <li><a href="javascript:void(0)">Centres of Excellence</a>
                    <div class="menu-display-table">
                        <div class="menu-display-table-cell">
                            <ul>
                                <?
                                $sqlServices = $cn->selectdb("SELECT service_title, slug from tbl_service order by recordListingID");
                                if( $cn->numRows($sqlServices) > 0 )
                                {
                                    while($rowServices = $cn->fetchAssoc($sqlServices))
                                    {
                                        extract($rowServices);
                                        $href = "centre-of-excellence/".urlencode($slug);
                                ?>
                                <li><a href="<?echo $href?>"> <?echo $service_title ?> </a></li>
                                <?
                                    }
                                }
                                ?>
                            </ul>
                        </div>
                    </div>
                <li><a href="javascript:void(0)">Media</a>
                    <div class="menu-display-table">
                        <div class="menu-display-table-cell">
                            <ul>
                                <li><a href="galleries">Gallery</a>
                                <li><a href="videos">Video</a>

                            </ul>
                        </div>
                    </div>
                <li><a href="javascript:void(0)">Academics & Research</a>
                    <div class="menu-display-table">
                        <div class="menu-display-table-cell">
                            <ul>
                                <li><a href="">Course</a>
                                    <div class="menu-display-table">
                                        <div class="menu-display-table-cell">
                                            <ul>
                                                <?
                                                $sqlCourses = $cn->selectdb("SELECT course_title, slug FROM tbl_course ORDER BY recordListingID");
                                                if( $cn->numRows($sqlCourses) > 0 )
                                                {
                                                    while($rowCourses = $cn->fetchAssoc($sqlCourses))
                                                    {
                                                        extract($rowCourses);
                                                        $href="course-detail/".urlencode($slug);
                                                ?>
                                                <li><a href="<?echo $href?>"><?echo $course_title ?></a>
                                                <?
                                                    }
                                                }
                                                ?>

                                            </ul>
                                        </div>
                                    </div>
                                <li><a href="clinical-research">Clinical Research</a>
                                <li><a href="workshops">Workshop</a>

                            </ul>
                        </div>
                    </div>
                    <li class="no-menu"><a href="project-category">Project</a>
                            <div class="menu-display-table"></div>
                        </li>
                <li><a href="javascript:void(0)">Blog</a>
                    <div class="menu-display-table">
                        <div class="menu-display-table-cell">
                            <ul>
                                <li><a href="blogs">News</a>
                                <li><a href="events">Events</a>
                                <li><a href="javascript:void(0)">Journal</a>
                            </ul>
                        </div>
                    </div>
                <li><a href="javascript:void(0)">Career</a>
                    <div class="menu-display-table">
                        <div class="menu-display-table-cell">
                            <ul>
                                <li><a href="hr-department">HR Department</a>
                                <!-- <li><a href="javascript:void(0)">HR Portal</a> -->
                                <li><a href="current-openings">Current Openings</a>
                                <!-- <li><a href="javascript:void(0)">HR Portal</a>
                                <li><a href="javascript:void(0)">Current Openings</a> -->

                            </ul>
                        </div>
                    </div>
                <li class="no-menu"><a href="contact-us">Contact Us</a>
                    <div class="menu-display-table"></div>
                </li>
            </ul>
            <!--ul class="main-menu-items">
             
            <li><a href="javascript:void(0)">Home</a></li>
                            
                        
            <li><a href="javascript:void(0)">About Us</a>
                <div class="menu-display-table">
                    <div class="menu-display-table-cell">
                        <ul>
                            <li><a href="javascript:void(0)">Corporate</a>
                            <div class="menu-display-table">
                                <div class="menu-display-table-cell">
                                    <ul>
                                        <li><a href="javascript:void(0)">Organogram</a>
                                        <li><a href="javascript:void(0)">Nurses Award</a>
                                        <li><a href="javascript:void(0)">Doctors Award</a>
                                        
                                    </ul>
                                </div>
                            </div>
                            <li><a href="javascript:void(0)">Initiatives</a>
                                <div class="menu-display-table">
                                    <div class="menu-display-table-cell">
                                        <ul>
                                            <li><a href="javascript:void(0)">Health Camps</a>
                                            <li><a href="javascript:void(0)">Total Health Programme</a>
                                            
                                        </ul>
                                    </div>
                                </div>
                            
                            <li><a href="javascript:void(0)">Who We Are</a>
                            <li><a href="javascript:void(0)">Administrative Body</a>
                            <li><a href="javascript:void(0)">Accreditation</a>
                           
                        </ul>
                    </div>
                </div>
               
            <li><a href="javascript:void(0)">Patient Care</a>
                <div class="menu-display-table">
                    <div class="menu-display-table-cell">
                        <ul>
                            <li><a href="javascript:void(0)">Find a Doctor</a>
                            <li><a href="javascript:void(0)">OPD Schedule</a>
                            <li><a href="javascript:void(0)">Clinical Quality</a>
                            <div class="menu-display-table">
                                <div class="menu-display-table-cell">
                                    <ul>
                                        <li><a href="javascript:void(0)">Patient Safety</a>
                                        <li><a href="javascript:void(0)">Infection Control</a>
                                        <li><a href="javascript:void(0)">IT Excellence</a>
                                    </ul>
                                </div>
                            </div>
                            
                            <li><a href="javascript:void(0)">Lab Reports</a>
                            <li><a href="javascript:void(0)">International Patients</a>
                        </ul>
                    </div>
                </div>
                  
                    <li><a href="javascript:void(0)">Centres of Excellence</a>
                        <div class="menu-display-table">
                            <div class="menu-display-table-cell">
                                <ul>
                                    <li><a href="javascript:void(0)">Orthopaedic</a></li>
                                    <li><a href="javascript:void(0)">Paediatrics</a></li>
                                    <li><a href="javascript:void(0)">Diabetology</a></li>
                                   
                                </ul>
                            </div>
                        </div>
                        <li><a href="javascript:void(0)">Media</a></li>
                        <li><a href="javascript:void(0)">Academics & Research</a></li>
                        <li><a href="javascript:void(0)">Blog</a></li>
                        <li><a href="javascript:void(0)">Chaplaincy</a></li>
                        <li><a href="javascript:void(0)">Contact Us</a></li>
        </ul-->

        </div>
    </div>
    </div>
    <div class="template-header">
        <a href="javascript:void(0)" class="desktop-logo-btn-large" title=""></a>
        <a href="javascript:void(0)" class="desktop-logo-btn" title=""></a>
        <a href="javascript:void(0)" class="mobile-logo-btn" title=""></a>
        <div class="open-menu round-btn-icon" title="Open Menu">
            <div>
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
            </div><span></span>
        </div>


    </div>