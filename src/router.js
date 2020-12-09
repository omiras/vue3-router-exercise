import { createRouter, createWebHistory } from "vue-router";
import TodoList from "./pages/TodoList.vue";
import AddTodo from "./pages/AddTodo.vue";
import TheFooter from "./components/UI/TheFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/todos",
    },
    {
      name: "todos",
      path: "/todos",

      components: {
        default: TodoList,
        footer: TheFooter,
      },
    },
    {
      name: "add-todo",
      path: "/add-todo",
      components: { default: AddTodo, footer: TheFooter },
    },
  ],
});

export default router;
