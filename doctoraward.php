<?
$page_id = 15;
include_once("header.php");
$sql = $cn->selectdb("select * from tbl_page where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
?>


<div class="hero-image-area" id="imgBreadcum1" style="height: 40vh;">
    <div id="divImg">
        <h1 class="raleway">
            <?echo $page_name ?>
        </h1>
    </div>
    <div id="imgBreadcum2" style="height: 40vh;">
        <img src="page/big_img/<?echo $image?>" alt="<?echo $page_name?>">
    </div>
</div>


<!-- MAIN PART -->

    <!--================================
        2.START BLOG SECTION
    =================================-->
    <section id="blog" class="section-padding">
        <div class="container">
            <div class="row">
                <?
                $sqlAwards = $cn->selectdb("SELECT `doctorawards_title`, `description` FROM tbl_doctorawards ORDER BY recordListingID");
                if( $cn->numRows($sqlAwards) > 0 )
                {
                    while($rowAwards = $cn->fetchAssoc($sqlAwards))
                    {
                        extract($rowAwards);
                ?>
                <div class="col-sm-12 col-lg-6 col-md-6">
                    <div class="single_blog_contents reveal animated" data-reveal-anim="fadeInUpShort">
                        <div class="single_blog_header">
                            <div class="blog_title_meta" style="padding: 0px 30px;">
                                <div class="blog_title">
                                    <h4><?echo $doctorawards_title ?></h4>
                                  
                                    <ul class=single></ul>
                                </div>
                                
                            </div>
                        </div>
                        <!-- single blog post -->
                        <div class="single_blog_post">
                            <blockquote>
                            <?echo strip_tags($description) ?>
                            </blockquote> 
                        </div>
                    </div> 
                </div>
                
                <?
                    }
                }
                ?>
                

                

            </div>
        </div>
    </section>
    <!--================================
        2.END BLOG SECTION
    =================================-->

<!-- MAIN PART END -->
    
    
   


<?php include 'footer2.php'; ?>
