import lume from "lume/mod.ts";
import imagick from "lume/plugins/imagick.ts";
import parcelCSS from "lume/plugins/lightningcss.ts";

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

site.remoteFile(
  "scripts/carousel/carousel.js",
  "https://unpkg.com/@oom/carousel@4.2.0/src/carousel.js",
);
site.remoteFile(
  "scripts/carousel/navigation.js",
  "https://unpkg.com/@oom/carousel@4.2.0/src/navigation.js",
);

export default site;
