var windowHeight=$(window).height();
var lastScrollTop;

$(window).scroll(function(){
    let scrollTop=$(this).scrollTop();
    let pageHeaderHeight=$("#pageHeader").outerHeight();
    if(scrollTop>windowHeight/2){
        $("#topBtn").addClass("show"); // 顯示回到頁首按鈕
        $("#menu_bars").removeClass("pageTop"); //  手機版menu移位 
    }
    else{
        $("#topBtn").removeClass("show");
        $("#menu_bars").addClass("pageTop");
    }
    //index顯示固定nav
    // if(xxx == 'index.html'){
    //     if(){

    //     }else if
    // }
    if(scrollTop>=windowHeight/2 && scrollTop<lastScrollTop){
        $("#index_fix_nav").addClass("show");
    }else{
        $("#index_fix_nav").removeClass("show");
    }
     lastScrollTop=scrollTop;
    //page fix nav
    if(scrollTop>=pageHeaderHeight){
        $("#page_fix_nav").addClass("show").removeClass("pageTop"); 
    }else{
        $("#page_fix_nav").removeClass("show").addClass("pageTop");
    }   
    
})
// 回到頁首按鈕
$("#topBtn").click(function(){
    $("html, body").animate({
        scrollTop:0
    },500)
})
//手機menu
$("#menu_bars").click(function(){
    $(".mobile_menu").toggleClass("active");
  })
  $(".menu_list").click(function(){
    $(".mobile_menu").toggleClass("active");
})

//平滑捲動至錨點
$("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
