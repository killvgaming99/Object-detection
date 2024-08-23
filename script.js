// Example JavaScript functionality
document.querySelector('.cta').addEventListener('click', function() {
    alert('Welcome to SRK Enterprises!');
});

// Search functionality (placeholder)
document.querySelector('.search-container button').addEventListener('click', function() {
    const query = document.querySelector('.search-container input').value;
    alert(`Searching for: ${query}`);
});
