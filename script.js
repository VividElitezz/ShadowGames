// Example script for interactive features like changing themes
document.getElementById('theme').addEventListener('change', function() {
    if (this.value === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = '#f4f4f4';
        document.body.style.color = 'black';
    }
});
