import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as UUIDv4 } from "uuid";

@Entity()
export class Article {
  @PrimaryColumn()
  readonly uuid: string = UUIDv4();

  @Column({ unique: true, nullable: false, generated: "increment" })
  readonly id: number;

  @Column()
  readonly createData: Date = new Date();

  @Column()
  Title: string;

  @Column()
  content: string;
}
