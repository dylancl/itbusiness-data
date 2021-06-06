let designChart = document.getElementById('designChart').getContext('2d');
let chart1 = new Chart(designChart, {
 type: 'bar',
 data: {
  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  datasets: [
   {
    label: 'Votes',
    data: [0, 0, 0, 0, 1, 3, 5, 2, 4, 2, 1],
    backgroundColor: ['rgba(2, 49, 145, 0.3)'],
    borderColor: ['rgb(2, 49, 145)'],
    borderWidth: 1,
    fill: true,
   }
  ]
 },
 options: {
  scales: {
   y: {
    beginAtZero: true,
    max: 10,
   }
  }
 }
});

let conceptChart = document.getElementById('conceptChart').getContext('2d');
let chart2 = new Chart(conceptChart, {
 type: 'bar',
 data: {
  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  datasets: [
   {
    label: 'Votes',
    data: [0, 0, 0, 0, 1, 2, 0, 3, 4, 3, 5],
    backgroundColor: ['rgba(2, 49, 145, 0.3)'],
    borderColor: ['rgb(2, 49, 145)'],
    borderWidth: 1,
    fill: true,
   }
  ]
 },
 options: {
  scales: {
   y: {
    beginAtZero: true,
    max: 10,
   }
  }
 }
});

let usabilityChart = document.getElementById('usabilityChart').getContext('2d');
let chart3 = new Chart(usabilityChart, {
 type: 'bar',
 data: {
  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  datasets: [
   {
    label: 'Votes',
    data: [0, 0, 0, 0, 1, 4, 6, 3, 4, 0, 0],
    backgroundColor: ['rgba(2, 49, 145, 0.3)'],
    borderColor: ['rgb(2, 49, 145)'],
    borderWidth: 1,
    fill: true,
   }
  ]
 },
 options: {
  scales: {
   y: {
    beginAtZero: true,
    max: 10,
   }
  }
 }
});

let generalPieChart = document.getElementById('generalPieChart').getContext('2d');
let chart4 = new Chart(generalPieChart, {
 type: 'pie',
 data: {
  labels: ['Very good', 'Good', 'Average', 'Bad', 'Very Bad'],
  datasets: [
   {
    label: 'Votes',
    data: [4, 10, 3, 1, 0],
    backgroundColor: [
     '#001f3f',
     '#0074D9',
     '#7FDBFF',
     '#FF4136',
     '#85144b'
    ],
    borderColor: ['rgb(2, 49, 145)'],
    borderWidth: 1,
    fill: true,
   }
  ]
 }
});

let recommendPieChart = document.getElementById('recommendPieChart').getContext('2d');
let chart5 = new Chart(recommendPieChart, {
 type: 'pie',
 data: {
  labels: ['Yes', 'No'],
  datasets: [
   {
    label: 'Votes',
    data: [15, 3],
    backgroundColor: [
     '#001f3f',
     '#0074D9',
     '#7FDBFF',
     '#FF4136',
     '#85144b'
    ],
    borderColor: ['rgb(2, 49, 145)'],
    borderWidth: 1,
    fill: true,
   }
  ]
 }
});