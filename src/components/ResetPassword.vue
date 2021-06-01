<template>
  <!-- eslint-disable max-len -->
  <div id="wrapper">
    <!-- top section with logo -->
    <div class="row">
    <!-- user bootstrap column grids to center the contents -->
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <a href="/" style="color:white;">
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
    <div class="row">
        <div style="margin-top:60px;" class="elements_space">
            <alert style="margin-left: 300px;" :message="message" v-if="showMessage"></alert><br>
            <h1 style="margin-left: 530px;"  class="elements_space" >Reset Password</h1><br>
            <p style="margin-left: 300px;" >Enter the email associated with your account and we'll send an email with instructions to reset your password.</p><br>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <!-- add the sign in form here -->
            <input v-model="email" class="form-control form-control-lg" type="text" placeholder="Enter your email" aria-label=".form-control-lg example">
            <div class="d-grid gap-2">
                <button @click="resetPassword" class="btn form-control-lg action_button bold elements_space"
                type="button"
                style="color:white;background-color:#E89C31;width:40%;font-weight:bold;margin-left:140px;">
                RESET
                </button>
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
      showMessage: false,
      message: '',
    };
  },
  methods: {
    async resetPassword() {
      const path = 'http://localhost:5000/reset_password';
      axios.post(path, {
        email: this.email,
      }).then((res) => {
        console.log(res);
        this.showMessage = true;
        this.message = 'Reset instruction have been sent to your email';
      }).catch((error) => {
        console.log(error);
        this.showMessage = true;
        this.message = 'Reset failed, please try again';
      });
    },
  },
  components: {
    alert: Alert,
  },
  created() {
  },
};
</script>
<style >
a{
color:white;
text-decoration: none;
}
</style>
