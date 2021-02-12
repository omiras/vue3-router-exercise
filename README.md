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
   About [named routes](https://next.router.vuejs.org/guide/essentials/named-routes.html#named-routes)
   Note: you will not see any footer, yet.

4) Fill `TheNavigation.vue` and add 2 `router-link`.
   Check the comments inside the file.
   Note how the a:active class is autoamatically applied depending of the ![URL path](https://oscarm.tinytake.com/media/f43a86?filename=1613111800747_TinyTake12-02-2021-07-36-34_637487086046750462.png&sub_type=thumbnail_preview&type=attachment&width=1199&height=506)

5) In `AddTodo.vue` file, navigate to `/todos` url when the user add a todo.
   Check the comment inside the file.
   Hint: manual navigation is also called "programmatic navigation". Look for this concept in [Vue Router documentation](https://next.router.vuejs.org/).
   Hint: inside a component, you can access to the "router" object with "this.$router"

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
