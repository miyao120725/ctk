/**
 * Created by Administrator on 2016/7/26 0026.
 */
//����޸ĸ�����Ϣ
$(".change").click(function(){
    $(".not_filled").css("display","none");
    $(".form_center").css("display","block");

})
//���ȡ���޸ĸ�����Ϣ
$(".cancel").click(function(){
    $(".form_center").css("display","none");
    $(".personal_information").css("display","block");

})
$(".recompose").click(function(){
    $(".personal_information").css("display","none");
    $(".form_center").css("display","block");
})
//����������֤����λ
$(".ensconce").click(function(){
    var idcard= $("#idcard").val();
    $("#idcard").val(idcard.replace(idcard.substr(-4,4), "****"));
})
//����鿴���֤����λ
window.onload=function(){
    var card= $("#card").html();
    $("#card").html(card.replace(card.substr(-4,4), "****"));
    $(".look_over").click(function(){
        $("#card").html(card);
    })
}