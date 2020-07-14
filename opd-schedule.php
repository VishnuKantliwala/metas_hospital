<?
$page_id = 25;
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
        <div class="row vbox vbox-mobile">
            <div class="col-md-offset-3"></div>
            <div class="col-md-6 ddl__container">


                <!-- <div class="col-md-6"><p class="ddl_title">SELECT CATEGORY </p></div> -->
                <div class="col-md-12">
                    <select class="form-control ddl__opd" id="ddl__opd">
                        <!-- <option value="0">
                            -- SELECT CATEGORY --
                        </option> -->
                        <?
                        $sqlOPDCategories = $cn->selectdb("select cat_name, cat_id from tbl_opd_category order by cat_name");
                        if( $cn->numRows($sqlOPDCategories) > 0 )
                        {
                            while($rowOPDCategories = $cn->fetchAssoc($sqlOPDCategories))
                            {
                                extract($rowOPDCategories);
                        ?>
                        <option value="<?echo $cat_id?>">
                            <?echo $cat_name?>
                        </option>
                        <?
                            }
                        }
                        ?>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <?
                $sqlOPDCategories = $cn->selectdb("select cat_name, cat_id from tbl_opd_category order by cat_name ASC LIMIT 1");
                if( $cn->numRows($sqlOPDCategories) > 0 )
                {
                    while($rowOPDCategories = $cn->fetchAssoc($sqlOPDCategories))
                    {
                        extract($rowOPDCategories);
                ?>
                <div class="widget reveal animated" data-reveal-anim="fadeInRight">
                    <div class="widget_heading">
                        <h4 class="cat_name">
                            <?echo $cat_name ?>
                        </h4>
                    </div>
                    <div class="recent_posts">
                        <div class="row" id="results">

                        </div>
                        <div class="row">
                            <div id="loader_image text-center row" style="width:100%; text-align: center;">
                                <img id="loader_image" src="./images/loader.gif" style="width:30px;" />
                            </div>
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
<script src="js/ddl_data.js" id="helper" file-name="getopds.php" cat-id="<?echo $cat_id?>"></script>