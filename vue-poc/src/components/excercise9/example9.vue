<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h3>Build a Custom Directive which works like v-on (Listen for Events) which accepts a function as the parameter</h3>
                <button v-custom-directive:click="triggerThisFunction" class="btn btn-primary">Click on this button!!</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  directives: {
    customDirective: {
      bind(el, binding) {
        el.addEventListener(binding.arg, binding.value);
        console.log(binding.arg, binding.value);
      },
    },
  },
  methods: {
    triggerThisFunction() {
      console.info('Event listner triggered');
    },
  },
};
</script>

<style>
</style>
