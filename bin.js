#!/usr/bin/env node
var program = require("commander");
var pluckEmails = require("./");
var fs = require("fs");

program
    .option('-s, --separator [separator]', 'separate emails by this string. defaults to ,', ',')
    .option('-e, --string', 'read arguments as strings instead of files')
    .parse(process.argv);

if (!program.args.length) {
    console.error("You must provide a file or list of files (or strings with --string) to parse");
    process.exit(1);
}

program.args.forEach(function (emails, idx) {
    if (program.string) {
        process.stdout.write(pluckEmails(emails))
    }
    else {
        process.stdout.write(pluckEmails(fs.readFileSync(emails, "utf8")));
    }

    // Not the last file, so print the separator again
    if (idx !== program.args.length - 1) {
        process.stdout.write(program.separator);
    }
});

process.stdout.write("\n");
