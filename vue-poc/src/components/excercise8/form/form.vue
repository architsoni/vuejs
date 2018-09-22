<template>
    <div>
        <div>
            <label>First Name</label>
            <input type="text" class="form-control" :data="firstName" @input="updateFirstName">
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" class="form-control" :data="lastName" @input="updateLastName">
        </div>
    </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      fullName: '',
      firstName: '',
      lastName: '',
    };
  },
  methods: {
    updateFirstName() {
      this.firstName = event.target.value;
      this.updateName();
    },
    updateLastName() {
      this.lastName = event.target.value;
      this.updateName();
    },
    updateName() {
      this.fullName = this.firstName + ' ' + this.lastName;
      this.$emit('input', this.fullName);
    },
  },
};
</script>
