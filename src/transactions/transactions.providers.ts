import { Transaction } from '../entity/Transaction';
import { DataSource } from 'typeorm';

export const transactionProviders = [
  {
    provide: 'TRANSACTIONS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Transaction),
    inject: ['DATA_SOURCE'],
  },
];