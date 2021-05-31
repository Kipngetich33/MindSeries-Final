<template>
    <div class="container" style="padding:100px;">
        <form @submit.prevent="handleSubmit">
            <input v-model="username" type="text" placeholder="Username"><br>
            <input v-model="password" type="text" placeholder="Password"><br>
            <button  type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async handleSubmit() {
      const path = 'http://localhost:5000/login';
      axios.post(path, {
        username: this.username,
        password: this.password,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }).then((res) => {
        // set the local token
        localStorage.setItem('token', res.data.token);
        // redirect user to the home page
        this.$router.push({ name: 'Home' });
      })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
