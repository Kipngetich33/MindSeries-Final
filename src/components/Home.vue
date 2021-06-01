<template>
  <div id="wrapper">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h3 class="center_align" >Welcome {{username}}</h3>
        <button class="center_align" @click="logout">Logout</button>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      msg: '',
      username: '',
    };
  },
  methods: {
    async getMessage() {
      await axios.get('http://localhost:5000/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => {
        this.username = res.data.username;
      }).catch((error) => {
        console.error(error);
        this.logout();
      });
    },
    logout() {
      localStorage.setItem('token', '');
      this.$router.push({ name: 'Login' });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>
<style >
a{
color:white;
text-decoration: none;
}
</style>
