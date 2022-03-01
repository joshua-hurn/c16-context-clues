var locations = ['Home', 'Work', 'School', 'College', 'Bar', 'Park', 'Yard', 'Inside VSCode', 'Stadium', 'Hotel']
var weapons = ['Gun', 'Knife', 'Pool Cue', 'Expectations', 'Sword', 'The Oxford Comma', 'Second Hand Smoke', 'The Just My Type Lab', 'Fists', 'Rope', 'Curiosity', 'Sickle', 'Rifle', 'Machine Gun', 'Super Powers', 'Cats the Movie', 'Matt Landers', 'Keyboard', 'Machete', 'Cars 2 The DVD']
var friends = ["Hunter", "Lesly", "Finley", "Riley", "Jesus"];

for (var i = 1; i < 101; i++) {
    var h3 = document.createElement("h3");
    h3.innerText = "Accusation " + i;

    // call captureIndex inline to capture the value of i
    var capturedIndexFunc = captureIndex(i);
    h3.addEventListener("click", capturedIndexFunc);
    document.body.appendChild(h3);
}

// a closure is a function that returns a function
function captureIndex(index) {
    return function() {
        alert(`Accusation ${index}: I accuse ${friends[index % friends.length]}, with the ${weapons[index % weapons.length]} in the ${locations[index % locations.length]}!`)
    }
}