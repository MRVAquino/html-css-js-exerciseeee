// Toggle between sections
document.getElementById('homeButton').addEventListener('click', function() {
    document.getElementById('home').classList.remove('d-none');
    document.getElementById('portfolio').classList.add('d-none');
    document.getElementById('contact').classList.add('d-none');
});

document.getElementById('portfolioButton').addEventListener('click', function() {
    document.getElementById('home').classList.add('d-none');
    document.getElementById('portfolio').classList.remove('d-none');
    document.getElementById('contact').classList.add('d-none');
});

document.getElementById('contactButton').addEventListener('click', function() {
    document.getElementById('home').classList.add('d-none');
    document.getElementById('portfolio').classList.add('d-none');
    document.getElementById('contact').classList.remove('d-none');
});

// Alert on contact
