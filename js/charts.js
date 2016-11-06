'use strict';

var trafficLine = $("#trafficChart");
var trafficBar = $("#dailyTrafficChart");
var mobileUsersChart = $("#mobileUsersChart");

//chart colors
var chartPurpleColor = 'rgba(116,119,191,1)';
var chartBlueColor = 'rgba(123,177,190,1)';
var chartGreenColor = 'rgba(129,201,143,1)';
var charPinkColor = 'rgba(191,116,143,1)';
var chartLighterPurpleColor = 'rgba(116,119,191,.2)';
var chartLighterGreenColor = 'rgba(129,201,143,.2)';
var chartLighterBlueColor = 'rgba(123,177,190,.2)';
var chartLighterPinkColor = 'rgba(191,116,143,.2)';

Chart.defaults.global.elements.point.backgroundColor = chartBlueColor
Chart.defaults.global.elements.point.hoverRadius = 8

var trafficBarChart = new Chart(trafficBar, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: 'Traffic',
            data: [50, 150, 198, 200, 95, 42, 215],
            backgroundColor:chartPurpleColor
        },
        {
            label: 'Traffic2',
            data: [120, 180, 98, 20, 195, 242, 205],
            backgroundColor:charPinkColor
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
        labels: ["Phone", "Tablet", "Desktop", "Other"],
        datasets: [{
            label: 'Traffic',
            data: [20, 50, 30, 10],
            backgroundColor: [
                chartPurpleColor,
                chartBlueColor,
                chartGreenColor,
                charPinkColor
            ],
            borderWidth: 0

        }]
    },
    options: {
      legend: {
        labels: {
          fontSize: 12,
          padding: 15
        },
        position: 'top'
      },
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
