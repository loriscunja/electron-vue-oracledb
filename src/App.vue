<template>
  <div id="app">
    <router-view></router-view>
    <loader />
  </div>
</template>
<script>
import Loader from '~/components/Loader';

export default {
  name: 'App',
  components: {
    Loader,
  },
};
</script>