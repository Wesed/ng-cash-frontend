import { AppDataSource } from "./../data-source"
import { User } from './../entity/User';
import { Request, Response } from 'express';


export const saveUser = async (request: Request, response: Response) => {
    try {
        const user = await AppDataSource.getRepository(User).save(request.body);
        return response.json(user);
    } catch(err) {
        console.log(err.message);
        return response.status(418).json(err.message);
    }
};

export const getUser = async (request: Request, response: Response) => {
    const user = await AppDataSource.getRepository(User).findOneBy({
        id: request.body.id,
    });
    return response.json(user);
};


export const getUserTransaction = async (request: Request, response: Response) => {
    console.log('abcd', request);
    const user = await AppDataSource.getRepository(User).createQueryBuilder() 
    .select("user") 
    .from(User, "user") 
    .where("user.username = :username", { username: request.body.username } ).getOne();
  
    // se nao encontrar nada, retorna status 401
    if (!user) {
        // usuario nao encontrado
        return response.sendStatus(401);
    }

    delete user.password
    delete user.id
    delete user.username

    console.log('testando', user);
  
    return response.json({user});
  };