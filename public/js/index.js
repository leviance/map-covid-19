$(document).ready(function(){
    $("#col-today-deaths").hide();
    $("#col-new-patients").hide();

    $(".col-today-deaths").on("click",function(){
        $("#col-today-deaths").show();
        $("#col-total-deaths").hide();
    })

    $(".col-total-deaths").on('click',function(){
        $("#col-today-deaths").hide();
        $("#col-total-deaths").show();
    })

    $(".col-new-patients").on('click',function(){
        $("#col-new-patients").show();
        $("#col-total-recovered").hide();
    })

    $(".col-total-recovered").on('click',function(){
        $("#col-new-patients").hide();
        $("#col-total-recovered").show();
    })
})