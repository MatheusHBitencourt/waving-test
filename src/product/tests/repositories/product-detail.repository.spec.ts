import { Test, TestingModule } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { prismaFixture } from '../../../prisma/fixtures/prisma.fixture';
import { PrismaService } from '../../../prisma/prisma.service';
import { ProductDetailBaseDto } from '../../dtos/product-detail.base.dto';
import { ProductDetailRepository } from '../../repositories/product-detail.repository';
import {
  productDetailBaseFixture,
  updateProductDetailFixture,
} from '../fixtures/product-details.fixture';

describe(ProductDetailRepository.name, () => {
  let module: TestingModule;
  let repository: ProductDetailRepository;

  const prismaService = {
    productDetail: prismaFixture(),
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [
        ProductDetailRepository,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    repository = module.get<ProductDetailRepository>(ProductDetailRepository);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('getProductDetailByCode()', () => {
    it('should return the product detail by the product code', async () => {
      const code = 1;
      const expected = plainToInstance(
        ProductDetailBaseDto,
        productDetailBaseFixture(),
      );
      const query = { where: { productCode: code } };

      jest
        .spyOn(prismaService.productDetail, 'findUnique')
        .mockResolvedValue(expected);

      const result = await repository.getProductDetailByCode(code);

      expect(result).toStrictEqual(expected);
      expect(prismaService.productDetail.findUnique).toHaveBeenCalledWith(
        query,
      );
    });
  });

  describe('updateProductDetailByCode()', () => {
    it('should update the product detail by the product code', async () => {
      const code = 1;
      const request = updateProductDetailFixture();
      const expected = plainToInstance(
        ProductDetailBaseDto,
        productDetailBaseFixture(),
      );
      const query = { where: { productCode: code }, data: { ...request } };

      jest
        .spyOn(prismaService.productDetail, 'update')
        .mockResolvedValue(expected);

      const result = await repository.updateProductDetailByCode(code, request);

      expect(result).toStrictEqual(expected);
      expect(prismaService.productDetail.update).toHaveBeenCalledWith(query);
    });
  });
});
