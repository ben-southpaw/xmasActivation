//SCSS Framework

We have one scss file per svelte component.
i.e. Header.svelte --> header.scss

We have one global.scss file for global styles used across the project.
Additionally, a mixins file which contains reusable css variables. This would also 
have our themes, fonts, colour-schemes included.

Why use sass? - Can use if statements / for loops  and is decompiled to css.
Also, nesting styles works well with Svelte components.

In our SCSS directory we store base fonts/styles, config styles and
our global.scss and mixins.

Media queries and breakpoints are included in a theme.scss file
which represents an overall theme for the project. 


