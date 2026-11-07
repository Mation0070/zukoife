/* =====================================================================
   EDIT YOUR WEBSITE HERE
   ---------------------------------------------------------------------
   This is the only file you need to touch. Everything on the site
   comes from here.

   How to edit (on GitHub):
     1. Open this file (content.js) in your repository.
     2. Click the pencil icon.
     3. Change the text between the quotes "..." or backticks `...`.
     4. Click "Commit changes". The site updates in about a minute.

   Rules:
     - Leave anything as "" (empty) and that part is hidden on the site.
     - Long text goes between backticks ` `. Press Enter twice for a new
       paragraph.
     - Inside long text you can use:
         ## A heading
         **bold**   *italic*   [link text](https://example.com)
         - a bullet point
         > a quote
   ===================================================================== */

const SITE = {
  logo: "zuko.",
  tabTitle: "zuko.",
  description: "",

  /* ---------- HOME ---------- */
  home: {
    greeting: "",              // small line above the headline, e.g. "Hi, I'm ..."
    headline: "Digital garden.",
    rotatingWords: [],         // optional words that cycle at the end of the headline, e.g. ["notes.", "ideas."]
    subtitle: "Essays and notes. Coming soon.",
    scrollingTopics: [],       // optional words for the moving strip, e.g. ["Topic one", "Topic two"]
    postsHeading: "Latest essays",
  },

  /* ---------- NOW PAGE ---------- */
  now: {
    updated: "",               // e.g. "November 7th, 2026"
    text: ``,
  },

  /* ---------- ABOUT PAGE ---------- */
  about: {
    text: ``,
  },

  /* ---------- PROJECTS (shown on the home page as cards) ---------- */
  projects: [
    // { label: "Category", name: "Project name", text: "One line about it." },
  ],

  /* ---------- RESOURCES PAGE ---------- */
  resources: {
    intro: ``,
    books: [
      // { title: "Book title", author: "Author", note: "Why you like it." },
    ],
    tools: [
      // { name: "Tool name", use: "What you use it for" },
    ],
  },

  /* ---------- CONTACT PAGE ---------- */
  contact: {
    intro: ``,
    email: "",                 // messages from the contact form go here. Leave "" to hide the form.
  },

  /* ---------- "STAY IN TOUCH" BOX (bottom of pages) ---------- */
  stayInTouch: {
    text: "",                  // leave "" to hide the box
  },

  /* ---------- FOOTER ---------- */
  footer: "© zuko | all rights reserved | 2026",
  links: [
    // { label: "Twitter/X", url: "https://x.com/yourname" },
  ],

  /* ---------- HIDDEN PAGES ----------
     Pages that are NOT in the menu. Only people with the link can find them.
     A page with slug "work" lives at zukoife.com/#work                      */
  hiddenPages: [
    // { slug: "work", title: "My work", text: `Write anything here.` },
  ],
};

/* =====================================================================
   POSTS / ESSAYS
   Newest first. Copy the example block, remove the // at the start of
   each line, and fill it in.
   ===================================================================== */
const POSTS = [
  // {
  //   slug: "my-first-essay",            // short web name, no spaces
  //   title: "My First Essay",
  //   summary: "One line that shows under the title.",
  //   date: "Nov 7, 2026",
  //   tags: ["Topic"],
  //   body: `
  // First paragraph.
  //
  // Second paragraph. You can use **bold** and *italic*.
  //
  // ## A heading
  //
  // > A quote
  // `,
  // },
];
