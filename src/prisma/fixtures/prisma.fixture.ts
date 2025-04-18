export function prismaFixture(props: any = {}) {
  const defaults = {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    createMany: jest.fn(),
    deleteMany: jest.fn(() => {
      return {
        count: 3,
      };
    }),
    create: jest.fn(),
    update: jest.fn(),
    count: jest.fn(),
    delete: jest.fn(),
    findFirst: jest.fn(),
    groupBy: jest.fn(),
    updateMany: jest.fn(),
    upsert: jest.fn(),
    find: jest.fn(),
  };

  return { ...defaults, ...props };
}
