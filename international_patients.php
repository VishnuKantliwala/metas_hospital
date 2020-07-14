<?
$page_id = 12;
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
                    
                    <div class="widget reveal animated mt-0" data-reveal-anim="fadeInRight">
                        <div class="widget_heading">
                            <h4><?echo $page_name ?></h4>
                        </div>
                        <?
                        $sqlAccreditation = $cn->selectdb("SELECT `description`, `pdf_file` from tbl_pdf where pdf_id = 2 ");
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
                                        if(file_exists('./international_patients_pdf/'.$pdf_file))
                                        {
                                        ?>
                                        <div style="text-align:center;    margin-top: 40px;">
                                        <a class="btn__pdfs" download href="<?echo './international_patients_pdf/'.$pdf_file?>"><i class="icofont icofont-file-pdf"></i> Donload PDF</a>
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
