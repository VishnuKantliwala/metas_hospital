

$('#appointmentForm').submit(function (e) {
    alert('call');
    e.preventDefault();

    let result;
    $('.loader_appointment_form').show(500);
    $('.btn_submit_appointment_form').hide(500);
    $('#result_appointmentForm').html("");


    // const formData = $(this);
    const formData = new FormData($(this)[0]);
    console.log(formData);
    setTimeout(() => {
        $.ajax({
            url: "appointment_mail.php",
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
            if($.trim(result) === '<div class="alert alert-success"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Message Sent!</div>')
            {
                $('#appointmentForm')[0].reset();

            }
            else
            {
                $('.btn_submit_appointment_form').show(500);
            }
            $('#result_appointmentForm').html(result);
            $('.loader_appointment_form').hide(500);
            
          });
    }, 500);
    
});

