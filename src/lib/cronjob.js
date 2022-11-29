const cron = require('node-cron');
const knex = require('../../db/index');

const transporter = require('./nodemailer');

function convertMsToHours(data) {
  const nowDatetime = Date.now();

  const expiresInHours = (data.expires_at - nowDatetime) / 1000 / 60 / 60;
  return parseInt(expiresInHours);
}

cron.schedule(' * */1 * * *', () => {
  knex('Todo')
    .select()
    .orderBy('expires_at')
    .then((data) => {
      const tasks = data.filter((task) => convertMsToHours(task) === 6);
      tasks.map(async (task) => {
        // eslint-disable-next-line
      const {email: user_email } = await knex('users').select('email').where({ id: task.user_id }).first();
        transporter(user_email, task);
      });
    });
});
