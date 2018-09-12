<template>
  <div class="asoni-component">
      <h1>{{ msg }}</h1>
      <h3>1. Fill the p with your Name and Age - using Interpolation </h3>
      <p>Interpolated data - {{name}} {{ (age) }}</p>

      <h3>2. Output your age, multiplied by 3</h3>
      <p>{{ age*3 }}</p>

      <h3>3. Call a function to output a random float between 0 and 1 (Math.random())</h3>
      <p>{{ randomFloat() }}</p>

       <h3>4. Search any image on Google and output it here by binding the "src" attribute</h3>
      <div>
        <img v-bind:src="image"/>
      </div>

       <h3>5. Pre-Populate this input with your name (set the "value" attribute)</h3>
        <input type="text" v-bind:value="name">
  </div>
</template>

<script>
export default {
  name: 'example1',
  data() {
    return {
      msg: 'Archit Soni',
      name: 'Archit Soni',
      age: 27,
      image: 'https://dummyimage.com/600x400/000/fff',
    };
  },
  methods: {
    randomFloat: function() {
      return Math.random();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
