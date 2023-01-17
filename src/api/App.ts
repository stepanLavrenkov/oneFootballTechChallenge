import { Products, Categories, Services, Stores } from './controllers';
import { faker } from '@faker-js/faker';

export default class App {
  api = {
    products: new Products(),
    categories: new Categories(),
    services: new Services(),
    stores: new Stores()
  };

  async createRandomProduct() {
    return this.api.products.create({
      name: faker.random.alphaNumeric(15),
      type: faker.random.alpha(15),
      upc: faker.random.alphaNumeric(15),
      description: faker.random.words(5),
      model: faker.random.alphaNumeric(15)
    });
  }
}
