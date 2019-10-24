const initPanel = ({ commit }) => {
  commit('Loader/SET_LOAD', true, { root: true });
};

export default {
  initPanel,
};
