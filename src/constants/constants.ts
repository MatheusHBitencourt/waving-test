import { readFileSync } from 'fs';
import { join } from 'path';

// root do seu app (onde está package.json)
const PUBLIC_IMAGES = join(process.cwd(), 'public', 'images');

export const mug = readFileSync(join(PUBLIC_IMAGES, 'caneca.txt'), 'utf-8');
export const cleanCode = readFileSync(
  join(PUBLIC_IMAGES, 'clean-code.txt'),
  'utf-8',
);
export const headset = readFileSync(join(PUBLIC_IMAGES, 'fone.txt'), 'utf-8');
export const imageUnavailable = readFileSync(
  join(PUBLIC_IMAGES, 'imagem-indisponivel.txt'),
  'utf-8',
);
export const jinx = readFileSync(join(PUBLIC_IMAGES, 'jinx.txt'), 'utf-8');
export const glove = readFileSync(join(PUBLIC_IMAGES, 'luva.txt'), 'utf-8');
export const mouse = readFileSync(join(PUBLIC_IMAGES, 'mouse.txt'), 'utf-8');
export const theMutantsLive = readFileSync(
  join(PUBLIC_IMAGES, 'os-mutantes-ao-vivo.txt'),
  'utf-8',
);
export const theMutants = readFileSync(
  join(PUBLIC_IMAGES, 'os-mutantes.txt'),
  'utf-8',
);
export const watch = readFileSync(join(PUBLIC_IMAGES, 'relogio.txt'), 'utf-8');
export const keyboard = readFileSync(
  join(PUBLIC_IMAGES, 'teclado.txt'),
  'utf-8',
);
