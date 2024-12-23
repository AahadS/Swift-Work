import type { MySql2Database } from 'drizzle-orm/mysql2';
import type { Connection } from 'mysql2/promise';

import type * as schema from '@/models/Schema';

declare global {
  namespace NodeJS {
    type Global = {
      connection: Connection | undefined;
      drizzle: MySql2Database<typeof schema> | undefined;
    };
  }
}

export {};
