import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import sinon from 'sinon';
import request from 'supertest';
import { ProductDetailController } from '../../controllers/product-detail.controller';
import { ProductDetailService } from '../../services/product-detail.service';
import {
  productDetailBaseFixture,
  updateProductDetailFixture,
} from '../fixtures/product-details.fixture';

describe(ProductDetailController.name, () => {
  let app: INestApplication;
  let module: TestingModule;

  const service = sinon.createStubInstance(ProductDetailService);
  const rawDate = '2024-04-15T14:00:00.000Z';

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProductDetailController],
      providers: [
        {
          provide: ProductDetailService,
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

  it('should return product detail by product code', async () => {
    const code = '123';
    const parsedCode = 123;
    const expected = productDetailBaseFixture();
    const rawDetails = {
      ...productDetailBaseFixture(),
      createdAt: rawDate,
      updatedAt: rawDate,
    };

    service.getProductDetailByCode.withArgs(parsedCode).resolves(expected);

    const response = await request(app.getHttpServer()).get(
      `/product-detail/${code}`,
    );

    expect(response.status).toStrictEqual(HttpStatus.OK);
    expect(response.body).toStrictEqual(rawDetails);
    sinon.assert.calledOnceWithExactly(
      service.getProductDetailByCode,
      parsedCode,
    );
  });

  it('should update product detail by product code', async () => {
    const code = '456';
    const parsedCode = 456;
    const requestData = updateProductDetailFixture();
    const rawRequestData = { ...updateProductDetailFixture() };
    const expected = productDetailBaseFixture();
    const rawDetails = {
      ...productDetailBaseFixture(),
      createdAt: rawDate,
      updatedAt: rawDate,
    };

    service.updateProductDetailByCode
      .withArgs(parsedCode, rawRequestData)
      .resolves(expected);

    const response = await request(app.getHttpServer())
      .put(`/product-detail/${code}`)
      .send(requestData);

    expect(response.status).toStrictEqual(HttpStatus.OK);
    expect(response.body).toStrictEqual(rawDetails);
    sinon.assert.calledOnceWithExactly(
      service.updateProductDetailByCode,
      parsedCode,
      rawRequestData,
    );
  });
});
