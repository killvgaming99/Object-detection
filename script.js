// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Apply the ripple effect to the water card
    $('#water-card').ripples({
        resolution: 512, // Higher resolution for smoother ripples
        dropRadius: 20,  // The radius of the ripple effect
        perturbance: 0.04, // The amount of ripple distortion
    });
});
