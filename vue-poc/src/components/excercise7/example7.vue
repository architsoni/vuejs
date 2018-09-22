<template>
    <div class="container">
        <div class="">
                <h3> 1. Pass some text to the 3 components but not using props </h3>
                <box-black>
                    <span slot="value">Black</span>
                </box-black>
                <box-orange>{{orange}}</box-orange>
                <box-red>RED</box-red>
                <h3 >2. Dynamically switching the components using buttons </h3>
                <button
                    class="btn btn-default"
                    @click="displayComponent = 'boxOrange'"
                >
                    Load Orange Template
                </button>
                <button
                    class="btn btn-default"
                    @click="displayComponent = 'boxBlack'"
                >
                    Load Black Template
                </button>
                <button
                    class="btn btn-default"
                    @click="displayComponent = 'boxRed'"
                >
                    Load Red Template
                </button>
                <hr>
                <component :is="displayComponent"></component>
        </div>
    </div>
</template>

<script>
import Orange from './colors/orange.vue';
import Black from './colors/black.vue';
import Red from './colors/red.vue';
export default {
  data: function() {
    return {
      orange: 'Orange',
      displayComponent: '',
    };
  },
  components: {
    boxOrange: Orange,
    boxBlack: Black,
    boxRed: Red,
  },
};
</script>

<style>
</style>

