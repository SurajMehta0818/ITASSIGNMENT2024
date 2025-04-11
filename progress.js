document.addEventListener('DOMContentLoaded', function() {
    // Sample data - replace with your actual data
    const courseData = {
        labels: ['Math', 'Science', 'History', 'Programming', 'Physics'],
        datasets: [{
            label: 'Grades',
            data: [85, 92, 78, 95, 88],
            backgroundColor: [
                '#0073e6',
                '#28a745',
                '#ffc107',
                '#6f42c1',
                '#17a2b8'
            ],
            borderWidth: 1
        }]
    };

    const studyData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Hours Studied',
            data: [12, 19, 15, 8],
            backgroundColor: '#0073e6',
            borderColor: '#005bb5',
            borderWidth: 2,
            fill: true
        }]
    };

    const assessments = [
        { course: 'Math', name: 'Midterm Exam', date: '2025-04-08', score: '85/100', status: 'completed' },
        { course: 'Science', name: 'Lab Report', date: '2025-04-15', score: 'Pending', status: 'pending' },
        { course: 'Programming', name: 'Project Submission', date: '2025-04-20', score: '95/100', status: 'completed' },
        { course: 'History', name: 'Research Paper', date: '2025-04-25', score: 'Pending', status: 'pending' },
        { course: 'Physics', name: 'Chapter Quiz', date: '2025-04-30', score: '88/100', status: 'completed' }
    ];

    // Initialize charts
    const gradesCtx = document.getElementById('gradesChart').getContext('2d');
    new Chart(gradesCtx, {
        type: 'bar',
        data: courseData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Grade (%)'
                    }
                }
            }
        }
    });

    const studyCtx = document.getElementById('studyChart').getContext('2d');
    new Chart(studyCtx, {
        type: 'line',
        data: studyData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Hours'
                    }
                }
            }
        }
    });

    // Populate assessments table
    const tableBody = document.querySelector('.assessments-table tbody');
    assessments.forEach(assessment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${assessment.course}</td>
            <td>${assessment.name}</td>
            <td>${assessment.date}</td>
            <td>${assessment.score}</td>
            <td class="status-${assessment.status}">${assessment.status.charAt(0).toUpperCase() + assessment.status.slice(1)}</td>
        `;
        tableBody.appendChild(row);
    });

    // Update navigation active state
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});