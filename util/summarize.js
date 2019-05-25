
module.exports = class summarize {

    //fonction pour retourner le contenu d'un article
static summarize(text)
    {
        return text.substr(0, 140);
    }
}