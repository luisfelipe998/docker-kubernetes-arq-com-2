
module.exports = {
    digest(text) {
        let hash = 0;
        if (text.length == 0) return hash;
        for (i = 0; i < text.length; i++) {
            ch = text.charCodeAt(i);
            hash = ((hash << 5) - hash) + ch;
        }
        return hash.toString(16);
    },
}