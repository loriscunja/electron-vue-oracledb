<template>
  <div>
    <h1>Login</h1>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  methods: {
    ...mapActions('Auth', ['login']),
    validateBeforeSubmit() {
      this.login({
        identifier: 'test@domain.com',
        password: 'test',
      });
    },
  },
};
</script>