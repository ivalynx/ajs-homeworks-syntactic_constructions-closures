function findBy(key, text) {
  return (el) => {
    let result = null;
    if (el[key].includes(text)) {
      result = el;
    }
    return result;
  };
}

export default findBy;
