const cardContainer = document.getElementById('card-container');
const modal = document.getElementById('modal');
let flashcards = [];

// Open Modal
function openModal() {
    modal.style.display = 'flex';
}

// Close Modal
function closeModal() {
    modal.style.display = 'none';
}

// Add Flashcard (Manual)
function addFlashCard() {
    const question = document.getElementById('question-input').value;
    const answer = document.getElementById('answer-input').value;

    if (question && answer) {
        createFlashCard(question, answer);
        closeModal();
    } else {
        alert("Please enter both question and answer.");
    }
}

// Create Flashcard
function createFlashCard(question, answer) {
    const cardId = flashcards.length;
    flashcards.push({ question, answer });

    // Create Flashcard HTML
    const card = document.createElement('div');
    card.className = 'flash-card';
    card.innerHTML = `
        <div class="card-side front"><p>${question}</p></div>
        <div class="card-side back"><p>${answer}</p></div>
        <button class="delete-btn" onclick="deleteCard(${cardId})">🗑️</button>
    `;
    card.addEventListener('click', (event) => {
        if (!event.target.classList.contains('delete-btn')) {
            flipCard(card);
        }
    });

    card.dataset.id = cardId;
    cardContainer.appendChild(card);
}

// Flip Card Functionality
function flipCard(card) {
    card.style.transform = card.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
}

// Delete Flashcard
function deleteCard(cardId) {
    flashcards = flashcards.filter((_, index) => index !== cardId);
    renderFlashCards();
}

// Render Updated Flashcards
function renderFlashCards() {
    cardContainer.innerHTML = "";
    flashcards.forEach((cardData, index) => {
        const card = document.createElement('div');
        card.className = 'flash-card';
        card.innerHTML = `
            <div class="card-side front"><p>${cardData.question}</p></div>
            <div class="card-side back"><p>${cardData.answer}</p></div>
            <button class="delete-btn" onclick="deleteCard(${index})">🗑️</button>
        `;
        card.addEventListener('click', (event) => {
            if (!event.target.classList.contains('delete-btn')) {
                flipCard(card);
            }
        });
        card.dataset.id = index;
        cardContainer.appendChild(card);
    });
}

// Generate AI Flashcard
async function generateAICard() {
    const topic = prompt("Enter the topic for the AI flashcard:");

    if (topic) {
        
        const question = `What is ${topic}?`;
        const answer = `AI-generated answer about ${topic}.`;

       
        

        createFlashCard(question, answer);
    } else {
        alert("Topic is required to generate an AI flashcard!");
    }
}
