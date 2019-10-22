<template>
  <container>
    <logotipo @click="openSite">
      <img src="@/assets/fbs.png" />
    </logotipo>
    <titulo class="title">Acesso Administrativo</titulo>
    <subtitle class="subtitle">Somente Pessoas Autorizadas</subtitle>
  </container>
</template>
<script>
import { Container, Logotipo, Titulo, Subtitle } from './styles';

export default {
  name: 'Header',
  components: {
    Container,
    Logotipo,
    Titulo,
    Subtitle,
  },
  methods: {
    openSite() {
      shell.openExternal('http://fbssistemas.com.br');
    },
  },
};
</script>