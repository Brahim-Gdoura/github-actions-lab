import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { SolutionService } from './solution.service';
import { SolutionEntity } from './entity/solution.entity/solution.entity';
import { AddSolutionDto } from './dto/add-solution.dto';
import { UpdateSolutionDto } from './dto/update-solution.dto';
import { PersonnelEntity } from './entity/personnel.entity/personnel.entity';

@Controller('solution')
export class SolutionController {

    constructor(
        private solutionService: SolutionService
    ){}

    @Get()
    async getAllSolutions(): Promise<SolutionEntity[]> {
        return await this.solutionService.getSolutions();
    } 
    // Personnel

    @Get('/personnel')
    async getAllPersonnel(): Promise<PersonnelEntity[]> {
        return await this.solutionService.getPersonnel();
    } 

    @Get('personnel/:nom/:prenom/:occupation')
    async getPersonnelByNomPrenom(
        @Param('nom') nom: string, 
        @Param('prenom') prenom: string,
        @Param('occupation') occupation: string
    ): Promise<PersonnelEntity> {
        if (!nom || !prenom || !occupation) {
            throw new BadRequestException('Nom, prénom et occupation sont requis');
        }
        return await this.solutionService.getPersonnelByNomPrenom(nom, prenom, occupation);
        }

    @Get(':id')
    async getSolutionById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<SolutionEntity> {
        return await this.solutionService.getSolutionById(id);
    }  

    // Add a new solution
    @Post()
    async addSolution(
        @Body() solutiontDto: AddSolutionDto
    ): Promise<SolutionEntity>{
        return await this.solutionService.addSolution(solutiontDto);
    }

    // Update a solution
    @Patch(':id')
    async updateSolution(
        @Body() updateSolutiontDto: UpdateSolutionDto,
        @Param('id', ParseIntPipe) id: number
    ): Promise<SolutionEntity> {
        return await this.solutionService.updateSolution(id, updateSolutiontDto);
    }

    // Remove a solution
    @Delete(':id')
    async removeSolution(
        @Param('id', ParseIntPipe) id: number
    ) {
        return await this.solutionService.deleteSolution(id);
    }

    
}
