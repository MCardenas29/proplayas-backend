import { defineConfig } from '@mikro-orm/mariadb';

export default defineConfig({
  entities: ['./dist/models'],
  entitiesTs: ['./src/models'],
  dbName: 'proplayas',
  user: 'root',
  password: 'passwd',
});
