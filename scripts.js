// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Form submission
document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const importance = document.getElementById('importance').value;
    const color = document.querySelector('input[name="color"]:checked').value;
    const alarm = document.getElementById('alarm').value;
    const duration = document.getElementById('duration').value;

    const taskData = {
        name,
        date,
        category,
        importance,
        color,
        alarm,
        duration
    };

    database.ref('tasks').push(taskData).then(() => {
        alert('Task added successfully!');
        document.getElementById('taskForm').reset();
    }).catch(error => {
        console.error('Error adding task: ', error);
    });
});

// Navigation bar functionality
document.getElementById('home').addEventListener('click', function() {
    alert('Home button clicked!');
    // Add your home button functionality here
});

document.getElementById('settings').addEventListener('click', function() {
    alert('Settings button clicked!');
    // Add your settings button functionality here
});

document.getElementById('add-task').addEventListener('click', function() {
    alert('Add Task button clicked!');
    // Add your add task button functionality here
});
