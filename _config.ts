import lume from "lume/mod.ts";

const site = lume();

site.copy("assets", "")
  .copy("keynotes")
  .copy("styles.css")
  .copy("fonts")
  .copy("logos")
  .data("index", "/gl/")
  .ignore("README.md");

site.script(
  "deploy:gal",
  () => {
    site.options.location = new URL("https://oscarotero.gal");
    site.data("index", "/gl/");
    return site.build();
  },
  "rsync -r _site/ gal@oscarotero.gal:~/www",
);

site.script(
  "deploy:com",
  () => {
    site.options.location = new URL("https://oscarotero.com");
    site.data("index", "/en/");
    return site.build();
  },
  "rsync -r _site/ oscarotero@oscarotero.com:~/www",
);

site.script("deploy", "deploy:gal", "deploy:com");

export default site;
