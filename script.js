function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var message = document.getElementsByName('message')[0].value;
    
    var emailBody = 'Name: ' + name + '\n';
    emailBody += 'Email: ' + email + '\n';
    emailBody += 'Message: ' + message + '\n';
    
    var mailtoLink = 'mailto:sk9482379@gmail.com,killvgaming999@gmail.com?subject=New Message from SRK Enterprises&body=' + encodeURIComponent(emailBody);
    window.location.href = mailtoLink;
    
    alert('Thank you for your message! We will get back to you soon.');
    
    document.getElementById('contact-form').reset();
});
