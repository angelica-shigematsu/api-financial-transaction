import { User } from 'src/entity/User';
import { DataSource } from 'typeorm';
import { Transaction } from './entity/Transaction';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'financial',
        entities: [ User, Transaction ],
        migrations: [__dirname + "/migration/**/*.ts"],
        synchronize: true,
        "logging": true
      });

      return dataSource.initialize();
    },
  },
];