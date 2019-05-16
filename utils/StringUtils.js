module.exports = class StringUtils {

    static isDefined(field)
    {
        return typeof field != 'undefined';
    }

    static summarize(text)
    {
        return text.substr(0, 140) + "...";
    }
}