<template>
  <div>
    <h3>Welcome {{logged_in_user}}</h3>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      msg: '',
      logged_in_user: '',
    };
  },
  methods: {
    async getMessage() {
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
    this.getMessage();
  },
};
</script>
