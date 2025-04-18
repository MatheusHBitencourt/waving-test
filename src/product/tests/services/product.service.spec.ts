import { Test, TestingModule } from '@nestjs/testing';
import * as sinon from 'sinon';
import { imageUnavailable } from '../../../constants/constants';
import { ProductRepository } from '../../repositories/product.repository';
import { ProductService } from '../../services/product.service';
import {
  createProductFixture,
  productBaseFixture,
  updateProductFixture,
} from '../fixtures/product.fixture';

describe(ProductService.name, () => {
  let module: TestingModule;
  let service: ProductService;

  const repository = sinon.createStubInstance(ProductRepository);

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: ProductRepository,
          useValue: repository,
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  afterEach(() => {
    sinon.reset();
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createProduct()', () => {
    it('should create a product and setting default image if none provided', async () => {
      const product = createProductFixture();
      const builtProduct = product.image
        ? product
        : { ...product, image: imageUnavailable };
      const expected = productBaseFixture();

      repository.createProduct.withArgs(builtProduct).resolves(expected);

      const response = await service.createProduct(product);

      expect(response).toStrictEqual(expected);
      sinon.assert.calledOnceWithExactly(
        repository.createProduct,
        builtProduct,
      );
    });
  });

  describe('getProducts()', () => {
    it('should return all products', async () => {
      const expected = [productBaseFixture(), productBaseFixture()];

      repository.getProducts.resolves(expected);

      const response = await service.getProducts();

      expect(response).toStrictEqual(expected);
      sinon.assert.calledOnceWithExactly(repository.getProducts);
    });
  });

  describe('getProductById()', () => {
    it('should return a product by id', async () => {
      const id = '4d7fa80d-19a5-4bb8-8a5d-5944e74e702d';
      const expected = productBaseFixture();

      repository.getProductById.withArgs(id).resolves(expected);

      const response = await service.getProductById(id);

      expect(response).toStrictEqual(expected);
      sinon.assert.calledOnceWithExactly(repository.getProductById, id);
    });
  });

  describe('updateProductById()', () => {
    it('should update a product by id', async () => {
      const id = '8da6fd50-0904-4801-878a-bd65395f156b';
      const product = updateProductFixture();
      const expected = productBaseFixture();

      repository.updateProductById.withArgs(id, product).resolves(expected);
    });
  });
});
