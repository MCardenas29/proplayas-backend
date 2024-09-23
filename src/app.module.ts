import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PageModule } from './page/page.module';
import { RoleService } from './role/role.service';
import mikroConfig from 'src/mikro-orm.config';
import { RoleGuard } from './role/role.guard';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroConfig),
    AuthModule,
    UserModule,
    PageModule,
  ],
  controllers: [],
  providers: [
    RoleService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
