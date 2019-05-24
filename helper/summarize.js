module.exports = function summarize(_summarize)
{
    if(_summarize.length > 145)
        _summarize = _summarize.substr(0,140)+"...";

    return _summarize;
}
