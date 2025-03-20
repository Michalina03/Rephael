// // Skrypt do hamburger menu
// const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('nav');

// hamburger.addEventListener('click', () => {
//     nav.classList.toggle('active'); // Toggle klasy "active" nawigacji
// });
// Hamburger.js
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});
