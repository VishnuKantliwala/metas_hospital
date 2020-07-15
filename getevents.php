<?
session_start();
include_once("connect.php");
$cn=new connect(); 
$cn->connectdb();
				
$limit = (intval($_GET['limit']) != 0 ) ? $_GET['limit'] : 1;
$offset = (intval($_GET['offset']) != 0 ) ? $_GET['offset'] : 0;


$sql1 = $cn->selectdb("select event_title, slug, description, image_name, event_date from tbl_event  order by event_date DESC LIMIT $limit OFFSET $offset");

if ($cn->numRows($sql1) > 0) 
{
    while($row = $cn->fetchAssoc($sql1))
    {
        extract($row);
        $href = "events/".urlencode($slug);
        $date = date("M d, Y",strtotime($event_date));

?>
<div class="widget reveal animated" data-reveal-anim="fadeInRight">
    <div class="widget_heading">
        <h4><?echo $event_title ?></h4>
    </div>
    <div class="recent_posts">
        <ul>
            <li><a>
                    <div class="single_recent_post v_middle" style="width: 100%;">
                        <?echo $description ?>
                        <span class="recent_post_meta">Date of Event: <?echo $date ?></span>
                        
                           
                        
                    </div>
                </a>
                
                </li>

        </ul>
        <div class="read_more my_read_more">
            <a href="<?echo $href?>">Read More <span class="icofont icofont-long-arrow-right"></span></a>
        </div>
    </div>
</div>

<?
        }
    }
    else{
        //echo "<script>window.open('Products/".$cid."/1/','_SELF');</script>";
    }
					
?>