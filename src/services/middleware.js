import store from '~/store';

export const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters['Auth/isAuthenticated']) {
    next();
    return;
  }
  next('/panel');
};

export const ifAuthenticated = (to, from, next) => {
  if (store.getters['Auth/isAuthenticated']) {
    next();
    return;
  }
  next('/auth');
};

export const checkToken = (to, from, next) => {
  if (localStorage.getItem('user_id')) {
    store.dispatch('Auth/autoLogin');
    return;
  }
  next();
};

export const logout = (to, from, next) => {
  if (store.getters['Auth/isAuthenticated']) {
    store.commit('Auth/SET_USER', null);
    next('/auth');
    return;
  }
  next();
};
