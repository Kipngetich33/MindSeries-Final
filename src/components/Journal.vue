<template>
  <!-- eslint-disable max-len -->
  <div id="wrapper" style="padding-top: 50px;">
    <!-- top section with logo -->
    <div class="row">
      <div class="col-md-6">
        <button class="btn form-control-lg elements_space action_button" type="button"
        style="background-color:#E89C31 ;color:white;height:70px;padding:10px;margin-left:20px;">
            <h1 >Personal Journal</h1>
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
              <a class="nav-link" href="/">
                  <h3 style="color:white;">
                      <i class="far fa-bell" style="font-size:35px;"></i>
                      &nbsp;Affirmation
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
    <div class="row">
      <alert :message="message" v-if="showMessage"></alert>
      <div class="col-md-7">
          <div class="col-auto elements_space" >
            <h2 >January 3 2021</h2>
          </div>
      </div>
      <div class="col-md-5" >
        <form class="row g-4">
          <div class="col-auto elements_space" >
            <input type="text" readonly class="form-control-plaintext "
              id="staticEmail2" value="Enter journal entry date "
              style="color:white;"
            >
          </div>
          <div class="col-auto elements_space">
            <input type="password" class="form-control " id="inputPassword2" placeholder="dd/mm/yyyy">
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10">
        <form style="margin-left:20px;">
        <h3 style="margin-top:20px;"> What are greatful for today</h3>
          <div class="input-group mb-3 elements_space">
            <input type="text" class="form-control" placeholder="Recipient's username"
            aria-label="Recipient's username" aria-describedby="button-addon2"
            style="padding:20px;min-height:75px;">
          </div>

          <h3 style="margin-top:50px;"> What went well today and what could have been improved?</h3>
          <textarea style="min-height:220px;" class="form-control" id="exampleFormControlTextarea1"
          rows="3" placeholder="Type text..."></textarea>
        </form>
      </div>
      <div class="col-md-2">
        <i style="margin-top:80px;font-size:75px;" class="far fa-save"></i><br>
        <i style="margin-top:200px;font-size:75px;" class="far fa-save"></i>
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
