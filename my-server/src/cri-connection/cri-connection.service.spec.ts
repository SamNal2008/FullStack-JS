import { Test, TestingModule } from '@nestjs/testing';
import { CriConnectionService } from './cri-connection.service';

describe('CriConnectionService', () => {
  let service: CriConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CriConnectionService],
    }).compile();

    service = module.get<CriConnectionService>(CriConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
