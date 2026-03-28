document.addEventListener("DOMContentLoaded", function () {
    const btnIncrease = document.getElementById("btnIncreaseFont");
    const btnDecrease = document.getElementById("btnDecreaseFont");
    const btnToggle = document.getElementById("btnToggleTheme");
    const body = document.body;

    const MIN_FONT = 10;
    const MAX_FONT = 30;
    const STEP_FONT = 2;

    function getCurrentFontSize() {
        const tone = window.getComputedStyle(body).fontSize;
        return parseFloat(tone) || 16;
    }

    function applyFontSize(size) {
        body.style.fontSize = size + "px";
    }

    function changeFont(delta) {
        let current = getCurrentFontSize();
        let next = current + delta;
        if (next < MIN_FONT) next = MIN_FONT;
        if (next > MAX_FONT) next = MAX_FONT;
        applyFontSize(next);
    }

    btnIncrease.addEventListener("click", () => changeFont(STEP_FONT));
    btnDecrease.addEventListener("click", () => changeFont(-STEP_FONT));

    btnToggle.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        const isDark = body.classList.contains("dark-theme");
        btnToggle.style.filter = isDark ? "invert(1)" : "none";
    });

    // keyboard accessible
    [btnIncrease, btnDecrease, btnToggle].forEach((el) => {
        el.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                el.click();
            }
        });
    });
});