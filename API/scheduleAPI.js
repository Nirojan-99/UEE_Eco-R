import {API} from '../Util/env';

const addSchedule = async schedule => {
  try {
    const res = await fetch(`http://${API}:5000/schedules`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...schedule,
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
const getUserSchedule = async userId => {
  try {
    const res = await fetch(`http://${API}:5000/schedules/customer/${userId}`, {
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
    throw Error(error);
  }
};
const getSchedules = async () => {
  try {
    const res = await fetch(`http://${API}:5000/schedules/`, {
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
    throw Error(error);
  }
};

export {addSchedule, getUserSchedule, getSchedules};
