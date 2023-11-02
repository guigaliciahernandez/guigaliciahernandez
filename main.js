document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.circle');
    const text = document.querySelector('.text');

    circle.addEventListener('click', function() {
        text.style.opacity = '1';
    });
});


