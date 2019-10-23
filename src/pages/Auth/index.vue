<template>
  <container>
    <panel>
      <slideshow />
      <sidebar>
        <sidebar-header class="auth-container-main-header"></sidebar-header>
        <sidebar-main>
          <transition
            enter-active-class="animated slideInRight"
            leave-active-class="animated zoomOut"
          >
            <router-view></router-view>
          </transition>
        </sidebar-main>
        <sidebar-footer class="auth-container-main-footer"></sidebar-footer>
      </sidebar>
    </panel>
  </container>
</template>
<script>
import { Container, Panel, Sidebar, SidebarMain } from './styles';
import Slideshow from './Slideshow';
import SidebarHeader from './Header';
import SidebarFooter from './Footer';

export default {
  name: 'Auth',
  components: {
    Container,
    Panel,
    Sidebar,
    SidebarMain,
    Slideshow,
    SidebarHeader,
    SidebarFooter,
  },
};
</script>