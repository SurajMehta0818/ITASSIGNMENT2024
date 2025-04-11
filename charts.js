window.onload = function () {
    const ctx = document.getElementById('progress-chart').getContext('2d');
    const progressChart = new Chart(ctx, {
        type: 'doughnut', // You can change this type to bar, line, etc.
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                label: 'Progress',
                data: [70, 30],  // 70% completed and 30% remaining
                backgroundColor: ['#4caf50', '#e0e0e0'],
                borderColor: '#ddd',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true,
                }
            }
        }
    });
};
