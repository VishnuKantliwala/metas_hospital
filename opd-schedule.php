<?
$page_id = 25;
include_once("header.php");
$sql = $cn->selectdb("select * from tbl_page where page_id =$page_id");
$row = $cn->fetchAssoc($sql);
extract($row);
?> 



<div class="hero-image-area" id="imgBreadcum1" style="height: 40vh;">
    <div id="divImg">    
        <h1 class="raleway"><?echo $page_name ?></h1>
    </div>           
    <div id="imgBreadcum2" style="height: 40vh;">
        <img src="page/big_img/<?echo $image?>" height="100%" width="100%" alt="<?echo $page_name?>">
    </div>            
</div>
       
       



<!-- MAIN PART -->

    <!--================================
        2.START BLOG SECTION
    =================================-->
    <section id="blog" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col">
                    <?
                    $sqlOPDCategories = $cn->selectdb("select cat_name, cat_id from tbl_opd_category order by recordListingID");
                    if( $cn->numRows($sqlOPDCategories) > 0 )
                    {
                        while($rowOPDCategories = $cn->fetchAssoc($sqlOPDCategories))
                        {
                            extract($rowOPDCategories);
                    ?>
                    <div class="widget reveal animated" data-reveal-anim="fadeInRight">
                        <div class="widget_heading">
                            <h4><?echo $cat_name ?></h4>
                        </div>
                        <div class="recent_posts">
                           <div class="row">
                                <?
                                $sqlOPDs = $cn->selectdb("SELECT opd_name, doctor_name, day1, time1, day2, time2 FROM tbl_opd WHERE cat_id like '%".$cat_id.",%' ORDER BY recordListingID ");
                                if( $cn->numRows($sqlOPDs) > 0 )
                                {
                                    while($rowOPDs = $cn->fetchAssoc($sqlOPDs))
                                    {
                                        extract($rowOPDs);
                                ?>
                                
                                
                                <div class="col">
                                    <div class="single_blog_contents reveal animated" data-reveal-anim="fadeInUpShort">
                                        <div class="single_blog_post">
                                            <blockquote>
                                                <ul class="text-center">
                                                    <li><strong>OPD :</strong> <?echo $opd_name ?></li>
                                                    <li><strong>DOCTOR’S NAME :</strong> <?echo $doctor_name ?></li>
                                                    <li><strong>DAYS :</strong>	<?echo $day1 ?> <strong>TIME :</strong> <?echo $time1 ?> </li>
                                                    <li><strong>DAYS :</strong>	<?echo $day2 ?> <strong>TIME :</strong> <?echo $time2 ?> </li>
                                                </ul>
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
                    </div>
                    
                    <?
                        }
                    }
                    ?>
                    


                    



                    
                   
                </div>
            </div>
        </div>
    </section>
    <!--================================
        2.END BLOG SECTION
    =================================-->

<!-- MAIN PART END -->
    
    
   


<?php include 'footer2.php'; ?>
