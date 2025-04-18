import { Test, TestingModule } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { prismaFixture } from '../../../prisma/fixtures/prisma.fixture';
import { PrismaService } from '../../../prisma/prisma.service';
import { ProductBaseDto } from '../../dtos/product.base.dto';
import { ProductRepository } from '../../repositories/product.repository';
import {
  createProductFixture,
  productBaseFixture,
  updateProductFixture,
} from '../fixtures/product.fixture';

describe(ProductRepository.name, () => {
  let module: TestingModule;
  let repository: ProductRepository;

  const prismaService = {
    product: prismaFixture(),
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [
        ProductRepository,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    repository = module.get<ProductRepository>(ProductRepository);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('getProducts()', () => {
    it('should return the products', async () => {
      const expected = plainToInstance(ProductBaseDto, productBaseFixture());

      jest.spyOn(prismaService.product, 'findMany').mockResolvedValue(expected);

      const result = await repository.getProducts();

      expect(result).toStrictEqual(expected);
      expect(prismaService.product.findMany).toHaveBeenCalledWith();
    });
  });

  describe('createProduct()', () => {
    it('should create a product', async () => {
      const request = createProductFixture();
      const expected = plainToInstance(ProductBaseDto, productBaseFixture());
      const query = { data: request };

      jest.spyOn(prismaService.product, 'create').mockResolvedValue(expected);

      const result = await repository.createProduct(request);

      expect(result).toStrictEqual(expected);
      expect(prismaService.product.create).toHaveBeenCalledWith(query);
    });
  });

  describe('getProductById()', () => {
    it('should return the product by id', async () => {
      const id = '6e111229-b582-443a-b055-b0a5e975020a';
      const expected = plainToInstance(ProductBaseDto, productBaseFixture());
      const query = { where: { id } };

      jest
        .spyOn(prismaService.product, 'findUnique')
        .mockResolvedValue(expected);

      const result = await repository.getProductById(id);

      expect(result).toStrictEqual(expected);
      expect(prismaService.product.findUnique).toHaveBeenCalledWith(query);
    });
  });

  describe('updateProductById()', () => {
    it('should update the product by id', async () => {
      const id = '945d56be-e608-482d-904a-980380b5a361';
      const data = updateProductFixture(); // você precisa garantir que esse fixture existe
      const expected = plainToInstance(ProductBaseDto, productBaseFixture());
      const query = { where: { id }, data };

      jest.spyOn(prismaService.product, 'update').mockResolvedValue(expected);

      const result = await repository.updateProductById(id, data);

      expect(result).toStrictEqual(expected);
      expect(prismaService.product.update).toHaveBeenCalledWith(query);
    });
  });

  describe('deleteProductById()', () => {
    it('should delete the product by id', async () => {
      const id = 'ee035120-76e0-48ba-b198-7e8b5309727d';
      const expected = plainToInstance(ProductBaseDto, productBaseFixture());
      const query = { where: { id } };

      jest.spyOn(prismaService.product, 'delete').mockResolvedValue(expected);

      const result = await repository.deleteProductById(id);

      expect(result).toStrictEqual(expected);
      expect(prismaService.product.delete).toHaveBeenCalledWith(query);
    });
  });
});
