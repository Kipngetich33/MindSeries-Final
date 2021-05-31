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

    <!-- add another row using bootstrap grids -->
    <!-- add another row using bootstrap grids -->
    <div class="row">
      <!-- user bootstrap column grids to center the contents -->
      <div class="col-md-4"></div>
      <!-- only use the middle row for content -->
      <div class="col-md-4">
        <div class="center_align" id="sign_in_form">
          <h1 class="elements_space" >Sign In</h1>
          <alert :message="message" v-if="showMessage"></alert>
          <!-- add the sign in form here -->
          <input v-model="email" class="form-control form-control-lg elements_space" type="text" placeholder="Email/Username" aria-label=".form-control-lg example">
          <input v-model="password" class="form-control form-control-lg elements_space" type="password" placeholder="Password" aria-label=".form-control-lg example">
          <div class="d-grid gap-2">
            <button class="btn form-control-lg elements_space action_button" @click="handleSubmit"
            type="button" style="color:white;background-color:#E89C31;width:100%;font-weight:bold;">
                SIGN IN
            </button>
          </div>
          <div id="button_links" class="elements_space" >
            <p>
              <span class="floatleft">
                <a href="/#">Forgot Password?</a>
              </span>
              <span class="floatright">
                <a href="/signup">Not a member yet?</a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Alert from './Alert.vue';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      showMessage: false,
      message: '',
    };
  },
  methods: {
    handleSubmit() {
      // call the create user function
      this.login();

      // clear the form
      // this.firstName = '';
      // this.lastName = '';
      // this.userName = '';
      // now redirect to second signup page
      // this.$router.push({ name: 'Singup2' });
    },
    async login() {
      const path = 'http://localhost:5000/login';
      axios.post(path, {
        email: this.email,
        password: this.password,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }).then((res) => {
        console.log(res);
        // set the local token
        localStorage.setItem('token', res.data.token);
        // redirect user to the home page
        this.$router.push({ name: 'Home' });
      }).catch((error) => {
        console.log(error);
        this.showMessage = true;
        this.message = 'Incorrect Username/Password';
      });
    },
  },
  components: {
    alert: Alert,
  },
  created() {
    // console.log('creating');
    // this.$forceUpdate();
  },
};
</script>
<style >
a{
color:white;
text-decoration: none;
}
</style>
