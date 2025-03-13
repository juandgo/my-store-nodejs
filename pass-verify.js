const bcrypt = require('bcrypt');


async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$AL4J0aDgz1owXhLKOcJ2v.Rk6k17Xf7/yXf9QH4SEIaKCuo6rFdh6';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword()
