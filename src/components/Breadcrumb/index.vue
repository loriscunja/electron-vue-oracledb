<template>
  <container>
    <list>
      <item v-for="(item, index) in list" v-bind:key="index">
        <item-text v-if="isLast(index)">{{ showName(item) }}</item-text>
        <router-link :to="item" v-else :title="showName(item)">{{ showName(item) }}</router-link>
      </item>
    </list>
    <logotipo :class="{'show': isVisible}" />
  </container>
</template>
<script>
import { mapState } from 'vuex';

export default {
  methods: {
    isLast(index) {
      return index === this.list.length - 1;
    },
    showName(item) {
      if (item.meta && item.meta.name) {
        item = item.meta && item.meta.name;
      }
      if (item.name) {
        item = item.name;
      }
      return item;
    },
  },
  computed: {
    ...mapState('Panel', ['status']),
    list() {
      return this.$route.matched;
    },
    isVisible() {
      return !this.status;
    },
  },
};
</script>
