import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import mikroConfig from 'src/mikro-orm.config';

@Module({
  imports: [MikroOrmModule.forRoot(mikroConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
