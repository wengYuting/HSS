$(".box").click(function(){
    let introBoxHeight=$(".intro_content").outerHeight();
    $(this).closest("li").toggleClass("active").siblings("li").removeClass("active"); 
    $(".intro_box").css("height",0);
    $(".active .intro_box").css("height",introBoxHeight+"px");
    $(".fakebox").css("height",0)
    $(".active .fakebox").css("height",introBoxHeight+"px");
    resizeMethod()
})

$(window).resize(function(){
    resizeMethod()
})

var resizeMethod = function(){
    let firstboxPos=$("#firstbox").position().left;
    let boxWidth=$(".box").outerWidth();
    let introBoxWidth
    
    let leftPos=firstboxPos+10;
    let windowWidth=$(window).width();

    if(windowWidth>855){
      introBoxWidth=boxWidth*4+60;  
    }else if(windowWidth<=855 && windowWidth>655){
        introBoxWidth=boxWidth*3+40;
    }else if(windowWidth<=655 && windowWidth>455){
        introBoxWidth=boxWidth*2+20;
    }else{
        introBoxWidth=windowWidth;
        leftPos=0;
    }
    $(".intro_box").css({
        'width': introBoxWidth+"px",
        'left':leftPos+"px"
    })
}

