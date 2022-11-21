import sha256 from 'crypto-js/sha256';

/* 
  Na hora do login, o component vai gerar um sha256 da senha digitada pelo user e comparar
  com o sha256 que esta no dato, assim o sistema consegue conferir a senha sem ter acesso a mesma.
*/

export function Crypto(msg, key) {

  const crypt = sha256(msg, key);

  return crypt.toString();

}
