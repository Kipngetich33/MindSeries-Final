<template >
  <div class="templatebody">
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
    <div class="row">
        <h3>Welcome {{logged_in_user}}</h3>
        <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Journal',
  data() {
    return {
      msg: '',
      logged_in_user: '',
    };
  },
  methods: {
    async submitFirst() {
      await axios.get('http://localhost:5000/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => {
        this.logged_in_user = res.data.user;
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
    this.checkUser();
  },
};
</script>
<style >
a{
color:white;
text-decoration: none;
}
</style>
