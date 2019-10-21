<template>
  <div>
    <h1>App</h1>
    <ul>
      <li v-for="item in employees" v-bind:key="item.employee_id">
        <span>{{ item.EMPLOYEE_ID }}</span>
        <span>{{ item.FIRST_NAME }} {{ item.LAST_NAME }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      employees: [],
    };
  },
  methods: {
    async connect() {
      let conn;
      try {
        conn = await db.connect();
        const restotal = await conn.execute(
          'SELECT MAX(EMPLOYEE_ID) TOTAL FROM HR.EMPLOYEES'
        );
        console.log(restotal.rows[0].TOTAL);
        const response = await conn.execute(
          `SELECT * FROM HR.EMPLOYEES ORDER BY EMPLOYEE_ID DESC`
        );
        this.employees = response.rows;
      } catch (err) {
        console.log(err);
      } finally {
        if (conn) {
          db.close();
        }
      }
    },
  },
  mounted() {
    console.log('started');
    this.connect();
  },
};
</script>