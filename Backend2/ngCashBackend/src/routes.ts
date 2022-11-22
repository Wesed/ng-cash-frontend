import { Router, Request, Response } from "express";
import { getUser, saveUser, getUserTransaction } from './controller/UserController';
import { saveAccount, getAccount } from './controller/AccountController';
import authMiddleware from './middleware/AuthMiddleware';
import { getLogin } from './controller/AuthController';
import { getTransactions, newTransaction } from './controller/TransactionController';

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
    return response.json({message: "Server is running!"})
})

routes.post('/user', saveUser);
routes.post('/findUser', authMiddleware, getUser);
routes.post('/login', getLogin);

routes.post('/account', saveAccount);
routes.post('/findAccount', authMiddleware, getAccount);
routes.post('/findAccountTransaction', authMiddleware, getUserTransaction);


routes.post('/transaction', authMiddleware, newTransaction);
routes.post('/transactions', authMiddleware, getTransactions);

export default routes;