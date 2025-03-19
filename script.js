// 🎬 Function to Trigger Animation
document.getElementById("animateBtn").addEventListener("click", function() {
    let box = document.getElementById("animatedBox");
    box.classList.toggle("animate");
});

// 🌙 Function to Toggle Theme & Save Preference
document.getElementById("themeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Save theme preference in localStorage
    let theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
});

// 🌟 Apply Saved Theme on Page Load
window.onload = function() {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
};
