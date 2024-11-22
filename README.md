
# NextBlog

My personal blog built with React + NextJS.

Check it out! [https://www.kevinlobo.us/](https://www.kevinlobo.us/blog)

## 📚 Tech Stack

| Name            | Link                                                      |
| --------------- | --------------------------------------------------------- |
| Framework       | [NextJS](https://nextjs.org/docs)                         |
| Markdown        | [Contentlayer](https://www.contentlayer.dev/)             |
| Deployment      | [Vercel](https://vercel.com)                              |
| Styling         | [Tailwindcss](https://tailwindcss.com/)                   |
| Comments        | [Giscus](https://github.com/giscus/giscus)                |
| Markdown editor | [Codemirror](https://codemirror.net/)                     |


## 🪜 Project structure

```bash
📦 root
├── 🗂️ app                     # NextJs 13 app router directory
│ └── 🗂️ blog                  # Blog functionality
│ └── 🗂️ components            # Blog UI components
├── 🗂️ configs                 # Configs
├── 🗂️ lib                     # Utilities
├── 🗂️ posts                   # Blog posts in markdown
├── 🗂️ public                  # Static files for images
├── 🗂️ styles                  # CSS
├── 📝 contentlayer.config.ts  # Contentlayer config
└── 📝 next.config.js          # configuration related to Next.js
```
## Features

- Static content generation based on markdown files (./posts folder)
- Comments with Giscus
- Custom blog lookup with tags
- Automatic table of content generation
- Mobile-friendly view
- Projects page
- Frontmatter support


## Quick Start Guide

`npm i`

`npm run dev`
