import { Module } from '@nestjs/common';
import { SolutionController } from './solution.controller';
import { SolutionService } from './solution.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolutionEntity } from './entity/solution.entity/solution.entity';
import { PersonnelEntity } from './entity/personnel.entity/personnel.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SolutionEntity, PersonnelEntity])
],
  controllers: [SolutionController],
  providers: [SolutionService]
})
export class SolutionModule {}
