import { Module } from '@nestjs/common';
import { CriConnectionService } from './cri-connection.service';

@Module({
  providers: [CriConnectionService]
})
export class CriConnectionModule {}
