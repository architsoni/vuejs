<template>
    <div class="container">

        <form v-if="!submitform">
            <div class="row">
                <div>
                    <form-box v-model="fullName"></form-box>
                    <div class="form-group">
                        <label>Mail</label>
                        <input type="text" class="form-control" v-model="email">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="password">
                    </div>
                    <div class="form-group">
                        <label class="radio-inline">
                            <input type="radio" value="Yes" v-model="dbStorage"> Yes
                        </label>
                        <label class="radio-inline">
                            <input type="radio" value="No" v-model="dbStorage"> No
                        </label>
                    </div>
                   <button
                            type="submit"
                            @click.prevent="submitform = true"
                            class="btn btn-warning">Submit</button>
                </div>
            </div>
        </form>
        <div class="row" v-if="submitform">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Name: {{ fullName }}</p>
                        <p>E-Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>DBStorage: {{ dbStorage }}</p>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import form from './form/form.vue';
export default {
  components: {
    formBox: form,
  },
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      dbStorage: '',
      submitform: false,
    };
  },
};
</script>

<style>
</style>
