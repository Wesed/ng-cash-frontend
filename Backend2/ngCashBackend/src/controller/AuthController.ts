import { AppDataSource } from "./../data-source"
import { User } from './../entity/User';
import { Request, Response } from 'express';
let jwt = require('jsonwebtoken');

export const getLogin = async (request: Request, response: Response) => {
  const user = await AppDataSource.getRepository(User).createQueryBuilder() 
  .select("user") 
  .from(User, "user") 
  .where("user.username = :username", { username: request.body.username } )
  .andWhere('user.password = :password', { password: request.body.password }).getOne();

  // se nao encontrar nada, retorna status 401
  if (!user) {
      // usuario nao encontrado
      return response.sendStatus(401);
  }

  const token = jwt.sign({id: user.id}, 'ngCash', { expiresIn: '1d'});

  return response.json({user, token});
};