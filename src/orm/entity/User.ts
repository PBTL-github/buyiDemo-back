import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as UUIDv4 } from "uuid";

@Entity()
export class User {
  @PrimaryColumn()
  readonly uuid: string = UUIDv4();

  @Column({ unique: true, nullable: false, generated: "increment" })
  readonly id: number;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  token: string;
}
