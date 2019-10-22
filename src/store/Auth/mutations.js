const SET_USER = (state, obj) => {
  if (!obj) {
    state.user = null;
    localStorage.removeItem('user_id');
    return;
  }
  state.user = {
    id: obj.USER_ID,
    name: obj.NAME,
    email: obj.EMAIL,
    username: obj.USERNAME,
  };
  localStorage.setItem('user_id', state.user.id);
};

const SET_ERRORS = (state, errors) => {
  state.errors = errors;
};

export default {
  SET_USER,
  SET_ERRORS,
};
