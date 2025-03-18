const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { config } = require('./../config/config');
const UserService = require('./user.service');
const service = new UserService();

class AuthService {
  async getUsers(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }

  async sendMail(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for port 465, false for other ports
      auth: {
        user: 'juandavidgo1997@gmail.com',
        pass: 'rmvvvqcesuawtlah',
      },
    });
    await transporter.sendMail({
      from: 'juandavidgo1997@gmail.com', // sender address
      to: `${user.email}`, // list of receivers
      subject: 'Este es un nuevo correo', // Subject line
      text: 'Hola Juan de prueba', // plain text body
      html: '<b>Hola Juan de prueba</b>', // html body
    });
    return {message: 'mail sent'}
  }
}

module.exports = AuthService;
