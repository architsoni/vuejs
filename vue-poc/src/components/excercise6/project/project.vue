<template>
    <div class="project-list" @click="$emit('showDetails', project.id)">
        {{ project.details.Name }}
    </div>
</template>

<script>
export default {
  props: {
    project: Object,
    showDetails: Function,
  },
};
</script>
<style>
</style>

