import { Entity, PrimaryGeneratedColumn, Column,  OneToOne, JoinColumn } from "typeorm";
import { Account } from './Account';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    username: string

    @Column()
    password: string

    @Column()
    accountId: number

    @OneToOne(type => Account) @JoinColumn() 
    account: Account;
}
