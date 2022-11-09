import {API} from '../Util/env';

const register = async user => {
  try {
    const res = await fetch(`http://${API}:5000/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...user,
      }),
    });

    try {
      const data = await res.json();
      return data;
    } catch (error) {
      return false;
    }
  } catch (error) {
    console.debug(error);
    throw Error(error);
  }
};

const login = async (email, password) => {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);

  try {
    const res = await fetch(`http://${API}:5000/users/auth`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    try {
      const data = await res.json();
      return data;
    } catch (error) {
      return false;
    }
  } catch (error) {
    console.debug(error);
    // throw Error(error);
  }
};

export {register, login};
