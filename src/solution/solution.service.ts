import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SolutionEntity } from './entity/solution.entity/solution.entity';
import { Repository } from 'typeorm';
import { AddSolutionDto } from './dto/add-solution.dto';
import { UpdateSolutionDto } from './dto/update-solution.dto';
import { PersonnelEntity } from './entity/personnel.entity/personnel.entity';

@Injectable()
export class SolutionService {

    constructor(
        @InjectRepository(SolutionEntity)
        private solutionRepository: Repository<SolutionEntity>,

        @InjectRepository(PersonnelEntity)
        private personnelRepository: Repository<PersonnelEntity>
    ){}

    async getSolutions(): Promise<SolutionEntity[]> {
        return await this.solutionRepository.find();
    }

    async getSolutionById(id: number) {
        const product = await this.solutionRepository.findOneBy({id});
        if (! product) {
            throw new NotFoundException(`Solution with ID ${id} not found`);
        }
        return product;
    }

    async addSolution(solution: AddSolutionDto): Promise<SolutionEntity> {
        return await this.solutionRepository.save(solution);
    }

    async updateSolution(id: number, solution: UpdateSolutionDto): Promise<SolutionEntity> {
        // Retrieve the product object by its id and change the old values ​​with those passed as parameters
        const newProduct = await this.solutionRepository.preload({
           id,
           ...solution
        });
        if (! newProduct) {
            throw new NotFoundException(`Solution with ID ${id} not found`);
        }
        return await this.solutionRepository.save(newProduct);
    }

    async deleteSolution(id: number) {
        return await this.solutionRepository.delete(id);
    }

    async getPersonnel(): Promise<PersonnelEntity []> {
        return await this.personnelRepository.find();
    }

    async getPersonnelByNomPrenom(nom: string, prenom: string, occupation:string) {
        if (!nom || !prenom || !occupation) {
            throw new BadRequestException('Nom, prénom et occupation sont requis');
        }
    
        const personnel = await this.personnelRepository.findOneBy({nom, prenom, occupation});
    
        if (!personnel) {
            throw new NotFoundException(`Personnel avec nom "${nom}" et prénom "${prenom}" n'existe pas`);
        }
    
        return personnel;
    }
}
