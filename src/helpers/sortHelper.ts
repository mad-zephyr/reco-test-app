export const sortHelper = <T>(arr: T[], key: keyof T, asc: boolean): T[] => {
  if (!arr || !arr.length || !key) {
    return arr;
  }

  const sortArr = [...arr];

  if (asc) {
    // return arr.sort((a, b) => {
    //   const keyName = a[key];
    // });

    return sortArr;
  }

  return sortArr;
};
