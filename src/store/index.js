import Vue from 'vue';
import Vuex from 'vuex';

import Loader from './Loader';
import Auth from './Auth';
import Panel from './Panel';

Vue.use(Vuex);

const modules = {
  Loader,
  Auth,
  Panel,
};

export default new Vuex.Store({
  modules,
});
