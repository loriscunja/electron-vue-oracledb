<template>
  <container @submit.prevent="send" method="post" autocomplete="off">
    <form-group v-bind:class="{ 'form-error': errors.identifier }">
      <input-control
        type="text"
        v-model="form.identifier"
        placeholder="E-mail ou Usuário"
        required
      />
      <span>{{ errors.identifier | first }}</span>
    </form-group>
    <form-group :class="{ 'form-error': errors.password }">
      <input-control type="password" v-model="form.password" placeholder="Senha" required />
      <span>{{ errors.password | first }}</span>
    </form-group>
    <form-group>
      <router-link :to="{ name: 'auth.forgot-password' }" class="form-link">Esqueceu a senha?</router-link>
    </form-group>
    <form-group>
      <btn-login type="submit">Entrar</btn-login>
    </form-group>
  </container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { Container, FormGroup, InputControl, BtnLogin } from './styles';

export default {
  name: 'Login',
  components: {
    Container,
    FormGroup,
    InputControl,
    BtnLogin,
  },
  methods: {
    ...mapActions('Auth', ['login']),
    send() {
      this.login({
        form: this.form,
        router: this.$router,
      });
    },
  },
  computed: {
    ...mapState('Auth', ['form', 'errors']),
  },
};
</script>