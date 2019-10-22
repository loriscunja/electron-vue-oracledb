import Vue from 'vue';
import Vuex from 'vuex';

import Auth from './Auth';
import Loader from './Loader';

Vue.use(Vuex);

const modules = {
  Loader,
  Auth,
};

export default new Vuex.Store({
  modules,
});
