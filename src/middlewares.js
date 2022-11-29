const jwt = require('jsonwebtoken');

exports.validateJWT = (req, res, next) => {
  try {
    const token = req.headers.authorization.trim().split(' ')[1];

    const payload = jwt.verify(token, process.env.JWT_PUBLIC_KEY);

    req.id = payload.id;

    next();
  } catch (err) {
    res.status(400).json({ status: 400, message: 'token invalido' });
  }
};
