import { IsOptional, IsString, IsUrl, IsEnum } from 'class-validator';

export class UpdateSolutionDto {

    @IsOptional()
    @IsString()
    titre?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    remarque?: string;

    @IsOptional()
    @IsString()
    technicien?: string;

    @IsOptional()
    @IsString()
    medecin?: string;

    @IsOptional()
    @IsString()
    patient: string;

    @IsOptional()
    @IsEnum(['En cours', 'Terminée'])
    status?: string;

    @IsOptional()
    @IsString()
    @IsUrl()
    rapportUrl?: string;
}
