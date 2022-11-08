import {API} from '../Util/env';

const addVehicle = async vehicle => {
  try {
    const res = await fetch(`http://${API}:5000/vehicles`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...vehicle,
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

export {addVehicle};
