import { Test, TestingModule } from '@nestjs/testing';
import { CrController } from './chngerequest.controller';
import { CrService } from './chngerequest.service';

describe('ChngerequestController', () => {
  let controller: CrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrController],
      providers: [CrService],
    }).compile();

    controller = module.get<CrController>(CrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
