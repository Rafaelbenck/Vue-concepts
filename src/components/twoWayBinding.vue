<template>
  <div>
    <div>
      One-way data binding <br />
      Two-way data binding <br />
      v-model -> formulários
    </div>

    <br />
    <div>
      <label for=""> Nome </label> <br />
      <input v-model="name" type="text" />
      <br />
      {{ name }}
    </div>

    <br />
    <div>
      <label>sports</label>
      <option value="">Choice our favorite sports</option>
      <select v-model="sports">
        <option value="surf">Surf</option>
        <option value="futebol">Futebol</option>
        <option value="skate">Skate</option>
        <option value="corrida">Corrida</option>
        <option value="ciclismo">Ciclismo</option>
      </select>
      <br />
      {{ sports }}
    </div>

    <br />
    <div>
      <label>Newsletter</label><br />
      <input v-model="newsletter" type="radio" value="sim" />
      Sim
      <input v-model="newsletter" type="radio" value="não" />
      Não <br />
      {{ newsletter }}
    </div>

    <br />
    <div>
      <label>Contract</label><br />
      <input v-model="contract" type="checkbox" />
      Você aceita os termos e condições? <br />

      {{ contract }}
    </div>

    <br />
    <div>
      <label>what color do you like</label><br />
      <input v-model="colors" type="checkbox" value="Blue" />
      Blue <br />

      <input v-model="colors" type="checkbox" value="Red" />
      Red <br />

      <input v-model="colors" type="checkbox" value="Yellow" />
      Yellow <br />

      <input v-model="colors" type="checkbox" value="Green" />
      Green<br />

      {{ colors }}
    </div>
  </div>
</template>

<script>
export default {
  name: "twoWayBinding",
  data() {
    return {
      name: "Rafael",
      sports: "Choice",
      newsletter: "",
      contract: false,
      colors: [],
    };
  },
};
</script>
