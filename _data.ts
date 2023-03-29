import entries from "https://raw.githubusercontent.com/oscarotero/starred/master/entries.json" assert { type: "json" };

export const starred = entries.sort((a, b) => b.id - a.id);
