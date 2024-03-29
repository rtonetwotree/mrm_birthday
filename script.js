let currentClueIndex = 0;
const clues = [
    { clue: "Find the Imagine mosiac near Strawberry Fields. One of the green benches closest to the mosaic is dedicated to Bruce Kelly. What was Bruce Kelly's Occupation?", answer: "Landscape Architect" },
    { clue: "Go to the building where John lived from 1973 until 1980, and where Yoko still lives. How many gates are on the archway where John was shot?", answer: "2" },
    { clue: "Go to the place that hosted the Beatles’ debut performance in the U.S. in 1964. (Hint: This performance was seen by 73 million people). What is the name written in neon on the shack outside the entrance to this venue?", answer: "Angelo" },
    { clue: "Find the famed concert hall where the Beatles played two sold-out shows on February 12, 1964. What is the slogan on the glass doors on the 7th-Avenue-facing main entrance to the building?", answer: "A Story in Every Note" },
    { clue: "Go to the hotel on 6th Avenue where the Beatles stayed in 1965 and 1966, and where they recieved guests such as Bob Dylan and The Supremes. How many total diamonds are in the crest above the entrance to the hotel?", answer: "6" },
    { clue: "Go to the first hotel the Beatles stayed at in the U.S., at which they arrived shortly after a press conference at JFK Airport on February 7, 1964. Find the entrance that faces the park. What is written on the awning/overhang to the west of the entrance?", answer: "The Oak Room" },
    { clue: "Go to the hotel where John and Yoko first moved after getting married in 1969. What is the first word of the second line of text on the historical landmark plaque near the hotel entrance?", answer: "SOPHISTICATED" },
    { clue: "Find the Beatles mural on 3rd and MacDougal near Washington Square Park. What phrase appears in the top left corner of the mural?", answer: "STOP THE WAR" },
    { clue: "Go to the Grenwich Village apartment where John and Yoko moved after the beatles broke up. What does the yellow sign out front say?", answer: "CONSTRUCTION AREA" },
    // Add more clues as needed
];

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    const correctAnswer = clues[currentClueIndex].answer;

    if (userAnswer.trim() === correctAnswer) {
        // Check if the current clue is the last one
        if (currentClueIndex === clues.length - 1) {
            // Final clue instead of the mission accomplished message
            document.getElementById("mission-container").innerHTML = "<h1>Final Clue!</h1><p>You completed your mission! Now go to 241 W 12th St, New York, NY 10014 and find the second half of your birthday present hidden under the stairs.</p>";
        } else {
            document.getElementById("feedback").textContent = "I Feel Fine! George says \"Great Job Mary!\" Decoding next clue...";
            currentClueIndex++;
            setTimeout(() => {
                loadClue();
            }, 10000); // Give a bit more time for the user to read the success message
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
