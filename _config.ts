import lume from "lume/mod.ts";
import imagick from "lume/plugins/imagick.ts";
import parcelCSS from "lume/plugins/parcel_css.ts";
import gpm from "https://deno.land/x/gpm@v0.5.0/mod.ts";

const site = lume();

site.copy("assets", "")
  .copy("keynotes")
  .copy("fonts")
  .copy("logos")
  .copy("scripts")
  .copy("vendor")
  .use(imagick())
  .use(parcelCSS())
  .data("cache", Date.now())
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

site.addEventListener("beforeBuild", () => gpm(["oom-components/carousel"]));

export default site;
