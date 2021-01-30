module.exports = class WordFilter {
    static words = [];
    static checkWord(message) {
        return this.words.filter((w) => {
            return message.toLowerCase().includes(w)
        }).length != 0;
    }
}