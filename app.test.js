describe('#findByUsername', () => {
  let users = [
    { username: 'Bret' },
    { username: 'Jules' },
    { username: 'Thomas' }
  ];
  it('should return the user object when the username is found', () => {
    expect(findByUsername(users, 'Bret')).toEqual({ username: 'Bret' });
  });
  it('should return undefined when the username is not found', () => {
    expect(findByUsername(users, 'Tom')).toBeUndefined();
  });
});

describe('#removeUser', () => {
  let users = [
    { username: 'Bret' },
    { username: 'Jules' },
    { username: 'Thomas' }
  ];
  it('should remove the user when the username is found', () => {
    expect(removeUser(users, 'Jules')).toEqual({ username: 'Jules' });
    expect(users.length).toEqual(2);
  });
  it('should return undefined when the username is not found', () => {
    let users = [
      { username: 'Bret' },
      { username: 'Jules' },
      { username: 'Thomas' }
    ];
    expect(removeUser(users, 'Tom')).toBeUndefined();
    expect(users.length).toEqual(3);
  });
});

