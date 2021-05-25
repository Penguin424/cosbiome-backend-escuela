module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '138.197.209.230'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'cosbiomeescuela'),
        username: env('DATABASE_USERNAME', 'cosbiome'),
        password: env('DATABASE_PASSWORD', 'Ac03901582'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
