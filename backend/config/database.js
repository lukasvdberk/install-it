const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('POSTGRES_HOST', '127.0.0.1'),
//       port: env.int('POSTGRES_PORT', 5432),
//       database: env('POSTGRES_DB', 'strapi'),
//       user: env('POSTGRES_USER', 'strapi'),
//       password: env('POSTGRES_PASSWORD', 'strapi'),
//       schema: env('POSTGRES_SCHEMA', 'public'), // Not required
//       ssl: {
//         rejectUnauthorized: env.bool('POSTGRES_SSL_SELF', false), // For self-signed certificates
//       },
//     },
//     debug: false,
//   },
// });
