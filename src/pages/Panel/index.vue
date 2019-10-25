<template>
  <container>
    <sidebar :class="{'openned': openned}" />
    <main :class="{'openned': openned}">
      <breadcrumb />
      <content>
        <router-view />
      </content>
    </main>
  </container>
</template>
<script>
import { mapActions } from 'vuex';

import Breadcrumb from '~/components/Breadcrumb';
import Sidebar from '~/components/Sidebar';
import { Container, Main, Content } from './styles';

export default {
  name: 'Panel',
  components: {
    Container,
    Main,
    Content,
    Breadcrumb,
    Sidebar,
  },
  data() {
    return {
      openned: true,
    };
  },
  methods: {
    ...mapActions('Panel', ['initPanel']),
  },
  mounted() {
    //this.initPanel();
  },
};
</script>