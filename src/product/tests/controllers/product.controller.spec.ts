import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import sinon from 'sinon';
import { ProductController } from '../../controllers/product.controller';
import { ProductService } from '../../services/product.service';
import request from 'supertest';
import {
  createProductFixture,
  productBaseFixture,
  updateProductFixture,
} from '../fixtures/product.fixture';

describe(ProductController.name, () => {
  let app: INestApplication;
  let module: TestingModule;

  const service = sinon.createStubInstance(ProductService);
  const rawDate = '2024-05-01T10:00:00.000Z';

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: service,
        },
        {
          provide: APP_PIPE,
          useValue: new ValidationPipe(),
        },
      ],
    }).compile();

    app = module.createNestApplication();

    await app.init();
  });

  afterEach(async () => {
    sinon.reset();
  });

  afterAll(async () => {
    await app.close();
    await module.close();
  });

  describe('getProducts()', () => {
    it('should return the products', async () => {
      const rawProducts = [
        {
          ...productBaseFixture(),
          createdAt: rawDate,
          updatedAt: rawDate,
        },
        { ...productBaseFixture(), createdAt: rawDate, updatedAt: rawDate },
      ];
      const products = [productBaseFixture(), productBaseFixture()];

      service.getProducts.resolves(products);

      const response = await request(app.getHttpServer()).get('/product');

      expect(response.status).toStrictEqual(HttpStatus.OK);
      expect(response.body).toStrictEqual(rawProducts);
      sinon.assert.calledOnce(service.getProducts);
    });
  });

  describe('createProduct()', () => {
    it('should create a product', async () => {
      const requestData = { ...createProductFixture() };
      const expected = productBaseFixture();
      const rawExpected = {
        ...expected,
        createdAt: rawDate,
        updatedAt: rawDate,
      };

      service.createProduct.withArgs(requestData).resolves(expected);

      const response = await request(app.getHttpServer())
        .post('/product')
        .send(requestData);

      expect(response.status).toStrictEqual(HttpStatus.CREATED);
      expect(response.body).toStrictEqual(rawExpected);
      sinon.assert.calledOnceWithExactly(service.createProduct, requestData);
    });
  });

  describe('getProductById()', () => {
    it('should return a product by id', async () => {
      const id = '1ee15806-e538-4f79-a736-d32897f4a24a';
      const expected = productBaseFixture();
      const rawExpected = {
        ...expected,
        createdAt: rawDate,
        updatedAt: rawDate,
      };

      service.getProductById.withArgs(id).resolves(expected);

      const response = await request(app.getHttpServer()).get(`/product/${id}`);

      expect(response.status).toStrictEqual(HttpStatus.OK);
      expect(response.body).toStrictEqual(rawExpected);
      sinon.assert.calledOnceWithExactly(service.getProductById, id);
    });
  });

  describe('updateProductById()', () => {
    it('should update a product by id', async () => {
      const id = '2bb27aea-e350-443e-a83d-706ecc135c9f';
      const requestData = { ...updateProductFixture() };
      const expected = productBaseFixture();
      const rawExpected = {
        ...expected,
        createdAt: rawDate,
        updatedAt: rawDate,
      };

      service.updateProductById.withArgs(id, requestData).resolves(expected);

      const response = await request(app.getHttpServer())
        .put(`/product/${id}`)
        .send(requestData);

      expect(response.status).toStrictEqual(HttpStatus.OK);
      expect(response.body).toStrictEqual(rawExpected);
      sinon.assert.calledOnceWithExactly(
        service.updateProductById,
        id,
        requestData,
      );
    });
  });

  describe('deleteProductById()', () => {
    it('should delete a product by id', async () => {
      const id = '3f9e47a1-982c-4e5e-b0c9-df6a3a8c67aa';
      const expected = productBaseFixture();
      const rawExpected = {
        ...expected,
        createdAt: rawDate,
        updatedAt: rawDate,
      };

      service.deleteProductById.withArgs(id).resolves(expected);

      const result = await request(app.getHttpServer()).delete(
        `/product/${id}`,
      );

      expect(result.status).toStrictEqual(HttpStatus.OK);
      expect(result.body).toStrictEqual(rawExpected);
      sinon.assert.calledOnceWithExactly(service.deleteProductById, id);
    });
  });
});
