'use strict';

var trafficLine = $("#trafficChart");
var trafficBar = $("#dailyTrafficChart");
var mobileUsersChart = $("#mobileUsersChart");

var chartPurpleColor = 'rgba(116,119,191,1)';
var chartBlueColor = '#7bb1be';
var chartGreenColor = 'rgba(129,201,143,1)';
var chartLighterPurpleColor = 'rgba(116,119,191,.2)';

var trafficChart = new Chart(trafficLine, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: 'Traffic',
            data: [500, 546, 1000, 800, 1856, 1500, 876, 2000, 1600, 2300, 1999],
            backgroundColor: chartLighterPurpleColor,
            borderColor: chartPurpleColor,
            borderWidth: 1.5,
            radius: 6

        }]
    },
    options: {
        legend: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});

var trafficDailyChart = new Chart(trafficBar, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: 'Traffic',
            data: [50, 150, 198, 200, 95, 42, 215],
            backgroundColor: [
                chartPurpleColor,
                chartPurpleColor,
                chartPurpleColor,
                chartPurpleColor,
                chartPurpleColor,
                chartPurpleColor,
                chartPurpleColor

            ]
        }]
    },
    options: {
        legend: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var mobileChart = new Chart(mobileUsersChart, {
    type: 'doughnut',
    data: {
        labels: ["Phone", "Tablet", "Desktop"],
        datasets: [{
            label: 'Traffic',
            data: [20, 50, 30],
            backgroundColor: [
                chartPurpleColor,
                chartBlueColor,
                chartGreenColor
            ],
            borderWidth: 0

        }]
    },
    options: {
        animation: {
            animateScale: true
        },

        scales: {

            xAxes: [{
              display: false,
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
              display: false,
                gridLines: {
                    display: false
                }
            }]
        }
    }
});
