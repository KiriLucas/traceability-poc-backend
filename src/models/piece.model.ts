import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({ tableName: 'pieces', underscored: true})
export class PieceModel extends Model {

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: true })
    model: string;

    @Column({ type: DataType.STRING, allowNull: false, defaultValue: 0 })
    provider: string;

    @Column({ type: DataType.STRING, allowNull: false, defaultValue: 0 })
    manufacturingDate: string;
}