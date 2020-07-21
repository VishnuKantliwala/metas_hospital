
<?
	include("../connect.php");
	$cn=new connect();
$cn->connectdb();
	$id=$_GET['id'];

	$query = "SELECT * FROM `tbl_camp` WHERE camp_id =$id";

	$result = $cn->selectdb($query);
    $data = mysqli_fetch_assoc($result);
    extract($data);
	
	$query = "INSERT INTO `tbl_camp`(
		`camp_title`, 
		`description`, 
		`cat_id`, 
		`image_name`, 
		`recordListingID`, 
		`meta_tag_title`, 
		`meta_tag_description`, 
		`meta_tag_keywords`, 
		`slug`,
        `caption`
        ) 
        VALUES (
            '$camp_title',
            '$description',
            '$cat_id',
            '',
            0,
            '$meta_tag_title',
            '$meta_tag_description',
            '$meta_tag_keywords',
            '$slug',
            '$caption'
            )";
	$cn->selectdb($query);

	$last_id = mysqli_insert_id($cn->getConnection());
	$sql=$cn->selectdb("SELECT * FROM `tbl_camp` where camp_id=".$last_id);
	$row = mysqli_fetch_assoc($sql);
	//echo "<script>alert('".$last_id."');</script>";
	$cn->selectdb("update tbl_camp set `camp_title`='".$row['camp_title']." (copy)' where camp_id=".$last_id);
	
	header('Location:campView.php');
?>