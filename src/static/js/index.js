new WOW().init();

$(document).ready(function() {

    $("#cta-form").on("submit", function(e) {
        e.preventDefault();
        console.log("Sending CTA");

        $.ajax({
            url: atob("Ly9mb3Jtc3ByZWUuaW8vbmV2aWxsZUBkYXN0dXIubWUudWs=") //-"//formspree.io/neville@dastur.me.uk",
            type: "POST",
            data: $("#cta-form").serialize(),
            dataType: "json",
            success: function(json) {
                console.log("ok");
            },
            error: function(xhr, errmsg, err) {
                console.log("err: " + errmsg);
            }
        });
    });
    
});

