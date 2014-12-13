$(function(){
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 500);
        return false;
    });

    $("#pitchLink").click(function()
    {
        var elementToHide = document.getElementById("showedTextPitch");
        elementToHide.style.display = "none";
        var elementToShow = document.getElementById("hiddenTextPitch");
        elementToShow.style.display = "block";
    });

    $(".menuItem").click(function(){
        $(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
    var hash =  window.location.hash;
    if (hash == '#video'){
        $(".active").removeClass("active");
        $("#videoItem").addClass('active');
    }
    if (hash == '#contacts'){
        $(".active").removeClass("active");
        $("#contactItem").addClass('active');
    }
});
