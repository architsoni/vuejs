<template>
    <div class="project-detail">
        <p><b>Name: </b> {{ details.Name }} </p>
        <p><b>Project : </b> {{ details.Project }} </p>
    </div>
</template>

<script>
export default {
  props: {
    details: Object,
  },
};
</script>
<style>
</style>

