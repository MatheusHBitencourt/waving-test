import { Test, TestingModule } from '@nestjs/testing';
import * as sinon from 'sinon';
import { ProductDetailRepository } from '../../repositories/product-detail.repository';
import { ProductDetailService } from '../../services/product-detail.service';
import {
  productDetailBaseFixture,
  updateProductDetailFixture,
} from '../fixtures/product-details.fixture';

describe(ProductDetailService.name, () => {
  let module: TestingModule;
  let service: ProductDetailService;

  const repository = sinon.createStubInstance(ProductDetailRepository);

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [
        ProductDetailService,
        {
          provide: ProductDetailRepository,
          useValue: repository,
        },
      ],
    }).compile();

    service = module.get<ProductDetailService>(ProductDetailService);
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

  describe('getProductDetailByCode()', () => {
    it('should return the product detail by productCode', async () => {
      const code = 1;
      const expected = productDetailBaseFixture();

      repository.getProductDetailByCode.withArgs(code).resolves(expected);

      const response = await service.getProductDetailByCode(code);

      expect(response).toStrictEqual(expected);
      sinon.assert.calledOnceWithExactly(
        repository.getProductDetailByCode,
        code,
      );
    });
  });

  describe('updateProductDetailByCode()', () => {
    it('should update the product detail by product code', async () => {
      const code = 1;
      const productDetail = updateProductDetailFixture();
      const expected = productDetailBaseFixture();

      repository.updateProductDetailByCode
        .withArgs(code, productDetail)
        .resolves(expected);

      const response = await service.updateProductDetailByCode(
        code,
        productDetail,
      );

      expect(response).toStrictEqual(expected);
      sinon.assert.calledOnceWithExactly(
        repository.updateProductDetailByCode,
        code,
        productDetail,
      );
    });
  });
});
