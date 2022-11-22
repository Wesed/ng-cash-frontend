import { Request, Response} from "express";
let jwt = require('jsonwebtoken');

export default function authMiddleware (request: Request, response: Response, next) {
  const { authorization } = request.headers;

  if (!authorization) {
    // para a execucao se nao tiver autorizacao
    return response.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, 'ngCash');
    const { id } = data;
    request.userId = id;

    return next();
  } catch {
    return response.sendStatus(401);
  }
}
