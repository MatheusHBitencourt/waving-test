import { Test, TestingModule } from '@nestjs/testing';
import * as sinon from 'sinon';
import { ShoppingCartRepository } from '../../repositories/shopping-cart.repository';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { shoppingCartBaseFixture } from '../fixtures/shopping-cart.fixture';

describe(ShoppingCartService.name, () => {
  let module: TestingModule;
  let service: ShoppingCartService;

  const repository = sinon.createStubInstance(ShoppingCartRepository);

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [
        ShoppingCartService,
        {
          provide: ShoppingCartRepository,
          useValue: repository,
        },
      ],
    }).compile();

    service = module.get<ShoppingCartService>(ShoppingCartService);
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

  describe('getShoppingCartByUser()', () => {
    it('should return the shopping cart for the given user id', async () => {
      const userId = '1c0b3dd0-c247-4dd3-80e8-15dc869c6dd8';
      const expected = shoppingCartBaseFixture();

      repository.getShoppingCartByUser.withArgs(userId).resolves(expected);

      const response = await service.getShoppingCartByUser(userId);

      expect(response).toStrictEqual(expected);
      sinon.assert.calledOnceWithExactly(
        repository.getShoppingCartByUser,
        userId,
      );
    });
  });
});
