import type { Knex } from 'knex'

const config: Record<string, Knex.Config> = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/dev.sqlite3'
    },
    useNullAsDefault: true
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}

export default config
