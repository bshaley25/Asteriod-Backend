// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgresql://localhost/TEST_DATABASE'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL,
      user:     'username',
      password: 'password'
    }
  }
};
