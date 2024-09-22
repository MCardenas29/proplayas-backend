import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import mikroConfig from 'src/mikro-orm.config';

@Module({
  imports: [MikroOrmModule.forRoot(mikroConfig), AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
