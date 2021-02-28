---
title: "TypeScript, Svelte, and Serverless"
date: 2021-02-27T19:50:08+02:00
toc: true
description: >
    Details about my first experience developing with TypeScript, and the upcoming front-end app framework for Svelte: SvelteKit.
summary: >
    I set out to learn hands-on about some of the hot topics of modern web development. I decided to try out one of the popular JS frameworks, to see what the fuzz is all about. I had heard about serverless functions so I wanted to explore that as well. Being a documentarian, whatever I created had to be about docs in one way or another. I ended up creating a listing app for open source doc generators. In this post I share my experiences and learnings from this project. 
---

## Result

OK, a couple disclaimers to start with: I am not a developer. I've dabbled with various scripting languages for a long time, but I couldn't good code if my life depended on it. I just enjoy exploring new tech and learning new things! :smile:

Another disclaimer regarding the data set. I populated the data about the various doc tools for this application manually, based on my own testing and what I could gather from the documentation for these projects. If you find any issue with the data, please reach out and I'll make sure it gets fixed.

I have published a demo of the result I ended up with at [docstack.netlify.app](https://docstack.netlify.app/)

The source code is available here: [github.com/dvdksn/docstack](https://github.com/dvdksn/docstack)

The stack I used to create this consists of:

- [SvelteKit](https://svelte.dev/blog/whats-the-deal-with-sveltekit)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- MongoDB

For the kind of site/app I created, using serverless functions and database backend is 100% unnecessary and bloat. I used it here simply as a learning exercise.

## Framework

I ended up picking Svelte as my JS framework, and more specifically the bleeding-edge *meta-framework*, SvelteKit. I had no real experience with any JS framework prior, I had only run through a couple of tutorials with React and Vue. I opted for Svelte because, as a beginner, it was super-intuitive and fun to use. The documentation and [interactive tutorial](https://svelte.dev/tutorial/basics) is also amazing.

There's no documentation for *SvelteKit* yet at this point, which made it somewhat more difficult. But with the existing Svelte docs, plus some helpful blog posts, it was easy enough to figure out how to piece it together.

Unlike many other JS frameworks, Svelte will compile your application to optimized JavaScript at build time. I think this is a really cool aspect of the framework because it minimizes the amount of code you have to ship to the client-side, meaning the final product is light-weight and fast.

## TypeScript

Using TypeScript wasn't actually an objective for my project at the outset. But as I was setting up, I thought I might as well give it a try, since it is getting so much praise. To be honest, like a lot of people I was skeptical initially. On the face of it, it seemed like it would add overhead that I didn't really need.

For those unfamiliar with TypeScript, it is essentially a superset language of JavaScript. JavaScript is a dynamically typed language, meaning that when you write your code, you are not required to explicitly set the data types for variables and arguments. TypeScript adds static typing to your JavaScript code. Values that you pass around in your code are typed to the expected data type.

I realized and benefited from the things that TypeScript brings to the table very quickly. It is normally a pretty common issue in JavaScript that you try to pass a parameter to a function, but the data type is wrong or the value is undefined. With TypeScript, these issues are easily avoided which really helped speed up my development and reduced the amount of time I had to spend on troubleshooting.

## Serverless

Serverless functions allow you to run server-side code, in my case reading from a database, without having to set up, pay for, and manage a dedicated server. I like to think of it like at tiny, single-purpose server that only runs on-demand, when you need it to.

{{< figure src="/images/serverless.svg" alt="Example diagram of a serverless function in action" title="Serverless function example deployment" >}}

I started out setting this up on Vercel. From reading the docs, the Vercel workflow seemed easier to get up and running. But just as I was getting started with Vercel, [Netlify announced](https://www.netlify.com/blog/2021/02/18/netlify-functions-for-an-unrivaled-serverless-workflow/) improvements to their serverless workflow. As I'm already a Netlify user and I was looking for ways to integrate their [Forms feature](https://docs.netlify.com/forms/setup/), I moved the project over to Netlify.

Vercel and Netlify both use AWS Lambda under the hood, which is by far the most popular serverless provider. From the little testing I've done in this project, serverless development is very straight-forward, and it's supposedly great for scalability as well. Looking forward to trying it out more in the future.

## Summary

Creating this project was a lot of fun, and it introduced me to all of the above concepts in a nice way. While I only scratched the surface of things like TypeScript and serverless, I look forward to delving into it more in the future.

Next up for the docstack site itself, I was planning to add integration with Netlify forms, to allow user submissions of new items. I should probably do something about data validation as well. On the front-end, I'm thinking of adding Tailwind for a chance to try that out, and to make it look nicer.

I used Mongo as the database for this project, I kind of regret not going fully open source. I might swap it out in favor of something like postgres at some point, maybe coupled with a graphql API. (More learning opportunities!)
