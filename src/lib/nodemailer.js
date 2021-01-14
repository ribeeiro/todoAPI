const transporter = require('../config/nodemailer');

module.exports = (email, task) => transporter.sendMail({
  from: process.env.EMAIL,
  to: email,
  subject: 'Task perto do tempo de expirar',
  text: `Sua task "${task.text}", está perto de expirar, nao esqueça de cumpri-la`
}, (err, info) => {
  err ? console.log(err) : console.log(info.response);
});
