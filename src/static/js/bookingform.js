$(document).ready(function() {

    $("#booking-form").on("submit", function(e) {
        e.preventDefault();
        console.log("Sending Booking");

        // Ref: http://blog.danielw.co/Sending-Email-from-Github-Pages/
        $.ajax({
            //- btoa("//formspree.io/neville@dastur.me.uk")
            url: atob("Ly9mb3Jtc3ByZWUuaW8vbmV2aWxsZUBkYXN0dXIubWUudWs="),
            type: "POST",
            data: $("#booking-form").serialize(),
            dataType: "json",
            success: function(json) {
                console.log("ok");
                $("#booking-success").show();
                setTimeout(function(){
                    $("#booking-success").hide();
                },
                6000);
            },
            error: function(xhr, errmsg, err) {
                console.log("err: " + errmsg);
                $("#booking-fail").show();
                setTimeout(function(){
                    $("#booking-fail").hide();
                },
                6000);
            }
        });
    });
    
});

