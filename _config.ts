import lume from "lume/mod.ts";
import transformImages from "lume/plugins/transform_images.ts";
import lightningCSS from "lume/plugins/lightningcss.ts";
import date from "lume/plugins/date.ts";
import favicon from "lume/plugins/favicon.ts";
import filter from "lume/plugins/filter_pages.ts";
import inline from "lume/plugins/inline.ts";
import { gl } from "npm:date-fns/locale/gl";

const site = lume();

const lang = Deno.env.get("SITE_LANG") || "en";

site
  .add("keynotes")
  .add("fonts")
  .add("logos")
  .add("scripts")
  .add("vendor")
  .add("portfolio")
  .add("_redirects")
  .add("styles.css")
  .use(lightningCSS())
  .use(transformImages())
  .use(favicon())
  .use(inline())
  .use(date({ locales: { gl } }))
  .data("cache", Date.now())
  .ignore("README.md")
  .use(filter({
    fn: (page) => !page.outputPath.endsWith(".html") || page.data.lang === lang,
  }))
  .add(
    "npm:@oom/carousel@4.2.0/src/carousel.js",
    "scripts/carousel/carousel.js",
  )
  .add(
    "npm:@oom/carousel@4.2.0/src/navigation.js",
    "scripts/carousel/navigation.js"
  );

export default site;
