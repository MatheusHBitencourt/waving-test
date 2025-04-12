import * as dotenv from 'dotenv';
import * as envVar from 'env-var';

dotenv.config();

const ehv = {
  ENV_EXAMPLE: envVar.get('ENV_EXAMPLE').required().asString(),
};

export default Object.freeze(ehv);
