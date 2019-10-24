<template>
  <container>
    <v-title>Panel</v-title>
  </container>
</template>
<script>
import { Container, VTitle } from './styles';
import { mapActions } from 'vuex';

export default {
  name: 'Panel',
  components: {
    Container,
    VTitle,
  },
  methods: {
    ...mapActions('Panel', ['initPanel']),
  },
  mounted() {
    //this.initPanel();
  },
};
</script>