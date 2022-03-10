$(document).ready(function() {
    intro();
    mainVisual();
    notice();
    banner();
    logoRoll();
});

function intro() {
    setTimeout(function() {
        $('body.main').removeClass('over');
        $('#intro').animate({'opacity': '0'}, 400, function() {
            $('#intro').addClass('off');
        });
        $('#wrapper').animate({'opacity': '1'}, 400);
    }, 2000);
}

function mainVisual() {
    //비디오 재생 컨트롤
    $('#visual div.video-box a').on('click', function() {
        var videoAuto = $('video').get(0);
        
        $(this).toggleClass('on');
        if ($(this).hasClass('on')) {
            $(this).attr({'title': '동영상 재생'});
            videoAuto.pause();
        } else {
            $(this).attr({'title': '동영상 정지'});
            videoAuto.play();
        }
    });
    
    //퀵메뉴
    $('#visual div.quick-menu > a').on('click', function() {
        $(this).toggleClass('active');
        $(this).parent().toggleClass('on');
        $('#gnb li.depth1 > a').toggleClass('on');
        if ($(this).parent().hasClass('on')) {
            $(this).attr({'title': '바로가기 닫기'});
            //아이콘 딜레이 효과
            $('#visual div.quick-menu div.icon-box ul li').css({'opacity': '0'});
            $('#visual div.quick-menu div.icon-box ul li').each(function(i) {
                $(this).delay(i * 150).animate({'opacity': 1});
            });
        } else {
            $(this).attr({'title': '바로가기 열기'});
        }
    });
    $('#visual div.quick-menu > a').on('mouseenter mouseleave', function() {
        $(this).toggleClass('active');
    });
    
    //퀵메뉴 별 효과
    var starAmount = 150;
    var starInterval = 800;
    var $star = $('#visual div.quick-menu div.star-bg div.star');
    for (var i = 0; i < starAmount; i++) {
        var $stars = $('<span/>').addClass('stars');
        $star.append($stars);
    }
    $("#visual div.quick-menu div.star-bg div.star span.stars").each(function(){
        var stars = $(this);
        var starsO = 0.2 + (Math.random() * 1);
        var starsR = starInterval + (Math.random() * 100);
        stars.css({ 
            'transformOrigin': '0 0 ' + starsR + 'px',
            'transform': 'translate3d(0, 0, -' + starsR + 'px) rotateY(' + (Math.random() * 360) + 'deg) rotateX(' + (Math.random() * -50) + 'deg) scale(' + starsO + ',' + starsO + ')'
        });
    });    
}

function notice() {
    var set = $('#notice dl dt.on').next().css({'display': 'block'});
    
    $('#notice dl dt a').on('click', function() {
        $('#notice dl dt').removeClass('on');
        $(this).parent().addClass('on');

        if ($('#notice dl dt').hasClass('on')) {
            $('#notice dl dd').css({'display': 'none'});
            $(this).parent().next().css({'display': 'block'});
        }
    });
}

function banner() {
    var offsetLeft = 0;
    var boxWidth = $('#banner div.banner-slider div.box').outerWidth(true);
    var barWidth = 0;
    var minOffsetLeft = 0;
    var numBanner = $('#banner div.banner-slider ul.banner li').length;
    var bannerNow = 0;
    var bannerNext = 0;
    var bannerPrev = 0;
    var timerId = '';
    var isTimerOn = true;
    var timerSpeed = 8000;
    
	setTimeout(function() {
		$('#banner div.banner-slider ul.banner li').each(function() {
			barWidth += $(this).outerWidth(true);
		});
		$('#banner div.banner-slider ul.banner').css({'width': barWidth + 'px'});
		minOffsetLeft = boxWidth - barWidth;
		showBanner(1);
	}, 500);
	if (isTimerOn === true) {
			$('#banner div.banner-slider p.control a.prev').addClass('on');
		} else {
			$('#banner div.banner-slider p.control a.prev').removeClass('on');
		}

    $('#banner div.banner-slider p.control a.prev').on('click', function() {
        showBanner(bannerPrev);
    });
    $('#banner div.banner-slider p.control a.next').on('click', function() {
        showBanner(bannerNext);
    });

    if (isTimerOn === true) {
        timerId = setTimeout(function() {
            showBanner(bannerNext);
        }, timerSpeed);
        isTimerOn = true;
    } else {
        clearTimeout(timerId);
        isTimerOn = false;
    }

    function showBanner(n) {
        clearTimeout(timerId);
        offsetLeft = -$('#banner div.banner-slider ul.banner li:eq(' + (n - 1) + ')').position().left;
        if (offsetLeft < minOffsetLeft) {
            offsetLeft = minOffsetLeft;
            numBanner = n;
        }
        $('#banner div.banner-slider ul.banner').stop(true).animate({
            'left': offsetLeft + 'px'
        }, 500);
        bannerNow = n;
        bannerNext = (n + 1) > numBanner ? 1 : n + 1;
        bannerPrev = (n - 1) < 1 ? numBanner : n - 1;
        if (isTimerOn === true) {
            timerId = setTimeout(function () {
                showBanner(bannerNext);
            }, timerSpeed);
        }
    }    
}

function logoRoll() {
    var offsetLeft = 0;
    var boxWidth = $('#logo-roll div.banner-slide div.box').innerWidth();
    var barWidth = 0;
    var minOffsetLeft = 0;
    var numBanner = $('#logo-roll div.banner-slide ul.banner li').length;
    var bannerNow = 0;
    var bannerNext = 0;
    var bannerPrev = 0;
    var timerId = '';
    var isTimerOn = true;
    var timerSpeed = 5000;
    
    setTimeout(function() {
        $('#logo-roll div.banner-slide ul.banner li').each(function() {
            barWidth += $(this).outerWidth(true);
        });
        $('#logo-roll div.banner-slide ul.banner').css({'width': barWidth + 'px'});
        minOffsetLeft = boxWidth - barWidth;
        if (isTimerOn === true) {
            $('#logo-roll div.banner-slide p.control a.play').addClass('on');
        } else {
            $('#logo-roll div.banner-slide p.control a.play').removeClass('on');
        }
        showBanner(1);    
    }, 500);

    $('#logo-roll div.banner-slide p.control a.prev').on('click', function() {
        showBanner(bannerPrev);
    });
    $('#logo-roll div.banner-slide p.control a.next').on('click', function() {
        showBanner(bannerNext);
    });
    $('#logo-roll div.banner-slide p.control a.play').on('click', function() {
        if (isTimerOn === true) {
            clearTimeout(timerId);
            $(this).removeClass('on');
            isTimerOn = false;
        } else {
            timerId = setTimeout(function() {
                showBanner(bannerNext);
            }, timerSpeed);
            $(this).addClass('on');
            isTimerOn = true;
        }
    });

    function showBanner(n) {
        clearTimeout(timerId);
        offsetLeft = -$('#logo-roll div.banner-slide ul.banner li:eq(' + (n - 1) + ')').position().left;
        if (offsetLeft < minOffsetLeft) {
            offsetLeft = minOffsetLeft;
            numBanner = n;
        }
        $('#logo-roll div.banner-slide ul.banner').stop(true).animate({
            'left': offsetLeft + 'px'
        }, 100);
        bannerNow = n;
        bannerNext = (n + 1) > numBanner ? 1 : n + 1;
        bannerPrev = (n - 1) < 1 ? numBanner : n - 1;
        if (isTimerOn === true) {
            timerId = setTimeout(function () {
                showBanner(bannerNext);
            }, timerSpeed);
        }
    }    
}



