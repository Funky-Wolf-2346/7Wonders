const home = document.getElementById('homeLink');
const north = document.getElementById('northLink');
const south= document.getElementById('southLink');
const west= document.getElementById('westLink');
const east= document.getElementById('eastLink');
const about = document.getElementById('aboutLink');
const contact = document.getElementById('contactLink');
const btn = document.getElementById('navbar-toggler');

home.addEventListener('click',function () {
    this.classList.add('active');
    about.classList.remove('active');
    contact.classList.remove('active');
    north.classList.remove('active');
    south.classList.remove('active');
    west.classList.remove('active');
    east.classList.remove('active');
});

about.addEventListener('click',function () {
    this.classList.add('active');
    home.classList.remove('active');
    contact.classList.remove('active');
    north.classList.remove('active');
    south.classList.remove('active');
    west.classList.remove('active');
    east.classList.remove('active');
});

contact.addEventListener('click',function () {
    this.classList.add('active');
    home.classList.remove('active');
    about.classList.remove('active');
    north.classList.remove('active');
    south.classList.remove('active');
    west.classList.remove('active');
    east.classList.remove('active');
});

north.addEventListener('click',function () {
    this.classList.add('active');
    home.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
    south.classList.remove('active');
    west.classList.remove('active');
    east.classList.remove('active');
});

south.addEventListener('click',function () {
    this.classList.add('active');
    home.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
    north.classList.remove('active');
    west.classList.remove('active');
    east.classList.remove('active');
});

west.addEventListener('click',function () {
    this.classList.add('active');
    home.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
    north.classList.remove('active');
    south.classList.remove('active');
    east.classList.remove('active');
});

east.addEventListener('click',function () {
    this.classList.add('active');
    home.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
    north.classList.remove('active');
    south.classList.remove('active');
    west.classList.remove('active');
});

