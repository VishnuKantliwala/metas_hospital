
<?
$page_id = 2;
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
<?
$sql = $cn->selectdb("select slug, page_name, page_desc, image, page_id from tbl_page where page_id =3");
$row = $cn->fetchAssoc($sql);
extract($row);
?> 

<section id="about_us" class="section-padding reveal animated" data-reveal-anim="fadeIn">
  <div class="container">
      <div class="about_us_wrapper">
          <div class="col-md-6 col-sm-6 v_middle">
              <div class="image-container">
                  <div class="image">
                      <img src="page/big_img/<?echo $image?>"  alt="<?echo $page_name?>">
                  </div>
              </div>
          </div>
          <div class="col-md-6 col-sm-6 v_middle">
             <!-- SECTION TITLE -->
              <div class="section_title">
                  <div class="title_subtext">
                      <span><?echo $slug ?></span>
                  </div>
                  <div class="title">
                      <h1><?echo $page_name ?></h1>
                  </div>
              </div><!-- /SECTION TITLE ENDS -->

              <!-- ABOUT US CONTENT-->
              <div class="about_us_text">
              <p class="color1"> <?echo strip_tags($page_desc); ?> </p>
                  
              </div><!-- /ABOUT US CONTENT ENDS -->
          </div>
      </div>
      <?
      $sqlExtraAbout = $cn->selectdb("select title, small_desc from tbl_addmore where page_id = ".$page_id);
      if( $cn->numRows($sqlExtraAbout) > 0 )
      {
          $icons = array('icofont-eye-alt', 'icofont-bullseye', 'icofont-key');
      
      ?>
      <div class="about_us_detail">
          <div class="row">
            <?
            $i=0;
            while($rowExtraAbout = $cn->fetchAssoc($sqlExtraAbout))
            {
                extract($rowExtraAbout);
            ?>
           <div class="col-md-4 col-sm-4" style="padding-right:0px;padding-left:0px">
                    <div class="about_us_point <?php if($i==0){ echo 'backcolor1';} elseif($i==1){ echo 'backcolor2';} elseif($i==2){ echo 'backcolor3';} ?>" style="padding:10px 20px; height:240px;">
                        <h4 class="about_us_point_title"><span class="icofont <?echo $icons[$i]?>"></span>
                            <?echo $title ?>
                        </h4>

                        <p class="point_in_detail">
                            <?echo strip_tags($small_desc) ?>
                        </p>
                    </div>
                </div>
            <?
                $i++;
            }
            ?>

            
          </div>
      </div>
      <?
      }
      ?>
  </div>
</section>

<?
$sqlPresident = $cn->selectdb("SELECT page_name, slug, page_desc, image from tbl_page where page_id = 4");
if( $cn->numRows($sqlPresident) > 0 )
{
    $rowPresident = $cn->fetchAssoc($sqlPresident);
    extract($rowPresident);

?>
<section id="blog" class="section-padding">
        <div class="container">
            <div class="row">
                <!-- left blog posts -->
                <div class="col-md-12 col-sm-12">
                    

                    <!-- single blog item -->
                    <div class="single_blog_item reveal animated" data-reveal-anim="fadeInUpShort">
                        <div class="row">
                            <!-- left image -->
                            <div class="col-md-5 col-xs-12 col-sm-6">
                                <div class="blog_image">
                                    <img src="page/big_img/<?echo $image?>" alt="<?echo $page_name?>">
                                </div>
                                <span class="blog_meta"><?echo $slug ?> </span>
                            </div>

                            <!-- right content -->
                            <div class="col-md-7 col-xs-12 col-sm-6 blog_post">
                                
                                <div class="blog_title">
                                    <a href="single_blog_right_sidebar.html"><h4><?echo $page_name?></h4></a>
                                </div>

                                <?echo $page_desc ?>
                               
                            </div>
                        </div>
                    </div>

                    
                   

                </div>
            </div>
        </div>
            

        
    </section>
<?
}
?>
<!-- MAIN PART END -->
    
    
   


<?php include 'footer2.php'; ?>
