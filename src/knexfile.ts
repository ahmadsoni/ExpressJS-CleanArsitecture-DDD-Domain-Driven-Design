import type { Knex } from 'knex'

const config: Record<string, Knex.Config> = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './knek/migrations'
    },
    seeds: {
      directory: './knek/seeds'
    }
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
    },
    migrations: {
      directory: './knek/migrations'
    },
    seeds: {
      directory: './knek/seeds'
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
    },
    migrations: {
      directory: './knek/migrations'
    },
    seeds: {
      directory: './knek/seeds'
    }
  }
}

export default config
