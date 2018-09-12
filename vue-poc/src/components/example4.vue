<template>
  <div class="asoni-component">
      <h1>{{ msg }}</h1>
      <h3>1. Start the Effect with the Button.
    The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick.
    Attach respective class to the div with id "effect" below </h3>
    <div>
      <button @click="startEffect">Start Effect</button>
      <div id="effect" :class="[ isHighlight ? 'highlight': 'shrink']"></div>
      <!-- <div v-bind:class="[isHighlight ? 'highlight' : 'shrink', boxEffect]"></div> -->
    </div>
      <h3>2. Create a couple of CSS classes and attach them via the array syntax </h3>
    <div :class="['highlight', 'bold']">Class Attached !</div>


    <h3>3. Let the user enter a class (create some example classes) and attach it </h3>
    <div>
      <input @keydown.enter="classNames" type="text">
      <div :class="className">Class</div>
    </div>

    <h3>5. Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. </h3>
    <button @click="progress">Start Progress</button>
    <div class="progress">
        <div class="widthProgress" :style="{width: progressWidth + '%'}"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'example4',
  data() {
    return {
      msg: 'Example 4',
      isHighlight: true,
      className: [],
      progressWidth: 0
    };
  },
  methods: {
    startEffect: function() {
        var vm = this;
        setInterval(function(){ 
            vm.isHighlight = !vm.isHighlight
        }, 1000);
    },
    classNames: function(event){
        this.className.push(event.target.value);
        event.target.value = '';
    }, 
    progress: function(){
        var vm = this;
        setInterval(function(){
            vm.progressWidth < 100 ? vm.progressWidth += 1 : null;
        }, 1000);
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
.bold{
  font-weight: bold;
}
.boxEffect, #effect {
  width: 100px;
  height: 100px;
  margin: 20px auto;
  border-radius: 10px;
}
.highlight {
  background-color: red;
}
.shrink {
  background-color: gray;
}
.progress {
    width: 500px;
    height: 20px;
    margin: 20px auto;
}

.widthProgress {
    background-color: green;
    height: 10px;
}
</style>
