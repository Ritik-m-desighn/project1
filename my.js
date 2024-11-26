const buttons = document.querySelectorAll(".songs");
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const songUrl = button.getAttribute("data-url");
        audioSource.src = songUrl;
        audioPlayer.load();
    });
});