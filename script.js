document.getElementById("showSquareBtn").addEventListener("click", function() {
    let square = document.getElementById("square");

    // If the square is hidden, show it
    if (square.style.display === "none" || square.style.display === "") {
        square.style.display = "block";
        square.style.opacity = "1";
        square.style.transform = "translate(-50%, -50%) scale(1)";
    } else {
        // Fade out and expand
        square.style.opacity = "0";
        square.style.transform = "translate(-50%, -50%) scale(2)";

        // After animation ends, hide the square
        setTimeout(() => {
            square.style.display = "none";
            square.style.transform = "translate(-50%, -50%) scale(1)"; // Reset size
        }, 1000);
    }
});
