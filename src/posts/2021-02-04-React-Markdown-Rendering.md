---
slug: "/posts/2021-02-04-React-Markdown-Rendering"
title: Rendering Markdown in ReactJS
description: My process in developing the markdown renderers and more for this website.
author: dustbringer
date: 2021-02-04
tags:
    - reactjs
    - markdown
---

# Rendering Markdown in ReactJS
This post will take you through my process of creating this markdown renderer you're seeing right now for Markdown.

My aim is to render each Markdown component cleanly in HTML and have $\LaTeX$ renderering.

For your ease of access, here are links to my code
- [`<Markdown />` component](https://github.com/dustbringer/dustbringer.github.io/blob/main/src/components/Markdown.jsx)
- [Custom renderers](https://github.com/dustbringer/dustbringer.github.io/tree/main/src/components/mdRenderers)
- [Navigatible Contents component](https://github.com/dustbringer/dustbringer.github.io/blob/main/src/components/MarkdownContents.jsx)


## Foundation
We will be using the [ReactMarkdown](https://github.com/remarkjs/react-markdown) module that is based on [remark](https://github.com/remarkjs/remark).
> **remark** is a Markdown processor built on micromark powered by plugins part of the unified collective.

Installing the module is straightfoward
```bash
npm install react-markdown
```
```bash
yarn add react-markdown
```

Next, the wrapper for the Markdown rendering component will be taken straight from [this](https://levelup.gitconnected.com/adding-katex-and-markdown-in-react-7b70694004ef) helpful guide.

### Variation
From the tutorial link above, there are some changes that I made for my purposes.

#### Wrapping `div`
I am using Google's MaterialUI to replace the traditional HTML components in many places, so the fonts rendered by primitive HTML tags are default. So we wrap the `<ReactMarkdown />` component with a `div` with our new fonts and colors, so everything displayed will be consistent.

#### Remark Plugins
Since the `ReactMarkdown` package is made by `remark`, it supports some of the `remark` plugins. Not all of the plugins work, from my trial and error, it seems like we can only use ones that do not directly change the source Markdown.

There is a chonky list of plugins [here](https://github.com/remarkjs/remark/blob/main/doc/plugins.md) but I have used `remark-math`, `remark-gfm`, and `remark-frontmatter`.

You will need to install the packages through `npm` or `yarn`, import them into the component we are working on, and add them to the `props` as
```js
{
  // ...
  plugins: [
    RemarkMathPlugin
  ],
  // ...
}
```

#### Math renderer
The basic `react-katex` package is old and throws some warnings in the newest React versions (17.0.1 at the time of writing). So instead use [@matejmazur/react-katex](https://www.npmjs.com/package/@matejmazur/react-katex) which includes many [improvements](https://github.com/talyssonoc/react-katex/issues/49) over the original `react-katex`.

After installing and importing, the two math renderers will need to be changed as follows
```js
{
  // ...
  math: ({ value }) => <TeX block>{value}</TeX>,
  inlineMath: ({ value }) => <TeX>{value}</TeX>,
  // ...
}
```

#### More custom renderers
See the next section.

## Custom Renderers
Now everthing is rendered in very basic HTML (e.g. `p`, `h1`, `h2`, ...) without any styling, so its not too pleasing to the eye. Fortunately we can write our own custom renderers to replace the default ones.

We can add them into the props, for example code blocks
```js
renderers: {
    ...props.renderers,
    code: BlockCodeRenderer,
    // ...
  },
```
we need a component that will replace the default `<code>` tags.

We can find the default renderers and their implementations in the [git repo](https://github.com/remarkjs/react-markdown/blob/main/src/renderers.js). This will tell us the name of the part to be rendered and how information is passed around behind the scenes in the `ReactMarkdown` component.

With this starting point, we can see what props are passed to each component and write our own components with custom styling that can render similarly to the original.

Some more inspiration:
- [Custom renderers by robinweser](https://github.com/robinweser/react-markdown-github-renderers)
- [The renderers that I wrote](https://github.com/dustbringer/dustbringer.github.io/tree/main/src/components/mdRenderers)

## Anchors (removed)
Taking inspiration from Github's and HackMD's Markdown viewer (along with many other sites that have anchors), I tried to tackle the links to headings on the rendered Markdown.

The little link icon that showed up as you hover over the link, was simple enough. So the difficult part is dealing with the url.

My website will be hosted on GitHub Pages, where you are forced to use `react-router`'s `HashRouter` for routing. Thus, the classic "just link to a hash with the same id as the heading" will not work, and we must resort to another method of storing the heading and scrolling. 

To solve the problem of not having the hash part of the URL available, I used the 'search' part of the url to store that data. To scroll, we use React's `useRef()` hook (by `ref.current.scrollIntoView()`) to scroll to the correct heading, when the URL search query matches up.
- However, to avoid having to store all the refs in some Global Storage, I run a comparison between the URL search query and the heading's unique name for each heading as it loads in.
- Since the search query only matches to a unique heading, it will be scrolled to with its `ref`

### How do we generate these unique names?
Take the heading content, then run some regex to remove non-alphanumeric characters and replace whitespace. Some of the following is taken and inspired by [replies here](https://github.com/remarkjs/react-markdown/issues/69).

Get the heading content,
```js
function flatten(text, child) {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

// Get text in children
const children = React.Children.toArray(props.children);
const text = children.reduce(flatten, "");
```
then strip the bad characters

```js
text
  .toLowerCase()
  .replace(/[^0-9A-Z\s]+/gi, "")
  .replace(/\W/g, "-")
```

and store an incrementing id outside the functional commponent to keep the generated names unique.

### Problems
Now after adding an initial scroll to a `ref` if a URL query is present (using the `useEffect()` hook) everything seems to be working fine. However, on first load of a webpage (without caching), some further titles do not get scrolled to the top of the screen.
- The cause is not immediately apparent to me, but it seems to be due to components that have not rendered before the scrolling starts.
- Without further rewriting the `ReactMarkdown` module, I decide to abandon the idea in favor of something more practical...


## Contents List
Taking inspiration from HackMD's markdown previewer (and ontop of the failed framework of the anchors), I wrote a component that renders a contents table which can be used for navigation.

Since the inner workings of `ReactMarkdown` is hidden from us, I used a janky workaround. It involves storing the heading `ref`s from the **Anchors** attempt in Global State and using them as links to scroll the user around.

For this to work, I had to trust that all the headings rendered in the correct order, and displayed the list of `ref`s and headings on the side with links that scrolls the heading into view. The scrolling, again, is handed by React's `ref.current.scrollIntoView()`.

## Conclusion
It was very insightful and interesting experience digging into `ReactMarkdown` and reworking its innards to acheive my view of an "OKAY" markdown renderer. Even if some additions were inefficient or work-aroundy to keep ReactMarkdown from falling apart, I still learnt lots about React best practices, components and how they use their props.

---

## (Appendix) Helpful Sources
Some websites that got me started,
- https://levelup.gitconnected.com/adding-katex-and-markdown-in-react-7b70694004ef
- https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component
