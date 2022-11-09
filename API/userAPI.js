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

const updateUser = async (name, mobileNumber, address, id) => {
  try {
    const res = await fetch(`http://${API}:5000/users/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        mobileNumber,
        address,
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

const updatePassword = async (password, id) => {
  try {
    const res = await fetch(`http://${API}:5000/users/security/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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

const updatePayment = async (data, id) => {
  try {
    const res = await fetch(`http://${API}:5000/users/payment/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payment: {
          ...data,
        },
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
const getUser = async id => {
  try {
    const res = await fetch(`http://${API}:5000/users/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    try {
      const data = await res.json();
      return data;
    } catch (error) {
      return false;
    }
  } catch (error) {
    console.debug(error);
  }
};

export {register, login, updateUser, getUser, updatePassword, updatePayment};
