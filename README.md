# pluck-emails v1.0.0
A very simple utility for plucking email addresses from a
list of contact information with typical email address
format:


    Jim Green <jgreen@example.com>, John Brown <jbrown@example.com>, Liam Yellow <lyellow@example.com>

With this utility is used on a file containing the above,
the result will be (by default):

    jgreen@example.com,jbrown@example.com,lyellow@example.com

## Options

### `-s` | `--separator` (option)
Specify this option to use a different separator than a comma.
Whitespace is always trimmed around separators.

    $ pluck-emails -s "|" --string "foo <foo@bar.js> | bar <bar@baz.js>"
    foo@bar.js|bar@baz.js

### `-e` | `--string` (boolean)
If set, `pluck-emails` will read the arguments as strings
rather files.

### `-n` | `--encoding` (option)
Set the encoding for files to be read. Defaults to `utf8`.
If specified with `--string`, it is ignored and a warning
will be printed.

### `-h` | `--help`
Display help

### `-V` | `--version`
Output version number
