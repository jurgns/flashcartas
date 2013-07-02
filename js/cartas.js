var vocab = spanishVocab;
var vocabList = vocab.verbs;

var sourceLanguage = 'english';
var targetLanguage = 'spanish';

function getRandomWord() {
    var index = getRandomInt(0, vocabList.length - 1);
    return vocabList[index];
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function AppViewModel() {
    var currWord = getRandomWord();
    this.cardWord = ko.observable(currWord[targetLanguage]);
    this.toggleCardWord = function() {
        this.cardWord(currWord[sourceLanguage]);
    }
    this.nextWord = function() {
        currWord = getRandomWord();
        this.cardWord(currWord[targetLanguage]);
    }
}

ko.applyBindings(new AppViewModel());
