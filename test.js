import test from "ava";
import pluckEmails from ".";

test("pluck emails from formatted string", t => {
    t.is("jgreen@example.com,jbrown@example.com,lyellow@example.com",
        pluckEmails("Jim Green <jgreen@example.com>, John Brown <jbrown@example.com>, Liam Yellow <lyellow@example.com>"));
});

test("pluck emails from formatted string with separator", t => {
    t.is(`jgreen@example.com
jbrown@example.com
lyellow@example.com`,
        pluckEmails("Jim Green <jgreen@example.com>, John Brown <jbrown@example.com>, Liam Yellow <lyellow@example.com>", "\n"));
});
