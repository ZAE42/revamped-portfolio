document.getElementById('enterButton').addEventListener('click', function() {
    console.log("testclick");
    this.style.opacity = '0';
    setTimeout(() => this.style.display = 'none', 500);
    
    const image = document.getElementById('image');
    const background= document.getElementById('image2');
    image.classList.add('hidden');
    background.classList.add('hidden');
    setTimeout(() => {
        image.style.display = 'none';
        background.style.display = 'none';
        window.location.href = "menu.html"; // Redirects to menu.html
    }, 1000);
});
