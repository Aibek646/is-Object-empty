var isEmpty = function (obj) {
  const checkEmpty = (arr) => {
    return arr.length === 0 ? true : false;
  };
  return Array.isArray(obj) ? checkEmpty(obj) : checkEmpty(Object.keys(obj));
};

const obj = {
  x: 5,
  y: 42,
};

isEmpty(obj);
isEmpty({});
