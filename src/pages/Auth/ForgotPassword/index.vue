<template>
  <container @submit.prevent="send" method="post" autocomplete="off" class="form">
    <message class="form-text">
      Confirme seu E-mail de Registro
      <br />para alteração da Senha
    </message>
    <form-group>
      <input-control type="email" v-model="email" placeholder="E-mail" required />
    </form-group>
    <form-group>
      <btn-enviar>Enviar</btn-enviar>
    </form-group>
    <form-group>
      <router-link
        :to="{ name: 'auth.login' }"
        title="Voltar ao Login"
        class="btn-voltar"
      >Voltar ao Login</router-link>
    </form-group>
  </container>
</template>
<script>
import { mapActions } from 'vuex';
import {
  Container,
  Message,
  FormGroup,
  InputControl,
  BtnEnviar,
  BtnVoltar,
} from './styles';

export default {
  name: 'ForgotPassword',
  components: {
    Container,
    Message,
    FormGroup,
    InputControl,
    BtnEnviar,
    BtnVoltar,
  },
  data() {
    return {
      email: '',
    };
  },
  methods: {
    ...mapActions('Auth', ['recoverLogin']),
    send() {
      this.recoverLogin(this.email);
    },
  },
};
</script>