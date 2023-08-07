# Front-end Boilerplate

## Running project locally

`yarn serve`

## Macros

We're using [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)'s structure wich has three main component types named 'atom', 'molecule' and 'organism'.

### Importing

You can import related macros as follows:

`{%- from "system/component.njk" import atom, molecule, organism -%}`

If you need to access 11ty global data in your macro, you can add [`with context`](https://github.com/11ty/eleventy/issues/434#issuecomment-469028924) into your import statement as follows:

`{%- from "system/component.njk" import atom, molecule, organism with context -%}`

We also have generic component macro, if you prefer:

`{%- from "system/component.njk" import component -%}`

### Usage

```
{{ atom('button', { content: 'Hello' }) }}
{{ component('atom', 'button', { content: 'Hello' }) }}
```

## Resources

- [11ty](https://www.11ty.dev/)
- [11ty Documentation](https://www.11ty.dev/docs/)
- [Nunjucks Template Engine](https://mozilla.github.io/nunjucks/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Alpine.js](https://alpinejs.dev/)
