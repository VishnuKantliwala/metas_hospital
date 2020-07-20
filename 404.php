<?
$page_id = 39;
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
       
    
    <section class="page_not_found section-padding">
       <div class="container">
           <div class="row">
                <div class="col-md-12 text-center" style="text-align:center">
                    <div class="huge_text"><p style="text-align: center;"><?echo $page_name ?></p></div>
                    <?echo $page_desc ?>
                    <!-- back to home btn -->
                    <a href="./" class="btn arrow_btn btn_hero btn_back_home fadeInX animated"> <span class="icofont icofont-long-arrow-left btn_icon"></span><span class="btn-text" data-hover="Back to Home">Back to Home</span></a>
                </div>
           </div>
       </div>
   </section> 
    
    

<?
include_once("footer.php");
?>