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
just an output format (or not output at all because it's not needed), making the
Deno ecosystem even more irrelevant. Talking with some people about this, I
remember the comment that this situation was like the Python struggle: So much
energy was invested in converting python2 to python3 code, compared to 3to2
(reverse). For cross-compatibility, it was easier to keep the source of truth in
python2.

This decision was also a compromise for the following years of development of
Deno. Internally it must be a complicated piece of software because it needs to
support two runtimes in one (Node and Deno). Node has added a lot of stuff in
its 14 years of life: CJS, N-API, package.json, NPM configuration, Node global
variables, a huge set of APIs, etc. This support must be deeply integrated into
Deno, to be able to import NPM and Deno modules in the same script or use them
with Deno tools like `vendor`, `compile`, `doc`, `check`, etc. It reminds me of
when Internet Explorer could run in "quirks mode" or "standard mode", but
applied to the JavaScript runtimes world.

## Deno's module resolution

The implementation of the Node compatibility layer increased the complexity of
the module resolution system of Deno. It's also introduces some behaviors that
are against
[of the initial motivation of Ryan](https://www.youtube.com/watch?v=M3BM9TB-8yA)
to create Deno, like CJS, `package.json` file, automatic `index.js` detection,
`node_modules` folder, extensionless specifiers, etc.

- The behavior is different depending on whether you have a `package.json` file
  in your folder or if the `byonm` option is enabled in the `deno.json` file.
- NPM packages can declare dependencies in multiple ways (`dependencies`,
  `devDependencies`, `peerDependencies`, `optionalDependencies`) that Deno must
  support.
- Node has different package managers (NPM, Yarn, PNPM) with differences in the
  dependency resolution algorithms, `node_module` structures, etc.
- Deno cannot use import maps to change the dependencies of NPM packages.
  Probably due the complexity of introducing another layer in the module
  resolution.

After 2 years of development (NPM support was added in 2022), there are still
hundreds of issues opened on GitHub with bugs related to Node compatibility.
Although they repeatedly said that the goal is not 100% compatibility, that's
what people expect: if an NPM package doesn't work, it will be Deno's fault. I
wonder how Deno would be today if **all this effort and resources reimplementing
Node were spent on evolving and improving Deno itself.**

Recently, Deno released also its package registry ([JSR](https://jsr.io/)) which
borrows some of the ideas of NPM adapted to Deno. This introduced a new way to
manage dependencies:

- You can import a JSR module using `jsr:` specifier or from the URL
  `https://jsr.io`. Both methods work differently.
- Like NPM, it uses `exports` to map files to public modules, but this is
  applied only for `jsr:` specifiers, not `https//jsr.io`, and introduces one
  more level of complexity, making the module resolution less obvious. The
  filename of a module imported from `jsr:` can be different from the same
  module imported from `https://jsr.io/`.
- The `jsr:` flavor introduced versioning resolution in the specifier. This
  means that the same package can have different specifiers, for example,
  `jsr:@scope/package@^1.0.0`, `jsr:@scope/package@^1`, `jsr:@scope/package@1`,
  etc.
- Technically, it's possible to use import maps with JSR specifiers, but it's a
  pain due to the multiple specifiers for the same package and the different
  behavior of `http` and `jsr` specifiers.
- JSR gets rid of HTTP imports for dependencies. Only `jsr:` and `npm:`
  dependencies are supported. This creates a big friction for Deno users and
  moves away from the web standards.

Fortunately, the complexity and inconsistencies introduced by NPM/JSR are not
applied to HTTP and local imports which personally was always the main reason
for using Deno. We have the problem of duplicated versions of the same package,
but technically is not a problem of using or not HTTP imports but the lack of a
good method to manage dependencies in Deno.

## Conclusion

Deno is getting bloated, trying to implement all the stuff already existing in
the JavaScript ecosystem, in order to get a little more of the market. Maybe the
Deno mission of "modernizing the JavaScript ecosystem" was only in my head (to
be honest, I don't know if they ever uttered those words). Or maybe everything
changed when Deno became a Venture Capital-Backed company, which means their
priority is growing fast.

Perhaps it would be different if it was governed by a different organization
like an open source community. Who knows.

Don't get me wrong. Deno is not a bad runtime. It's still **the runtime that
best meets my requirements** by far and I'll continue using it (I have a static
site generator to maintain). Just saying that it's not the evolution that I was
hoping for, and in some aspects, I'm a bit disappointed.

It seems that every new runtime that appears (Deno, Bun, etc) is just another
way to run Node code. **We don't have yet a "no Node" alternative.** Maybe a
successful Deno fork comes up at some point (like io.js was for Node) or maybe a
new runtime will be born with a different proposal.

For now, I'm afraid I have to make do with Deno and keep waiting.
