$(document).ready(function() {

    $("form").submit(function(event) {
        event.preventDefault()
        var inputData =$("input#nameInput").val();
        var inputEmail=$("input#emailInput").val();
        var textAreaData= $("textarea#textareaInput").val();
        
        //Form Validation
        
        $(".error").remove();
        
        if (inputData.length < 1) {
            $('#nameInput').after('<span class="error">This field is required</span>');
        }
        else if (inputEmail.length < 1) {
            $('#emailInput').after('<span class="error">This field is required</span>');
            
        }else{
            var regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            var validEmail = regEx.test(inputEmail);
            if (!validEmail) {
                $('#emailInput').after('<span class="error">Enter a valid email</span>');
            }else{
                if (textAreaData.length < 1) {
                    $('#textareaInput').after('<span class="error">This field is required</span>');
                }  else {

                        alert("Hello " +inputData+" ,we have received your message and thank you for contacting us.");
                        $("#form")[0].reset();
                    }
                }
            }
        });
        
        //Icons animation
        var icn = $(".icons");
        $.each(icn, function(index, element){
                $(element).click(function(){
                $(".description"+(index+1)).toggle();
                $(this).toggle();
            })
            $(".description"+(index+1)).click(function(){
                $(this).toggle();
                $(element).toggle();

            } );
        });
        //portofolio animation
        var porto = $(".porto");
        $.each(porto, function(index, element){
                $(element).mouseover(function(){
                $(".descript"+index).css({"opacity":"1", "display":"unset","position":"absolute", "top":"20%","left":"25%","border":"1px","width":"60%","background-color":"rgba(255,255,255,0.555)"});
                $(this).css({"opacity":"0.4"});
            })
            $(".descript"+index).mouseleave(function(){
                $(this).css({"opacity":"0"});
                $(element).css({"opacity":"1"});

            } );
        });
        
});