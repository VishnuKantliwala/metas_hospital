
<?
$page_id = 8;
if(!isset($_GET['sid']))
{
    echo "<script>window.open('./404.php','_SELF')</script>";
    exit();
}
else
{
    $sid = urldecode($_GET['sid']);
}
include_once("header.php");


$sqlService = $cn->selectdb("select * from tbl_service where slug='".$sid."' ");
if( $cn->numRows($sqlService) > 0 )
{
    $rowService = $cn->fetchAssoc($sqlService);
    extract($rowService);
}
else
{
    echo "<script>window.open('./404.php','_SELF')</script>";
    exit();
}

$sql = $cn->selectdb("select image from tbl_page where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
?> 




<div class="hero-image-area" id="imgBreadcum1" style="height: 40vh;">
    <div id="divImg">    
        <h1 class="raleway"><?echo $service_title ?></h1>
    </div>           
    <div id="imgBreadcum2" style="height: 40vh;">
        <img src="page/big_img/<?echo $image?>" height="100%" width="100%" alt="img">
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
                <div class="col-md-8 col-sm-8 pull-right mobile_col_md_8">
                    
                    <div class="single_blog_contents reveal animated" data-reveal-anim="fadeInUpShort">
                        <div class="single_blog_header">
                            <div class="single_blog_img">
                                <img src="service/big_img/<?echo $image_name?>" alt="<?echo $service_title ?>">
                            </div>
                            <div class="blog_title_meta" style="padding: 0px 30px;">
                                <div class="blog_title">
                                    <h4><?echo $service_title ?></h4>
                                    <ul class=single></ul>
                                </div>
                            </div>
                        </div>
                    
                        <!-- single blog post -->
                        <div class="single_blog_post my_desc my_desc__table">
                            <br/>
                            <?echo $description ?>
                        </div>
                    </div>
                </div>

                <!-- left sidebar -->
                <div class="col-md-4 col-sm-4 col-xs-12 col-md-offset-0 pull-left">
                    <div class="widget reveal animated" data-reveal-anim="fadeInLeft" style="margin-top:0px">
                        <div class="widget_heading">
                            <h4>Our Services</h4>
                        </div>

                        <div class="catagory_list">
                            <ul>
                                <?
                                
                                $sqlServices = $cn->selectdb("SELECT service_title, slug from tbl_service  order by service_title");
                                if( $cn->numRows($sqlServices) > 0 )
                                {
                                    while($rowServices = $cn->fetchAssoc($sqlServices))
                                    {
                                        extract($rowServices);
                                        $href = "centre-of-excellence/".urlencode($slug);
                                ?>
                                <li <?  if($slug == $sid) {?> class="list-active" <?}?> ><a href="<?echo $href?>"><?echo $service_title ?></a></li>
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
