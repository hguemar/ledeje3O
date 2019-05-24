
module.exports = class summarize {

    //fonction pour retourner un résumer du contenu d'un article
static summarize(text)
    {
        return text.substr(0, 140);
    }
}