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

export const fullDateFormat = (date: Date) => {
  const formattedDate: string = dateFormat(date);
  const day: number = date.getDate();
  let dayString: string = day.toString();

  if (day < 10) {
    dayString = "0" + dayString;
  }

  return `${dayString} ${formattedDate.replace("/", " ")}`;
};
