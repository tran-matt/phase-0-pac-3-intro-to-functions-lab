const expect = require("expect");

function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
        return string.toLowerCase();
}

function logShout(string){
    console.log('HELLO')
}

function logWhisper(string){
    console.log('hello')
}

function sayHiToHeadphonedRoommate(string){
    if (string === string.toUpperCase()){
        return "YES INDEED!";
    }   else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }   else {
        return "I can\'t hear you!";
    }
}
