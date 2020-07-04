<?
$page_id = 7;
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
        <img src="page/big_img/<?echo $image?>"  alt="<?echo $page_name?>">
    </div>            
</div>
       



<!-- MAIN PART -->

<section id="portfolio" class="section-padding">
    <div class="container">
        <div class="row text-center" id="results">
             


        </div>  
        <br/>
        <div id="loader_image text-center row" style="width:100%; text-align: center;">
            <img id="loader_image" src="./images/loader.gif" style="width:30px;" />
        </div>
    </div>
</section>


<!-- MAIN PART END -->
    
    
   


<?php include 'footer2.php'; ?>
<script src="js/scroll.js" id="helper" cat_id="0" file-name="getvideos.php" limit="6"
    pid="0"  ></script>
