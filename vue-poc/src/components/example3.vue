<template>
  <div class="asoni-component">
      <h1>{{ msg }}</h1>
      <h3>1. Show a "result" of 'Not There Yet' as long as "value" is not equal to 45 - you can change "value" with the buttons.
        Print 'Done' once you did it
    </h3>
    <div>
        <p>Current Value: {{ value }}</p>
        <button @click="value += 5">Add 5</button>
        <button @click="value += 1">Add 1</button>
        <p>{{ output }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example3',
  data() {
    return {
      msg: 'Example 3',
      value: 0,
      interval: 5000
    };
  },
  computed: {
      output: function(){
        return this.value === 45 ? "Done" : "Not There Yet";
    }
  },
  watch: {
    value: function(){
      if (this.output === "Done") {
          var vm = this;
          setTimeout(function() {
            vm.value = 0;
          }, vm.interval);    
      }
    }
  }
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
