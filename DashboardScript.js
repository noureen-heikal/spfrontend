// Toggle mobile sidebar
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        !sidebar.contains(e.target) && 
        !menuToggle.contains(e.target) &&
        sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// Show details modal
function showDetails(type) {
    const modal = document.getElementById('detailsModal');
    const modalBody = document.getElementById('modalBody');
    
    let detailsHTML = '';
    
    switch(type) {
        case 'enrollment-letter':
            detailsHTML = `
                <div class="detail-row">
                    <div class="detail-label">Type:</div>
                    <div class="detail-value">Enrollment Letter</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Date:</div>
                    <div class="detail-value">2025-07-13</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Language:</div>
                    <div class="detail-value">English</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Quantity:</div>
                    <div class="detail-value">1</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Institute:</div>
                    <div class="detail-value">For embassy</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Department:</div>
                    <div class="detail-value">No Department</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Payment Ticket:</div>
                    <div class="detail-value">100090</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Status:</div>
                    <div class="detail-value"><span class="status pending">Pending Approval</span></div>
                </div>
            `;
            break;
            
        case 'transcript':
            detailsHTML = `
                <div class="detail-row">
                    <div class="detail-label">Type:</div>
                    <div class="detail-value">Transcript Request</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Date:</div>
                    <div class="detail-value">2025-07-10</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Language:</div>
                    <div class="detail-value">English & Arabic</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Quantity:</div>
                    <div class="detail-value">2</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Institute:</div>
                    <div class="detail-value">Graduate Studies</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Department:</div>
                    <div class="detail-value">Student Affairs</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Payment Ticket:</div>
                    <div class="detail-value">100091 (Not Paid)</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Status:</div>
                    <div class="detail-value"><span class="status canceled">Canceled</span></div>
                </div>
            `;
            break;
            
        case 'course-change':
            detailsHTML = `
                <div class="detail-row">
                    <div class="detail-label">Type:</div>
                    <div class="detail-value">Course Change Request</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Date:</div>
                    <div class="detail-value">2025-07-05</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">From Course:</div>
                    <div class="detail-value">Business Ethics</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">To Course:</div>
                    <div class="detail-value">Digital Marketing</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Reason:</div>
                    <div class="detail-value">Schedule conflict with work</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Department:</div>
                    <div class="detail-value">Academic Affairs</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Payment Ticket:</div>
                    <div class="detail-value">100088</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Status:</div>
                    <div class="detail-value"><span class="status approved">Approved</span></div>
                </div>
            `;
            break;
            
        case 'medical-excuse':
            detailsHTML = `
                <div class="detail-row">
                    <div class="detail-label">Type:</div>
                    <div class="detail-value">Medical Excuse</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Date:</div>
                    <div class="detail-value">2025-02-17</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Duration:</div>
                    <div class="detail-value">3 days (Feb 17-19, 2025)</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Doctor:</div>
                    <div class="detail-value">Dr. Ahmed Mostafa</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Clinic/Hospital:</div>
                    <div class="detail-value">Al-Salam International Hospital</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Reason:</div>
                    <div class="detail-value">Severe flu with high fever</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Department:</div>
                    <div class="detail-value">Student Affairs</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Status:</div>
                    <div class="detail-value"><span class="status approved">Approved</span></div>
                </div>
            `;
            break;
    }
    
    modalBody.innerHTML = detailsHTML;
    modal.style.display = 'flex';
}

// Close modal
function closeModal() {
    document.getElementById('detailsModal').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('detailsModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Simulate payment process
document.querySelectorAll('.pay-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Redirecting to payment gateway...');
    });
});

// Simulate cancel process
document.querySelectorAll('.cancel-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (confirm('Are you sure you want to cancel this request?')) {
            alert('Request has been canceled.');
        }
    });
});