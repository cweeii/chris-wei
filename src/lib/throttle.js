const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return () => {
    if (!lastRan) {
      func.apply(null, arguments);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if (Date.now() - lastRan >= limit) {
          func.apply(null, arguments);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export default throttle;
