import { faker } from "@faker-js/faker";

export const generateCardData = () => ({
  cardNumber: faker.finance.creditCardNumber(),
  expiry: `${faker.date.future().getMonth() + 1}/${faker.date
    .future()
    .getFullYear()
    .toString()
    .slice(2)}`,
  cvv: faker.finance.creditCardCVV(),
  name: faker.name.fullName(),
});
