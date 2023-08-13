const findByUsername = (arr, username) => {
  return arr.find((user) => {
    return user.username === username;
  })
};

const removeUser = (arr, username) => {
  let foundIndex = arr.findIndex((user) => {
    return user.username === username;
  })
  if (foundIndex === -1) return;

  return arr.splice(foundIndex, 1)[0];
};
