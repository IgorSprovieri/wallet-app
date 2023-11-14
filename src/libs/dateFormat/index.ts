export const dateFormat = (date: Date) => {
  const month: number = date.getMonth();
  const year: number = date.getFullYear();

  const str = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];

  return `${str[month]}/${year}`;
};
