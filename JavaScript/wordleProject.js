var words = [
    "abide", "about", "abort", "above", "abuse", "aches", "acute", "adept", "adopt", "adorn",
    "agile", "aglow", "alter", "ample", "angry", "balmy", "baron", "bears", "blank",
    "blare", "beige", "blunt", "blows", "borne", "brake", "brash", "brave", "brawl", "brawn",
    "brisk", "cameo", "canoe", "cares", "carve", "caulk", "cause", "cease", "chalk",
    "chase", "charm", "cheap", "cheat", "cider", "cigar", "clink", "coast", "cobra", "crisp",
    "crude", "daily", "dairy", "dance", "dazed", "decay", "delay", "dinky", "dirty", "ditzy",
    "dusky", "early", "elfin", "empty", "equal", "exact", "exalt", "extra", "faint",
    "fancy", "feral", "flaky", "flash", "fleck", "fluid", "fresh", "funky", "grits",
    "gaudy", "girly", "glazy", "glued", "gnarl", "grand", "grave", "grits", "handy", "hardy",
    "hasty", "heady", "heavy", "honey", "hunky", "ideal", "ivory", "jumpy", "juicy", "jumbo",
    "lanky", "large", "light", "lofty", "lucky", "lumpy", "madly", "magic", "mirth", "misty",
    "murky", "mushy", "nacho", "naked", "nasty", "nervy", "nifty", "noble", "nudge", "nukes",
    "notes", "nudes", "overt", "oxide", "perky", "plush", "pouty", "prank", "prime", "proud",
    "quack", "quail", "quick", "quiet", "quirk", "rapid", "ready", "regal", "rocky", "rowdy",
    "royal", "rusty", "saucy", "scaly", "sharp", "sigma", "silky", "sneak", "snide",
    "solid", "sound", "stout", "super", "swank", "tacky", "tawny", "tipsy", "toast",
    "tough", "tramp", "trend", "urban", "vague", "vapid", "veiny", "vital", "wacky", "waxed",
    "whiny", "wired", "wispy", "yearn", "yeast", "yield", "young", "youth", "zesty", "zoned"
];

var targetWord = words[Math.floor(Math.random() * words.length)];
var attempts = 5;

function checkWord() {
    var guess = prompt("Enter a 5-letter word:");

    if (!guess || guess.length !== 5) {
        alert("Hey! Please enter a valid 5-letter word!");
        return;
    }

    var rowIndex = 5 - attempts; 
    if (rowIndex < 0) return; 

    var cell0 = document.getElementById(`r-${rowIndex}-0`);
    var cell1 = document.getElementById(`r-${rowIndex}-1`);
    var cell2 = document.getElementById(`r-${rowIndex}-2`);
    var cell3 = document.getElementById(`r-${rowIndex}-3`);
    var cell4 = document.getElementById(`r-${rowIndex}-4`);

    cell0.innerText = guess[0].toUpperCase();
    cell1.innerText = guess[1].toUpperCase();
    cell2.innerText = guess[2].toUpperCase();
    cell3.innerText = guess[3].toUpperCase();
    cell4.innerText = guess[4].toUpperCase();

    if (guess[0] === targetWord[0]) {
        cell0.style.backgroundColor = "pink";
    } else if (targetWord.includes(guess[0])) {
        cell0.style.backgroundColor = "lightblue";
    } else {
        cell0.style.backgroundColor = "red";
    }

    if (guess[1] === targetWord[1]) {
        cell1.style.backgroundColor = "pink";
    } else if (targetWord.includes(guess[1])) {
        cell1.style.backgroundColor = "lightblue";
    } else {
        cell1.style.backgroundColor = "red";
    }

    if (guess[2] === targetWord[2]) {
        cell2.style.backgroundColor = "pink";
    } else if (targetWord.includes(guess[2])) {
        cell2.style.backgroundColor = "lightblue";
    } else {
        cell2.style.backgroundColor = "red";
    }

    if (guess[3] === targetWord[3]) {
        cell3.style.backgroundColor = "pink";
    } else if (targetWord.includes(guess[3])) {
        cell3.style.backgroundColor = "lightblue";
    } else {
        cell3.style.backgroundColor = "red";
    }

    if (guess[4] === targetWord[4]) {
        cell4.style.backgroundColor = "pink";
    } else if (targetWord.includes(guess[4])) {
        cell4.style.backgroundColor = "lightblue";
    } else {
        cell4.style.backgroundColor = "red";
    }

    if (guess === targetWord) {
        alert("Congrats comrade you won!!!!");
        var winSound = document.getElementById("win-sound");
                winSound.play();

        var img = document.getElementById("win-image");
        img.style.display = "block";
        setTimeout(() => { 
            img.style.opacity = "1";
        }, 100);

        setTimeout(() => {
            img.style.opacity = "0"; 
            setTimeout(() => {
                img.style.display = "none"; 
            }, 2000);
        }, 4000);

    } else {
        attempts--;
        if (attempts === 0) {
            alert("Game Over! The word was " + targetWord);
            var loseSound = document.getElementById("lose-sound");
                loseSound.play();


            var img = document.getElementById("lose-image");
        img.style.display = "block";
        setTimeout(() => { 
            img.style.opacity = "1";
        }, 100);

        setTimeout(() => {
            img.style.opacity = "0"; 
            setTimeout(() => {
                img.style.display = "none"; 
            }, 100);
        }, 4000);
        }
    }
}
