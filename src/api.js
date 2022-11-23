export const API_URL = 'http://localhost:5000';


// cadastro de usuario
export function USER_POST(body) {
  return {
    url: API_URL + '/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

// cadastro de conta
export function ACCOUNT_POST(body) {
  return {
    url: API_URL + '/account',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

// busca o usuario
export function FIND_USER(body) {
  return {
    url: API_URL + '/findUser',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + body.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

// busca a conta do usuario
export function FIND_ACCOUNT(body) {
  return {
    url: API_URL + '/findAccount',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + body.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function FIND_TRANSACTION(body) {
  return {
    url: API_URL + '/findAccountTransaction',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + body.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function NEW_TRANSFER(body) {
  return {
    url: API_URL + '/transaction',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + body.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function POST_TRANSACTIONS(body) {
  return {
    url: API_URL + '/transactions',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + body.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function DELETE_ACCOUNT(body) {
  return {
    url: API_URL + '/deleteAccount',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function LOGIN_POST(body) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
