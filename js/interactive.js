(function($) {
    'use strict';

    /*****************
    Variables
    ******************/

    // Top nav variables
    var $nav = $('#main-nav');
    var $icon = $('.icon');
    var animSlideSpeed = 450;
    var lineTop = $('.line-top');
    var lineMid = $('.line-mid');
    var lineBottom = $('.line-bottom');
    var alertClose = $('.close-btn');
    var sendMessage = $('.sendMessage');
    var bellAlert = $('#bell-icon');
    var trafficLine = $("#trafficChart");

    var chartPurpleColor = 'rgba(116,119,191,1)';
    var chartBlueColor = 'rgba(123,177,190,1)';
    var chartGreenColor = 'rgba(129,201,143,1)';
    var charPinkColor = 'rgba(191,116,143,1)';
    var chartLighterPurpleColor = 'rgba(116,119,191,.2)';
    var chartLighterGreenColor = 'rgba(129,201,143,.2)';
    var chartLighterBlueColor = 'rgba(123,177,190,.2)';
    var chartLighterPinkColor = 'rgba(191,116,143,.2)';

    //Dashboard variables
    var $chartNav = $('#chart-links li');

    //create the Notifcations for header popout
    let msg = '<div class="pop-notification"><h3>Notifcations</h3><ul><li>Adam mentioned you in a comment!</li><li>Tagged in 2 posts</li></ul></div>';

    $('header').append(msg);


    /*****************
      Chart creation
    ******************/

    let lineChartBorderWidth = 1.5
    let lineChartTickRadius = 6

    //Changeable line chart options
    let chartChangeOptions = {
        legend: false,
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    };

    //Hourly data
    let hourlyData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: 'Traffic',
            data: [500, 546, 1000, 800, 1856, 1500, 876, 2000, 1600, 2300, 1999],
            backgroundColor: chartLighterPurpleColor,
            borderColor: chartPurpleColor,
            pointColor: "rgba(220,180,0,1)",
            borderWidth: lineChartBorderWidth,
            radius: lineChartTickRadius

        }]
    };

    //Daily data
    let dailyData = {
        labels: ["16-22", "23-29", "6-12", "13-19", "27-3", "4-10", "18-24", "25-31"],
        datasets: [{
            label: 'Traffic',
            data: [1700, 1856, 1500, 1200, 1350, 1600, 1500, 1600],
            backgroundColor: chartLighterGreenColor,
            borderColor: chartGreenColor,
            pointColor: "rgba(220,180,0,1)",
            borderWidth: lineChartBorderWidth,
            radius: lineChartTickRadius

        }]
    };

    //Weekly data
    let weeklyData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26"],
        datasets: [{
            label: 'Traffic',
            data: [500, 1000, 1856, 876, 1600, 1999],
            backgroundColor: chartLighterBlueColor,
            borderColor: chartBlueColor,
            pointColor: "rgba(220,180,0,1)",
            borderWidth: lineChartBorderWidth,
            radius: lineChartTickRadius

        }]
    };

    //Monthly data
    let monthlyData = {
        labels: ["16-22", "30-5", "13-19", "27-3", "11-17", "25-31"],
        datasets: [{
            label: 'Traffic',
            data: [500, 546, 1000, 800, 1856, 1230],
            backgroundColor: chartLighterPinkColor,
            borderColor: charPinkColor,
            pointColor: "rgba(220,180,0,1)",
            borderWidth: lineChartBorderWidth,
            radius: lineChartTickRadius

        }]
    };

    // create initial change chart
    var trafficChangeChart = new Chart(trafficLine, {
        type: 'line',
        data: hourlyData,
        options: chartChangeOptions
    });



    /*****************
      Click Events
    ******************/

    //Bell icon clicked
    bellAlert.click(function(event) {

        $('.profile-alert').hide('fast');
        $('.pop-notification').slideToggle(300, 'easeInOutSine');
    });

    //close alert
    alertClose.click(function(event) {
        let clicked = $(this).parent();
        clicked.slideUp("fast");
    });

    //send message overlay
    sendMessage.click(function(event) {
        var imageContainer;
        var $overlay = $("<div class='overlay'></div>");

        var createMsg = function(msg) {
            imageContainer = "<div class='msgContainer'>";
            imageContainer += msg;
            imageContainer += "</div>";
        };


        //check form validation
        if ($('#user-search').val().length === 0 && $('.message-box').val().length === 0) {
            createMsg("Please fill out both fields");
        } else if ($('#user-search').val().length > 0 && $('.message-box').val().length === 0) {

            createMsg("Please type a message");
        } else if ($('#user-search').val().length === 0 && $('.message-box').val().length > 0) {
            createMsg("Please find a user");
        } else {
            createMsg("Message Sent");
        }

        //add overlay to DOM
        $overlay.append(imageContainer);
        $(".message-user").append($overlay);

        //show overlay
        $overlay.show().animate({
            opacity: '1',
            top: '7%'
        }, 'slow', 'easeOutBack', function() {

            //wait before removing popup
            setTimeout(function() {
                $overlay.animate({
                    opacity: '0',
                    top: '-67%'
                }, 'slow', 'easeInBack', function() {

                    //remove from DOM after anim complete
                    $overlay.remove();
                    sendMessage.blur();
                });
            }, 1000);
        });
    });

    //event for nav icon
    $icon.click(function(event) {
        $nav.css('display', 'block');

        lineTop.toggleClass('line-top-anim');
        lineMid.toggleClass('line-mid-anim');
        lineBottom.toggleClass('line-bottom-anim');

        //animate nav from side
        $nav.animate({
                left: parseInt($nav.css('left'), 10) == 0 ? -$nav.outerWidth() : 0
            }, animSlideSpeed,
            'easeInOutSine',
            function() {

                if (parseInt($nav.css('left'), 10) < 0) {
                    //remove from DOM after animation
                    $nav.css('display', 'none');
                } else {}
            });
    });

    //event for chart nav
    $chartNav.click(function(event) {
        event.preventDefault();
        let clicked = $(this);
        let elText = clicked.children('a').text();

        //button background change class
        $chartNav.removeClass('active');
        clicked.addClass('active');

        //change charts
        if (elText == "Hourly") {
            trafficChangeChart.config.data = hourlyData;
            trafficChangeChart.update();

        } else if (elText == "Daily") {
            trafficChangeChart.config.data = dailyData;
            trafficChangeChart.update();
        } else if (elText == "Weekly") {
            trafficChangeChart.config.data = weeklyData;
            trafficChangeChart.update();
        } else {
            trafficChangeChart.config.data = monthlyData;
            trafficChangeChart.update();
        }
    });

    /*****************
      Auto-fill events
    ******************/

    var autofillNames = [
        'Kaye Mckinny',
        'April Gloss',
        'Angelita Gottfried',
        'Aida Jarret',
        'Alethea Bengtson',
        'Coral Stackpole',
        'Nicholas Traughber',
        'Drusilla Gushiken',
        'Curtis Kramp',
        'Bertie Isenhour',
        'Daniela Ricci',
        'Dolores Shimkus',
        'Shona Mccaughey',
        'Dinah Premo',
        'Orlando Harps',
        'Fredricka Cranfill',
        'Wynona Petree',
        'Ronny Holte',
        'Trina Strandberg',
        'Janie Blunk',
        'Wai Mayo',
        'Wesley Gallaway',
        'Dewayne Daigneault',
        'Barbera Ayoub',
        'Lizbeth Schippers',
        'Salvatore Bryner',
        'Johnna Riddick',
        'Karri Yelvington',
        'Kaleigh Stowe',
        'Elliot Para',
        'Annelle Lona',
        'Jane Berkeley',
        'Rochell Owsley',
        'Maurita Papadopoulos',
        'Yolonda Heavrin',
        'Lino Groh',
        'Alexa Dunton',
        'Tiara Cappiello',
        'Joette Lynes',
        'Mattie Addis',
        'Ricky Paoletti',
        'Stephenie Oxendine',
        'Verona Brandl',
        'Esther Balls',
        'Darell Mccallion',
        'Suellen Tieman',
        'Juli Jenson',
        'Etha Collis',
        'Elvira Brauer',
        'Jillian Tellier'
    ];

    $("#user-search").autocomplete({
        source: autofillNames
    });

    /*****************
      Save settings events
    ******************/

    //set the checkbox based on it's saved value
    $(function() {

        var email = localStorage.getItem("emailChecked");
        var profile = localStorage.getItem("profileChecked");
        var timezone = localStorage.getItem("timezoneValue");

        if (email !== null) {
            $('#email-notification').attr("checked", "checked");
        }
        if (profile !== null) {
            $('#profile-public').attr("checked", "checked");
        }

        //set timezone that is saved
        if (timezone !== null) {
          $('#timezone').val(timezone);
        } else {
          $('#timezone').val('gmt');
        }
    });


    //save selected settings
    $('#save-settings').click(function() {
        let $overlay = $('.overlay2');

        localStorage.timezoneValue = $('#timezone').val();

        if ($('#email-notification').is(":checked")) {
            localStorage.emailChecked = 1;
        } else {
            localStorage.removeItem("emailChecked");
        }

        if ($('#profile-public').is(":checked")) {
            localStorage.profileChecked = 1;
        } else {
            localStorage.removeItem("profileChecked");
        }

        //animate the overlay
        $overlay.fadeIn(500, function() {
          setTimeout(function() {
              $overlay.fadeOut(500, function() {
              $('#save-settings').blur();
              });
          }, 1000);
        });

    });


})(jQuery);
