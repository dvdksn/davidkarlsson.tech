---
title: "Better Reviews With Automated Previews"
date: 2020-05-22T12:43:08+02:00
description: >
    Post discussing how to create a better review experience with git, with automated review builds for pull requests.
summary: >
    In order to get great documentation, it is critical that it has been carefully reviewed by the appropriate people. Code review tools provide a nice framework for reviewing documentation, but out of the box, they only you changes in the raw source files. With a CI/CD pipeline, reviewers can also get to preview the final output. Here's how you can do it!
---

## Content Isn't Code

For this article, I am going to assume we're keeping our documentation in git. A typical, git-based working process goes something like this:

1. A new branch is created for an update.
2. Updates are committed and pushed to the remote.
3. A pull/merge request is opened.
4. Updates are reviewed by stakeholders.
5. Once approved, the updates are merged back to the main branch.

In my experience, when this workflow is applied to documentation updates, that usually means content is reviewed in a code review tool. These tools come with features such as highlighted diffs, and line comments.

{{< figure src="/images/code-diff-github.png" alt="screenshot of a code diff on GitHub" title="Reviewing Code on GitHub" >}}

While good enough for reviewing source code, it's sometimes awkward to review content this way. You probably want to see it in it's final form, graphics and stylesheets included. To do that, we can set up automated jobs for building and deploying our documentation, and linking it to the relevant branches and pull requests. This also secures that we can content reviews remain an integrated part of the git workflow.

## Hooking Into Git

The first thing we need to do is to decide when we want the jobs to trigger. Git hosting platforms like GitHub, GitLab, and BitBucket, all allow you to set up webhooks to trigger whenever a specific event occurs in a repository. For the purpose of generating a preview build, "open pull request" would be a suitable trigger. Additionally, you probably also want subsequent commits on that pull request to re-trigger the job.

This stuff is pretty straight-forward to set up yourself, using the built-in CI/CD tools that these platforms offer. An even easier way to do it, and how I have set it up for this website, is using my CDN hosting platform, [Netlify Build](https://www.netlify.com/products/build/).

Netlify connects to
