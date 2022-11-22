import { Entity, PrimaryGeneratedColumn, Column, OneToMany  } from "typeorm"
import { Transaction } from './Transaction';

@Entity()
export class Account {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    balance: string

    // @OneToMany(() => Transaction, (transaction) => transaction.account)
    // transactions: Transaction[];

    // armazena todas as transacoes que forem do tipo credito
    @OneToMany(() => Transaction, (transaction) => transaction.creditAccountId)
    transactionsCredit: Transaction[];

    // armazena todas as transacoes que forem do tipo debito
    @OneToMany(() => Transaction, (transaction) => transaction.debitAccountId)
    transactionsDebit: Transaction[];
}
