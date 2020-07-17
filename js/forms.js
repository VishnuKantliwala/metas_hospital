$('.radio_a').click(()=>{
    $('.rradio_a').click();
});
$('.radio_na').click(()=>{
    $('.rradio_na').click();
});
$('#inquiry_form').submit(function (e) {
    
    e.preventDefault();

    let result;
    $('.loader_inquiry_form').show(500);
    $('.btn_submit_inquiry_form').hide(500);


    const formData = $(this);
    setTimeout(() => {
        $.ajax({
            type: "POST",
            url: "submit_inquiry.php",
            data: formData.serialize(),
            cache : false,
            processData: false,
            success: (result)=>{
                // alert(result)
                return result;
            }
          }).then((result)=>{
            if($.trim(result) == '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Message Sent Successfully! </div>')
            {
                $('#inquiry_form')[0].reset();

            }
            else
            {
                $('.btn_submit_inquiry_form').show(500);
            }
            $('#result_inquiry_form').html(result);
            $('.loader_inquiry_form').hide(500);
            
          });
    }, 500);
    
});


$('#applyForm').submit(function (e) {
    
    e.preventDefault();

    let result;
    $('.loader_contact_form').show(500);
    $('.btn_submit_apply_form').hide(500);


    // const formData = $(this);
    const formData = new FormData($(this)[0]);
    console.log(formData);
    setTimeout(() => {
        $.ajax({
            url: "apply_mail.php",
            method: "POST",
            data: formData,
            enctype: 'multipart/form-data',
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: (result)=>{
                // alert(result)
                return result;
            }
          }).then((result)=>{
            if($.trim(result) == '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Message Sent Successfully! </div>')
            {
                $('#applyForm')[0].reset();

            }
            else
            {
                $('.btn_submit_apply_form').show(500);
            }
            $('#result_applyForm').html(result);
            $('.loader_contact_form').hide(500);
            
          });
    }, 500);
    
});



$('#contactForm').submit(function (e) {
    
    e.preventDefault();
    // alert('call');
    let result;
    $('.btn_submit_contact').html('<span class="btn-text" data-hover="SEnd now">Sending....</span> <span class="icofont icofont-paper-plane btn_icon"></span>');
    $('.btn_submit_contact').attr('disabled', true);
    $('.btn_submit_contactForm').hide(500);


    const formData = $(this);
    setTimeout(() => {
        $.ajax({
            type: "POST",
            url: "contact_mail.php",
            data: formData.serialize(),
            cache : false,
            processData: false,
            success: (result)=>{
                // alert(result)
                return result;
            }
          }).then((result)=>{

            if($.trim(result) == '<div class="alert alert-success"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Message Sent! </div>')
            {
                $('#contactForm')[0].reset();
                $('.btn_submit_contact').hide(300);

            }
            else
            {
                $('.btn_submit_contact').html('<span class="btn-text" data-hover="SEnd now">Send now</span> <span class="icofont icofont-paper-plane btn_icon"></span>');
            }
            $('#result_contactForm').html(result);
            $('.btn_submit_contact').attr('disabled', false);
            
            
          });
    }, 500);
    
});


$('#faq_form').submit(function (e) {
    
    e.preventDefault();

    let result;
    $('.loader_faq_form').show(500);
    $('.btn_submit_faq_form').hide(500);


    const formData = $(this);
    setTimeout(() => {
        $.ajax({
            type: "POST",
            url: "submit_faq.php",
            data: formData.serialize(),
            cache : false,
            processData: false,
            success: (result)=>{
                // alert(result)
                return result;
            }
          }).then((result)=>{
            if($.trim(result) == '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Message Sent Successfully! </div>')
            {
                $('#faq_form')[0].reset();

            }
            else
            {
                $('.btn_submit_faq_form').show(500);
            }
            $('#result_faq_form').html(result);
            $('.loader_faq_form').hide(500);
            
          });
    }, 500);
    
});
