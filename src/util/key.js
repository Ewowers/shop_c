export const key = (arr) => {
  if (Array.isArray(arr)) {
    return arr.map((item, i) => {
      return { ...item, key: i };
    });
  }
  return [];
};
