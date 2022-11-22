import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne  } from "typeorm"
import { Account } from './Account';

@Entity()
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("decimal", { precision: 10, scale: 2 })
    valueTransaction: number;

    @Column()
    creditId: number

    @Column()
    debitId: number

    // @ManyToOne(() => Account, (account) => account.transactions)
    // account: Account

    @ManyToOne(() => Account, (account) => account.transactionsCredit)
    creditAccountId: Account

    @ManyToOne(() => Account, (account) => account.transactionsDebit)
    debitAccountId: Account

    @CreateDateColumn()
    createdAt: Date;
}
