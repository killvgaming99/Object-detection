document.querySelector('header').addEventListener('mouseover', () => {
    document.querySelector('header').style.transform = 'translateY(-5px)';
    document.querySelector('header').style.background = 'linear-gradient(45deg, #333, #666)';
});

document.querySelector('header').addEventListener('mouseout', () => {
    document.querySelector('header').style.transform = 'translateY(0px)';
    document.querySelector('header').style.background = 'linear-gradient(45deg, #1f1f1f, #3c3c3c)';
});

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const aboutExpanded = document.querySelector('.about-expanded');
    const aboutBtn = document.querySelector('.hero-content button');

    aboutBtn.addEventListener('click', () => {
        aboutExpanded.style.display = 'block';
        aboutBtn.style.display = 'none';
    });

    // Handling form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.elements['name'].value;
        const phone = form.elements['phone'].value;
        const message = form.elements['message'].value;

        const mailtoLink = `mailto:sk9482379@gmail.com,killvgaming999@gmail.com?subject=New%20Contact%20Form%20Submission&body=Name: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;

        // Open the email client
        window.location.href = mailtoLink;

        // Optional: Display a message or reset the form
        alert('Thank you for your message! We will get back to you shortly.');
        form.reset();
    });
});
