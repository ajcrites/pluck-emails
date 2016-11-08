#!/usr/bin/env node
import program from "commander";
import pluckEmails from ".";
import {version} from "../package.json"
import fs from "fs";

program
    .version(version)
    .option('-s, --separator [separator]', 'separate emails by this string. defaults to ,', ',')
    .option('-e, --string', 'read arguments as strings instead of files')
    .option('-n, --encoding [encoding]', 'encoding for reading files. defaults to utf8')
    .parse(process.argv);

if (!program.args.length) {
    console.error("You must provide a file or list of files (or strings with --string) to parse");
    process.exit(1);
}

if (program.string && program.encoding) {
    console.warn("Encoding is ignored when parsing as a string");
}

// Loop over the arguments to print out as parsing is done on the strings.
// This is done rather than building the string.
// TODO parse as a stream for speed / memory efficiency
program.args.forEach((emails, idx) => {
    if (program.string) {
        process.stdout.write(pluckEmails(emails, program.separator));
    }
    else {
        process.stdout.write(pluckEmails(fs.readFileSync(emails, program.encoding || "utf8"), program.separator));
    }

    // Not the last file, so print the separator again
    if (idx !== program.args.length - 1) {
        process.stdout.write(program.separator);
    }
});

process.stdout.write("\n");
