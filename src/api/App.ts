import { Products, Categories, Services, Stores } from './controllers';
import Helpers from './helpers/Helpers';

export default class App {
  api = {
    products: new Products(),
    categories: new Categories(),
    services: new Services(),
    stores: new Stores()
  };
  helpers = new Helpers();

  async createRandomProduct() {
    return this.api.products.create(this.helpers.getRandomProductBody());
  }
}
