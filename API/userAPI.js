import {API} from '../Util/env';

const register = async user => {
  try {
    const res = await fetch(`${API}users`, {
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
    throw Error(error);
  }
};

export {register};
