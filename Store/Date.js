const month = [];
const year = [];

for (let index = 1; index < 13; index++) {
  month.push({label: index, value: index});
}

const currentYear = new Date().getFullYear();

for (let index = currentYear; index < currentYear + 10; index++) {
  year.push({label: index, value: index});
}

export {month, year};
