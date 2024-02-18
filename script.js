let currentClueIndex = 0;
const clues = [
    { clue: "Go to the hotel where the Beatles stayed the first time they came to America. What is inscribed above the entranceway?", answer: "answer" },
    { clue: "Find the John Lennon Imagine mosiac in central park. How many benches surround it?", answer: "answer" },
    // Add more clues as needed
];

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    const correctAnswer = clues[currentClueIndex].answer;

    if (userAnswer.trim() === correctAnswer) {
        document.getElementById("feedback").textContent = "Coo-rrect! George says \"Great Job Mary!\" Decoding next clue...";
        currentClueIndex++;
        if (currentClueIndex < clues.length) {
            setTimeout(() => {
                loadClue();
            }, 2000); // Give a bit more time for the user to read the success message
        } else {
            document.getElementById("mission-container").innerHTML = "<h1>Mission Accomplished!</h1><p>You've successfully completed your mission. Coo-gratulations, Agent!</p>";
        }
    } else {
        document.getElementById("feedback").textContent = "Help! that answer is In-coo-rrect. Ringo says \"you can do it Mary! try again!\"";
    }
}

function loadClue() {
    if (currentClueIndex < clues.length) {
        document.getElementById("clue").textContent = clues[currentClueIndex].clue;
        document.getElementById("answer").value = ''; // Clear previous answer
        document.getElementById("feedback").textContent = '';
    }
}

// Initial clue load
window.onload = loadClue;
