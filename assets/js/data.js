const oneDay = 24 * 60 * 60 * 1000;

export const acc1 = {
  owner: 'Abba Beth',
  transactions: [200, 450, -400, 3000, -650, -100, 70, 1420],
  transactionDate: [
    `${new Date(Date.now() - oneDay * 47)}`,
    `${new Date(Date.now() - oneDay * 22)}`,
    `${new Date(Date.now() - oneDay * 16)}`,
    `${new Date(Date.now() - oneDay * 10)}`,
    `${new Date(Date.now() - oneDay * 6)}`,
    `${new Date(Date.now() - oneDay * 3)}`,
    `${new Date(Date.now() - oneDay * 2)}`,
    `${new Date(Date.now() - oneDay)}`,
  ],
  interestRate: 1.3,
  pass: 1111,
};
export const acc2 = {
  owner: 'Chad Davinci',
  transactions: [200, -200, 3000, 650, -500, -70, 1420, -800],
  transactionDate: [
    '22 Nov 2022 07:44:25 GMT',
    '23 Dec 2022 07:44:25 GMT',
    '24 Dec 2022 07:44:25 GMT',
    '25 Dec 2022 07:44:25 GMT',
    '26 Dec 2022 07:44:25 GMT',
    '27 Dec 2022 07:44:25 GMT',
    '28 Dec 2022 07:44:25 GMT',
    '29 Dec 2022 07:44:25 GMT',
  ],
  interestRate: 1.4,
  pass: 2222,
};
export const acc3 = {
  owner: 'Eunice Foster',
  transactions: [5500, -210, 350, -300, -1005, 70, 8480, -60],
  transactionDate: [
    '22 Nov 2022 07:44:25 GMT',
    '23 Dec 2022 07:44:25 GMT',
    '24 Dec 2022 07:44:25 GMT',
    '25 Dec 2022 07:44:25 GMT',
    '26 Dec 2022 07:44:25 GMT',
    '27 Dec 2022 07:44:25 GMT',
    '28 Dec 2022 07:44:25 GMT',
    '29 Dec 2022 07:44:25 GMT',
  ],
  interestRate: 0.8,
  pass: 3333,
};
export const acc4 = {
  owner: 'Guan Han',
  transactions: [5500, -210, -3950, -300, -150, 70, -60],
  transactionDate: [
    '22 Nov 2022 07:44:25 GMT',
    '23 Dec 2022 07:44:25 GMT',
    '24 Dec 2022 07:44:25 GMT',
    '25 Dec 2022 07:44:25 GMT',
    '26 Dec 2022 07:44:25 GMT',
    '27 Dec 2022 07:44:25 GMT',
    '28 Dec 2022 07:44:25 GMT',
    '29 Dec 2022 07:44:25 GMT',
  ],
  interestRate: 1.8,
  pass: 4444,
};
