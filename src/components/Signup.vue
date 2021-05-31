<template>
  <!-- eslint-disable max-len -->
  <div id="wrapper">
    <!-- top section with logo -->
    <div class="row">
    <!-- user bootstrap column grids to center the contents -->
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <a href="/">
        <div id="mind_series_heading_containter">
          <!-- add a class center_align to center the text  -->
          <h1 class="center_align" id="mind_series_heading">
              Mind
              <i class="fas fa-dove"></i>
              <span style="color:#E89C31;">Series</span>
          </h1>
        </div>
      </a>
    </div>
    <div class="col-md-4"></div>
    </div>
    <!-- end of the logo section -->

    <div class="row">
    <!-- user bootstrap column grids to center the contents -->
    <div class="col-md-3"></div>
    <!-- only use the middle row for content -->
    <div class="col-md-6">
      <div class="center_align" id="sign_in_form">
        <h1 class="elements_space" >Sign Up</h1>
        <alert :message="message" v-if="showMessage"></alert>
        <!-- add the sign in form here -->
        <form class="row g-3">
            <div class="col-auto">
                <input v-model="firstName" type="text" class="form-control form-control-lg elements_space"
                placeholder="First name">
            </div>
            <div class="col-auto">
                <input v-model="lastName" type="text" class="form-control form-control-lg elements_space"
                placeholder="Last name">
            </div>
        </form>
        <input v-model="userName" class="form-control form-control-lg elements_space" type="text"
            placeholder="User name" aria-label=".form-control-lg example"
            style="margin-left:5px;margin-right:100px;">

          <button class="btn form-control-lg  elements_space action_button" type="button"
          style="color:white;background-color:#E89C31;width:100%;
          margin-left:5px;margin-right:100px;"
          @click="handleSubmit" >Next</button>
        <div id="button_links" class="elements_space">
          <p class="elements_space center_align">
              Already a user?
              <a href="/" style="color:#E89C31;">Login Here</a>
          </p>
        </div>

      </div>
    </div>
    <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import Alert from './Alert.vue';

export default {
  name: 'Singup',
  data() {
    return {
      firstName: '',
      lastName: '',
      userName: '',
      showMessage: false,
      message: '',
    };
  },
  methods: {
    handleSubmit() {
      console.log('handiign first');
      // set the values to local Storage
      localStorage.setItem('firstName', this.firstName);
      localStorage.setItem('lastName', this.lastName);
      localStorage.setItem('userName', this.firstName);
      // clear the form
      this.firstName = '';
      this.lastName = '';
      this.userName = '';
      // now redirect to second signup page
      console.log('redirecting');
      this.$router.push({ name: 'Signup2' });
    },
  },
  components: {
    alert: Alert,
  },
};
</script>
<style >
a{
color:white;
text-decoration: none;
}
</style>
