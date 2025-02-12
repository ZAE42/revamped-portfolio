document.getElementById('enterButton').addEventListener('click', function() {
    console.log("testclick");
    this.style.opacity = '0';
    setTimeout(() => this.style.display = 'none', 500);
    const image = document.getElementById('image');
    image.classList.add('hidden');
    setTimeout(() => image.style.display = 'none', 1000);
});