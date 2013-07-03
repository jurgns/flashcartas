var vocab = spanishVocab;
var vocabList = vocab.verbs;

function getRandomWord() {
    var index = getRandomInt(0, vocabList.length - 1);
    return vocabList[index];
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function AppViewModel(sourceLanguage, targetLanguage) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.displayLanguage = ko.observable(sourceLanguage);

    this.currentWord = ko.observable(getRandomWord());
}

AppViewModel.prototype.toggleDisplayLanguage = function() {
    this.displayLanguage(this.displayLanguage() == this.sourceLanguage ? this.targetLanguage : this.sourceLanguage);
};

AppViewModel.prototype.nextWord = function () {
        this.currentWord(getRandomWord());
};

ko.applyBindings(new AppViewModel('english', 'spanish'));
