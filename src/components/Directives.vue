<template>
  <div>
    <h1 :class="{ title: true, 'title-home': isHome }">Teste de titulo</h1>

    <p :class="pClass">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam in
      officiis est praesentium iste quia, eaque maiores perspiciatis illo
      tenetur tempore itaque nobis tempora, sit, cumque sunt. Earum, eaque.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia at
      debitis! Amet tempore omnis dolorum, minima explicabo ipsa voluptates
      iusto quasi blanditiis libero mollitia sequi distinctio ullam, ratione
      repudiandae!
    </p>

    <div v-for="(obj, index) in todos" :key="obj.id" class="todos-item">
      <img v-if="obj.imgSrc" :src="obj.imgSrc" />
      {{ index }} - {{ obj.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Directives",
  data() {
    return {
      isHome: false,
      classVar: "title",
      pClass: ["text", "text-home"],
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
};
</script>

<style scoped>
.text {
  color: red;
}

.text-home {
  font-size: 40px;
  color: greenyellow;
}
.title {
  font: size 20px;
  color: blue;
}
.isHome {
  font-size: 40px;
  color: greenyellow;
}
.todos-item {
  background: #fff;
  margin: 0 0 5px 0;
  padding: 3px 6px;
  color: #000;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
  margin: 60px;
}
</style>
