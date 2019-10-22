import Swal from 'sweetalert2';
import router from '@/routes';

const login = async ({ commit }, form) => {
  let conn;
  try {
    commit('SET_LOAD', true);
    conn = await window.db.connect();
    const response = await conn.execute(
      `SELECT * FROM HR.USERS 
        WHERE (EMAIL = :identifier OR USERNAME = :identifier) 
        AND PASSWORD = :password`,
      form
    );
    commit('SET_USER', response.rows[0]);
    commit('SET_LOAD', false);
    router.push({ name: 'panel' });
  } catch (err) {
    Swal.fire('Erro', `Ocorreu um erro: ${err}`, 'error');
  } finally {
    window.db.close();
  }
};

const autoLogin = async ({ commit }) => {
  let conn;
  try {
    const userId = localStorage.getItem('user_id');
    conn = await window.db.connect();
    const response = await conn.execute(`
      SELECT * FROM HR.USERS 
        WHERE USER_ID = ${userId}
    `);
    commit('SET_USER', response.rows[0]);
    router.push({ name: 'panel' });
  } catch (err) {
    commit('SET_USER', null);
    router.push({ name: 'auth' });
  } finally {
    window.db.close();
  }
};
/*
const recoverLogin = async ({ commit }, email) => {
  try {
    const response = (await http.post('/recover/password', { email })).data;
    router.push({ name: 'auth' });
    Swal.fire(
      'Sucesso',
      'E-mail enviado com um link para troca de senha.',
      'success'
    );
  } catch (error) {
    if (error.response.data.erro) {
      Swal.fire('Erro', error.response.data.erro, 'error');
    } else {
      Swal.fire('Erro', 'Verifique os campos com erro!', 'error');
    }
    commit('SET_ERRORS', error.response.data);
  }
};
*/

export default {
  login,
  autoLogin,
};
