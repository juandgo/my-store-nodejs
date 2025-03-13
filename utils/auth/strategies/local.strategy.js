const { Strategy } = require('passport-local');
const UserService = require('./../../../services/user.service');
const service = new UserService();
const boom = require('boom');

const LocalStrategy = new Strategy(async (email, password, done) => {
  try {
    const user = await service.findByEmail(email);
    if (!user) {
      done(boom.unauthorized(),false);
    }
    user.password;
  } catch (err) {
    done(err,false);
  }
});

module.exports = LocalStrategy;
