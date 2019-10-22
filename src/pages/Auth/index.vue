<template>
  <div>
    <h1>Auth</h1>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'Auth',
  methods: {
    ...mapActions('Auth', ['login']),
  },
  mounted() {
    this.login({
      identifier: 'test@domain.com',
      password: 'test',
    });
  },
};
</script>