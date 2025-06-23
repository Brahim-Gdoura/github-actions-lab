import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('Solutions')
export class SolutionEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    titre: string;

    @Column('text')
    description: string;

    @Column('text')
    remarque: string;

    @Column()
    technicien: string;

    @Column()
    medecin: string;

    @Column()
    patient: string;

    @Column({ 
        type: 'enum', 
        enum: ['Débutée', 'En cours', 'Terminée'], 
        default: 'Débutée' })
    status: string;

    @Column()
    rapportUrl: string;

    @CreateDateColumn(
        {
            update: false
        }
    )
    dateCreation: Date;

    @UpdateDateColumn()
    dateModification: Date;
}
