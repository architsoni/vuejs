<template>
  <div class="asoni-component">
      <h1>{{ msg }}</h1>
      <h3>1. Show an alert when the Button gets clicked </h3>
      <div>
          <button @click= "alertPop">Show Alert</button>
      </div>
      <h3>2. Listen to the "keydown" event and store the value in a data property </h3>
      <div>
          <input @keydown="bindKey" type="text">
          <p>{{ value }}</p>
      </div>
      <h3>3. Adjust the example from 2. to only fire if the "key down" is the ENTER key </h3>
      <div>
          <input @keyup.enter="bindKeyEnter" type="text">
          <p>{{ valueEnter }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'example2',
  data() {
    return {
      msg: 'Example 2',
      value: '',
      valueEnter: '',
    };
  },
  methods: {
    bindKeyEnter: function(event) {
      this.valueEnter = event.target.value;
    },
    bindKey: function(event) {
      this.value = event.target.value;
    },
    alertPop: function() {
      alert('This is the Alert');
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
