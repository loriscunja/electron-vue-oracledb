<template>
  <container>
    <list ref="list">
      <item v-for="(item, index) in banners" v-bind:key="index" :class="{'active': sel === index}">
        <img :src="`assets/${item}`" />
      </item>
    </list>
  </container>
</template>
<script>
import { Container, List, Item } from './styles';

export default {
  name: 'Slideshow',
  components: {
    Container,
    List,
    Item,
  },
  data() {
    return {
      banners: ['34978.jpg', '64947.jpg', '71570.jpg', '90850.jpg'],
      sel: 0,
    };
  },
  methods: {
    change() {
      this.sel++;
      if (this.sel >= this.banners.length) {
        this.sel = 0;
      }
      setTimeout(() => this.change(), 6000);
    },
  },
  mounted() {
    setTimeout(() => this.change(), 6000);
  },
};
</script>