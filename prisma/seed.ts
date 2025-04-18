import { NestFactory } from '@nestjs/core';

import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import {
  cleanCode,
  glove,
  headset,
  jinx,
  keyboard,
  mouse,
  mug,
  theMutants,
  theMutantsLive,
  watch,
} from '../src/constants/constants';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const prisma = app.get(PrismaService);

  const alreadySeeded = await prisma.product.findFirst();
  if (alreadySeeded) {
    console.log('Seed já rodado. Nada a fazer.');
    await app.close();
    return;
  }

  await prisma.product.createMany({
    data: [
      {
        id: '8d8b0f59-03d0-41d0-a674-24b40b201a30',
        name: 'Caneca Linux',
        price: 101.0,
        description: 'Caneca cerâmica Linux',
        image: mug,
      },
      {
        id: '6cfde2ae-d7e3-437b-89c4-203cf11be0d6',
        name: 'Livro Clean Code',
        price: 129.0,
        description: 'Livro Clean Code por Uncle Bob',
        image: cleanCode,
      },
      {
        id: '968a6299-c116-4be7-90a9-2ad15a0d49d8',
        name: 'Fone de referência',
        price: 1499.99,
        description: 'Fone Samson SR850 microfone referência para estúdio',
        image: headset,
      },
      {
        id: '780113d7-6395-4ee0-9f5f-9c1f928a7d21',
        name: 'Quadro Jinx',
        price: 200.0,
        description: 'Quadro em pintura digital Jinx de Arcane',
        image: jinx,
      },
      {
        id: '7b247719-4bc4-4517-8f04-58fdfc09dd34',
        name: 'Luva Adidas boxe',
        price: 349.0,
        description: 'Adidas Luvas de boxe Speed TILT 150',
        image: glove,
      },
      {
        id: '263ff47c-3bf5-49b0-a0f0-b4d83f0f8776',
        name: 'Mouse Razer ergonômico',
        price: 240.0,
        description: 'Razer Basilisk V3',
        image: mouse,
      },
      {
        id: 'a0c05f30-3954-42a6-a7e2-76716ecd43a4',
        name: 'Mutantes Ao Vivo',
        price: 75.99,
        description: 'Álbum Mutantes Ao vivo (1969)',
        image: theMutantsLive,
      },
      {
        id: '21d135fa-5da8-49cb-810c-f724044d1461',
        name: 'Os Mutantes',
        price: 75.99,
        description: 'Álbum Os Mutantes (1968)',
        image: theMutants,
      },
      {
        id: '2bd41c1b-6d11-4773-b9d9-2a6c8ee31115',
        name: 'Relógio G-Shock',
        price: 600.0,
        description: 'G-Shock GA-2100 Series Watch',
        image: watch,
      },
      {
        id: '24cc0005-920a-431b-bd6b-e547fca53e9e',
        name: 'Teclado Midi',
        price: 2000.0,
        description:
          'M-Audio, Controlador Midi de 32 teclas (KEYSTATION MINI MK3)',
        image: keyboard,
      },
    ],
  });

  await prisma.productDetail.createMany({
    data: [
      {
        origin: 'Brasil',
        label: 'Torvalds LTDA',
        dimensions: '10x10x10 cm',
        version: '1.0',
        weight: '300g',
        color: 'Branca',
        material: 'Cerâmica',
        productCode: 1,
      },
      {
        origin: 'EUA',
        label: 'Poggers',
        dimensions: '23x16x3 cm',
        version: '2ª edição',
        weight: '500g',
        color: 'Branco',
        material: 'Papel',
        productCode: 2,
      },
      {
        origin: 'China',
        label: 'Samson',
        dimensions: '15x10x5 cm',
        version: 'V5.2',
        weight: '120g',
        color: 'Preto',
        material: 'Plástico',
        productCode: 3,
      },
      {
        origin: 'Piltover',
        label: 'Romero brito',
        dimensions: '25x10x10 cm',
        version: 'Colecionador',
        weight: '350g',
        color: 'Rosa',
        material: 'PVC',
        productCode: 4,
      },
      {
        origin: 'Brasil',
        label: 'Adidas',
        dimensions: '30x20x10 cm',
        version: 'Pro',
        weight: '800g',
        color: 'Vermelha',
        material: 'Couro sintético',
        productCode: 5,
      },
      {
        origin: 'China',
        label: 'Razer',
        dimensions: '12x6x4 cm',
        version: '2024',
        weight: '150g',
        color: 'Preto',
        material: 'ABS',
        productCode: 6,
      },
      {
        origin: 'Brasil',
        label: 'Som Livre',
        dimensions: '31x31 cm',
        version: 'Remasterizado',
        weight: '200g',
        color: 'Colorido',
        material: 'Vinil',
        productCode: 7,
      },
      {
        origin: 'Brasil',
        label: 'Som Livre',
        dimensions: '31x31 cm',
        version: 'Original',
        weight: '200g',
        color: 'Preto',
        material: 'Vinil',
        productCode: 8,
      },
      {
        origin: 'Suíça',
        label: 'Casio',
        dimensions: '5x5x2 cm',
        version: 'Luxo',
        weight: '90g',
        color: 'Prata',
        material: 'Aço inoxidável',
        productCode: 9,
      },
      {
        origin: 'EUA',
        label: 'MK',
        dimensions: '45x15x5 cm',
        version: 'MK.2',
        weight: '900g',
        color: 'Preto',
        material: 'Plástico e metal',
        productCode: 10,
      },
    ],
  });

  await prisma.user.create({
    data: {
      id: 'e5bdbf8a-256d-4628-b58c-cccd0f8f0db9',
      name: 'admin',
      email: 'admin@gmail.com',
      address: '4 Privet Drive, Little Whinging',
      password:
        '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
      isAdmin: true,
    },
  });

  await prisma.shoppingCart.create({
    data: {
      id: 'd193be8b-6285-49d1-a54c-237b79cbb305',
      userId: 'e5bdbf8a-256d-4628-b58c-cccd0f8f0db9',
    },
  });

  console.log('🌱 Seed rodado com sucesso.');
  await app.close();
}

bootstrap().catch((e) => {
  console.error('Erro ao rodar seed:', e);
  process.exit(1);
});
