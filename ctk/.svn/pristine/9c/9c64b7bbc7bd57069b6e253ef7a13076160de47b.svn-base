$('document').ready(function(e) {
    $('.btn_tijiao').click(function(){
		$('.get_results').css("display","block");
		$('.the_form').css("display","none")
		if($('.get_results').css('display')=='block'){
			$('.daikuan_liul').css("opacity","0.7");
			$('.daikuan_liu ul li.daikuan_liul').next('li').css("background","#7abd54");
			$('.daikuan_liu ul li.daikuan_liul').next('li').find('span').css("background","#7abd54");
			}
		
		})
	if($('.loan_success').css('display')=='block'){
		$('.daikuan_liul').css("opacity","0.7");
		$('.daikuan_liu ul li.daikuan_liul').next('li').css({"background":"#7abd54","opacity":"0.7"});
	    $('.daikuan_liu ul li.daikuan_liul').next('li').find('span').css("background","#7abd54");
		$('.daikuan_liu ul li:last').css("background","#7abd54");
		$('.daikuan_liu ul li:last').find('span').css("background","#7abd54");
		}
		
		/*****导航条*****/
$(".Tow_navbar>div>ul li").click(function(){
	
        $(this).addClass("nav_active").siblings("li").removeClass("nav_active");
		
	
	})
	var aSPAN = document.getElementsByClassName('dian_j');
		var aUl = document.getElementsByClassName('daoh');
	    for(var i=0; i<aSPAN.length; i++){
			  aSPAN[i].onclick=function(){//把所有元素给一个事件
				         
					   for(var i=0; i<aSPAN.length; i++){
							  aUl[i].style.display = 'none';
							  aSPAN[i].i = i;
					   }
				          aUl[this.i].style.display = 'block';
				 }
			
			 }
			 
  $(".jiekuan>div>ul>li").click(function(){
    $(this).addClass("btn-primary").siblings("li").removeClass("btn-primary");
})
});
$(function() {
    $('.loan_p>label').click(function(){
        var radioId = $(this).attr('name');
        $('.loan_p>label').removeAttr('class') && $(this).attr('class', 'checked');
        $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
    });
	 var sfzhm= $(".sfzhm").html();
    $(".sfzhm").html(sfzhm.replace(sfzhm.substr(-4,4), "****"));
    $(".sfzhm").next("td").find("a").click(function(){
        $(".sfzhm").html(sfzhm);
    })

    var tel_hm= $(".tel_hm").html();
    $(".tel_hm").html(tel_hm.replace(tel_hm.substr(3,4), "****"));
    $(".tel_hm").next("td").find("a").click(function(){
        $(".tel_hm").html(tel_hm);
    })
});