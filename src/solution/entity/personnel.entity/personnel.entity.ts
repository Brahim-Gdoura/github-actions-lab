import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('personnel') // Nom de la table
export class PersonnelEntity { // Nom de l'entité

    @PrimaryGeneratedColumn() // Génère automatiquement l'ID
    id: number;

    @Column({ type: 'varchar', length: 50 }) // Limite la taille à 50 caractères
    nom: string;

    @Column({ type: 'varchar', length: 50 })
    prenom: string;

    @Column({ type: 'varchar', unique: true }) // Mail doit être unique
    mail: string;

    @Column({ type: 'varchar', length: 15 }) // Numéro limité à 15 caractères
    numero: string;

    @Column({ type: 'varchar', length: 100 }) // Taille ajustable pour l'occupation
    occupation: string;
}
