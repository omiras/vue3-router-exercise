# vue3-router-exercise

## Exercise N°8

1. install `vue-router` dependency.

1. Fill the `router.js` file.
   Use the `createRouter` function to build app routes.
   Create a path for `/todos` url, it will display the `pages/TodoList.vue` component.
   Create a path for `/add-todo` url, it will display the `pages/AddTodo.vue` component.
   make url `/todos` as welcome default url.
   Export a `router` variable which contains your routes.

2) Fill `main.js` and register your routes with router plugin.

3) Fill `App.vue`, and add 2 `router-view`.
   Check the comments inside the file.

4) Fill `TheNavigation.vue` and add 2 `router-link`.
   Check the comments inside the file.

5) In `AddTodo.vue` file, navigate to `/todos` url when the user add a todo.
   Check the comment inside the file.

6) Finally add a component `TheFooter.vue` in `src/components/UI`. Display any text.
   Use this component in the footer named router-view (`App.vue`) for `/todos` and `/add-todo` urls.
   
   
**Note:** Not needed for this exercise, but pay attention how "inject" and "provide" [works](https://v3.vuejs.org/guide/composition-api-provide-inject.html). 
App.vue needs to pass data to TodoList.vue. Instead of passing it as a __prop__; it us passed with __provide__. This will make the data "todos" available to child components.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
