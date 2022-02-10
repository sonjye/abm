
  
    var ctx = document.getElementById("myChdart").getContext('2d');
    
    var myChart = new Chart(ctx, {

        type: "horizontalBar",
        data: {
            labels: [""],
            datasets: [
                { label: "Chorme", data: [5, 25], backgroundColor: "rgba(255, 115, 115, 1)" },
                { label: "Naver", data: [15, 10], backgroundColor: "rgba(84, 115, 232, 1)" },
                { label: "Samsung", data: [10, 8], backgroundColor: "rgba(119, 191, 224, 1)" },
                { label: "IE", data: [5, 25], backgroundColor: "rgba(255, 186, 0, 1)" },
                { label: "Facebook", data: [15, 10], backgroundColor: "rgba(126, 84, 232, 1)" },
                { label: "Safari", data: [10, 8], backgroundColor: "rgba(58, 81, 165, 1)" },
                { label: "Daumkakao", data: [10, 8], backgroundColor: "rgba(55, 209, 185, 1)" },
                { label: "Firefox", data: [10, 8], backgroundColor: "rgba(119, 61, 190, 1)" }
            ],
            backgroundColor: ['rgba(255,255,255,1)']
        },
        options: {
            legend: {
                display: false, //label 숨김
            },
            reponsive: false, //차트 위치 지정한 곳으로 옮길 수 있게
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    },
                }],
            },
            plugins: {
                stacked100: { enable: true }
            }
        }
    })

