import lume from "lume/mod.ts";

const site = lume();

site.copy("assets", "")
  .copy("keynotes")
  .copy("styles.css")
  .copy("fonts")
  .copy("logos")
  .data("index", "/gl/")
  .ignore("README.md")
  .ignore(site.options.location.host === "oscarotero.com" ? "gl" : "en");

site.script(
  "deploy:gal",
  "lume --location=https://oscarotero.gal",
  "rsync -r _site/ gal@oscarotero.gal:~/www",
);

site.script(
  "deploy:com",
  "lume --location=https://oscarotero.com",
  "rsync -r _site/ oscarotero@oscarotero.com:~/www",
);

site.script("deploy", "deploy:gal", "deploy:com");

export default site;
