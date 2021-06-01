<template>
  <!-- eslint-disable max-len -->
  <div id="wrapper" style="padding-top: 50px;">
    <!-- top section with logo -->
    <div class="row">
      <div class="col-md-6">
        <button class="btn form-control-lg elements_space action_button" type="button"
        style="background-color:#E89C31 ;color:white;height:70px;padding:10px;margin-left:20px;">
            <h1 >Affirmations</h1>
        </button>
      </div>
      <div class="col-md-6">
        <ul class="nav justify-content-end">
          <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
          </li> -->
          <li class="nav-item">
              <a class="nav-link" href="/account">
                  <h3 style="color:white;">
                      <i class="far fa-user-circle" style="font-size:35px;"></i>
                      &nbsp;Account
                  </h3>
              </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/journal">
                <h3 style="color:white;">
                    <i class="fas fa-book" style="font-size:35px;"></i>
                    &nbsp;Journal
                </h3>
            </a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/logout">
                  <h3 style="color:white;">
                      <i class="fas fa-power-off" style="font-size:35px;"></i>
                      &nbsp;Sign Out
                  </h3>
              </a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> -->
        </ul>
      </div>
    </div>
    <!-- end of the logo section -->
    <!-- add another row using bootstrap grids -->
    <div class="row" style="padding:20px;">
      <alert :message="message" v-if="showMessage"></alert>
      <div class="elements_space" >
        <h2 style="margin:20px;">Reminder</h2>
        <p style="margin:20px;">You are on track its literally playing out how its supposed to. Watch and see exactly
          how it all comes together</p>
        <p style="margin:20px;">________________________________________________________________________________________________________________________________________________</p>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
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
    // async updateUser() {
    //   console.log('updating');
    //   await axios.post('http://localhost:5000/update_user', {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem('token')}`,
    //     },
    //   }).then((res) => {
    //     console.log('response');
    //     console.log(res);
    //     this.showMessage = true;
    //     this.message = res.data.message;
    //   }).catch((error) => {
    //     console.log(error);
    //     this.showMessage = true;
    //     this.message = error;
    //   });
    // },
    // async getMessage() {
    //   await axios.get('http://localhost:5000/user', {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem('token')}`,
    //     },
    //   }).then((res) => {
    //     // set local variables
    //     this.firstName = res.data.firstName;
    //     this.lastName = res.data.lastName;
    //     this.email = res.data.email;
    //   }).catch((error) => {
    //     console.error(error);
    //     this.logout();
    //   });
    // },
    // logout() {
    //   localStorage.setItem('token', '');
    //   this.$router.push({ name: 'Login' });
    // },
  },
  components: {
    alert: Alert,
  },
  created() {
    // check that user is logged in
    // this.getMessage();
  },
};
</script>
<style >
a{
color:white;
text-decoration: none;
}
</style>
