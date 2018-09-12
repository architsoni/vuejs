<template>
  <div class="asoni-component">
      <h1>{{ msg }}</h1>
        <h3>1. Hook up the button to toggle the display of the two paragraphs.
        Use both v-if and v-show and inspect the elements to see the difference </h3>
        <div>
            <button @click="visible = !visible">Toggle</button>
            <p v-if="visible">Check/Test VIf</p>
            <p v-show="visible">Check/Test VShow</p>
        </div>
        <h3>2. Output an ul of array elements of your choice. Also print the index of each element. </h3>
        <ul>
            <li v-for="(value, key) in arrayElement">{{key}} - {{ value }}</li>
        </ul> 
        <h3>3. Print all key-value pairs of the following object: {title: 'Lord of the Rings', author: 'J.R.R.
            Tolkiens',
            books: '3'}.
            Also print the index of each item. </h3>
        <ul>
            <li v-for="(value, key, index) in myObject">{{ key }}: {{ value }} : {{ index }}</li>
        </ul>
        <h3>4. Print the following object (only the values) and also create a nested loop for the testData array</h3>
        <ul>
            <li v-for="(value, key) in dummyObj">
                <ul  v-if="value.constructor == Array" >
                    <li v-for="item in value">{{ item }}</li>
                </ul>
                <div v-else>
                    {{ value }}
                </div>
            </li>
        </ul>

  </div>
</template>

<script>
export default {
  name: 'example5',
  data() {
    return {
      arrayElement: ['WTF', 'LOL', 'WTH'],
      myObject: {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkiens',
        books: '3'
      },
      dummyObj: {
        name: 'Archit Soni',
        empID: 45,
        score: [80, 88, 78, 90]
      },
      visible: true,
    };
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
