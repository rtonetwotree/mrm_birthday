let currentClueIndex = 0;
const clues = [
    { clue: "Find the Imagine mosiac near Strawberry Fields. One of the green benches closest to the mosaic is dedicated to Bruce Kelly. What was Bruce Kelly's Occupation?", answer: "Landscape Architect" },
    { clue: "Go to the building where John lived from 1973 until 1980, and where Yoko still lives. How many gates are on the archway where John was shot?", answer: "2" },
    { clue: "Go to the place that hosted the Beatles’ debut performance in the U.S. in 1964. (Hint: This performance was seen by 73 million people). What is the name written in neon on the shack outside the entrance to this venue?", answer: "Angelo" },
    { clue: "Find the famed concert hall where the Beatles played two sold-out shows on February 12, 1964. What is the slogan on the glass doors on the 7th-Avenue-facing main entrance to the building?", answer: "A Story in Every Note" },
    { clue: "Go to the hotel on 6th Avenue where the Beatles stayed in 1965 and 1966, and where they recieved guests such as Bob Dylan and The Supremes. How many total diamonds are in the crest above the entrance to the hotel?", answer: "6" },
    { clue: "Go to the first hotel the Beatles stayed at in the U.S., at which they arrived shortly after a press conference at JFK Airport on February 7, 1964. Find the entrance that faces the park. What is written on the awning/overhang to the west of the entrance?", answer: "The Oak Room" },
    { clue: "Go to the hotel where John and Yoko first moved after getting married in 1969. What is the first word of the second line of text on the historical landmark plaque near the hotel entrance?", answer: "SOPHISTICATED" },
    { clue: "Go to the hotel where John and Yoko first moved after getting married in 1969. What is the first word of the second line of text on the historical landmark plaque near the hotel entrance?", answer: "SOPHISTICATED" },
    { clue: "Go to the hotel where John and Yoko first moved after getting married in 1969. What is the first word of the second line of text on the historical landmark plaque near the hotel entrance?", answer: "SOPHISTICATED" },
    // Add more clues as needed
];

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    const correctAnswer = clues[currentClueIndex].answer;

    if (userAnswer.trim() === correctAnswer) {
        document.getElementById("feedback").textContent = "I Feel Fine! George says \"Great Job Mary!\" Decoding next clue...";
        currentClueIndex++;
        if (currentClueIndex < clues.length) {
            setTimeout(() => {
                loadClue();
            }, 10000); // Give a bit more time for the user to read the success message
        } else {
            document.getElementById("mission-container").innerHTML = "<h1>Mission Accomplished!</h1><p>You've successfully completed your mission. Coo-gratulations, Agent!</p>";
        }
    } else {
        document.getElementById("feedback").textContent = "Help! Ringo says \"you can do it Mary! try again!\"";
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
