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

export {getProducts};
