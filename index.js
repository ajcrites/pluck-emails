function pluckEmails(stringWithEmails, separator) {
    separator = separator || ",";
    return stringWithEmails.replace(/.*?<(.*?)>/g, function (match, email) {
        return email + separator;
    }).replace(new RegExp("\\s*" + separator + "\\s*$"), "");
}

module.exports = pluckEmails;
