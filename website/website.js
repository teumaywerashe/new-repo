document.getElementById('contact').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('thanks-message').style.display = 'block';
    this.reset();
});
const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', toggleNav);

function toggleNav() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('show');
}
let now = new Date();
document.getElementById('year').innerHTML = `${now.getFullYear()}`;