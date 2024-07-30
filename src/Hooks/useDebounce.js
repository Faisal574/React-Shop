const useDebounce = (func, wait) => {
  let timeout;
  const debounce = (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
  return {
    debounce
  }
};

export default useDebounce;
