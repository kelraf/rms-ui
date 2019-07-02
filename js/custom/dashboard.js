
// When The Document Loads
function dashboard() {

function headermenu() {
    let header = document.getElementById("header");
    let menu = document.getElementById("menu");

    let header_height = header.offsetHeight;

    menu.style.top = `-${header_height}px`;

    console.log(`-${header_height}px`);
}

headermenu()

let chartData = {
    chartLabel : null,
    elementId: null,
    type: null,
    labels : {
        labelOne: null,
        labelTwo: null,
    },
    data: {
        firstData: null,
        secondData: null
    }
}

function chart(chartData) {
    let chartOne = document.getElementById(chartData.elementId).getContext("2d");
    if (chartOne) {
        let chart = new Chart(chartOne, {
            type: chartData.type,
                data: {
                    labels: [chartData["labels"]["labelOne"], chartData["labels"]["labelTwo"]],
                    datasets: [{
                        label: chartData.chartLabel,
                        data: [chartData["data"]["firstData"], chartData["data"]["secondData"]],
                        backgroundColor: [
                            'rgb(255, 255, 255)',
                            'rgb(255, 0, 0)',
                        ]
                       
                    }]
                }
                ,
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
        })

    } else {
        alert("Could Not Access Chart One Canvas");
    }
}

let data = {
    chartData: "Occupied Vs Unoccupied",
    elementId: "chart-one",
    type: "pie",
    labels: {
        labelOne: "Occupied",
        labelTwo: "UnOccupied",
    },
    data: {
        firstData: 10,
        secondData: 20
    }
}

chart(data);


data.elementId = "chart-two";
data.labels.labelOne = "Payed";
data.labels.labelTwo = "Not Payed";
data.data.firstData = 200;
data.data.secondData = 1000
chart(data);

}

// console.log(document.onload)