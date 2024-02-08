// loading-script.js

document.addEventListener("DOMContentLoaded", function () {
    // Show the loading screen initially
    showLoadingScreen();

    // Add your logic to hide the loading screen after a delay
    setTimeout(function () {
        hideLoadingScreen();
    }, 1500); // 2000 milliseconds = 2 seconds
});

function showLoadingScreen() {
    document.getElementById("loading-screen-container").innerHTML = '<iframe src="loading.html" id="loading-screen-iframe"></iframe>';
}

function hideLoadingScreen() {
    document.getElementById("loading-screen-container").innerHTML = '';
}