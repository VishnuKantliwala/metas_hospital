<?
$page_id = 28;
$wid = urldecode($_GET['wid']);


include_once("header.php");
$sqlWorkshop = $cn->selectdb("select * from tbl_workshop where slug = '".$wid."' ");
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
?>
<div class="hero-image-area" id="imgBreadcum1" style="height: 40vh;">
    <div id="divImg">
        <h1 class="raleway">
            <?echo $workshop_title ?>
        </h1>
    </div>
    <div id="imgBreadcum2" style="height: 40vh;">
        <img src="page/big_img/<?echo $image?>" height="100%" width="100%" alt="<?echo $workshop_title?>">
    </div>
</div>



<!-- MAIN PART -->

   
    <!--================================
        2.START BLOG SECTION
    =================================-->
    <section id="blog" class="section-padding">
        <div class="container">
            <div class="row">

                <!-- left blog posts -->
                <div class="col-md-8 col-sm-8 pull-right">
                    
                    <div class="single_blog_contents reveal animated" data-reveal-anim="fadeInUpShort">
                        <div class="single_blog_header">
                            <div class="blog_title_meta" style="padding: 0px 30px;">
                                <div class="blog_title">
                                    <h4><?echo $workshop_title ?></h4>
                                    <ul class=single></ul>
                                </div>
                            </div>
                        </div>
                    
                        <!-- single blog post -->
                        <div class="single_blog_post">
                            <?echo $description ?>
                        </div>
                    </div>
                </div>

                <!-- left sidebar -->
                <div class="col-md-4 col-sm-4 col-xs-12 col-md-offset-0 pull-left">

                    <div class="widget reveal animated" data-reveal-anim="fadeInLeft" style="margin-top:0px;border: 0px">
                    <img src="workshop/big_img/<?echo $image_name?>" alt="<?echo $workshop_title?>" style="border-radius: 20px;"> 
                    </div>

                    <div class="widget reveal animated" data-reveal-anim="fadeInLeft" style="margin-top:20px">
                        <div class="widget_heading">
                            <h4>Related Workshops</h4>
                        </div>

                        <div class="catagory_list">
                            <ul>
                            <?
                                
                                $sqlServices = $cn->selectdb("SELECT workshop_title, slug from tbl_workshop  order by workshop_title");
                                if( $cn->numRows($sqlServices) > 0 )
                                {
                                    while($rowServices = $cn->fetchAssoc($sqlServices))
                                    {
                                        extract($rowServices);
                                        $href = "workshops/".urlencode($slug);
                                ?>
                                <li <?  if($slug == $wid) {?> class="list-active" <?}?> ><a href="<?echo $href?>"><?echo $workshop_title ?></a></li>
                                <?
                                    }
                                }
                                ?>
                                               
                            </ul>
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
