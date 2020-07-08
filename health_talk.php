<?
$page_id = 13;
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

                <div class="col">
                    
                    <div class="widget reveal animated" data-reveal-anim="fadeInRight">
                        <div class="widget_heading">
                            <h4><?echo $page_name ?></h4>
                        </div>
                        <?
                        $sqlAccreditation = $cn->selectdb("SELECT `description`, `pdf_file` from tbl_pdf where pdf_id = 3 ");
                        if( $cn->numRows($sqlAccreditation) > 0 )
                        {
                            $rowAccreditation = $cn->fetchAssoc($sqlAccreditation);
                            extract($rowAccreditation);
                        ?>
                        <div class="recent_posts">
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul>
                                        <li><a >
                                                <div class="single_recent_post v_middle" style="width: 100%;">
                                                <?echo $description ?>
                                                
                                            </div>
                                        </a>
                                        <?
                                        // echo mime_content_type('./health_talk_pdf/'.$pdf_file);
                                        if(file_exists('./health_talk_pdf/'.$pdf_file))
                                        {
                                        ?>
                                        <div style="text-align:center;    margin-top: 40px;">
                                        <a class="btn__pdfs" download href="<?echo './health_talk_pdf/'.$pdf_file?>">
                                        <?
                                            if(mime_content_type('./health_talk_pdf/'.$pdf_file) == "application/vnd.openxmlformats-officedocument.presentationml.presentation")
                                            {
                                        ?>
                                            <i class="icofont icofont-file-powerpoint"></i> Donload PPT
                                        <?
                                            }
                                            else
                                            {
                                        ?>
                                            <i class="icofont icofont-file-pdf"></i> Donload PDF
                                        <?
                                            }
                                        ?>
                                    
                                        </a>
                                        </div>
                                        <?
                                        }
                                        ?>
                                        </li>
                                    </ul>
                                </div>

                            </div>    
                        </div>
                        <?
                        }
                        ?>
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
