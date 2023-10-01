import lume from "lume/mod.ts";
import imagick from "lume/plugins/imagick.ts";
import parcelCSS from "lume/plugins/lightningcss.ts";
import date from "lume/plugins/date.ts";
import favicon from "lume/plugins/favicon.ts";
import filter from "lume/plugins/filter_pages.ts";
import inline from "lume/plugins/inline.ts";
import gl from "npm:date-fns/locale/gl/index.js";

const site = lume();

const lang = Deno.env.get("SITE_LANG") || "en";

site.copy("assets", "")
  .copy("keynotes")
  .copy("fonts")
  .copy("logos")
  .copy("scripts")
  .copy("vendor")
  .use(imagick())
  .use(parcelCSS())
  .use(favicon())
  .use(inline())
  .use(date({
    locales: { gl },
  }))
  .data("cache", Date.now())
  .ignore("README.md")
  .use(filter({
    extensions: [".html"],
    fn: (page) => page.data.lang === lang,
  }));

site.remoteFile(
  "scripts/carousel/carousel.js",
  "https://unpkg.com/@oom/carousel@4.2.0/src/carousel.js",
);
site.remoteFile(
  "scripts/carousel/navigation.js",
  "https://unpkg.com/@oom/carousel@4.2.0/src/navigation.js",
);

export default site;
