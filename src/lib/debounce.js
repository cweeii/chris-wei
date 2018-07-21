const debounce = (fn, t) => {
  let timeout;

  return args => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = setTimeout(fn.apply(null, args), t);
    }
  };
};

export default debounce;
