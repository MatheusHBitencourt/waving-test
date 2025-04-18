import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import sinon from 'sinon';
import request from 'supertest';
import { ShoppingCartController } from '../../controllers/shopping-cart.controller';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { shoppingCartBaseFixture } from '../fixtures/shopping-cart.fixture';

describe(ShoppingCartController.name, () => {
  let app: INestApplication;
  let module: TestingModule;

  const service = sinon.createStubInstance(ShoppingCartService);

  const rawDate = '2024-04-18T10:00:00.000Z';

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ShoppingCartController],
      providers: [
        {
          provide: ShoppingCartService,
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

  it('should return the shopping cart for the given user by id', async () => {
    const userId = 'b221a7ad-59be-4c42-bb7f-e921621c0ea4';
    const url = `/shopping-cart/user/${userId}`;
    const cartFixture = shoppingCartBaseFixture();
    const rawCart = {
      ...shoppingCartBaseFixture(),
      createdAt: rawDate,
      updatedAt: rawDate,
    };

    service.getShoppingCartByUser.withArgs(userId).resolves(cartFixture);

    const response = await request(app.getHttpServer()).get(url);

    expect(response.status).toStrictEqual(HttpStatus.OK);
    expect(response.body).toStrictEqual(rawCart);
    sinon.assert.calledOnceWithExactly(service.getShoppingCartByUser, userId);
  });
});
