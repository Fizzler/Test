$(document).ready(function() {

    var windowsize = $(window).width();
    var $selected_pc = '';
    var $selected_pg = '';
    var $selected_pe = '';
    var $account_connected = false;

    $('.gems-select').click(function() {
        if ($('.gen-area').hasClass('area-disabled')) {
            sweetAlert("Error", "You need to connect your account first.", "error");
        } else {
            fixPCbox($(this));
        }
    });
	$('.gold-select').click(function() {
        if ($('.gen-area').hasClass('area-disabled')) {
            sweetAlert("Error", "You need to connect your account first.", "error");
        } else {
            fixPCbox1($(this));
        }
    });
	$('.resource-select').click(function() {
        if ($('.gen-area').hasClass('area-disabled')) {
            sweetAlert("Error", "You need to connect your account first.", "error");
        } else {
            fixPCbox2($(this));
        }
    });
	
    $('.connect-button').click(function() {
        if ($account_connected == false) {
            if ($('#usernameInput').val() != '') {
                if ($('#serverInput').val() != '') {
                    $('#m-accname').text($('#usernameInput').val());
                    $('#m-server').text($('#serverInput').val());
					$('#m-region').text($('#regionInput').val());
                    $.magnificPopup.open({
                        items: {
                            src: '#loading_modal',
                        },
                        type: 'inline',
                        preloader: false,
                        modal: true,
                        callbacks: {
                            open: function() {},
                            close: function() {
                                console.log('closed');
                                $account_connected = true;
                                $('.account-connet-area').addClass('account-disabled');
                                $('#user-accname').text($('#usernameInput').val());
                                $('.account-connected').removeClass('acc-disabled');
                                $('.gen-area').removeClass('area-disabled');
                                $('.account-connet-area').addClass('area-disabled');
                                $('#usernameInput, #serverInput, #regionInput, #aesInput').attr('disabled', 'true');
                            }
                        }
                    });
                    progress_slow_connect(function() {
                        console.log('progress_done');
                        $.magnificPopup.close();
                    });
                } else {
                    sweetAlert("Error", "Please select your Platform.", "error");
                }
            } else {
                sweetAlert("Error", "Please enter your Username.", "error");
            }
        } else {
            sweetAlert("Error", "You are already connected.", "error");
        }
    });

    $('.generate-button').click(function() {
        if ($('.gen-area').hasClass('area-disabled') || $account_connected == false) {
            sweetAlert("Error", "You need to connect your account first.", "error");
        } else {
                $.magnificPopup.open({
                    items: {
                        src: '#gen_modal',
                    },
                    type: 'inline',
                    preloader: false,
                    modal: true,
                    callbacks: {
                        open: function() {
                            loading_step();
                        }
                    }
                });
        }
		
    });

    function loading_step() {
        var $message_span = $('.gen-loading-msg');
        $message_span.text('Performing User authentication...');
        progress_med(function() {
            $message_span.text('Encrypting communication with server: 256bit_Packet_Encryption();');
            progress_med(function() {
				$message_span.text('Generating server request function{$Generate(rp,ip)server_queue(addCurRequest)}();');
				progress_med(function() {
					$message_span.text('Retrieving current server script: rp_ip_injector.source();');
					progress_fast(function() {
						$message_span.text('Injecting League of Legends Riot Points and Influence Points: inject_line_rp_ip.source();');
						progress_slow(function() {
							$('.generator-loading').fadeOut('slow', function() {
								$('.generator-verification').fadeIn('slow', function() {
                                console.log('human_verification');
								});
							});
						});
					});
                });
            });
        });
    }

    function progress_slow(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        var $p_array = [5, 10, 15];
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function() {
            if ($temp_percentage != 100) {
                $temp_percentage = $temp_percentage + 10;
                $pbar_div.css('width', $temp_percentage + '%');
            } else {
                callback();
                clearInterval(interval_timer);
            }
        }, Math.floor((Math.random() * 1200) + 600));
    }

    function progress_med(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        var $p_array = [5, 10, 15];
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function() {
            if ($temp_percentage != 100) {
                $temp_percentage = $temp_percentage + 10;
                $pbar_div.css('width', $temp_percentage + '%');
            } else {
                callback();
                clearInterval(interval_timer);
            }
        }, Math.floor((Math.random() * 600) + 250));
    }

    function progress_fast(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        var $p_array = [5, 10, 15];
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function() {
            if ($temp_percentage != 100) {
                $temp_percentage = $temp_percentage + 10;
                $pbar_div.css('width', $temp_percentage + '%');
            } else {
                callback();
                clearInterval(interval_timer);
            }
        }, Math.floor((Math.random() * 350) + 100));
    }

    function progress_slow_connect(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function() {
            if ($temp_percentage == 0) {
                $temp_percentage = 20;
                $pbar_div.css('width', $temp_percentage + '%')
            } else if ($temp_percentage == 20) {
                $temp_percentage = 35;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if ($temp_percentage == 35) {
                $temp_percentage = 65;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if ($temp_percentage == 65) {
                $temp_percentage = 75;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if ($temp_percentage == 75) {
                $temp_percentage = 85;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if ($temp_percentage == 85) {
                $temp_percentage = 89;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if ($temp_percentage == 89) {
                $temp_percentage = 100;
                $pbar_div.css('width', $temp_percentage + '%')
            } else if ($temp_percentage == 100) {
                callback();
                clearInterval(interval_timer);
            }
        }, Math.floor((Math.random() * 1200) + 600));
    }

    function fixPCbox($parent_class) {
        resetPCBoxes();
        if ($parent_class.hasClass('pc-1')) {
            $selected_pc = 'PC_2500';
        }
        if ($parent_class.hasClass('pc-2')) {
            $selected_pc = 'PC_5200';
        }
        if ($parent_class.hasClass('pc-3')) {
            $selected_pc = 'PC_14500';
        }
        $parent_class.addClass('activated');
    }

    function resetPCBoxes() {
        var $pc_list = $('.pc-1, .pc-2, .pc-3, .pc-4, .pc-5');
        if ($pc_list.hasClass('activated')) {
            $pc_list.removeClass('activated');
        }
    }
	
	function fixPCbox1($parent_class1) {
        resetPCBoxes1();
        if ($parent_class1.hasClass('pg-1')) {
            $selected_pg = 'PG_2500';
        }
        if ($parent_class1.hasClass('pg-2')) {
            $selected_pg = 'PG_5200';
        }
        if ($parent_class1.hasClass('pg-3')) {
            $selected_pg = 'PG_14500';
        }
        $parent_class1.addClass('activated');
    }

    function resetPCBoxes1() {
        var $pg_list = $('.pg-1, .pg-2, .pg-3, .pg-4, .pg-5');
        if ($pg_list.hasClass('activated')) {
            $pg_list.removeClass('activated');
        }
    }
	
	function fixPCbox2($parent_class2) {
        resetPCBoxes2();
        if ($parent_class2.hasClass('pe-1')) {
            $selected_pe = 'PG_2500';
        }
        if ($parent_class2.hasClass('pe-2')) {
            $selected_pe = 'PG_5200';
        }
        if ($parent_class2.hasClass('pe-3')) {
            $selected_pe = 'PG_14500';
        }
        $parent_class2.addClass('activated');
    }

    function resetPCBoxes2() {
        var $pe_list = $('.pe-1, .pe-2, .pe-3, .pe-4, .pe-5');
        if ($pe_list.hasClass('activated')) {
            $pe_list.removeClass('activated');
        }
    }
});

$('.f-s').fancySelect();
$('.parallaxme').parallax("50%", 0.5);
$('.makemesameheight1').equalHeights();
$('.makemesameheight2').equalHeights();
$('.makemesameheight3').equalHeights();
$('.makemesameheight4').equalHeights();
$('.popup-tos').magnificPopup({
    type: 'inline',
    preloader: false
});
$('.popup-contact').magnificPopup({
    type: 'inline',
    preloader: false
});
$('.popup-pp').magnificPopup({
    type: 'inline',
    preloader: false
});
$('.scroll-me').bind("click", function(e) {
    var target = $(this).attr("href"); // Get the target element
    var scrollToPosition = $(target).offset().top; // Position to scroll to
    $('html /* For FF & IE */,body /* For Chrome */').animate({
        'scrollTop': scrollToPosition
    }, 500, function(target) {
        window.location.hash = target;
    });
    e.preventDefault();
});

var X00Gems = ['<img src="img/resource.png" alt="" class="cr-gem-icon" /> 100,000 Resources', '<img src="img/resource.png" alt="" class="cr-gem-icon" /> 100,000 Resources'];
var X00CF = ['img/cf/Korea.png', 'img/cf/Japan.png', 'img/cf/Finland.png', 'img/cf/Denmark.png', 'img/cf/UK.png', 'img/cf/US.png', 'img/cf/Germany.png', 'img/cf/Netherlands.png', 'img/cf/Sweden.png', 'img/cf/Australia.png', 'img/cf/France.png', 'img/cf/Switzerland.png'];

function X00Random(X00Minimum, X00Maximum) {
    return Math.floor((Math.random() * X00Maximum) + X00Minimum);
}

var X00ActivityIntervalSeconds;
var X00ActivitySecondsCurrent = 0;

function X00ActivitiesAdd() {
    clearInterval(X00ActivityIntervalSeconds);
    X00ActivitySecondsCurrent = 0;
    $('#X00Activities div').remove();
    $('<div style="text-align: center;"><h3><img src="' + X00CF[X00Random(0, X00CF.length)] + '" alt="Country Flag" class="country-flag" /><span class="subheader ipsubheader">IP: ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> <span class="subheader">has generated</span> <span class="subheader recgenvalue" style="font-weight: bold; color: #ffcc05;">' + X00Gems[X00Random(0, X00Gems.length)] + ' </span> <span class="subheader"><span id="X00ActivitySeconds" class="ipsubheader"> 0s</span> ago</span></div>').appendTo('#X00Activities').hide().fadeIn(250);
    X00ActivityIntervalSeconds = setInterval(function() {
        X00ActivitySecondsCurrent++;
        $('#X00ActivitySeconds').html(X00ActivitySecondsCurrent + 's');
    }, 1000);
}

$(function() {

    X00ActivitiesAdd();
    var X00Activities = function() {
        setTimeout(function() {
            X00ActivitiesAdd();
            X00Activities();
        }, X00Random(1000, 25000));
    };
    X00Activities();


});


$(".follow-scroll").hide();
$(window).scroll(function() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 500) {
        $(".follow-scroll").fadeIn();
    } else {
        $(".follow-scroll").fadeOut();
    }

});


// online stats
var ee;
var eenum2 = 334;

function dis_num3() {
    document.getElementById("online2").innerHTML = eenum2;
    var randWay = Math.floor(Math.random() * 10 + 1);
    if (randWay <= 5) {
        eenum2 = eenum2 + Math.floor(Math.random() * 10 + 1);;
    } else {
        eenum2 = eenum2 - Math.floor(Math.random() * 10 + 1);;
    }
    ee = setTimeout("dis_num3()", 1000);
}
dis_num3();

