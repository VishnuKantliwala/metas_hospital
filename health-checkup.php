<?
$page_id = 17;
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
<section id="our_service" class="section-padding">
    <div class="container">
        
        <div class="row" id="results">
            
            
        </div>
        <br/>
        <div id="loader_image text-center row" style="width:100%; text-align: center;">
            <img id="loader_image" src="./images/loader.gif" style="width:30px;" />
        </div>
    </div>
  </section>

<!-- MAIN PART END -->
    
    
   


<?php include 'footer2.php'; ?>
<script src="js/scroll.js" id="helper" cat_id="0" file-name="getcamps.php" limit="12"
    pid="0"  ></script>