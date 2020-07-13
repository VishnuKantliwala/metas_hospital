var busy = false;
var offset = 0;
var file = document.getElementById("helper").getAttribute("file-name");
var limit = 0;
var cat_id = document.getElementById("helper").getAttribute("cat-id");

// alert(cat_id);
function displayRecords(lim, off) {
   
$.ajax({
    type: "GET",
    
    async: true,
    url: file,
    data: "limit=" + lim + "&offset=" + off + "&cat_id=" + cat_id,
    cache: true,
    beforeSend: function() {
    busy = true;
    },
    success: function(html) {
        
        $("#results").html(html);
        $("#ddl__opd").prop('disabled', false);
    
    $('#loader_image').hide();
    // alert($.trim(html)+"");
    if ($.trim(html) == "") {
        
        busy=true;

    } else {
        busy = false;
        //$("#loader_message").html('<button class="btn btn-default" type="button">Loading please wait...</button>').show();
    }

    }
});
}

$(document).ready(function() {

    
// start to load the first set of data
if (busy == false) {
    busy = true;
    // start to load the first set of data
    displayRecords(limit, offset);
    
}

  $( "#ddl__opd" ).change(function () {
    // var str = "";
    // alert($(this).val());
    cat_id = $(this).val();
    busy = true;
    $('#loader_image').show(500);
    // $( "#ddl__opd" ).attr('enable',false);
    $("#ddl__opd").prop('disabled', true);
    $("#results").html("");

    setTimeout(() => {
        displayRecords(limit, offset);    
    }, 500);
    
    console.log($(this));
    
    $('.cat_name').html($( "#ddl__opd option:selected" ).text());
    // alert($(this).attr("cat-name"));
  });

});

