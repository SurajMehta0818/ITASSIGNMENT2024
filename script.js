// Event listener for the login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    alert('Login functionality will be implemented soon.');
});

// Function to navigate to the Courses section
function showCourses() {
    window.location.href = "#courses";
}

    function showcalendar() {
        window.location.href = "#calendar"
}

function renderBarChart() {
    const ctx = document.getElementById('calendarChart').getContext('2d');

    const eventData = {
        'Math Test': 2,
        'Science Quiz': 1,
        'History Test': 1,
        'Programming Quiz': 1,
        'Physics Test': 1,
        'Chemistry Quiz': 1
    };

    const labels = Object.keys(eventData);
    const data = Object.values(eventData);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Events',
                data: data,
                backgroundColor: [
                    '#0073e6', '#28a745', '#ffc107', '#dc3545', '#6f42c1', '#17a2b8', '#fd7e14'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `${context.dataset.label}: ${context.parsed.y}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Event Count'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Event Type'
                    }
                }
            }
        }
    });
}

// Call the new chart rendering function on page load
window.onload = renderBarChart;
