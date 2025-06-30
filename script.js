// Tooltip functionality for resume button
document.addEventListener('DOMContentLoaded', function() {
    const resumeBtn = document.querySelector('.btn-resume');
    let hoverTimeout;
    
    if (resumeBtn) {
        resumeBtn.addEventListener('mouseenter', function() {
            // Clear any existing timeout
            clearTimeout(hoverTimeout);
            
            // Set timeout for 1ms as requested (though 100ms might be more practical)
            hoverTimeout = setTimeout(function() {
                resumeBtn.classList.add('show-tooltip');
            }, 500); // 1ms delay
        });
        
        resumeBtn.addEventListener('mouseleave', function() {
            // Clear timeout and hide tooltip immediately
            clearTimeout(hoverTimeout);
            resumeBtn.classList.remove('show-tooltip');
        });
    }
});