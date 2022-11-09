import {API} from '../Util/env';

const getProducts = async () => {
  try {
    const res = await fetch(`http://${API}:5000/products`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    try {
      const data = await res.json();
      return data;
      console.log(data);
    } catch (error) {
      return false;
    }
  } catch (error) {
    console.debug(error);
    throw Error(error);
  }
};

const getCompanyProduct = async () => {
  try {
    const res = await fetch(
      `http://${API}:5000/users/company/636b9b11a8fcf06a3083d62f`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

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

const addProducts = async product => {
  try {
    const res = await fetch(
      `http://${API}:5000/products/636b9b11a8fcf06a3083d62f`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...product,
        }),
      },
    );

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

export {getProducts, addProducts, getCompanyProduct};
