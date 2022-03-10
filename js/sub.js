$(document).ready(function() {
    subLocation();
});

/* 0713 */
function subLocation() {
    $('#location > ul > li + li > a').on('click', function() {
        $(this).siblings('ul').slideToggle();
        $(this).parent().toggleClass('on');
    });
    $('#location > ul > li + li').on('mouseleave',  function() {
        $(this).children('ul').slideUp();
	   $(this).removeClass('on'); 
    });
}

/* sub03 : notification_foundation_notice */
function tableHover() {
    $('#notice div.content table tbody tr td').on('mouseenter', function() {
        $('#notice div.content table tbody tr').removeClass('on');
        $(this).parent().addClass('on');
    });
    $('#notice div.content table').on('mouseleave', function() {
        $('#notice div.content table tbody tr').removeClass('on');
    });
}

/* sub04 : agency_about_greetings */
function listTab() {
    $('#greetings div.content ul li a').on('click', function(e) {
        $('#greetings div.content ul li').removeClass('on');
        $(this).parent().addClass('on');
        $('#greetings div.content div.visual-box').toggleClass('on');
        
        if ($(e.target).parent().hasClass('general')) {
            $('#greetings div.title-box h3 span:eq(1)').addClass('on').siblings().removeClass('on');
            $('#greetings div.content div.text-box div:eq(1)').addClass('on').siblings().removeClass('on');
            $('#greetings div.content p.sign span:eq(1)').addClass('on').siblings().removeClass('on');
        } else {
            $('#greetings div.title-box h3 span:eq(0)').addClass('on').siblings().removeClass('on');
            $('#greetings div.content div.text-box div:eq(0)').addClass('on').siblings().removeClass('on');
            $('#greetings div.content p.sign span:eq(0)').addClass('on').siblings().removeClass('on');
        }
    });
}