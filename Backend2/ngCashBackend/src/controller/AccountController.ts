import { AppDataSource } from "./../data-source"
import { Account } from './../entity/Account';
import { Request, Response } from 'express';


export const saveAccount = async (request: Request, response: Response) => {
    /*
        se eu receber o err.message em forma de json,
        e no front end fazer um await json, igual user, funciona? 
    */
        try {
            const account = await AppDataSource.getRepository(Account).save(request.body);
            console.log(account);
            return response.json(account);
        } catch (err) {
            console.log(err.message);
        }
        
};

export const getAccount = async (request: Request, response: Response) => {
    console.log(request);
    const account = await AppDataSource.getRepository(Account).findOneBy({
        id: request.body.id,
    });
    return response.json(account);
};

export const deleteAccount = async (request: Request, response: Response) => {
    console.log('aqui', request);
    const account = await AppDataSource.getRepository(Account).createQueryBuilder('account') 
    .delete()
    .from(Account)
    .where("id = :id", { id: request.body.id })
    .execute()
    return response.json(account);
};
