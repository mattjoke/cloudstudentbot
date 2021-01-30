module.exports = class WordFilter {
    static words = [];
    static checkWord(message) {
        return this.words.filter((w) => {
            return message.includes(w)
        }).length != 0;
    }
}