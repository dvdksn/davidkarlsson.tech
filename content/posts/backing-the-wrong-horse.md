---
title: "Are Technical Writers Backing the Wrong Horse?"
date: 2020-05-15T19:35:18+02:00
description: >
  Comparing LML and XML for structured technical writing.
summary: >
  For a long time, XML has been the dominant markup language for structured technical writing. Nearly every premium authoring tool or content management system still revolves around XML today. Meanwhile, lightweight markup languages are on the rise, and technical writers are asking themselves: are we doing the right thing?
---

## A Brief History

It is easy to see how XML became the cornerstone that it is today. Before XML, it was SGML that was the cool format for structured technical writing. Content represented in SGML posessed tremendous versatility in how it could be displayed. Later, XML was created as a simplified and more structured subset of SGML, and the transition for technical writing was natural.

{{< figure src="/images/markup-evolution.svg" title="Markup evolution" alt="Figure depicting how GML evolved into DITA" >}}

Here are some reasons why technical writing with XML has been popular for so long:

- It has good support for unicode characters, meaning it has no problem with being translated into different human languages.
- The schema system enables domain-specific structures, with custom constraints and rules via DTD or XSD.
- Well-formed documents are easy to parse and transform into other formats, using XPath, XSLT, and XSL-FO.

## Unicode Overload

One of the biggest problems with XML is its verbosity. Being a verbose format means it is strenuous on the human brain to parse. For a markup language, that's kind of a big deal.

```xml
  <!-- This is a tiny DITA topic -->

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE concept PUBLIC "-//OASIS//DTD DITA Concept//EN" "concept.dtd">
<concept xml:lang="en" id="sample">
  <title>This is a topic</title>
  <shortdesc>Hello World!</shortdesc>
  <conbody>
    <p>I hope that your day is proceeding <ph>splendidly</ph>!</p>
  </conbody>
</concept>
```

In technical writing, the solution to this problem has been to use an XML authoring tool. These tools provide the author with a graphical user interface, making the files easier to work with. They also make the writer more efficient, by automating certain tasks, such as adding a closing tag.

Interestingly, this issue of verbosity was grinding the gears of another user group as well. In 2004, [John Gruber](https://en.wikipedia.org/wiki/John_Gruber) invented Markdown, a plain text syntax for generating XHTML. Gruber was allegedly tired of having to manually type the verbose syntax. Countless other lightweight languages were created in the same spirit.

So here it seems we have arrived at two different solutions to the verbosity problem.

- Technical writers solved it by creating a tool that helped them manage the complexity.
- Software developers solved it by developing lightweight markup languages, facilitating easier plain text editing.

## Different Worlds

The technical writing community, rather than simplifying its syntax, moved in the complete opposite direction. The XML models grew more complex, because they needed to support new use cases. DITA `1.2` brought us subject schemes, and in `1.3`  we got scoped keys.

And it is this notion, that technical writing requires a markup language supporting all of these advanced use cases, that kept the two worlds mostly separated. The lightweight ones simply didn't have what we were looking for:

- Content reuse
- Localization
- Semantic tagging
- PDF/print

But the problem for us technical writers is that our niche has put us in a peculiar spot. We've ended up in isolation, where we're damn near the only people around who still work with XML at all. With no community support, technological advancements are few and far between, which in this day and age is very dangerous.

Meanwhile, support for lightweight markup languages has flourished. Software developers are trailblazing new technological advancements daily.

- Static site generators
- Headless CMSes
- New front end frameworks
- Build and deploy automation

While we weren't looking, the open source community turns out to have implemented almost everything on our technical writer wishlist.

## Semanticity

What's interesting is that all of these advancements were made without changing the core syntax of the markup language. (With the exception of the templating languages of static site generators, which is a kind of extension to the base syntax.)

But there is one inherent property of lightweight markup languages that can't be changed: it is not semantic. It is minimal and strictly presentational. Structured writing requires content types, which are labeled with metadata, and can be constrained and validated.

There are some lightweight markup languages which support some level of semantic tagging. Though I've personally mostly worked with Markdown, so I'm not going to talk on behalf of other formats.

For Markdown files, semanticity is solved by adding a front matter section in the beginning of the file. Unlike the unstructured body of the document, the front matter is structured data, usually YAML. This is in my opinion a far better way to work with structured content, than how we're used to with XML. Arrays, key-value pairs, maps, and objects... simply put, a fantastic API, and still easy to read.

```yaml
  # The front matter metadata for this article.

---
title: "Are Technical Writers Backing the Wrong Horse?"
date: 2020-05-15T19:35:18+02:00
description: >
  Comparing LML and XML for structured technical writing.
summary: >
  For a long time, XML has been the dominant markup language ...
---
```

There is really no limit to how much of your content goes into the front matter, versus how much you put in the body. [Forestry](https://forestry.io/) is a git-based headless CMS that takes structured content with frontmatter to the extreme. I think Forestry could be a great tool in a JAM-stack documentation project, if only it had some support for a branch-based editorial workflow.

API-driven headless CMSes solve this differently. Though I think I'll save that subject for a future post.

Inline annotation is still not solved, at least not for Markdown.

## Conclusion

I think it's still impossible to say, whether the technical writing community is now losing the technology race and we have to jump ship. Or if XML will continue to be a viable foundation for documentation in the future.

But I'm getting ready to jump... just in case.
