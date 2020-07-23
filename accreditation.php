<?
$page_id = 11;
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
                    
                    <div class="widget reveal animated  mt-0" data-reveal-anim="fadeInRight">
                        <div class="widget_heading">
                            <h4 class="backcolor2"><?echo $page_name ?></h4>
                        </div>
                        <?
                        $sqlAccreditation = $cn->selectdb("SELECT `description`, `pdf_file` from tbl_pdf where pdf_id = 1 ");
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
                                        </li>

                                    </ul>
                                    <?
                                        $pdf_list = explode(',',$pdf_file);
                                        $cnt = 1;
                                        for($i=0;$i<count($pdf_list)-1;$i++)
                                        {
                                            if(file_exists('./accreditation_pdf/'.$pdf_list[$i]))
                                            {
                                                ?>
                                                <div class="col-md-3 btn__pdf_container" style="   margin-top: 40px;">
                                                    <div class="btn__pdfs">
                                                    <a class="" download href="<?echo './accreditation_pdf/'.$pdf_list[$i]?>"><i class="icofont icofont-file-pdf"></i> <? echo substr($pdf_list[$i], 0, strlen($pdf_list[$i]) - 9) ?></a>
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
