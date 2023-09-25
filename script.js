document.getElementById("btn").addEventListener("click", function () {
    const popup = document.getElementById("popup");
    const progressBar = document.getElementById("progressBar");
    const items = document.getElementById("items");
    const completionText = document.getElementById("text");
    const cancel = document.getElementById("cancel");
    const percent = document.getElementById("percent");

    // Display the popup
    cancel.addEventListener("click", function () {
        clearInterval(interval);
        popup.style.display = "none";
    });
    popup.style.display = "flex";

    // Simulate progress
    let progress = 0;
    const interval = setInterval(function () {
        progress = progress + Math.floor(Math.random() * 5 + 1);
        if (progress < 100) {
            percent.textContent = progress + "%";
            progressBar.style.transform = `scalex(${progress}%)`;
        } else {
            progressBar.style.transform = `scalex(100%)`;
            percent.textContent = "100%";
            completionText.style.display = "block";
            items.style.display = "none";
        }
    }, 190);
});
