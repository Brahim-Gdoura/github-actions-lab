import { IsNotEmpty, IsString, IsOptional, IsUrl, IsEnum, IsNumber } from "class-validator";

export class AddSolutionDto {

    @IsNotEmpty()
    @IsNumber()
    id: number

    @IsNotEmpty()
    @IsString()
    titre: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    remarque: string

    @IsNotEmpty()
    @IsString()
    technicien: string;

    @IsNotEmpty()
    @IsString()
    medecin: string;

    @IsNotEmpty()
    @IsString()
    patient: string;

    @IsOptional()
    @IsEnum(['En cours', 'Terminée'])
    status?: string; 

    @IsNotEmpty()
    @IsUrl()
    reportUrl: string;
}
