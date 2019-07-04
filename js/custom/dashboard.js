
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

// Dashboard Tab
let dashboardTab = document.getElementById("dashboard");
dashboardTab.onclick = function() {

    let element = document.querySelector(".active-custom");
    element.classList.remove("active-custom");
    this.classList.add("active-custom")    

}

// apartments
let apartments = document.getElementById("apartments");
apartments.onclick = function() {
    // alert("Success");

    let element = document.querySelector(".active-custom");
    element.classList.remove("active-custom");

    this.classList.add("active-custom");

}

// houses
let houses = document.getElementById("houses");
houses.onclick = function() {

    let element = document.querySelector(".active-custom");
    element.classList.remove("active-custom");
    this.classList.add("active-custom");

}


// tenants 
let tenants = document.getElementById("tenants");
tenants.onclick = function() {

    let element = document.querySelector(".active-custom");
    element.classList.remove("active-custom");

    this.classList.add("active-custom");

}


// payment
let payment = document.getElementById("payment");
payment.onclick = function() {

    let element = document.querySelector(".active-custom");
    element.classList.remove("active-custom");

    this.classList.add("active-custom");

}



// Create Data Object for Chart
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

// Create Chart For Dashboard On Load of the Page
// Chart One
chart(data);


// Edit The Data Object Then Call The Method To Create chart Two
data.elementId = "chart-two";
data.labels.labelOne = "Payed";
data.labels.labelTwo = "Not Payed";
data.data.firstData = 200;
data.data.secondData = 1000
chart(data);

data.elementId = "chart-three";
chart(data);

data.elementId = "chart-four";
chart(data);

data.elementId = "chart-five";
chart(data);

data.elementId = "chart-six";
chart(data);

data.elementId = "chart-seven";
chart(data);

// Apartment Profile
data.elementId = "apartments";
chart(data);


}

// console.log(document.onload)