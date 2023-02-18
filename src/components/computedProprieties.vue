<template>
  <div>
    {{ fullName }} <br />
    <br />
    <h2>Todos em aberto</h2>
    <br />
    <div v-for="todo in uncompletedTodos" :key="todo.id">
      {{ todo.title }}<br />
    </div>
    <br />
    <h2>todos completas</h2>
    <br />
    <div v-for="todo in completedTodos" :key="todo.id">
      {{ todo.title }}<br />
    </div>

    <br />
    <h2>To-do list</h2>
    <br />
    <div v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.completed" />
      {{ todo.title }}<br />
    </div>
  </div>
</template>

<script>
export default {
  name: "computedProprieties",
  data() {
    return {
      user: {
        firstName: "Sisífo",
        lastName: "Oliveira",
      },
      todos: [
        {
          UserId: 1,
          id: 1,
          title: "Platão",
          completed: false,
          imgSrc: "https://via.placeholder.com/150 ",
        },
        {
          UserId: 1,
          id: 2,
          title: "Aristoteles",
          completed: false,
          imgSrc: "https://via.placeholder.com/150 ",
        },
        {
          UserId: 1,
          id: 3,
          title: "Édipo",
          completed: true,
          imgSrc: "https://via.placeholder.com/150 ",
        },
        {
          UserId: 1,
          id: 4,
          title: "Pitágoras",
          completed: false,
          imgSrc: "",
        },
      ],
    };
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },

    uncompletedTodos() {
      return this.todos.filter((todo) => !todo.completed);
    },
    completedTodos() {
      return this.todos.filter((todo) => todo.completed);
    },
  },
  // methods: {},
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin: 60px;
}
</style>
