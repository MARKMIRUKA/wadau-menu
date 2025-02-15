// Navigate to the Main Course Menu Page
function goToMainCourse() {
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = "mainCourseMenu.html";
    }, 500); // 0.5s delay before redirecting
}

// Navigate Back to the Home Page
function goBack() {
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = "index.html";
    }, 500);
}

// Fade-in effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 1;
    document.body.style.transition = "opacity 0.5s";
});
