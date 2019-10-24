import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs';

const login = async ({ commit }, { form, router }) => {
  let conn;
  try {
    commit('Loader/SET_LOAD', true, { root: true });
    conn = await window.db.connect();

    if (conn instanceof Error) {
      throw conn;
    }

    const response = await conn.execute(
      `SELECT * FROM HR.USERS 
        WHERE (EMAIL = :identifier OR USERNAME = :identifier)`,
      {
        identifier: form.identifier,
      }
    );

    commit('Loader/SET_LOAD', false, { root: true });

    if (!response.rows.length) {
      Swal.fire('Erro', 'E-mail ou Usuário Invalido!', 'error');
      return;
    }

    if (!(await bcrypt.compare(form.password, response.rows[0].PASSWORD))) {
      Swal.fire('Erro', 'Senha Invalida!', 'error');
      return;
    }

    commit('SET_USER', response.rows[0]);
    router.push({ name: 'panel' });
  } catch (err) {
    commit('Loader/SET_LOAD', false, { root: true });
    Swal.fire('Erro', `${err}`, 'error');
  } finally {
    window.db.close();
  }
};

const autoLogin = async ({ commit }, next) => {
  let conn;
  try {
    commit('Loader/SET_LOAD', true, { root: true });
    conn = await window.db.connect();

    if (conn instanceof Error) {
      throw conn;
    }

    const response = await conn.execute(
      `SELECT * FROM HR.USERS 
        WHERE USER_ID = :user_id`,
      {
        user_id: localStorage.getItem('user_id'),
      }
    );

    commit('Loader/SET_LOAD', false, { root: true });

    if (!response.rows.length) {
      localStorage.removeItem('user_id');
      commit('SET_USER', null);
      next('/auth');

      Swal.fire('Erro', 'Usuário não autorizado!', 'error');
      return;
    }

    commit('SET_USER', response.rows[0]);
    next('/panel');
  } catch (err) {
    localStorage.removeItem('user_id');
    commit('SET_USER', null);
    next('/auth');

    commit('Loader/SET_LOAD', false, { root: true });
    Swal.fire('Erro', `${err}`, 'error');
  } finally {
    window.db.close();
  }
};

export default {
  login,
  autoLogin,
};
