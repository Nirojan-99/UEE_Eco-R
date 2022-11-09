const dateFormat = val => {
  if (val) {
    const date = new Date(val);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }
};

export {dateFormat};
