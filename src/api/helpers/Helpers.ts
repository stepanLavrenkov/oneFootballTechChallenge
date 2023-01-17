import { faker } from '@faker-js/faker';
import { productModel } from 'api/types/types';

export default class Helpers {
  getRandomProductBody() {
    const productBody: productModel = {
      name: faker.random.alphaNumeric(10),
      type: faker.random.alphaNumeric(10),
      description: faker.random.alphaNumeric(10),
      upc: faker.random.alphaNumeric(10),
      model: faker.random.alphaNumeric(10),
      manufacturer: faker.random.alphaNumeric(10),
      url: faker.internet.url(),
      image: faker.image.imageUrl(),
      price: faker.datatype.number(1000),
      shipping: faker.datatype.number(1000)
    };

    return productBody;
  }
}
