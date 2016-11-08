import escapeRegexp from "escape-regexp";

export default function pluckEmails(stringWithEmails = "", separator = ",") {
    const finalSeperatorRegex = new RegExp("\\s*" + escapeRegexp(separator) + "\\s*$");
    return stringWithEmails
        .replace(/.*?<(.*?)>/g, (match, email) => email + separator)
        .replace(finalSeperatorRegex, "");
}
