//DROP MENU
let flag = false;
$(".header__btn").click(function(){
    if(flag == false){
        $(".header__nav__list").show();
        flag = true;
    } else {
        $(".header__nav__list").hide();
        flag = false;
    }
});

//IMG TO SVG
// $('img.footer-icon').each(function(){
//     var $img = $(this);
//     var imgClass = $img.attr('class');
//     var imgURL = $img.attr('src');
//     $.get(imgURL, function(data) {
//       var $svg = $(data).find('svg');
//       if(typeof imgClass !== 'undefined') {
//         $svg = $svg.attr('class', imgClass+' replaced-svg');
//       }
//       $svg = $svg.removeAttr('xmlns:a');
//       if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
//         $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
//       }
//       $img.replaceWith($svg);
//     }, 'xml');
//   });