// * Get name initials from accounts

const getUserName = (accs) => {
  accs.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};

export default getUserName;
