export const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log(action);

      next(action);
    };
  };
};
