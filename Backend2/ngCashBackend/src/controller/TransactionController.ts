import { AppDataSource } from "./../data-source"
import { Transaction } from './../entity/Transaction';
import { Request, Response } from 'express';

export const newTransaction = async (request: Request, response: Response) => {
  try {
      console.log('aaa', request);
      const transaction = await AppDataSource.getRepository(Transaction).save(request.body);
      return response.json(transaction);
  } catch(err) {
      console.log(err.message);
      return response.status(404).json(err.message);
  }
};

export const getTransactions = async (request: Request, response: Response) => {
  console.log('aaa', request);
  const transactions = await AppDataSource.getRepository(Transaction).createQueryBuilder() 
  .select("transaction") 
  .from(Transaction, "transaction") 
  .where("transaction.debitId = :idDebit", { idDebit: request.body.id } )
  .orWhere("transaction.creditId = :idCredit", { idCredit: request.body.id } ).getMany();


  return response.json({transactions});
};