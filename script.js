function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function openVideoPopup(videoSource) {
    const videoPopup = document.getElementById("videoPopup");
    const videoPlayer = document.getElementById("videoPlayer");

    videoPlayer.src = videoSource;
    videoPopup.style.display = "block";
}

function closeVideoPopup() {
    const videoPopup = document.getElementById("videoPopup");
    videoPopup.style.display = "none";
}

// Assign click event listeners to project buttons
document.getElementById("project1Btn").addEventListener("click", function () {
    openVideoPopup("./assets/Demo-of-WOWJava.mp4");
});

document.getElementById("project2Btn").addEventListener("click", function () {
    openVideoPopup("./assets/demoMultiClient.mp4");
});
