
<template>
    <div class="container">
                <header>
                    <h1>Excercise - 6</h1>
                </header>
                <ul class="list-group">
                    <li
                        class="list-group-item"
                        v-bind:class="{ selected: index === selected-1 }"
                        v-for="(project, index) in projects"
                        v-bind:key="index"
                    >
                        <projects-list
                            v-bind:class="{ active: isActive }"
                            v-bind:project="project"
                            @showDetails="selected = $event"
                        />
                    </li>
                </ul>
                <h1 v-if="!selected">Details</h1>
                <projects-detail
                    v-else
                    v-bind:details="projects[selected-1].details"
                />
    </div>
</template>

<script>
import Projects from './project/project.vue';
import Details from './detail/detail.vue';
export default {
  data: function() {
    return {
      projects: [
        { id: 1, details: { Name: 'Archit', Project: 'TYCO' } },
        { id: 2, details: { Name: 'Amol', Project: 'OB' } },
        { id: 3, details: { Name: 'Vijay', Project: 'EXL' } },
      ],
      selected: 0,
    };
  },
  components: {
    projectsList: Projects,
    projectsDetail: Details,
  },
};
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style: none;
  cursor: pointer;
}
li:hover {
  background-color: rgba(0, 0, 0, 0.125);
}
.selected {
  background-color: rgba(0, 0, 0, 0.125);
  font-weight: bold;
}
.list-group {
  width: 50%;
  float: left;
}
projects-list {
  width: 50%;
  float: left;
}
projects-detail {
  width: 50%;
  float: left;
}
</style>
