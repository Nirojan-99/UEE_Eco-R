const timeFormat = val => {
  if (val) {
    const date = new Date(val);
    const hour = date.getHours();
    const minutes = date.getMinutes();

    return `${hour}:${minutes}`;
  } else {
    return null;
  }
};

export {timeFormat};
