<template>
  <container>
    <panel>
      <slideshow />
      <sidebar>
        <sidebar-header class="auth-container-main-header"></sidebar-header>
        <div class="auth-container-main-content">
          <transition
            enter-active-class="animated slideInRight"
            leave-active-class="animated zoomOut"
          >
            <router-view></router-view>
          </transition>
        </div>
        <sidebar-footer class="auth-container-main-footer"></sidebar-footer>
      </sidebar>
    </panel>
  </container>
</template>
<script>
import { Container, Panel, Sidebar } from './styles';
import Slideshow from './Slideshow';
import SidebarHeader from './Header';
import SidebarFooter from './Footer';

export default {
  name: 'Auth',
  components: {
    Container,
    Panel,
    Sidebar,
    Slideshow,
    SidebarHeader,
    SidebarFooter,
  },
};
</script>