/**
 * Created by Administrator on 2016/7/26 0026.
 */
//点击修改个人信息
$(".change").click(function(){
    $(".not_filled").css("display","none");
    $(".form_center").css("display","block");

})
//点击取消修改个人信息
$(".cancel").click(function(){
    $(".form_center").css("display","none");
    $(".personal_information").css("display","block");

})
$(".recompose").click(function(){
    $(".personal_information").css("display","none");
    $(".form_center").css("display","block");
})
//点击隐藏身份证后四位
$(".ensconce").click(function(){
    var idcard= $("#idcard").val();
    $("#idcard").val(idcard.replace(idcard.substr(-4,4), "****"));
})
//点击查看身份证后四位
window.onload=function(){
    var card= $("#card").html();
    $("#card").html(card.replace(card.substr(-4,4), "****"));
    $(".look_over").click(function(){
        $("#card").html(card);
    })
}