<template>
  <container v-show="load">
    <boxes>
      <box></box>
      <box></box>
      <box></box>
      <box></box>
    </boxes>
  </container>
</template>
<script>
import { mapState } from 'vuex';
import { Container, Boxes, Box } from './styles';

export default {
  name: 'Loader',
  components: {
    Container,
    Boxes,
    Box,
  },
  computed: {
    ...mapState(['load']),
  },
};
</script>