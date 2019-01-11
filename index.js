function random () {
    return Math.floor(Math.random() * 40) + 1
}

if (random() >= 18) {
    console.log ("can drink");
} else {
    console.log ("can not drink");
}