---
title: Thoughts about Deno
date: 2024-04-05
---

# Thoughts about Deno

[Lume](https://lume.land/) was born as an excuse to build something with
[Deno](https://deno.com/).

For a long time, I tried to avoid Node as much as possible due to JavaScript
fatigue and its weird way of working, incompatible with browsers and Web
Standards.

Deno's promise was appealing: **Finally, a modern JavaScript runtime that
doesn't fight the Web but embraces it,** using Web standards and APIs like HTTP
ECMAScript modules, fetch, Promises, Workers, etc. It has also a nice security
layer and built-in Rust-based tools for common tasks like testing, linting, or
formatting code. And the icing on the cake: native support for TypeScript.

It's not a surprise the hype Deno got. At the moment of writing this, more than
90K stars in GitHub, only 10K less than Nodejs. I know that the number of stars
means nothing (it doesn't reflect the real usage), but it's a good indication of
the interest aroused by Deno.

I was one of the early adopters and, frustrated also by the current state of the
static site generators (which is a different story), I decided to build Lume.

## Deno origins

Like most software in its early stages, Deno was not perfect. It was unstable,
many things were missing, and it didn't have a big ecosystem like Node with its
almost 3 million packages on NPM.

But it didn't matter, the user experience of Deno was a delight and it has an
important mission: **modernize the JavaScript ecosystem,** create a _not Node_
alternative, and fix all the mistakes
[Ryan says he regrets](https://www.youtube.com/watch?v=M3BM9TB-8yA). It would be
a hard and long road. There was much stuff done in Node.

At the beginning of Deno, a lot of Node packages were ported to Deno, most of
them unofficially. I have worked on some of them like
[Pug](https://github.com/lumeland/pug),
[SVGO](https://github.com/lumeland/svgo),
[Nunjucks](https://github.com/lumeland/denjucks), and even collaborated with the
official [PostCSS version for Deno](https://github.com/postcss/postcss-deno) and
some of its plugins like
[postcss-import](https://github.com/postcss/postcss-deno-import) and
[postcss-nesting](https://github.com/lumeland/postcss-nesting). The problem with
the ports is they are hard to maintain and keep the changes up to date with the
official package. I created [nodedeno](https://github.com/oscarotero/nodedeno)
to help with that but converting code from Node (especially if it's CommonJS) to
Deno is hard. The other way around is easier and I think it's the right
direction for the Deno mission.

I guess folks behind Deno had the same opinion because they created
[DNT](https://github.com/denoland/dnt), a tool to convert Deno code to Node,
which is the correct way to modernize the JavaScript ecosystem: **write modern
code using Web Standards and export it to legacy code.** The idea is to position
Deno (and TypeScript) as the source of truth, and Node (and the browser) as a
target to publish.

In my opinion, this should be the priority of Deno: provide the best environment
possible **for library makers,** with all tools needed for testing, formatting,
linting, and publishing JavaScript code. Doing this well, maybe some existing
NPM packages would be more willing to migrate to Deno because they would gain
benefits in the form of easier setup and configuration, better testings, types,
and speed, and the package would still be available in NPM but with the addition
of it can also be used in Deno. It's a win-win. This transition wouldn't happen
from one day to the next. **It would take time** and Deno should listen to
library authors to understand their needs and provide help and resources for the
migration (even actively collaborating with some key packages).

But Deno had different plans: they would focus on end users' adoption and
decided that providing native **Node/NPM support in Deno was a good idea.** This
would allow us to use the millions of packages existing in NPM in Deno from the
first day, without the need to migrate them to Deno.

## Moving to NPM

I have to admit that this movement benefited Lume. I stopped investing time in
ports and maintenance of NPM libraries because I could import directly the NPM
package. Many people did the same and lots of ports were abandoned. NPM support
didn't always work well, it was unstable and there were many cases in which the
implementation wasn't good enough (even now isn't) and the library crashed, but
that was improved over time.

In the long term, I don't think this strategy benefits the Deno or JavaScript
ecosystem. What's the incentive of working on a Deno library, even using DNT, if
creating an NPM package will work everywhere? Is it possible to modernize the
JavaScript ecosystem with a new runtime supporting the same legacy code and old
APIs?

Deno was positioned to spearhead the CJS to ESM migration by giving a clean
slate for web-centric ESM-first libraries to flourish. And suddenly, it changed
from being the innovative and future runtime to running behind Node, trying to
implement all the weird things of Node and NPM (and it never will be as good as
Node in being Node itself). Node continues to be the source of truth and Deno is
just an output format (or not output at all because it's not needed). Talking
with some people about this, I remember the comment that this situation was like
the Python struggle: So much energy was invested in converting python2 to
python3 code, compared to 3to2 (reverse). For cross-compatibility, it was easier
to keep the source of truth in python2.

This decision was also a compromise for the following years of development of
Deno. Internally it must be a complicated piece of software because it needs to
support two runtimes in one (Node and Deno). Node has added a lot of stuff in
its 14 years of life: CJS, N-API, package.json, NPM configuration, Node global
variables, a huge set of APIs, etc. This support must be deeply integrated into
Deno, to be able to import NPM and Deno modules in the same script. It reminds
me of when Internet Explorer could run in "quirks mode" or "standard mode", but
applied to the JavaScript runtimes world.

After 2 years of development (NPM support was added in 2022), there are still
hundreds of issues opened on GitHub with bugs related to Node compatibility.
Although they repeatedly said that the goal is not 100% compatibility, that's
what people expect: if an NPM package doesn't work, it will be Deno's fault. I
wonder how Deno would be today if **all this effort and resources reimplementing
Node were spent on evolving and improving Deno itself.**

Maybe the Deno mission of "modernizing the JavaScript ecosystem" was only in my
head (to be honest, I don't know if they ever uttered those words), or maybe
everything changed when Deno became a Venture Capital-Backed company, which
means their priority is growing fast. The business model of Deno is hosting
(with Deno Deploy) and seems that they are trying to compensate for the lack of
an ecosystem by not only implementing NPM compatibility but also creating
Deno-specific versions of typical tools needed by startups like Deno KV for
databases, Crons, Queues, Fresh framework, SassKit...

Perhaps it would be different if it was governed by a different organization
like an open source community. Who knows.

## JSR

JSR is the full-featured package registry created by Deno, aimed to be
compatible with all runtimes, not only Deno but also Node, Bun, and others. The
goal is to implement the _publish once, run everywhere_ approach, which is the
same strategy I told earlier about DNT: convert Deno in the source of truth and
publish to other runtimes automatically. As I said, **I think it's the right
direction** although I have to admit that I'm not especially happy with some
decisions made in JSR and what it entails for the Deno ecosystem.

Any package published with JSR is also distributed by JSR, which means that if
you want to use a JSR package in Node, you have to install it with
`npx jsr add ...` and include the `.npmrc` file with the JSR configuration in
your repo in order to work everywhere. This introduces an annoying and
unnecessary friction which I don't think will help NPM package makers to move to
JSR.

A more interesting idea would be **a publishing-only platform,** that could
convert and publish to deno.land/x, NPM, etc. Something like DNT but better, a
cloud platform to publish automatically the code to all supported registries.
Imagine being able to install postcss from npm, deno.land/x, nest.land, or the
new indie package registry. More registries could be added in the future and
library makers would have their packages distributed in all of them for free,
without any extra work. By separating publishing from distribution, new package
registries could emerge and competition would be saner.

But JSR is just like NPM, maybe with some improvements, yes, but **it's not the
revolutionary idea that will make NPM package authors change.**

Another problem is how some JSR design decisions affect Deno users.

For example, JSR uses a similar `exports` mechanism
[as Node's pkg-exports](https://github.com/jkrems/proposal-pkg-exports/), which
was created to replace the `main` field in the `package.json` in order to fix
some of its limitations.

One of the problems to solve is the duality of some NPM packages exposing CJS
and ESM interfaces, a problem that does not exist in Deno due to it being
ESM-only. Other use cases can be addressed with import maps. In fact, `exports`
proposal was initially designed to match the behavior of the _import maps_
standard.

The problem with `exports` in JSR, besides it introduces a non-standard
convention that overlaps the standard _import map,_ is it forces you to define
every module exposed by the package and allows you to rename it **even removing
the extension.** For example, you can do the following:

```json
{
  "exports": {
    "module1": "./module1.ts",
    "module2": "./module2.ts"
  }
}
```

This practice masks the true path of the files, making the module resolution
more obscure and less obvious, which is harder for debugging or, for example, if
you want to switch a dependency to a patched copy in the local file system. It
also makes more difficult the development of libraries that must work on both
browsers and non-browsers runtimes.

Even Node, which is slowly migrating to ESM,
[recommends using explicit file extensions](https://nodejs.org/api/packages.html#extensions-in-subpaths)
to match the behavior of the import maps:

> With [import maps](https://github.com/WICG/import-maps) now providing a
> standard for package resolution in browsers and other JavaScript runtimes,
> using the extensionless style can result in bloated import map definitions.
> Explicit file extensions can avoid this issue by enabling the import map to
> utilize a
> [package folder mapping](https://github.com/WICG/import-maps#packages-via-trailing-slashes)
> to map multiple subpaths where possible instead of a separate map entry per
> package subpath export. This also mirrors the requirement of using the
> [full specifier path](https://nodejs.org/api/esm.html#mandatory-file-extensions)
> in relative and absolute import specifiers.

JSR had the opportunity to avoid this antipattern from the beginning but
unfortunately decided to prolong it. Not only that, **they removed HTTPS
imports,** and only `jsr:` and `npm:` specifiers are supported. Ironically JSR
doesn't even support `https://deno.land/x` modules, the package registry created
initially by Deno.

## Conclusion

I'm not saying Deno is a bad runtime. It's still **the runtime that best meets
my requirements** by far and I'll continue using it (I have a static site
generator to maintain). Just saying that it's not the evolution that I was
hoping for, and in some aspects, I'm a bit disappointed.

It seems that every new runtime that appears (Deno, Bun, etc) is just another
Node. **We don't have yet a "no Node" alternative.** Maybe a successful Deno
fork comes up at some point (like io.js was for Node) or maybe a new runtime
will be born with a different proposal.

For now, I'm afraid I have to make do with Deno and keep waiting.
