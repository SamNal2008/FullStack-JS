import { HttpModule, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { CriConnectionModule } from '../cri-connection/cri-connection.module';
import { CriConnectionService } from '../cri-connection/cri-connection.service';

@Module({
  imports: [UsersModule, PassportModule, HttpModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
