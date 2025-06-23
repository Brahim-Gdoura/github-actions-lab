import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SolutionModule } from './solution/solution.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { SolutionEntity } from './solution/entity/solution.entity/solution.entity';
import { PersonnelEntity } from './solution/entity/personnel.entity/personnel.entity';

dotenv.config();

@Module({
  imports: [
    SolutionModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'meditechcare',
      entities: [SolutionEntity, PersonnelEntity],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
