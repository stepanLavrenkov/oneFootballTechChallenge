import App from 'api/App';
import { errorModel } from 'api/types/types';
import { expect } from 'chai';

describe('Products API tests', () => {
  const app = new App();

  it('Should create new product', async () => {
    const productBody = app.helpers.getRandomProductBody();

    const createRes = await app.api.products.create(productBody);
    const productData = await app.api.products.getOne(createRes.id);

    expect(createRes).to.include(productBody);
    expect(productData).to.include(productBody);
  });

  it('Should update a product', async () => {
    const product = await app.createRandomProduct();
    const newProductBody = app.helpers.getRandomProductBody();

    const updateRes = await app.api.products.update(product.id, newProductBody);
    const newProductData = await app.api.products.getOne(product.id);

    expect(updateRes).to.include(newProductBody);
    expect(newProductData).to.include(newProductBody);
  });

  it('Should delete a product', async () => {
    const product = await app.createRandomProduct();

    await app.api.products.delete(product.id);

    const queryRes = await app.api.products.getOne<errorModel>(product.id);
    const expectedErrorCode = 404;

    expect(queryRes.code).to.be.equal(expectedErrorCode);
    expect(queryRes.message).to.include(product.id);
  });

  it('Should return a list of products', async () => {
    const expectedLimit = 25;
    const products = await app.api.products.getAll({ limit: expectedLimit });

    expect(products.data.length).to.be.equal(expectedLimit);
    expect(products.limit).to.be.equal(expectedLimit);
  });
});
