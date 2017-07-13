/**
 * Created by Administrator on 2016/7/26 0026.
 */
//立即注册验证
//密码验证
function valiPwd(txtpwd){
    var reg=/^\w{6,16}$/;
    var span=document.getElementsByClassName("valispan")[0];
    if(reg.test(txtpwd.value.trim())) {
        return true;
    }else {
        span.innerHTML="密码在6-16位之间 ";
        return false;
    }

}
//二次密码验证
function valiPwdTwo(txtpwds){
    var span=document.getElementsByClassName("valispan")[0];
    if(txtpwds.value.trim()==""||pwd.value.trim()==""){
        txtpwds.setAttribute('placeholder','');
        return false;
    }else if(txtpwds.value==pwd.value){
        return true;
    }else{
        span.innerHTML="两次密码输入不一致，请重新输入 ";
        return false;
    }
}
//手机号码验证
function valiPhone(txtPhone){
    var reg=/(\s)*(1){1}([34578])+(\d){9}/
    var span=document.getElementsByClassName("valispan")[0];
    if(txtPhone.value.trim()!=""){
        if(reg.test(txtPhone.value.trim())) {
            span.innerHTML="";
            //返回true
            return true;
        }else {//否则
            span.innerHTML="请输入正确的手机号码";
            //返回false
            return false;
        }
    }else if(txtPhone.value===""){
        span.innerHTML="手机号码不能为空";
        //返回false
        return false;
    }
}
//点击眼睛隐藏或显示密码
$(".hide_eyes").click(function(){
    var a=true;
    $(this).toggleClass("hide_eyes");
    $(this).toggleClass("show_eyes");
    if($(this).prev("").attr('type')==="password"){
        a=false;
        $(this).prev("").attr("type","text");
    }
    if(a==true) {
        $(this).prev("").attr("type", "password");
    }
})
$(".hide_eye").click(function(){
    var a=true;
    $(this).toggleClass("hide_eye");
    $(this).toggleClass("show_eye");
    if($(this).prev("").attr('type')==="password"){
        a=false;
        $(this).prev("").attr("type","text");
    }
    if(a==true) {
        $(this).prev("").attr("type", "password");
    }
})