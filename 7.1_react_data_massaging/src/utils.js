export const getNames = (data) => {
  return data.map((person) => person.name);
};
export const getPersonBefore = (data, year) => {
  return data.filter((person) => {
    const personYear = person.birthday.split('-')[2];
    return personYear < year;
  });
};
