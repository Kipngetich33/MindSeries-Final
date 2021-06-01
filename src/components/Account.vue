<template>
  <!-- eslint-disable max-len -->
  <div id="wrapper" >
    <!-- top section with logo -->
    <div class="row">
        <!-- user bootstrap column grids to center the contents -->
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <ul class="nav justify-content-end" style="text-align:right;">
                <li class="nav-item">
                    <a class="nav-link" href="/logout">
                        <h3 style="color:white;">
                            <i class="fas fa-power-off" style="font-size:35px;"></i>
                            &nbsp;Sign Out
                        </h3>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <!-- end of the logo section -->
    <!-- add another row using bootstrap grids -->
    <div class="row">
        <!-- user bootstrap column grids to center the contents -->
        <div class="col-md-4"></div>
        <!-- only use the middle row for content -->
        <div class="col-md-4">
        <div class="center_align" id="sign_in_form" style="margin-top: 0px;">
            <i style="font-size:200px;" class="far fa-user-circle"></i>
            <i style="font-size:30px;" class="fas fa-pencil-alt"></i>
            <p>Username</p>
            <h6 style="">Member since Jan 2021</h6>

            <h1 class="elements_space" >Edit your details</h1>
            <alert :message="message" v-if="showMessage"></alert>
            <!-- add the sign in form here -->
            <input v-model="firstName" class="form-control form-control-lg elements_space" type="text" placeholder="First Name" aria-label=".form-control-lg example">
            <input v-model="lastName" class="form-control form-control-lg elements_space" type="text" placeholder="Last Name" aria-label=".form-control-lg example">
            <input v-model="email" class="form-control form-control-lg elements_space" type="text" placeholder="Email" aria-label=".form-control-lg example">
            <div class="d-grid gap-2">
            <button class="btn form-control-lg elements_space action_button" type="button"
            @click="updateUser" style="background-color:#E89C31;color:white;padding:10px;font-weight:bold;width:100%;">
                Save
            </button>
            </div>
            <div id="button_links" class="elements_space">
                <p>
                    <a href="/reset_password" style="color:#E89C31;">Reset Password?</a>
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
      firstName: '',
      lastName: '',
      email: '',
      showMessage: false,
      message: '',
    };
  },
  methods: {
    async getUserDetails() {
      const path = 'http://localhost:5000/user';
      axios.get(path, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => {
        // set local variables
        this.firstName = res.data.firstName;
        this.lastName = res.data.lastName;
        this.email = res.data.email;
      }).catch((error) => {
        console.log(error);
        this.showMessage = true;
        this.message = error;
      });
    },
    async updateUser() {
      console.log('updating');
      const path = 'http://localhost:5000/update_user';
      axios.post(path, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => {
        console.log('response');
        console.log(res);
        this.showMessage = true;
        this.message = res.data.message;
      }).catch((error) => {
        console.log(error);
        this.showMessage = true;
        this.message = error;
      });
    },
  },
  components: {
    alert: Alert,
  },
  created() {
    // call the get details function
    this.getUserDetails();
  },
};
</script>
<style >
a{
color:white;
text-decoration: none;
}
#wrapper{
    padding-top: 0px;
}
.action_button{
background-color:#E89C31 ;
color:white;
padding:10px;
}
</style>
