import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tracker {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    createdAt: Date

    @Column()
    courier: string

    @Column({unique: true})
    display_id: string
}
