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
});
