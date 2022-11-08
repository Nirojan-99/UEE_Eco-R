import axios from 'axios';
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

    console.debug(res);
  } catch (error) {
    console.debug(error);
    throw Error(error);
  }
};

export {register};
