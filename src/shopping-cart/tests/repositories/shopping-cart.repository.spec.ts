import { Test, TestingModule } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { prismaFixture } from '../../../prisma/fixtures/prisma.fixture';
import { PrismaService } from '../../../prisma/prisma.service';
import { ShoppingCartBaseDto } from '../../dtos/shopping-cart.base.dto';
import { ShoppingCartRepository } from '../../repositories/shopping-cart.repository';
import { shoppingCartBaseFixture } from '../fixtures/shopping-cart.fixture';

describe(ShoppingCartRepository.name, () => {
  let module: TestingModule;
  let repository: ShoppingCartRepository;

  const prismaService = {
    shoppingCart: prismaFixture(),
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [
        ShoppingCartRepository,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    repository = module.get<ShoppingCartRepository>(ShoppingCartRepository);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('getShoppingCartByUser()', () => {
    it('should return the shopping cart by user id', async () => {
      const userId = '0d6db866-e388-4b43-b9e8-12d21e30ad4c';
      const expected = plainToInstance(
        ShoppingCartBaseDto,
        shoppingCartBaseFixture(),
      );
      const query = {
        where: { userId },
        include: { cartItem: { include: { product: true } } },
      };

      jest
        .spyOn(prismaService.shoppingCart, 'findUnique')
        .mockResolvedValue(expected);

      const result = await repository.getShoppingCartByUser(userId);

      expect(result).toStrictEqual(expected);
      expect(prismaService.shoppingCart.findUnique).toHaveBeenCalledWith(query);
    });
  });
});
