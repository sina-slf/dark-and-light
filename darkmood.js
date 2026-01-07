// دسترسی به دکمه و body صفحه
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;


//button off and on

const switchBtn =
document.querySelector(".switch");

switchBtn.addEventListener("click", () => {
    switchBtn.classList.toggle("active");

    document.body.classList.toggle("dark");
    
});



