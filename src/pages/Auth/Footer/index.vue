<template>
  <container>
    <support>
      <h1 class="support-title">
        <i class="fa fa-cogs icon"></i>Suporte
      </h1>
      <p class="support-text">
        suporte@fbssistemas.com.br
        <span @click="openWhatsapp" class="whatsapp">
          <i class="fab fa-whatsapp"></i> 17 99719.2355
        </span>
      </p>
      <div @click="openSite" class="support-link">portal.fbssistemas.com.br</div>
    </support>
  </container>
</template>
<script>
import { Container, Support } from './styles';

export default {
  name: 'Footer',
  components: {
    Container,
    Support,
  },
  methods: {
    openWhatsapp() {
      const text = 'Olá, preciso de suporte...';
      shell.openExternal(
        `https://api.whatsapp.com/send?l=pt&phone=5517997192355&text=${encodeURI(
          text
        )}`
      );
    },
    openSite() {
      shell.openExternal('http://scrum.fbssistemas.com.br/apex');
    },
  },
};
</script>