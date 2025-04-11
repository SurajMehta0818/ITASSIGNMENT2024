// Wait for the page to load before initializing the chart
window.onload = function() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    // Define the data for the chart
    const data = {
        labels: ['Mathematics', 'Science', 'Programming'], // Labels for the courses
        datasets: [{
            label: 'Course Progress',
            data: [80, 65, 90], 
            backgroundColor: ['#4caf50', '#ff9800', '#2196f3'], 
            borderColor: ['#388e3c', '#f57c00', '#1976d2'], 
            borderWidth: 1
        }]
    };


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%'; 
                    }
                }
            }
        }
    };

   
    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
};
