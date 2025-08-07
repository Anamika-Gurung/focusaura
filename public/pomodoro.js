// Timer Variables
let timer;
let isRunning = false;
let timeLeft = 25 * 60; // Default Pomodoro 25 min

const timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// Mode Buttons
const pomodoroMode = document.getElementById("pomodoroMode");
const shortBreakMode = document.getElementById("shortBreakMode");
const longBreakMode = document.getElementById("longBreakMode");

// Settings
const settingsModal = document.getElementById("settingsModal");
const settingsBtn = document.getElementById("settingsBtn");
const closeBtn = document.querySelector(".close");
const saveSettings = document.getElementById("saveSettings");

let pomodoroTime = 25;
let shortBreakTime = 5;
let longBreakTime = 20;

// Display Timer
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Start Timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
            }
        }, 1000);
    }
}

// Pause Timer
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Reset Timer
function resetTimer() {
    pauseTimer();
    timeLeft = pomodoroTime * 60;
    updateDisplay();
}

// Switch Modes
function switchMode(time) {
    pauseTimer();
    timeLeft = time * 60;
    updateDisplay();
}

// Event Listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

pomodoroMode.addEventListener("click", () => switchMode(pomodoroTime));
shortBreakMode.addEventListener("click", () => switchMode(shortBreakTime));
longBreakMode.addEventListener("click", () => switchMode(longBreakTime));

// Open Settings
settingsBtn.addEventListener("click", () => settingsModal.style.display = "block");
closeBtn.addEventListener("click", () => settingsModal.style.display = "none");

// Save Settings
saveSettings.addEventListener("click", () => {
    pomodoroTime = parseInt(document.getElementById("pomodoroInput").value) || 25;
    shortBreakTime = parseInt(document.getElementById("shortBreakInput").value) || 5;
    longBreakTime = parseInt(document.getElementById("longBreakInput").value) || 20;
    switchMode(pomodoroTime);
    settingsModal.style.display = "none";
});

// Initialize Display
updateDisplay();
// DOM Elements

// Open Modal on Settings Button Click
settingsBtn.addEventListener("click", () => {
    settingsModal.style.display = "block";
});

// Close Modal on 'X' Button Click
closeBtn.addEventListener("click", () => {
    settingsModal.style.display = "none";
});

// Close Modal When Clicking Outside the Modal Content
window.addEventListener("click", (event) => {
    if (event.target === settingsModal) {
        settingsModal.style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const modeButtons = document.querySelectorAll(".mode-btn");

    modeButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            modeButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to the clicked button
            button.classList.add("active");
        });
    });
});
