<template>
  <header>
    <nav>
        <div>
            <span>Todo app</span>
      <ul>
        <li>
          <!-- Add a router-link to /todos -->
        </li>
        <li>
          <!-- Add a router-link to /add-task -->
        </li>
      </ul>
        </div>

    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #18574c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}

span {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 20px 10px;
  display: inline-block;
}
</style>