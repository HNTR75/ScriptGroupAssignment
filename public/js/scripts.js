// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// Fetch data from the server
fetch('/student-count-by-program')
  .then((response) => response.json())
  .then((data) => {
    const barChart = new Chart("barChart", {
      type: "bar",
      data: {
        labels: data.labels, // Use program names as labels
        datasets: [{
          label: "Students",
          data: data.data, // Use student counts as data
          backgroundColor: ["red", "green", "blue", "orange", "purple"]
        }]
      },
      options: {
        legend: { display: false },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });


// Fetch grade distribution data from the server
fetch('/grade-distribution')
  .then((response) => response.json())
  .then((data) => {
    // Map grade categories to numerical values
    const gradeCategoryToValue = {
      'Distinction': 4,
      'Credit': 3,
      'Pass': 2,
      'Fail': 1
    };

    // Update the scatter chart data and labels
    scatterChart.data.datasets[0].data = data.map((item) => ({
      x: gradeCategoryToValue[item.grade_category], // Map grade category to numerical value
      y: item.gradeCount
    }));
    scatterChart.data.labels = data.map((item) => item.grade_category);

    // Update the chart
    scatterChart.update();
  })
  .catch((error) => {
    console.error(error);
  });


// MULTIPLE LINES CHART (Replaces the doughnut chart)
const multiplelineChart = new Chart("multiplelineChart", {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [50, 30, 45, 60, 55, 70],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Expenses",
        data: [20, 25, 35, 30, 40, 28],
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Profit",
        data: [30, 5, 10, 30, 15, 42],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false
      }
    ]
  },
  options: {
    legend: { display: true },
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  }
});




// Fetch top-performing students data from the server
fetch('/top-performing-students')
.then((response) => response.json())
.then((data) => {
  // Extract student names and average grades
  const studentNames = data.map((student) => `${student.first_name} ${student.last_name}`);
  const averageGrades = data.map((student) => student.average_grade);

  // LINE CHART
  const lineChart = new Chart("lineChart", {
    type: "line",
    data: {
      labels: studentNames, // Use student names as labels
      datasets: [{
        label: "Average Grade",
        data: averageGrades, // Use average grades as data
        borderColor: "green",
        fill: false
      }]
    },
    options: {
      legend: { display: false },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            max: 100, // Adjust the max value as needed
          }
        }]
      }
    }
  });
})
.catch((error) => {
  console.error(error);
});

// Fetch gender distribution data from the server
fetch('/gender-distribution')
  .then((response) => response.json())
  .then((data) => {
    const labels = Object.keys(data); // ['Male', 'Female']
    const values = Object.values(data); // [250, 250] - Example values

    // PIE CHART for Gender Distribution
    const genderPieChart = new Chart("gender-pie-chart", {
      type: "pie",
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: ["#3e95cd", "#8e5ea2"], // Define colors for each category
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Gender Distribution'
        }
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
  
