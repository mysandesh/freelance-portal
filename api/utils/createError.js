const createError = (status, message) => {
  const err = new Error();
  err.status = 404;
  err.message = "User not found!";
};
