import { defineConfig } from '@mikro-orm/mariadb';

export default defineConfig({
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  dbName: 'proplayas',
  user: 'root',
  password: 'passwd',
});
